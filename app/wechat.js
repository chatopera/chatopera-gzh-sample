require("dotenv").config();
const wechat = require("co-wechat");
const Chatopera = require("@chatopera/sdk");
const debug = require("debug")("chatopera:gzh:wechat");
const client = new Chatopera(
  process.env["SUPERBRAIN_CLIENTID"],
  process.env["SUPERBRAIN_SECRET"]
);

const welcome = `hi, my super power is talk.

进一步了解我们，可以通过以下方式：
1、产品<a href="https://docs.chatopera.com/" target="_blank">文档中心</a>。
2、春松客服QQ群：<a href="https://jq.qq.com/?_wv=1027&k=5I1cJLP" target="_blank">185659917</a>
3、开发者平台QQ群：<a href="https://jq.qq.com/?_wv=1027&k=5S51T2a" target="_blank">185659917</a>
4、业务洽谈：张先生 136-9149-0568

[出版物] 《智能问答与深度学习》，<a href="https://item.jd.com/12479014.html" target="_blank">快来看看吧</a>。`;

module.exports = exports = wechat({
  appid: process.env["WECHAT_GZH_APPID"],
  token: process.env["WECHAT_GZH_TOKEN"],
  encodingAESKey: process.env["WECHAT_GZH_KEY"]
}).middleware(async (message, ctx) => {
  debug("incoming payload: %j", message);
  let {
    MsgType,
    Event,
    EventKey,
    FromUserName,
    Recognition,
    Content
  } = message;
  if (MsgType == "voice" || MsgType == "text") {
    let msg = (Recognition || "").replace("。", "") || Content;
    debug("query: %s", msg);
    if (msg) {
      const reply = await client.conversation(FromUserName, msg);
      return reply.string;
    } else {
      return "";
    }
  } else if (MsgType == "event") {
    if (Event == "subscribe") {
      const reply = await client.conversation(
        FromUserName,
        "__kickoff_on_subscribe"
      );
      return reply.string;
    } else if (Event == "CLICK") {
      const reply = await client.conversation(FromUserName, EventKey);
      return reply.string;
    } else {
      return "";
    }
  } else {
    return "";
  }
});
