"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseWeworkApi = void 0;
class BaseWeworkApi {
    constructor() {
        this.name = 'baseWeworkApi';
        this.displayName = 'BaseVN Wework API';
        this.icon = 'file:wework.svg';
        this.documentationUrl = 'https://documenter.getpostman.com/view/1345096/SztA68Az?version=latest';
        this.properties = [
            {
                displayName: 'Domain',
                name: 'domain',
                type: 'string',
                default: 'basevn.tech',
                placeholder: 'basevn.tech or wework.vn',
                description: 'Full domain of BaseVN Wework (e.g., basevn.tech, wework.vn)',
            },
            {
                displayName: 'Access Token',
                name: 'accessToken',
                type: 'string',
                typeOptions: { password: true },
                default: '',
                required: true,
                description: 'Access token for authentication with BaseVN Wework API',
            },
        ];
        this.test = {
            request: {
                baseURL: '=https://wework.{{$credentials?.domain}}',
                url: '/extapi/v3/user/info',
                method: 'POST',
            },
        };
    }
}
exports.BaseWeworkApi = BaseWeworkApi;
//# sourceMappingURL=BaseWeworkApi.credentials.js.map