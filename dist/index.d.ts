/**
 * Wechat share link to friends or timeline
 *
 * @author wind2esg
 * @date 20191015
 *
 * ez access to wechat share with wechat js sdk centre service
 */
export interface WechatServiceParams {
    url: string;
    params: any;
}
interface WechatShareParams {
    debug: boolean;
    title: string;
    desc: string;
    link: string;
    imgUrl: string;
}
export declare class WeixinShareLink {
    constructor(wechatShareParams: WechatShareParams, wechatServiceParams: WechatServiceParams, axiosDefault?: string);
}
export {};
