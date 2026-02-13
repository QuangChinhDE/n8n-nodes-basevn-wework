"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = remove;
const transport_1 = require("../../shared/transport");
async function remove(index) {
    const username = this.getNodeParameter('username', index);
    const id = this.getNodeParameter('id', index);
    const body = {
        username,
        id,
    };
    const response = await transport_1.weworkApiRequest.call(this, 'POST', '/extapi/v3/dept/remove', body);
    return response;
}
//# sourceMappingURL=remove.js.map