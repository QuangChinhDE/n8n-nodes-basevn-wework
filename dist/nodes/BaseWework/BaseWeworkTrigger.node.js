"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseWeworkTrigger = void 0;
const n8n_workflow_1 = require("n8n-workflow");
class BaseWeworkTrigger {
    constructor() {
        this.description = {
            displayName: 'BaseVN - App Wework Trigger',
            name: 'baseWeworkTrigger',
            icon: 'file:../../icons/wework.svg',
            group: ['trigger'],
            version: 1,
            subtitle: '={{$parameter["event"]}}',
            description: 'Triggers on BaseVN - App Wework events',
            defaults: {
                name: 'BaseVN - App Wework Trigger',
            },
            inputs: [],
            outputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            webhooks: [
                {
                    name: 'default',
                    httpMethod: 'POST',
                    responseMode: 'onReceived',
                    path: 'webhook',
                },
            ],
            properties: [
                {
                    displayName: 'Event',
                    name: 'event',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: 'On Subtask Created',
                            value: 'subtaskCreated',
                            description: 'Trigger when a new subtask is created',
                        },
                        {
                            name: 'On Subtask Done',
                            value: 'subtaskDone',
                            description: 'Trigger when a subtask is marked as done',
                        },
                        {
                            name: 'On Subtask Status Updated',
                            value: 'subtaskStatusUpdated',
                            description: 'Trigger when subtask status changes',
                        },
                        {
                            name: 'On Task Created',
                            value: 'taskCreated',
                            description: 'Trigger when a new task is created',
                        },
                        {
                            name: 'On Task Done',
                            value: 'taskDone',
                            description: 'Trigger when a task is marked as done',
                        },
                        {
                            name: 'On Task Status Updated',
                            value: 'taskStatusUpdated',
                            description: 'Trigger when task status changes',
                        },
                    ],
                    default: 'taskCreated',
                    required: true,
                },
            ],
            usableAsTool: true,
        };
    }
    async webhook() {
        const event = this.getNodeParameter('event');
        const bodyData = this.getBodyData();
        const returnData = {
            event,
            timestamp: new Date().toISOString(),
            data: bodyData,
        };
        return {
            workflowData: [this.helpers.returnJsonArray([returnData])],
        };
    }
}
exports.BaseWeworkTrigger = BaseWeworkTrigger;
//# sourceMappingURL=BaseWeworkTrigger.node.js.map