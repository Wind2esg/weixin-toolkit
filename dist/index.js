"use strict";
/**
 * Wechat share link to friends or timeline
 *
 * @author wind2esg
 * @date 20191015
 *
 * ez access to wechat share with wechat js sdk centre service
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const weixin_sdk_js_1 = __importDefault(require("weixin-sdk-js"));
const axios_1 = __importDefault(require("axios"));
const querystring_1 = __importDefault(require("querystring"));
class WeixinShareLink {
    constructor(wechatShareParams, wechatServiceParams, axiosDefault) {
        let params = (axiosDefault && axiosDefault === 'json') ? wechatServiceParams.params : querystring_1.default.stringify(wechatServiceParams.params);
        axios_1.default.post(wechatServiceParams.url, params).then((response) => {
            console.log(weixin_sdk_js_1.default);
            let wxconfig = response.data;
            weixin_sdk_js_1.default.config({
                debug: wechatShareParams.debug,
                appId: wxconfig["appId"],
                timestamp: wxconfig["timestamp"],
                nonceStr: wxconfig["nonceStr"],
                signature: wxconfig["signature"],
                jsApiList: [
                    'updateAppMessageShareData',
                    'updateTimelineShareData'
                ]
            });
            weixin_sdk_js_1.default.ready(() => {
                weixin_sdk_js_1.default.updateTimelineShareData({
                    title: wechatShareParams.title,
                    link: wechatShareParams.link,
                    imgUrl: wechatShareParams.imgUrl
                });
                weixin_sdk_js_1.default.updateAppMessageShareData({
                    title: wechatShareParams.title,
                    desc: wechatShareParams.desc,
                    link: wechatShareParams.link,
                    imgUrl: wechatShareParams.imgUrl
                });
            });
        });
    }
}
exports.WeixinShareLink = WeixinShareLink;
