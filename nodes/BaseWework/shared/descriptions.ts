import type { INodeProperties } from 'n8n-workflow';

// ==================== PROJECT DESCRIPTIONS ====================
export const projectOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['project'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new project',
				action: 'Create a project',
			},
			{
				name: 'Edit',
				value: 'edit',
				description: 'Edit a project',
				action: 'Edit a project',
			},
			{
				name: 'Get Full',
				value: 'getFull',
				description: 'Get full information of a project',
				action: 'Get full project information',
			},
			{
				name: 'List',
				value: 'list',
				description: 'Get list of all projects',
				action: 'Get list of projects',
			},
		],
		default: 'create',
	},
];

export const projectFields: INodeProperties[] = [
	// Create fields
	{
		displayName: 'Username',
		name: 'username',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ['create', 'edit'],
			},
		},
		default: '',
		description: 'Username of the creator (e.g., @admin)',
	},
	{
		displayName: 'Metatype',
		name: 'metatype',
		type: 'options',
		required: true,
		options: [
			{
				name: 'Project',
				value: 'project',
			},
			{
				name: 'Team',
				value: 'team',
			},
		],
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ['create'],
			},
		},
		default: 'project',
		description: 'Type: "project" or "team"',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Project name',
	},
	{
		displayName: 'External',
		name: 'external',
		type: 'options',
		required: true,
		options: [
			{
				name: 'Inhouse',
				value: '0',
			},
			{
				name: 'Work with Guest',
				value: '1',
			},
		],
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ['create'],
			},
		},
		default: '0',
		description: '0: Inhouse, 1: Work with guest',
	},
	{
		displayName: 'Project ID',
		name: 'id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ['edit', 'getFull'],
			},
		},
		default: '',
		description: 'ID of the project',
	},
	{
		displayName: 'Return',
		name: 'returnData',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ['getFull'],
			},
		},
		options: [
			{
				name: 'Full Response',
				value: 'full',
				description: 'Return complete API response with code, message, project, tasklists, tasks, etc',
			},
			{
				name: 'Milestones Array Only',
				value: 'milestones',
				description: 'Return only the milestones array',
			},
			{
				name: 'Project Object Only',
				value: 'project',
				description: 'Return only the project object',
			},
			{
				name: 'Subtasks Array Only',
				value: 'subtasks',
				description: 'Return only the subtasks array',
			},
			{
				name: 'Tasklists Array Only',
				value: 'tasklists',
				description: 'Return only the tasklists array',
			},
			{
				name: 'Tasks Array Only',
				value: 'tasks',
				description: 'Return only the tasks array',
			},
		],
		default: 'full',
		description: 'Choose what data to return',
	},
	{
		displayName: 'Return',
		name: 'returnData',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ['list'],
			},
		},
		options: [
			{
				name: 'Full Response',
				value: 'full',
				description: 'Return complete API response with code, message, page, projects, etc',
			},
			{
				name: 'Projects Array Only',
				value: 'array',
				description: 'Return only the projects array',
			},
		],
		default: 'full',
		description: 'Choose what data to return',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ['edit'],
			},
		},
		default: '',
		description: 'Project name',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ['create', 'edit'],
			},
		},
		options: [
			{
				displayName: 'Content',
				name: 'content',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				description: 'Content/description of the project',
			},
			{
				displayName: 'Department ID',
				name: 'dept_id',
				type: 'string',
				default: '',
				description: 'ID of the department',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				description: 'Project description',
			},
			{
				displayName: 'End Time',
				name: 'etime',
				type: 'string',
				default: '',
				placeholder: '31/12/2021',
				description: 'End date in format dd/mm/YYYY',
			},
			{
				displayName: 'Followers',
				name: 'followers',
				type: 'string',
				default: '',
				placeholder: '@user1, @user2',
				description: 'List of usernames to add as followers (comma-separated if multiple)',
			},
			{
				displayName: 'Owners',
				name: 'owners',
				type: 'string',
				default: '',
				placeholder: '@admin',
				description: 'List of usernames to add as managers (comma-separated if multiple). If empty, will use username field value.',
			},
			{
				displayName: 'Start Time',
				name: 'stime',
				type: 'string',
				default: '',
				placeholder: '01/01/2021',
				description: 'Start date in format dd/mm/YYYY',
			},
			{
				displayName: 'Teams',
				name: 'teams',
				type: 'string',
				default: '',
				placeholder: '@product',
				description: 'List of teams to add as members (comma-separated if multiple)',
			},
		],
	},
];

