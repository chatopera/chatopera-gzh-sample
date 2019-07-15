#! /bin/bash 
###########################################
#
###########################################

# constants
baseDir=$(cd `dirname "$0"`;pwd)
export NODE_PORT=3001
export SUPERBRAIN_CLIENTID=YOUR_BOT_CLIENTID
export SUPERBRAIN_SECRET=YOUR_BOT_SECRET
export WECHAT_GZH_APPID=YOUR_GZH_APPID
export WECHAT_GZH_TOKEN=YOUR_GZH_TOKEN
export WECHAT_GZH_KEY=YOUR_GZH_KEY

# functions

# main 
[ -z "${BASH_SOURCE[0]}" -o "${BASH_SOURCE[0]}" = "$0" ] || return
cd $baseDir/../app
npm install
DEBUG=chatopera:gzh* npm start