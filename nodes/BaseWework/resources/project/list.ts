import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { weworkApiRequest } from '../../shared/transport';
import { processResponse } from '../../shared/utils';

export async function list(this: IExecuteFunctions, index: number): Promise<IDataObject> {
	const returnData = this.getNodeParameter('returnData', index, 'full') as string;
	
	const response = await weworkApiRequest.call(this, 'POST', '/extapi/v3/project/list', {});

	// Check if user wants only projects array
	if (returnData === 'array') {
		return processResponse(response, 'projects');
	}
	
	return response;
}
