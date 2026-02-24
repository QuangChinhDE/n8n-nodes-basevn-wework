"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editExtra = editExtra;
const transport_1 = require("../../shared/transport");
const utils_1 = require("../../shared/utils");
async function editExtra(index) {
    const username = this.getNodeParameter('username', index);
    const id = this.getNodeParameter('id', index);
    const additionalFields = this.getNodeParameter('additionalFields', index, {});
    const body = {
        username,
        id,
        ...additionalFields,
    };
    const cleanedBody = (0, utils_1.cleanBody)(body);
    const response = await transport_1.weworkApiRequest.call(this, 'POST', '/extapi/v3/task/edit.extra', cleanedBody);
    return response;
}
//# sourceMappingURL=editExtra.js.map