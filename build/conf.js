(function(){var a,b,c,d,e;a=require("fs"),b="production"!==process.env.NODE_ENV&&a.existsSync("./build/conf-dev.js")?require("./conf-dev"):{tokenTelegram:"",myChatId:"",btce:{key:"",secret:""},poloniex:{key:"",secret:""},emailReport:"",emailUser:"",emailPass:"",pairFirst:"nvc",pairTwo:"usd",botLog:!1,botTrade:!0,offModulesAutoSettings:process.env.OFF_MODULES_AUTO_SETTINGS,dangerPriceStop:!0,dynamicSettingsTime:!1,dynamicOffsetOrders:!1,trendDefinition:!1,abruptChangeTrend:!1,bbands:!1,depositLimit:100,offsetMaxOne:10,countOrders:0},c={versionBot:"0.11.8",masterWorker:!0,botLog:process.env.LOG||b.botLog,botTrade:b.botTrade},c.tokenTelegram=process.env.TELEGRAM_TOKEN||b.tokenTelegram,c.myChatId=+process.env.TELEGRAM_ID||b.myChatId,c.exchange=(process.env.EXCHANGE||"btc-e").toLowerCase(),c.host=process.env.BTCE_HOST||"btc-e.nz",c.key=process.env.BTCE_KEY||b.btce.key,c.secret=process.env.BTCE_SECRET||b.btce.secret,c.poloniexKey=process.env.POLONIEX_KEY||b.poloniex.key,c.poloniexSecret=process.env.POLONIEX_SECRET||b.poloniex.secret,c.poloniexFee=process.env.POLONIEX_FEE||.25,c.poloniexMinOrders=1e-4,d=process.env.NAME_COIN||b.pairFirst,e=process.env.NAME_COIN_TWO||b.pairTwo,d="poloniex"===c.exchange?d.toUpperCase():d.toLowerCase(),e="poloniex"===c.exchange?e.toUpperCase():e.toLowerCase(),c.tradeCurrency={name:d,nameTwo:e,pair:[d,e].join("_")},c.timeZone=process.env.TIME_ZONE||"Asia/Yekaterinburg",c.depositLimit=+(process.env.DEPOSIT_LIMIT||b.depositLimit),c.notificationPair=process.env.NOTIFICATION_PAIR||"nmc/usd, ppc/usd, nvc/usd",c.notificationDeviation=+(process.env.NOTIFICATION_DEVIATION_PERCENT||600),c.countOrders=+(process.env.COUNT_ORDERS||b.countOrders),c.timeCloseOrders=+(process.env.TIME_CLOSE_ORDERS||5),c.timeCloseOrdersInactivity=+(process.env.TIME_CLOSE_ORDERS_INACTIVITY||3*c.timeCloseOrders),c.timeCloseOrdersExtra=1,c.offsetMaxOne=+(process.env.OFFSET_MAX_ONE||b.offsetMaxOne),c.offsetMaxTwo=+(process.env.OFFSET_MAX_TWO||1.5*c.offsetMaxOne),c.timeUpdateAutoSettings=+(process.env.TIME_UPDATE_AUTO_SETTINGS||2),c.restartServerTime=5,c.ecoCountCycle=20,c.multiplierOrdersExtra=3,c.stepBreakevenPercent=+(process.env.STEP_BREAKEVEN_PERCENT||50),c.bbands=!(!process.env.BBANDS&&!b.bbands),c.bbandsDeviation=+(process.env.BBANDS_DEVIATION||20),c.bbandsInterval=+(process.env.BBANDS_INTERVAL||1),b.offModulesAutoSettings?(c.dynamicSettingsTime=!1,c.dynamicOffsetOrders=!1,c.trendDefinition=!1,c.abruptChangeTrend=!1,c.dangerPriceStop=!1):(c.dangerPriceStop=!(!process.env.DANGER_PRICE_STOP&&!b.dangerPriceStop),c.dynamicSettingsTime=!(!process.env.DYNAMIC_SETTINGS_TIME&&!b.dynamicSettingsTime),c.dynamicOffsetOrders=!(!process.env.DYNAMIC_OFFSET_ORDERS&&!b.dynamicOffsetOrders),c.trendDefinition=!(!process.env.TREND_DEFINITION&&!b.trendDefinition),c.abruptChangeTrend=!(!process.env.ABRUPT_CHANGE_TREND&&!b.abruptChangeTrend)),c.email={reportEmail:process.env.EMAIL_BUG_REPORT_ADDRESS||b.emailReport,host:process.env.HOST_SMTP||"smtp.yandex.ru",port:465,secure:!0,auth:{user:process.env.EMAIL_AUTH_USER||b.emailUser,pass:process.env.EMAIL_AUTH_PASS||b.emailPass}},c.emailS=!!c.email.auth.user&&!!c.email.auth.pass&&!!c.email.reportEmail,module.exports=c}).call(this);