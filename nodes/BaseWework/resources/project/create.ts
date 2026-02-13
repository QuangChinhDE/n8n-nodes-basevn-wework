import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { weworkApiRequest } from '../../shared/transport';
import { cleanBody } from '../../shared/utils';

export async function create(this: IExecuteFunctions, index: number): Promise<IDataObject> {
	const username = this.getNodeParameter('username', index) as string;
	const metatype = this.getNodeParameter('metatype', index) as string;
	const name = this.getNodeParameter('name', index) as string;
	const external = this.getNodeParameter('external', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;

	const body: IDataObject = {
		username,
		metatype,
		name,
		external,
		// Set owners from additionalFields or default to username
		owners: additionalFields.owners || username,
		...additionalFields,
	};

	const cleanedBody = cleanBody(body);
	const response = await weworkApiRequest.call(this, 'POST', '/extapi/v3/project/create', cleanedBody);
	
	return response;
}
