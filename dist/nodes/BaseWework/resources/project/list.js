"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = list;
const transport_1 = require("../../shared/transport");
const utils_1 = require("../../shared/utils");
async function list(index) {
    const returnData = this.getNodeParameter('returnData', index, 'full');
    const response = await transport_1.weworkApiRequest.call(this, 'POST', '/extapi/v3/project/list', {});
    if (returnData === 'array') {
        return (0, utils_1.processResponse)(response, 'projects');
    }
    return response;
}
//# sourceMappingURL=list.js.map