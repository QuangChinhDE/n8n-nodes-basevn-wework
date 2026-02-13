import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { weworkApiRequest } from '../../shared/transport';
import { cleanBody } from '../../shared/utils';

export async function editExtra(this: IExecuteFunctions, index: number): Promise<IDataObject> {
	const username = this.getNodeParameter('username', index) as string;
	const id = this.getNodeParameter('id', index) as string;
	const deadline = this.getNodeParameter('deadline', index, '') as string;
	const status = this.getNodeParameter('status', index, '') as string;
	const startTime = this.getNodeParameter('start_time', index, '') as string;

	const body: IDataObject = {
		username,
		id,
	};

	if (deadline) body.deadline = deadline;
	if (status) body.status = status;
	if (startTime) body.start_time = startTime;

	const cleanedBody = cleanBody(body);
	const response = await weworkApiRequest.call(this, 'POST', '/extapi/v3/task/edit.extra', cleanedBody);
	
	return response;
}
