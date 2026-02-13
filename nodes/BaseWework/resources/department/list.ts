import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { weworkApiRequest } from '../../shared/transport';
import { processResponse } from '../../shared/utils';

export async function list(this: IExecuteFunctions, index: number): Promise<IDataObject> {
	const returnData = this.getNodeParameter('returnData', index, 'full') as string;
	
	const response = await weworkApiRequest.call(this, 'POST', '/extapi/v3/dept/list', {});

	// Return specific data based on user selection
	if (returnData !== 'full') {
		return processResponse(response, returnData);
	}
	
	return response;
}
