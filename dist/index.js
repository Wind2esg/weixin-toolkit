"use strict";
/**
 * Wechat js toolkit
 *
 * @author wind2esg
 * @date 20191106
 *
 * ez access to wechat js function with centre service
 * hot plug-in api
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const weixin_sdk_js_1 = __importDefault(require("weixin-sdk-js"));
const axios_1 = __importDefault(require("axios"));
const querystring_1 = __importDefault(require("querystring"));
class WeixinToolkit {
    constructor(wechatServiceParams, apiList, debug, axiosDefault) {
        let params = (axiosDefault && axiosDefault === 'json') ? wechatServiceParams.params : querystring_1.default.stringify(wechatServiceParams.params);
        axios_1.default.post(wechatServiceParams.url, params).then((response) => {
            console.log(weixin_sdk_js_1.default);
            let wxconfig = response.data;
            weixin_sdk_js_1.default.config({
                debug: debug ? debug : false,
                appId: wxconfig["appId"],
                timestamp: wxconfig["timestamp"],
                nonceStr: wxconfig["nonceStr"],
                signature: wxconfig["signature"],
                jsApiList: apiList
            });
        });
    }
}
exports.WeixinToolkit = WeixinToolkit;
