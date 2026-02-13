"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = deleteTask;
const transport_1 = require("../../shared/transport");
async function deleteTask(index) {
    const username = this.getNodeParameter('username', index);
    const id = this.getNodeParameter('id', index);
    const body = {
        username,
        id,
    };
    const response = await transport_1.weworkApiRequest.call(this, 'POST', '/extapi/v3/task/remove', body);
    return response;
}
//# sourceMappingURL=deleteTask.js.map