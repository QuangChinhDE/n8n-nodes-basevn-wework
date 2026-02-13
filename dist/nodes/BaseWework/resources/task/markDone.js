"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markDone = markDone;
const transport_1 = require("../../shared/transport");
async function markDone(index) {
    const username = this.getNodeParameter('username', index);
    const id = this.getNodeParameter('id', index);
    const body = {
        username,
        id,
    };
    const response = await transport_1.weworkApiRequest.call(this, 'POST', '/extapi/v3/task/status/mark.done', body);
    return response;
}
//# sourceMappingURL=markDone.js.map