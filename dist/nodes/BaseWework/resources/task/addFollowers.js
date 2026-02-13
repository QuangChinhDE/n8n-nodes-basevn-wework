"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFollowers = addFollowers;
const transport_1 = require("../../shared/transport");
async function addFollowers(index) {
    const username = this.getNodeParameter('username', index);
    const id = this.getNodeParameter('id', index);
    const followers = this.getNodeParameter('followers', index);
    const body = {
        username,
        id,
        followers,
    };
    const response = await transport_1.weworkApiRequest.call(this, 'POST', '/extapi/v3/task/add.followers', body);
    return response;
}
//# sourceMappingURL=addFollowers.js.map