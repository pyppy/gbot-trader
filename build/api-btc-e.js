(function(){var a,b,c;a=require("./conf"),b=require("btce-deal"),c=function(){function e(){}e.displayName="API";e.prototype;return e.prototype.btcePublic=new b.Public(a.host),e.prototype.btceTrade=new b.Trade(a.key,a.secret,a.host),e.prototype.getTrades=function(a,b,c){return this.btcePublic.getTrades(a,b).then(function(a){return c(null,a)}).catch(function(a){return c(a)})},e.prototype.getInfo=function(a){return this.btcePublic.getInfo().then(function(b){return a(null,b)}).catch(function(b){return a(b)})},e.prototype.getTicker=function(a,b){return this.btcePublic.getTicker(a).then(function(a){return b(null,a)}).catch(function(a){return b(a)})},e.prototype.ordersRequest=function(a,b){return this.btceTrade.getActiveOrders(a).then(function(a){return b(null,a)}).catch(function(a){return b(a)})},e.prototype.balanceRequest=function(a,b){return this.btceTrade.getInfo().then(function(c){return b(null,c.funds[a.name],c.funds[a.nameTwo])}).catch(function(a){return b(a)})},e.prototype.tradeSetOrder=function(a,b,c,d,e){return this.btceTrade.trade({pair:a,type:b,rate:c,amount:d}).then(function(a){return e(null,a)}).catch(function(a){return e(a)})},e.prototype.tradeCancelOrder=function(a,b){return this.btceTrade.cancelOrder(a).then(function(a){return b(null,a)}).catch(function(a){return b(a)})},e.prototype.tradeGetHistory=function(a,b,c){return this.btceTrade.getTradeHistory({pair:a,count:b}).then(function(a){return c(null,a)}).catch(function(a){return c(a)})},e.prototype.setNonce=function(a){this.btceTrade.nonce=a},e}(),module.exports=c}).call(this);