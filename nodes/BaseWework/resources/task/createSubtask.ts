import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { weworkApiRequest } from '../../shared/transport';
import { cleanBody } from '../../shared/utils';

export async function createSubtask(this: IExecuteFunctions, index: number): Promise<IDataObject> {
	const username = this.getNodeParameter('username', index) as string;
	const parent_id = this.getNodeParameter('parent_id', index) as string;
	const name = this.getNodeParameter('name', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;

	const body: IDataObject = {
		username,
		parent_id,
		name,
		...additionalFields,
	};

	const cleanedBody = cleanBody(body);
	const response = await weworkApiRequest.call(this, 'POST', '/extapi/v3/subtask/create', cleanedBody);
	
	return response;
}
