# weixin-sharelink  
[![Build Status](https://img.shields.io/npm/l/weixin-toolkit)](https://www.npmjs.com/package/weixin-toolkit)
[![Build Status](https://img.shields.io/npm/v/weixin-toolkit)](https://www.npmjs.com/package/weixin-toolkit)
[![Build Status](https://img.shields.io/npm/dm/weixin-toolkit)](https://www.npmjs.com/package/weixin-toolkit)

An ez access to wechat js sdk.

Best for frontend and backend isolation env in enterprises or orgnizations wechat development.  

You need a centre service handling tasks: secret key store, access token keep and renew, signature computed and so on.  
> The service could be designed as an open api so that `Access-Control-Allow-Origin`, `Access-Control-Allow-Headers`, `Access-Control-Allow-Methods` might be set for CORS. Consequencely, access control strategies should be added.  
 
轻松使用微信官方 js sdk

适用于前后分离的企业或者组织团体。  
需后端中控服务配合。  
中控服务需完成保存密钥，维护 token，生成签名等功能。
> 中控服务可以设计成开放 API。需要添加相关的 CORS 与 访问策略。

## notice
+ The first param  is centre control service param. Here it should be sent by `axios` after `querystring` handled. That means `content-type` is `application/x-www-form-urlencoded`.
+ The second is jsApiList, for example `["updateAppMessageShareData", "chooseImage"]`.
+ **Optional** The third is debug for js sdk, default `false`.
+ **Optional** The forth param. If set `'json'`, `axios` acts defaultly， that is `content-type` is `application/json`.
+  
+ 第一个参数是发送到中控服务的参数。默认发送的 `content-type` 是 `application/x-www-form-urlencoded`.
+ 第二个是 jsApiList, 例如 `["updateAppMessageShareData", "chooseImage"]`.
+ 第三个**可选**参数是 js sdk debug, 默认 `false`.
+ 第四个**可选**参数，如果设置为 `'json'`，将使用 `axios` 的默认行为，`content-type` 是 `application/json` 。

## tips
[Wechat official API doc](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK)

## useage
install  
`npm i -S weixin-sharelink`  

for commonjs and ts  
```
import { WeixinToolkit } from 'weixin-toolkit';

new wxtk = WeixinToolkit(
    // centre control service param
    {
        url: "<centre service url>",
        params: <centre servic post params>
    },

    // string[]...
    ["updateAppMessageShareData", "chooseImage"],

    // optional, default false
    // true,

    // optional param, if your centre control service require json data
    // 'json'
)

wxtk.wx.chooseImage({...})
```


## link
Looking for centre service?  
[Weixin sdk js centre service](https://github.com/wind2esg/weixin-service)  
Looking for openbox-using wechat share?
[Weixin shareLink](https://github.com/Wind2esg/weixin-shareLink)