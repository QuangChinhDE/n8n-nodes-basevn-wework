import type { IExecuteFunctions, IHttpRequestMethods, IDataObject } from 'n8n-workflow';

/**
 * Convert body to URL-encoded format with custom fields support
 */
function encodeFormBody(body: IDataObject): string {
	// Extract custom_fields to process separately
	const customFields = body.custom_fields as IDataObject | undefined;
	delete body.custom_fields;

	const formBody: string[] = [];
	
	// Encode regular fields
	for (const key in body) {
		if (body[key] !== undefined && body[key] !== null && body[key] !== '') {
			const encodedKey = encodeURIComponent(key);
			const encodedValue = encodeURIComponent(String(body[key]));
			formBody.push(`${encodedKey}=${encodedValue}`);
		}
	}

	// Process custom fields - add custom_ prefix and encode
	if (customFields && customFields.fields && Array.isArray(customFields.fields)) {
		for (const field of customFields.fields) {
			const fieldData = field as IDataObject;
			if (fieldData.key && fieldData.value !== undefined && fieldData.value !== null && fieldData.value !== '') {
				// Add custom_ prefix automatically
				const customKey = `custom_${fieldData.key}`;
				const encodedKey = encodeURIComponent(customKey);
				const encodedValue = encodeURIComponent(String(fieldData.value));
				formBody.push(`${encodedKey}=${encodedValue}`);
			}
		}
	}

	return formBody.join('&');
}

/**
 * Make an API request to BaseVN - App Wework
 * All requests use POST method and form-urlencoded content type
 */
export async function weworkApiRequest(
	this: IExecuteFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject = {},
): Promise<IDataObject> {
	const credentials = await this.getCredentials('baseWeworkApi');
	const domain = credentials.domain as string;
	const accessToken = credentials.accessToken as string;

	// Add access_token_v2 to body (required by API)
	const requestBody = {
		access_token_v2: accessToken,
		...body,
	};

	// Encode body to form-urlencoded format
	const encodedBody = encodeFormBody(requestBody);

	const options = {
		method,
		url: `https://wework.${domain}${endpoint}`,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: encodedBody,
	};

	return await this.helpers.httpRequest(options);
}
