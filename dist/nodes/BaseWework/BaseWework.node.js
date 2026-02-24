"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseWework = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const descriptions_1 = require("./shared/descriptions");
const project = __importStar(require("./resources/project"));
const task = __importStar(require("./resources/task"));
const department = __importStar(require("./resources/department"));
const tasklist = __importStar(require("./resources/tasklist"));
class BaseWework {
    constructor() {
        this.description = {
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
            inputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            outputs: [n8n_workflow_1.NodeConnectionTypes.Main],
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
                ...descriptions_1.projectOperations,
                ...descriptions_1.projectFields,
                ...descriptions_1.taskOperations,
                ...descriptions_1.taskFields,
                ...descriptions_1.departmentOperations,
                ...descriptions_1.departmentFields,
                ...descriptions_1.tasklistOperations,
                ...descriptions_1.tasklistFields,
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        const resource = this.getNodeParameter('resource', 0);
        for (let i = 0; i < items.length; i++) {
            try {
                let responseData = {};
                if (resource === 'project') {
                    const operation = this.getNodeParameter('operation', i);
                    if (operation === 'create') {
                        responseData = await project.create.call(this, i);
                    }
                    else if (operation === 'edit') {
                        responseData = await project.edit.call(this, i);
                    }
                    else if (operation === 'getFull') {
                        responseData = await project.getFull.call(this, i);
                    }
                    else if (operation === 'list') {
                        responseData = await project.list.call(this, i);
                    }
                }
                else if (resource === 'task') {
                    const operation = this.getNodeParameter('operation', i);
                    if (operation === 'create') {
                        responseData = await task.create.call(this, i);
                    }
                    else if (operation === 'createSubtask') {
                        responseData = await task.createSubtask.call(this, i);
                    }
                    else if (operation === 'edit') {
                        responseData = await task.edit.call(this, i);
                    }
                    else if (operation === 'editExtra') {
                        responseData = await task.editExtra.call(this, i);
                    }
                    else if (operation === 'get') {
                        responseData = await task.get.call(this, i);
                    }
                    else if (operation === 'project') {
                        responseData = await task.listByProject.call(this, i);
                    }
                    else if (operation === 'markDone') {
                        responseData = await task.markDone.call(this, i);
                    }
                    else if (operation === 'delete') {
                        responseData = await task.deleteTask.call(this, i);
                    }
                    else if (operation === 'addFollowers') {
                        responseData = await task.addFollowers.call(this, i);
                    }
                }
                else if (resource === 'department') {
                    const operation = this.getNodeParameter('operation', i);
                    if (operation === 'create') {
                        responseData = await department.create.call(this, i);
                    }
                    else if (operation === 'edit') {
                        responseData = await department.edit.call(this, i);
                    }
                    else if (operation === 'get') {
                        responseData = await department.get.call(this, i);
                    }
                    else if (operation === 'list') {
                        responseData = await department.list.call(this, i);
                    }
                    else if (operation === 'remove') {
                        responseData = await department.remove.call(this, i);
                    }
                }
                else if (resource === 'tasklist') {
                    const operation = this.getNodeParameter('operation', i);
                    if (operation === 'get') {
                        responseData = await tasklist.get.call(this, i);
                    }
                }
                if (Array.isArray(responseData)) {
                    responseData.forEach((item) => {
                        returnData.push({
                            json: item,
                            pairedItem: i,
                        });
                    });
                }
                else {
                    returnData.push({
                        json: responseData,
                        pairedItem: i,
                    });
                }
            }
            catch (error) {
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
exports.BaseWework = BaseWework;
//# sourceMappingURL=BaseWework.node.js.map