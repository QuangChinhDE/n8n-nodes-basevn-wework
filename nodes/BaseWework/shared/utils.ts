import type { IDataObject } from 'n8n-workflow';

/**
 * Clean and prepare body parameters (remove undefined/null values)
 */
export function cleanBody(body: IDataObject): IDataObject {
	const cleanedBody: IDataObject = {};
	for (const key in body) {
		if (body[key] !== undefined && body[key] !== null && body[key] !== '') {
			cleanedBody[key] = body[key];
		}
	}
	return cleanedBody;
}

/**
 * Format error message from API response
 */
export function handleApiError(error: Error & { response?: { status: number; statusText?: string } }): string {
	if (error.response) {
		return `API Error: ${error.response.status} - ${error.response.statusText || 'Unknown error'}`;
	}
	return error.message || 'Unknown error occurred';
}

/**
 * Process API response - return full response or selected field
 * Automatically flattens nested arrays
 */
export function processResponse(response: IDataObject, selector?: string): IDataObject | IDataObject[] {
	// If selector is specified, return only that field
	if (selector && selector.trim() !== '') {
		if (response[selector]) {
			const data = response[selector];
			
			// Check if data is an array of arrays (nested array) and flatten it
			if (Array.isArray(data) && data.length > 0 && Array.isArray(data[0])) {
				return data.flat() as IDataObject[];
			}
			
			// Check if data is object with nested array fields that need flattening
			if (typeof data === 'object' && !Array.isArray(data)) {
				const flattened = { ...data } as IDataObject;
				
				// Flatten common nested array fields
				const fieldsToFlatten = ['milestones', 'tasks', 'subtasks', 'tasklists'];
				fieldsToFlatten.forEach(field => {
					if (flattened[field] && Array.isArray(flattened[field])) {
						const arr = flattened[field] as any[];
						if (arr.length > 0 && Array.isArray(arr[0])) {
							flattened[field] = arr.flat();
						}
					}
				});
				
				return flattened;
			}
			
			return data as IDataObject | IDataObject[];
		}
		// If selector doesn't exist, throw error
		throw new Error(`Selector field '${selector}' not found in response. Available fields: ${Object.keys(response).join(', ')}`);
	}
	// Return full response if no selector specified
	return response;
}
