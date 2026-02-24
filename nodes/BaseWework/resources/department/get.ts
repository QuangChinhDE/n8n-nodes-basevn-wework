import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { weworkApiRequest } from '../../shared/transport';
import { processResponse } from '../../shared/utils';

export async function get(this: IExecuteFunctions, index: number): Promise<IDataObject | IDataObject[]> {
	const id = this.getNodeParameter('id', index) as string;
	const returnData = this.getNodeParameter('returnData', index, 'full') as string;

	const body: IDataObject = {
		id,
	};

	const response = await weworkApiRequest.call(this, 'POST', '/extapi/v3/dept/get', body);

	// Return specific data based on user selection
	if (returnData !== 'full') {
		return processResponse(response, returnData);
	}
	
	return response;
}
