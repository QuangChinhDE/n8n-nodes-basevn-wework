import type { IExecuteFunctions, IHttpRequestMethods, IDataObject } from 'n8n-workflow';
export declare function weworkApiRequest(this: IExecuteFunctions, method: IHttpRequestMethods, endpoint: string, body?: IDataObject): Promise<IDataObject>;
