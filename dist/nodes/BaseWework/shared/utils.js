"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanBody = cleanBody;
exports.handleApiError = handleApiError;
exports.processResponse = processResponse;
function cleanBody(body) {
    const cleanedBody = {};
    for (const key in body) {
        if (body[key] !== undefined && body[key] !== null && body[key] !== '') {
            cleanedBody[key] = body[key];
        }
    }
    return cleanedBody;
}
function handleApiError(error) {
    if (error.response) {
        return `API Error: ${error.response.status} - ${error.response.statusText || 'Unknown error'}`;
    }
    return error.message || 'Unknown error occurred';
}
function processResponse(response, selector) {
    if (selector && selector.trim() !== '') {
        if (response[selector]) {
            return response[selector];
        }
        throw new Error(`Selector field '${selector}' not found in response. Available fields: ${Object.keys(response).join(', ')}`);
    }
    return response;
}
//# sourceMappingURL=utils.js.map