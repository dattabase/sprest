/**
 * Method Information Settings
 */
export interface IMethodInfo {
    argNames?: Array<string>;
    argValues?: Array<any>;
    data?: any;
    getAllItemsFl?: boolean;
    inheritMetadataType?: boolean;
    metadataType?: string;
    name?: string;
    replaceEndpointFl?: boolean;
    requestMethod?: string;
    requestType?: number;
    returnType?: string;
}
/*********************************************************************************************************************************/
/*********************************************************************************************************************************/
export declare class MethodInfo implements IMethodInfo {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    constructor(methodName: string, methodInfo: IMethodInfo, args: any);
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    readonly body: string;
    readonly getAllItemsFl: boolean;
    readonly replaceEndpointFl: boolean;
    readonly requestMethod: string;
    readonly url: string;
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    private readonly passDataInBody;
    private readonly passDataInQS;
    private readonly isTemplate;
    private readonly replace;
    private methodData;
    private methodInfo;
    private methodParams;
    private methodUrl;
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    private generateParams();
    private generateUrl();
}
