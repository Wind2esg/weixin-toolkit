/**
 * Wechat js toolkit
 * 
 * @author wind2esg
 * @date 20191106
 * 
 * ez access to wechat js function with centre service
 * hot plug-in api
 */

import wx from 'weixin-sdk-js';
import axios from 'axios';
import querystring from 'querystring';

interface WechatServiceParams{
  url: string;
  params: any;
}

export class WeixinToolkit{
  public wx: any;
  constructor(wechatServiceParams: WechatServiceParams, apiList:Array<string>, debug?: boolean, axiosDefault?: string){
    let params = (axiosDefault && axiosDefault === 'json')? wechatServiceParams.params : querystring.stringify(wechatServiceParams.params);
    axios.post(
        wechatServiceParams.url,
        params
        ).then((response)=>{
          this.wx = wx;
          let wxconfig = response.data;
          this.wx.config({
            debug: debug ? debug : false ,
            appId: wxconfig["appId"],
            timestamp: wxconfig["timestamp"],
            nonceStr: wxconfig["nonceStr"],
            signature: wxconfig["signature"],
            jsApiList: apiList
          });
        }
      );
  }
}
