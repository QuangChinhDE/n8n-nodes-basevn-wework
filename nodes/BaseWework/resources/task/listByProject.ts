import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { weworkApiRequest } from '../../shared/transport';
import { cleanBody, processResponse } from '../../shared/utils';

export async function listByProject(this: IExecuteFunctions, index: number): Promise<IDataObject> {
	const id = this.getNodeParameter('id', index) as string;
	const username = this.getNodeParameter('username', index) as string;
	const page = this.getNodeParameter('page', index) as number;
	const returnData = this.getNodeParameter('returnData', index, 'full') as string;
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;

	const body: IDataObject = {
		id,
		username,
		page,
		...additionalFields,
	};

	const cleanedBody = cleanBody(body);
	const response = await weworkApiRequest.call(this, 'POST', '/extapi/v3/task/project', cleanedBody);
	
	// Return specific data based on user selection
	if (returnData !== 'full') {
		return processResponse(response, returnData);
	}
	
	return response;
}
