import type {
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class BaseWeworkApi implements ICredentialType {
	name = 'baseWeworkApi';

	displayName = 'BaseVN Wework API';

	icon: Icon = 'file:../icons/wework.svg';

	documentationUrl = 'https://documenter.getpostman.com/view/1345096/SztA68Az?version=latest';

	properties: INodeProperties[] = [
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

	test: ICredentialTestRequest = {
		request: {
			baseURL: '=https://wework.{{$credentials?.domain}}',
			url: '/extapi/v3/user/info',
			method: 'POST',
		},
	};
}