// ==================== TASK DESCRIPTIONS ====================
export const taskOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['task'],
			},
		},
		options: [
			{
				name: 'Add Followers',
				value: 'addFollowers',
				description: 'Add followers to a task',
				action: 'Add followers to task',
			},
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new task',
				action: 'Create a task',
			},
			{
				name: 'Create Subtask',
				value: 'createSubtask',
				description: 'Create a new subtask under a parent task',
				action: 'Create a subtask',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a task',
				action: 'Delete a task',
			},
			{
				name: 'Edit Basic Info',
				value: 'edit',
				description: 'Edit task basic information (name, description, etc.)',
				action: 'Edit task basic info',
			},
			{
				name: 'Edit Extra',
				value: 'editExtra',
				description: 'Edit task deadline, start time and status',
				action: 'Edit task extra info',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get task information',
				action: 'Get task information',
			},
			{
				name: 'List by Project',
				value: 'project',
				description: 'Get list of tasks by project',
				action: 'Get list of tasks by project',
			},
			{
				name: 'Mark Done',
				value: 'markDone',
				description: 'Mark task as done',
				action: 'Mark task as done',
			},
		],
		default: 'create',
	},
];

export const taskFields: INodeProperties[] = [
	{
		displayName: 'Task ID',
		name: 'id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['edit', 'editExtra', 'get', 'markDone', 'delete', 'addFollowers'],
			},
		},
		default: '',
		description: 'ID of the task',
	},
	{
		displayName: 'Return',
		name: 'returnData',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['get'],
			},
		},
		options: [
			{
				name: 'Full Response',
				value: 'full',
				description: 'Return the complete API response',
			},
			{
				name: 'Task Object Only',
				value: 'task',
				description: 'Return only the task object',
			},
		],
		default: 'full',
		description: 'Choose what data to return',
	},
	{
		displayName: 'Username',
		name: 'username',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['create', 'createSubtask', 'edit', 'editExtra', 'markDone', 'delete', 'addFollowers'],
			},
		},
		default: '',
		description: 'Username of the creator',
	},
	{
		displayName: 'Parent Task ID',
		name: 'parent_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['createSubtask'],
			},
		},
		default: '',
		description: 'ID of the parent task',
	},
	{
		displayName: 'Project ID',
		name: 'id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['create', 'project'],
			},
		},
		default: '',
		description: 'ID of the project',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['create', 'createSubtask'],
			},
		},
		default: '',
		description: 'Task name',
	},
	{
		displayName: 'Username',
		name: 'username',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['project'],
			},
		},
		default: '',
		description: 'Username of the editor',
	},
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['project'],
			},
		},
		default: 0,
		description: 'Page number for pagination',
	},
	{
		displayName: 'Return',
		name: 'returnData',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['project'],
			},
		},
		options: [
			{
				name: 'Full Response',
				value: 'full',
				description: 'Return the complete API response',
			},
			{
				name: 'Tasks Array Only',
				value: 'tasks',
				description: 'Return only the tasks array',
			},
		],
		default: 'full',
		description: 'Choose what data to return',
	},
	{
		displayName: 'Followers',
		name: 'followers',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['addFollowers'],
			},
		},
		default: '',
		placeholder: '@user1 @user2',
		description: 'List of followers to add (space separated)',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['edit'],
			},
		},
		default: '',
		description: 'Task name',
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['edit'],
			},
		},
		default: '',
		description: 'Task description',
	},
	{
		displayName: 'Followers',
		name: 'followers',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['edit'],
			},
		},
		default: '',
		placeholder: '@giangchu',
		description: 'List of followers (comma-separated)',
	},
	{
		displayName: 'Deadline',
		name: 'deadline',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['editExtra'],
			},
		},
		default: '',
		placeholder: '20/05/2020',
		description: 'Deadline date (format dd/mm/YYYY)',
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'options',
		options: [
			{ name: 'Review', value: '0' },
			{ name: 'Done', value: '1' },
			{ name: 'Doing', value: '2' },
			{ name: 'Failed', value: '-1' },
		],
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['editExtra'],
			},
		},
		default: '2',
		description: 'Task status',
	},
	{
		displayName: 'Start Time',
		name: 'start_time',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['editExtra'],
			},
		},
		default: '',
		placeholder: '22/05/2020',
		description: 'Start date (format dd/mm/YYYY)',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['edit'],
			},
		},
		options: [
			{
				displayName: 'Followers',
				name: 'followers',
				type: 'string',
				default: '',
				placeholder: '@giangchu',
				description: 'List of followers (comma-separated)',
			},
			{
				displayName: 'Tags',
				name: 'tags',
				type: 'string',
				default: '',
				placeholder: 'base,wework,workflow',
				description: 'Tags (comma-separated)',
			},
			{
				displayName: 'Urgent',
				name: 'urgent',
				type: 'options',
				options: [
					{ name: 'Normal', value: '0' },
					{ name: 'Urgent', value: '1' },
				],
				default: '0',
				description: 'Task priority',
			},
			{
				displayName: 'Custom Fields',
				name: 'custom_fields',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: {},
				placeholder: 'Add Custom Field',
				description: 'Add custom fields as key-value pairs',
				options: [
					{
						name: 'fields',
						displayName: 'Field',
						values: [
							{
								displayName: 'Field Name',
								name: 'key',
								type: 'string',
								default: '',
								placeholder: 'cot_1',
								description: 'Field name (custom_ prefix will be added automatically)',
							},
							{
								displayName: 'Field Value',
								name: 'value',
								type: 'string',
								default: '',
								placeholder: 'value',
							},
						],
					},
				],
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['create', 'createSubtask'],
			},
		},
		options: [
			{
				displayName: 'Assign',
				name: 'assign',
				type: 'string',
				default: '',
				placeholder: '@hungkien',
				description: 'Username of assignee',
			},
			{
				displayName: 'Content',
				name: 'content',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				description: 'Task description/content',
			},
			{
				displayName: 'Custom Fields',
				name: 'custom_fields',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: {},
				placeholder: 'Add Custom Field',
				description: 'Add custom fields as key-value pairs',
				options: [
					{
						name: 'fields',
						displayName: 'Field',
						values: [
							{
								displayName: 'Field Name',
								name: 'key',
								type: 'string',
								default: '',
								placeholder: 'cot_1',
								description: 'Field name (custom_ prefix will be added automatically)',
							},
							{
								displayName: 'Field Value',
								name: 'value',
								type: 'string',
								default: '',
								placeholder: 'value',
							},
						],
					},
				],
			},
			{
				displayName: 'Deadline',
				name: 'deadline',
				type: 'string',
				default: '',
				placeholder: '20/05/2020',
				description: 'Deadline date (format dd/mm/YYYY)',
			},
			{
				displayName: 'Deadline Time',
				name: 'deadline-time',
				type: 'string',
				default: '',
				placeholder: '15:45',
				description: 'Deadline time (format HH:MM)',
			},
			{
				displayName: 'Followers',
				name: 'followers',
				type: 'string',
				default: '',
				placeholder: '@giangchu',
				description: 'List of followers (comma-separated)',
			},
			{
				displayName: 'Has Deadline',
				name: 'has_deadline',
				type: 'options',
				options: [
					{ name: 'No', value: '0' },
					{ name: 'Yes', value: '1' },
				],
				default: '0',
				description: 'Whether task has deadline',
			},
			{
				displayName: 'Start Time',
				name: 'start_time',
				type: 'string',
				default: '',
				placeholder: '22/05/2020',
				description: 'Start date (format dd/mm/YYYY)',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{ name: 'Review', value: '0' },
					{ name: 'Done', value: '1' },
					{ name: 'Doing', value: '2' },
					{ name: 'Failed', value: '-1' },
				],
				default: '2',
				description: 'Task status',
			},
			{
				displayName: 'Tags',
				name: 'tags',
				type: 'string',
				default: '',
				placeholder: 'base,wework,workflow',
				description: 'Tags (comma-separated)',
			},
			{
				displayName: 'Urgent',
				name: 'urgent',
				type: 'options',
				options: [
					{ name: 'Normal', value: '0' },
					{ name: 'Urgent', value: '1' },
				],
				default: '0',
				description: 'Task priority',
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['project'],
			},
		},
		options: [
			{
				displayName: 'Created From',
				name: 'created_from',
				type: 'string',
				default: '',
				placeholder: '20/12/2021',
				description: 'Filter tasks created from this date (dd/mm/yyyy)',
			},
			{
				displayName: 'Created To',
				name: 'created_to',
				type: 'string',
				default: '',
				placeholder: '20/12/2021',
				description: 'Filter tasks created to this date (dd/mm/yyyy)',
			},
			{
				displayName: 'Meta Type',
				name: 'metatype',
				type: 'options',
				options: [
					{
						name: 'Task',
						value: 'task',
					},
					{
						name: 'Subtask',
						value: 'subtask',
					},
				],
				default: 'task',
				description: 'Type of task to retrieve',
			},
			{
				displayName: 'Updated From',
				name: 'updated_from',
				type: 'string',
				default: '',
				placeholder: '20/12/2021',
				description: 'Filter tasks updated from this date (dd/mm/yyyy)',
			},
			{
				displayName: 'Updated To',
				name: 'updated_to',
				type: 'string',
				default: '',
				placeholder: '20/12/2021',
				description: 'Filter tasks updated to this date (dd/mm/yyyy)',
			},
		],
	},
];

