# chatopera-gzh-sample

在微信公众号中使用 Chatopera 聊天机器人。

Connect Chatopera Bot to Wechat Public Accout

## Requirements

- Node.js 8+

## Settings

### Wechat Account

Open [Wechat Public Account Platform](https://mp.weixin.qq.com/) from browser and login, enable developer mode, get `appId`, `token` and `key`.

![image](https://user-images.githubusercontent.com/3538629/61193568-c049cc80-a6ee-11e9-992c-cec62fc296f2.png)

Fill in the Service Url with your application's URL, such as `https://wgh.xxx.com/wechat`.

### Create Bot

Creat a bot in [Chatopera Bot Service](https://bot.chatopera.com/), get `clientId` and `secret` in [details](https://github.com/chatopera/chatopera-sample-node#%E8%8E%B7%E5%8F%96clientid%E5%92%8Csecret).

### Configure

Get this demo application source code with git.

```

git clone https://github.com/chatopera/chatopera-gzh-sample.git

```

Modify environment variables in `admin/start.sh`.

| KEY                 | VALUE                          |
| ------------------- | ------------------------------ |
| SUPERBRAIN_CLIENTID | clientId of Chatopera Bot      |
| SUPERBRAIN_SECRET   | secret of Chatopera Bot        |
| WECHAT_GZH_APPID    | 微信公众号开发者 ID            |
| WECHAT_GZH_TOKEN    | 微信公众号令牌                 |
| WECHAT_GZH_KEY      | 消息加解密密钥(EncodingAESKey) |

Start your application with `admin/start.sh`.

### Enable ASR in Wechat

[微信公众平台怎样开启接收语音识别结果](https://jingyan.baidu.com/article/b7001fe1adc5dc0e7382dd6f.html)
