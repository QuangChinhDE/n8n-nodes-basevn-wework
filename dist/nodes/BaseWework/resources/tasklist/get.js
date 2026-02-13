"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = get;
const transport_1 = require("../../shared/transport");
const utils_1 = require("../../shared/utils");
async function get(index) {
    const id = this.getNodeParameter('id', index);
    const returnData = this.getNodeParameter('returnData', index, 'full');
    const body = {
        id,
    };
    const response = await transport_1.weworkApiRequest.call(this, 'POST', '/extapi/v3/tasklist/get', body);
    if (returnData !== 'full') {
        return (0, utils_1.processResponse)(response, returnData);
    }
    return response;
}
//# sourceMappingURL=get.js.map