import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { weworkApiRequest } from '../../shared/transport';

export async function addFollowers(this: IExecuteFunctions, index: number): Promise<IDataObject> {
	const username = this.getNodeParameter('username', index) as string;
	const id = this.getNodeParameter('id', index) as string;
	const followers = this.getNodeParameter('followers', index) as string;

	const body: IDataObject = {
		username,
		id,
		followers,
	};

	const response = await weworkApiRequest.call(this, 'POST', '/extapi/v3/task/add.followers', body);
	
	return response;
}
