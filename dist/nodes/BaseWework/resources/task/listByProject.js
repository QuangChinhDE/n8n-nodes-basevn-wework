"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listByProject = listByProject;
const transport_1 = require("../../shared/transport");
const utils_1 = require("../../shared/utils");
async function listByProject(index) {
    const id = this.getNodeParameter('id', index);
    const username = this.getNodeParameter('username', index);
    const page = this.getNodeParameter('page', index);
    const returnData = this.getNodeParameter('returnData', index, 'full');
    const additionalFields = this.getNodeParameter('additionalFields', index, {});
    const body = {
        id,
        username,
        page,
        ...additionalFields,
    };
    const cleanedBody = (0, utils_1.cleanBody)(body);
    const response = await transport_1.weworkApiRequest.call(this, 'POST', '/extapi/v3/task/project', cleanedBody);
    if (returnData !== 'full') {
        return (0, utils_1.processResponse)(response, returnData);
    }
    return response;
}
//# sourceMappingURL=listByProject.js.map