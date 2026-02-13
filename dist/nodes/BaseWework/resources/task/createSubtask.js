"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSubtask = createSubtask;
const transport_1 = require("../../shared/transport");
const utils_1 = require("../../shared/utils");
async function createSubtask(index) {
    const username = this.getNodeParameter('username', index);
    const parent_id = this.getNodeParameter('parent_id', index);
    const name = this.getNodeParameter('name', index);
    const additionalFields = this.getNodeParameter('additionalFields', index, {});
    const body = {
        username,
        parent_id,
        name,
        ...additionalFields,
    };
    const cleanedBody = (0, utils_1.cleanBody)(body);
    const response = await transport_1.weworkApiRequest.call(this, 'POST', '/extapi/v3/subtask/create', cleanedBody);
    return response;
}
//# sourceMappingURL=createSubtask.js.map