// ==================== DEPARTMENT DESCRIPTIONS ====================
export const departmentOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['department'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new department',
				action: 'Create a department',
			},
			{
				name: 'Edit',
				value: 'edit',
				description: 'Edit a department',
				action: 'Edit a department',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get department information',
				action: 'Get department information',
			},
			{
				name: 'List',
				value: 'list',
				description: 'Get list of all departments',
				action: 'Get list of departments',
			},
			{
				name: 'Remove',
				value: 'remove',
				description: 'Remove a department',
				action: 'Remove a department',
			},
		],
		default: 'create',
	},
];

export const departmentFields: INodeProperties[] = [
	{
		displayName: 'Return',
		name: 'returnData',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['department'],
				operation: ['list'],
			},
		},
		options: [
			{
				name: 'Full Response',
				value: 'full',
				description: 'Return the complete API response',
			},
			{
				name: 'Departments Array Only',
				value: 'depts',
				description: 'Return only the depts array',
			},
		],
		default: 'full',
		description: 'Choose what data to return',
	},
	{
		displayName: 'Username',
		name: 'username',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['department'],
				operation: ['create', 'edit', 'remove'],
			},
		},
		default: '',
		description: 'Username of the editor',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['department'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Department name',
	},
	{
		displayName: 'Department ID',
		name: 'id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['department'],
				operation: ['edit', 'get', 'remove'],
			},
		},
		default: '',
		description: 'ID of the department',
	},
	{
		displayName: 'Return',
		name: 'returnData',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['department'],
				operation: ['get'],
			},
		},
		options: [
			{
				name: 'Full Response',
				value: 'full',
				description: 'Return the complete API response',
			},
			{
				name: 'Department Object Only',
				value: 'dept',
				description: 'Return only the department object',
			},
		],
		default: 'full',
		description: 'Choose what data to return',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['department'],
				operation: ['edit'],
			},
		},
		default: '',
		description: 'Department name',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['department'],
				operation: ['create', 'edit'],
			},
		},
		options: [
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				description: 'Department description',
			},
		],
	},
	{
		displayName: 'Return Data',
		name: 'returnData',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['department'],
				operation: ['get'],
			},
		},
		options: [
			{
				name: 'Full Response',
				value: 'full',
				description: 'Return the complete API response',
			},
			{
				name: 'Department Object Only',
				value: 'dept',
				description: 'Return only the department object',
			},
		],
		default: 'full',
		description: 'Choose what data to return',
	},
];

// ==================== TASKLIST DESCRIPTIONS ====================
export const tasklistOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['tasklist'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Get tasklist information',
				action: 'Get tasklist information',
			},
		],
		default: 'get',
	},
];

export const tasklistFields: INodeProperties[] = [
	{
		displayName: 'Tasklist ID',
		name: 'id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['tasklist'],
				operation: ['get'],
			},
		},
		default: '',
		description: 'ID of the tasklist',
	},
	{
		displayName: 'Return',
		name: 'returnData',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['tasklist'],
				operation: ['get'],
			},
		},
		options: [
			{
				name: 'Full Response',
				value: 'full',
				description: 'Return the complete API response',
			},
			{
				name: 'Tasklist Object Only',
				value: 'tasklist',
				description: 'Return only the tasklist object',
			},
		],
		default: 'full',
		description: 'Choose what data to return',
	},
];
