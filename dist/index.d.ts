/**
 * Wechat js toolkit
 *
 * @author wind2esg
 * @date 20191106
 *
 * ez access to wechat js function with centre service
 * hot plug-in api
 */
interface WechatServiceParams {
    url: string;
    params: any;
}
export declare class WeixinToolkit {
    wx: any;
    constructor(wechatServiceParams: WechatServiceParams, apiList: Array<string>, debug?: boolean, axiosDefault?: string);
}
export {};
