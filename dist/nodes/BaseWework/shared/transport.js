"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weworkApiRequest = weworkApiRequest;
function encodeFormBody(body) {
    const customFields = body.custom_fields;
    delete body.custom_fields;
    const formBody = [];
    for (const key in body) {
        if (body[key] !== undefined && body[key] !== null && body[key] !== '') {
            const encodedKey = encodeURIComponent(key);
            const encodedValue = encodeURIComponent(String(body[key]));
            formBody.push(`${encodedKey}=${encodedValue}`);
        }
    }
    if (customFields && customFields.fields && Array.isArray(customFields.fields)) {
        for (const field of customFields.fields) {
            const fieldData = field;
            if (fieldData.key && fieldData.value !== undefined && fieldData.value !== null && fieldData.value !== '') {
                const customKey = `custom_${fieldData.key}`;
                const encodedKey = encodeURIComponent(customKey);
                const encodedValue = encodeURIComponent(String(fieldData.value));
                formBody.push(`${encodedKey}=${encodedValue}`);
            }
        }
    }
    return formBody.join('&');
}
async function weworkApiRequest(method, endpoint, body = {}) {
    const credentials = await this.getCredentials('baseWeworkApi');
    const domain = credentials.domain;
    const accessToken = credentials.accessToken;
    const requestBody = {
        access_token_v2: accessToken,
        ...body,
    };
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
//# sourceMappingURL=transport.js.map