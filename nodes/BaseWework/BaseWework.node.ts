import {
	NodeConnectionTypes,
	type IExecuteFunctions,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription,
} from 'n8n-workflow';

import {
	projectOperations,
	projectFields,
	taskOperations,
	taskFields,
	departmentOperations,
	departmentFields,
	tasklistOperations,
	tasklistFields,
} from './shared/descriptions';

import * as project from './resources/project';
import * as task from './resources/task';
import * as department from './resources/department';
import * as tasklist from './resources/tasklist';

export class BaseWework implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'BaseVN - App Wework',
		name: 'baseWework',
		icon: 'file:../../icons/wework.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with BaseVN - App Wework API',
		defaults: {
			name: 'BaseVN - App Wework',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'baseWeworkApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Department',
						value: 'department',
					},
					{
						name: 'Project',
						value: 'project',
					},
					{
						name: 'Task',
						value: 'task',
					},
					{
						name: 'Tasklist',
						value: 'tasklist',
					},
				],
				default: 'project',
			},
			...projectOperations,
			...projectFields,
			...taskOperations,
			...taskFields,
			...departmentOperations,
			...departmentFields,
			...tasklistOperations,
			...tasklistFields,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const resource = this.getNodeParameter('resource', 0) as string;

		for (let i = 0; i < items.length; i++) {
			try {
				let responseData: any;

				if (resource === 'project') {
					const operation = this.getNodeParameter('operation', i) as string;
					
					if (operation === 'create') {
						responseData = await project.create.call(this, i);
					} else if (operation === 'edit') {
						responseData = await project.edit.call(this, i);
					} else if (operation === 'getFull') {
						responseData = await project.getFull.call(this, i);
					} else if (operation === 'list') {
						responseData = await project.list.call(this, i);
					}
				} else if (resource === 'task') {
					const operation = this.getNodeParameter('operation', i) as string;
					
					if (operation === 'create') {
						responseData = await task.create.call(this, i);
					} else if (operation === 'createSubtask') {
						responseData = await task.createSubtask.call(this, i);
					} else if (operation === 'edit') {
						responseData = await task.edit.call(this, i);
					} else if (operation === 'editExtra') {
						responseData = await task.editExtra.call(this, i);
					} else if (operation === 'get') {
						responseData = await task.get.call(this, i);
					} else if (operation === 'project') {
						responseData = await task.listByProject.call(this, i);
					} else if (operation === 'markDone') {
						responseData = await task.markDone.call(this, i);
					} else if (operation === 'delete') {
						responseData = await task.deleteTask.call(this, i);
					} else if (operation === 'addFollowers') {
						responseData = await task.addFollowers.call(this, i);
					}
				} else if (resource === 'department') {
					const operation = this.getNodeParameter('operation', i) as string;
					
					if (operation === 'create') {
						responseData = await department.create.call(this, i);
					} else if (operation === 'edit') {
						responseData = await department.edit.call(this, i);
					} else if (operation === 'get') {
						responseData = await department.get.call(this, i);
					} else if (operation === 'list') {
						responseData = await department.list.call(this, i);
					} else if (operation === 'remove') {
						responseData = await department.remove.call(this, i);
					}
				} else if (resource === 'tasklist') {
					const operation = this.getNodeParameter('operation', i) as string;
					
					if (operation === 'get') {
						responseData = await tasklist.get.call(this, i);
					}
				}

				returnData.push({
					json: responseData,
					pairedItem: i,
				});
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({
						json: { error: error.message },
						pairedItem: i,
					});
					continue;
				}
				throw error;
			}
		}

		return [returnData];
	}
}
