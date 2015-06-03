// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t27018 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27018 = (function (f,fn_handler,meta27019){
this.f = f;
this.fn_handler = fn_handler;
this.meta27019 = meta27019;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27018.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27018.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t27018.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t27018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27020){
var self__ = this;
var _27020__$1 = this;
return self__.meta27019;
});

cljs.core.async.t27018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27020,meta27019__$1){
var self__ = this;
var _27020__$1 = this;
return (new cljs.core.async.t27018(self__.f,self__.fn_handler,meta27019__$1));
});

cljs.core.async.t27018.cljs$lang$type = true;

cljs.core.async.t27018.cljs$lang$ctorStr = "cljs.core.async/t27018";

cljs.core.async.t27018.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t27018");
});

cljs.core.async.__GT_t27018 = (function cljs$core$async$fn_handler_$___GT_t27018(f__$1,fn_handler__$1,meta27019){
return (new cljs.core.async.t27018(f__$1,fn_handler__$1,meta27019));
});

}

return (new cljs.core.async.t27018(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__27022 = buff;
if(G__27022){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__27022.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__27022.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27022);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27022);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__27024 = arguments.length;
switch (G__27024) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__27027 = arguments.length;
switch (G__27027) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27029 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27029);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27029,ret){
return (function (){
return fn1.call(null,val_27029);
});})(val_27029,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__27031 = arguments.length;
switch (G__27031) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19001__auto___27033 = n;
var x_27034 = (0);
while(true){
if((x_27034 < n__19001__auto___27033)){
(a[x_27034] = (0));

var G__27035 = (x_27034 + (1));
x_27034 = G__27035;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27036 = (i + (1));
i = G__27036;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t27040 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27040 = (function (flag,alt_flag,meta27041){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta27041 = meta27041;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27040.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27040.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t27040.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t27040.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27042){
var self__ = this;
var _27042__$1 = this;
return self__.meta27041;
});})(flag))
;

cljs.core.async.t27040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27042,meta27041__$1){
var self__ = this;
var _27042__$1 = this;
return (new cljs.core.async.t27040(self__.flag,self__.alt_flag,meta27041__$1));
});})(flag))
;

cljs.core.async.t27040.cljs$lang$type = true;

cljs.core.async.t27040.cljs$lang$ctorStr = "cljs.core.async/t27040";

cljs.core.async.t27040.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t27040");
});})(flag))
;

cljs.core.async.__GT_t27040 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t27040(flag__$1,alt_flag__$1,meta27041){
return (new cljs.core.async.t27040(flag__$1,alt_flag__$1,meta27041));
});})(flag))
;

}

return (new cljs.core.async.t27040(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t27046 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27046 = (function (cb,flag,alt_handler,meta27047){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta27047 = meta27047;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27046.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27046.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t27046.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t27046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27048){
var self__ = this;
var _27048__$1 = this;
return self__.meta27047;
});

cljs.core.async.t27046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27048,meta27047__$1){
var self__ = this;
var _27048__$1 = this;
return (new cljs.core.async.t27046(self__.cb,self__.flag,self__.alt_handler,meta27047__$1));
});

cljs.core.async.t27046.cljs$lang$type = true;

cljs.core.async.t27046.cljs$lang$ctorStr = "cljs.core.async/t27046";

cljs.core.async.t27046.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t27046");
});

cljs.core.async.__GT_t27046 = (function cljs$core$async$alt_handler_$___GT_t27046(cb__$1,flag__$1,alt_handler__$1,meta27047){
return (new cljs.core.async.t27046(cb__$1,flag__$1,alt_handler__$1,meta27047));
});

}

return (new cljs.core.async.t27046(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27049_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27049_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27050_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27050_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18116__auto__ = wport;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27051 = (i + (1));
i = G__27051;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18116__auto__ = ret;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__18104__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18104__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18104__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__19156__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19156__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27054){
var map__27055 = p__27054;
var map__27055__$1 = ((cljs.core.seq_QMARK_.call(null,map__27055))?cljs.core.apply.call(null,cljs.core.hash_map,map__27055):map__27055);
var opts = map__27055__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27052){
var G__27053 = cljs.core.first.call(null,seq27052);
var seq27052__$1 = cljs.core.next.call(null,seq27052);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27053,seq27052__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__27057 = arguments.length;
switch (G__27057) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21646__auto___27106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21646__auto___27106){
return (function (){
var f__21647__auto__ = (function (){var switch__21584__auto__ = ((function (c__21646__auto___27106){
return (function (state_27081){
var state_val_27082 = (state_27081[(1)]);
if((state_val_27082 === (7))){
var inst_27077 = (state_27081[(2)]);
var state_27081__$1 = state_27081;
var statearr_27083_27107 = state_27081__$1;
(statearr_27083_27107[(2)] = inst_27077);

(statearr_27083_27107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27082 === (1))){
var state_27081__$1 = state_27081;
var statearr_27084_27108 = state_27081__$1;
(statearr_27084_27108[(2)] = null);

(statearr_27084_27108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27082 === (4))){
var inst_27060 = (state_27081[(7)]);
var inst_27060__$1 = (state_27081[(2)]);
var inst_27061 = (inst_27060__$1 == null);
var state_27081__$1 = (function (){var statearr_27085 = state_27081;
(statearr_27085[(7)] = inst_27060__$1);

return statearr_27085;
})();
if(cljs.core.truth_(inst_27061)){
var statearr_27086_27109 = state_27081__$1;
(statearr_27086_27109[(1)] = (5));

} else {
var statearr_27087_27110 = state_27081__$1;
(statearr_27087_27110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27082 === (13))){
var state_27081__$1 = state_27081;
var statearr_27088_27111 = state_27081__$1;
(statearr_27088_27111[(2)] = null);

(statearr_27088_27111[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27082 === (6))){
var inst_27060 = (state_27081[(7)]);
var state_27081__$1 = state_27081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27081__$1,(11),to,inst_27060);
} else {
if((state_val_27082 === (3))){
var inst_27079 = (state_27081[(2)]);
var state_27081__$1 = state_27081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27081__$1,inst_27079);
} else {
if((state_val_27082 === (12))){
var state_27081__$1 = state_27081;
var statearr_27089_27112 = state_27081__$1;
(statearr_27089_27112[(2)] = null);

(statearr_27089_27112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27082 === (2))){
var state_27081__$1 = state_27081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27081__$1,(4),from);
} else {
if((state_val_27082 === (11))){
var inst_27070 = (state_27081[(2)]);
var state_27081__$1 = state_27081;
if(cljs.core.truth_(inst_27070)){
var statearr_27090_27113 = state_27081__$1;
(statearr_27090_27113[(1)] = (12));

} else {
var statearr_27091_27114 = state_27081__$1;
(statearr_27091_27114[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27082 === (9))){
var state_27081__$1 = state_27081;
var statearr_27092_27115 = state_27081__$1;
(statearr_27092_27115[(2)] = null);

(statearr_27092_27115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27082 === (5))){
var state_27081__$1 = state_27081;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27093_27116 = state_27081__$1;
(statearr_27093_27116[(1)] = (8));

} else {
var statearr_27094_27117 = state_27081__$1;
(statearr_27094_27117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27082 === (14))){
var inst_27075 = (state_27081[(2)]);
var state_27081__$1 = state_27081;
var statearr_27095_27118 = state_27081__$1;
(statearr_27095_27118[(2)] = inst_27075);

(statearr_27095_27118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27082 === (10))){
var inst_27067 = (state_27081[(2)]);
var state_27081__$1 = state_27081;
var statearr_27096_27119 = state_27081__$1;
(statearr_27096_27119[(2)] = inst_27067);

(statearr_27096_27119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27082 === (8))){
var inst_27064 = cljs.core.async.close_BANG_.call(null,to);
var state_27081__$1 = state_27081;
var statearr_27097_27120 = state_27081__$1;
(statearr_27097_27120[(2)] = inst_27064);

(statearr_27097_27120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21646__auto___27106))
;
return ((function (switch__21584__auto__,c__21646__auto___27106){
return (function() {
var cljs$core$async$state_machine__21585__auto__ = null;
var cljs$core$async$state_machine__21585__auto____0 = (function (){
var statearr_27101 = [null,null,null,null,null,null,null,null];
(statearr_27101[(0)] = cljs$core$async$state_machine__21585__auto__);

(statearr_27101[(1)] = (1));

return statearr_27101;
});
var cljs$core$async$state_machine__21585__auto____1 = (function (state_27081){
while(true){
var ret_value__21586__auto__ = (function (){try{while(true){
var result__21587__auto__ = switch__21584__auto__.call(null,state_27081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21587__auto__;
}
break;
}
}catch (e27102){if((e27102 instanceof Object)){
var ex__21588__auto__ = e27102;
var statearr_27103_27121 = state_27081;
(statearr_27103_27121[(5)] = ex__21588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27122 = state_27081;
state_27081 = G__27122;
continue;
} else {
return ret_value__21586__auto__;
}
break;
}
});
cljs$core$async$state_machine__21585__auto__ = function(state_27081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21585__auto____1.call(this,state_27081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21585__auto____0;
cljs$core$async$state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21585__auto____1;
return cljs$core$async$state_machine__21585__auto__;
})()
;})(switch__21584__auto__,c__21646__auto___27106))
})();
var state__21648__auto__ = (function (){var statearr_27104 = f__21647__auto__.call(null);
(statearr_27104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21646__auto___27106);

return statearr_27104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21648__auto__);
});})(c__21646__auto___27106))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27306){
var vec__27307 = p__27306;
var v = cljs.core.nth.call(null,vec__27307,(0),null);
var p = cljs.core.nth.call(null,vec__27307,(1),null);
var job = vec__27307;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21646__auto___27489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21646__auto___27489,res,vec__27307,v,p,job,jobs,results){
return (function (){
var f__21647__auto__ = (function (){var switch__21584__auto__ = ((function (c__21646__auto___27489,res,vec__27307,v,p,job,jobs,results){
return (function (state_27312){
var state_val_27313 = (state_27312[(1)]);
if((state_val_27313 === (2))){
var inst_27309 = (state_27312[(2)]);
var inst_27310 = cljs.core.async.close_BANG_.call(null,res);
var state_27312__$1 = (function (){var statearr_27314 = state_27312;
(statearr_27314[(7)] = inst_27309);

return statearr_27314;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27312__$1,inst_27310);
} else {
if((state_val_27313 === (1))){
var state_27312__$1 = state_27312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27312__$1,(2),res,v);
} else {
return null;
}
}
});})(c__21646__auto___27489,res,vec__27307,v,p,job,jobs,results))
;
return ((function (switch__21584__auto__,c__21646__auto___27489,res,vec__27307,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21585__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21585__auto____0 = (function (){
var statearr_27318 = [null,null,null,null,null,null,null,null];
(statearr_27318[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21585__auto__);

(statearr_27318[(1)] = (1));

return statearr_27318;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21585__auto____1 = (function (state_27312){
while(true){
var ret_value__21586__auto__ = (function (){try{while(true){
var result__21587__auto__ = switch__21584__auto__.call(null,state_27312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21587__auto__;
}
break;
}
}catch (e27319){if((e27319 instanceof Object)){
var ex__21588__auto__ = e27319;
var statearr_27320_27490 = state_27312;
(statearr_27320_27490[(5)] = ex__21588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27491 = state_27312;
state_27312 = G__27491;
continue;
} else {
return ret_value__21586__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21585__auto__ = function(state_27312){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21585__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21585__auto____1.call(this,state_27312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21585__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21585__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21585__auto__;
})()
;})(switch__21584__auto__,c__21646__auto___27489,res,vec__27307,v,p,job,jobs,results))
})();
var state__21648__auto__ = (function (){var statearr_27321 = f__21647__auto__.call(null);
(statearr_27321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21646__auto___27489);

return statearr_27321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21648__auto__);
});})(c__21646__auto___27489,res,vec__27307,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27322){
var vec__27323 = p__27322;
var v = cljs.core.nth.call(null,vec__27323,(0),null);
var p = cljs.core.nth.call(null,vec__27323,(1),null);
var job = vec__27323;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19001__auto___27492 = n;
var __27493 = (0);
while(true){
if((__27493 < n__19001__auto___27492)){
var G__27324_27494 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27324_27494) {
case "async":
var c__21646__auto___27496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27493,c__21646__auto___27496,G__27324_27494,n__19001__auto___27492,jobs,results,process,async){
return (function (){
var f__21647__auto__ = (function (){var switch__21584__auto__ = ((function (__27493,c__21646__auto___27496,G__27324_27494,n__19001__auto___27492,jobs,results,process,async){
return (function (state_27337){
var state_val_27338 = (state_27337[(1)]);
if((state_val_27338 === (7))){
var inst_27333 = (state_27337[(2)]);
var state_27337__$1 = state_27337;
var statearr_27339_27497 = state_27337__$1;
(statearr_27339_27497[(2)] = inst_27333);

(statearr_27339_27497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27338 === (6))){
var state_27337__$1 = state_27337;
var statearr_27340_27498 = state_27337__$1;
(statearr_27340_27498[(2)] = null);

(statearr_27340_27498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27338 === (5))){
var state_27337__$1 = state_27337;
var statearr_27341_27499 = state_27337__$1;
(statearr_27341_27499[(2)] = null);

(statearr_27341_27499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27338 === (4))){
var inst_27327 = (state_27337[(2)]);
var inst_27328 = async.call(null,inst_27327);
var state_27337__$1 = state_27337;
if(cljs.core.truth_(inst_27328)){
var statearr_27342_27500 = state_27337__$1;
(statearr_27342_27500[(1)] = (5));

} else {
var statearr_27343_27501 = state_27337__$1;
(statearr_27343_27501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27338 === (3))){
var inst_27335 = (state_27337[(2)]);
var state_27337__$1 = state_27337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27337__$1,inst_27335);
} else {
if((state_val_27338 === (2))){
var state_27337__$1 = state_27337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27337__$1,(4),jobs);
} else {
if((state_val_27338 === (1))){
var state_27337__$1 = state_27337;
var statearr_27344_27502 = state_27337__$1;
(statearr_27344_27502[(2)] = null);

(statearr_27344_27502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27493,c__21646__auto___27496,G__27324_27494,n__19001__auto___27492,jobs,results,process,async))
;
return ((function (__27493,switch__21584__auto__,c__21646__auto___27496,G__27324_27494,n__19001__auto___27492,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21585__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21585__auto____0 = (function (){
var statearr_27348 = [null,null,null,null,null,null,null];
(statearr_27348[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21585__auto__);

(statearr_27348[(1)] = (1));

return statearr_27348;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21585__auto____1 = (function (state_27337){
while(true){
var ret_value__21586__auto__ = (function (){try{while(true){
var result__21587__auto__ = switch__21584__auto__.call(null,state_27337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21587__auto__;
}
break;
}
}catch (e27349){if((e27349 instanceof Object)){
var ex__21588__auto__ = e27349;
var statearr_27350_27503 = state_27337;
(statearr_27350_27503[(5)] = ex__21588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27504 = state_27337;
state_27337 = G__27504;
continue;
} else {
return ret_value__21586__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21585__auto__ = function(state_27337){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21585__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21585__auto____1.call(this,state_27337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21585__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21585__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21585__auto__;
})()
;})(__27493,switch__21584__auto__,c__21646__auto___27496,G__27324_27494,n__19001__auto___27492,jobs,results,process,async))
})();
var state__21648__auto__ = (function (){var statearr_27351 = f__21647__auto__.call(null);
(statearr_27351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21646__auto___27496);

return statearr_27351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21648__auto__);
});})(__27493,c__21646__auto___27496,G__27324_27494,n__19001__auto___27492,jobs,results,process,async))
);


break;
case "compute":
var c__21646__auto___27505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27493,c__21646__auto___27505,G__27324_27494,n__19001__auto___27492,jobs,results,process,async){
return (function (){
var f__21647__auto__ = (function (){var switch__21584__auto__ = ((function (__27493,c__21646__auto___27505,G__27324_27494,n__19001__auto___27492,jobs,results,process,async){
return (function (state_27364){
var state_val_27365 = (state_27364[(1)]);
if((state_val_27365 === (7))){
var inst_27360 = (state_27364[(2)]);
var state_27364__$1 = state_27364;
var statearr_27366_27506 = state_27364__$1;
(statearr_27366_27506[(2)] = inst_27360);

(statearr_27366_27506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (6))){
var state_27364__$1 = state_27364;
var statearr_27367_27507 = state_27364__$1;
(statearr_27367_27507[(2)] = null);

(statearr_27367_27507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (5))){
var state_27364__$1 = state_27364;
var statearr_27368_27508 = state_27364__$1;
(statearr_27368_27508[(2)] = null);

(statearr_27368_27508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (4))){
var inst_27354 = (state_27364[(2)]);
var inst_27355 = process.call(null,inst_27354);
var state_27364__$1 = state_27364;
if(cljs.core.truth_(inst_27355)){
var statearr_27369_27509 = state_27364__$1;
(statearr_27369_27509[(1)] = (5));

} else {
var statearr_27370_27510 = state_27364__$1;
(statearr_27370_27510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (3))){
var inst_27362 = (state_27364[(2)]);
var state_27364__$1 = state_27364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27364__$1,inst_27362);
} else {
if((state_val_27365 === (2))){
var state_27364__$1 = state_27364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27364__$1,(4),jobs);
} else {
if((state_val_27365 === (1))){
var state_27364__$1 = state_27364;
var statearr_27371_27511 = state_27364__$1;
(statearr_27371_27511[(2)] = null);

(statearr_27371_27511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27493,c__21646__auto___27505,G__27324_27494,n__19001__auto___27492,jobs,results,process,async))
;
return ((function (__27493,switch__21584__auto__,c__21646__auto___27505,G__27324_27494,n__19001__auto___27492,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21585__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21585__auto____0 = (function (){
var statearr_27375 = [null,null,null,null,null,null,null];
(statearr_27375[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21585__auto__);

(statearr_27375[(1)] = (1));

return statearr_27375;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21585__auto____1 = (function (state_27364){
while(true){
var ret_value__21586__auto__ = (function (){try{while(true){
var result__21587__auto__ = switch__21584__auto__.call(null,state_27364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21587__auto__;
}
break;
}
}catch (e27376){if((e27376 instanceof Object)){
var ex__21588__auto__ = e27376;
var statearr_27377_27512 = state_27364;
(statearr_27377_27512[(5)] = ex__21588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27513 = state_27364;
state_27364 = G__27513;
continue;
} else {
return ret_value__21586__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21585__auto__ = function(state_27364){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21585__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21585__auto____1.call(this,state_27364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21585__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21585__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21585__auto__;
})()
;})(__27493,switch__21584__auto__,c__21646__auto___27505,G__27324_27494,n__19001__auto___27492,jobs,results,process,async))
})();
var state__21648__auto__ = (function (){var statearr_27378 = f__21647__auto__.call(null);
(statearr_27378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21646__auto___27505);

return statearr_27378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21648__auto__);
});})(__27493,c__21646__auto___27505,G__27324_27494,n__19001__auto___27492,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27514 = (__27493 + (1));
__27493 = G__27514;
continue;
} else {
}
break;
}

var c__21646__auto___27515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21646__auto___27515,jobs,results,process,async){
return (function (){
var f__21647__auto__ = (function (){var switch__21584__auto__ = ((function (c__21646__auto___27515,jobs,results,process,async){
return (function (state_27400){
var state_val_27401 = (state_27400[(1)]);
if((state_val_27401 === (9))){
var inst_27393 = (state_27400[(2)]);
var state_27400__$1 = (function (){var statearr_27402 = state_27400;
(statearr_27402[(7)] = inst_27393);

return statearr_27402;
})();
var statearr_27403_27516 = state_27400__$1;
(statearr_27403_27516[(2)] = null);

(statearr_27403_27516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (8))){
var inst_27386 = (state_27400[(8)]);
var inst_27391 = (state_27400[(2)]);
var state_27400__$1 = (function (){var statearr_27404 = state_27400;
(statearr_27404[(9)] = inst_27391);

return statearr_27404;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27400__$1,(9),results,inst_27386);
} else {
if((state_val_27401 === (7))){
var inst_27396 = (state_27400[(2)]);
var state_27400__$1 = state_27400;
var statearr_27405_27517 = state_27400__$1;
(statearr_27405_27517[(2)] = inst_27396);

(statearr_27405_27517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (6))){
var inst_27381 = (state_27400[(10)]);
var inst_27386 = (state_27400[(8)]);
var inst_27386__$1 = cljs.core.async.chan.call(null,(1));
var inst_27387 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27388 = [inst_27381,inst_27386__$1];
var inst_27389 = (new cljs.core.PersistentVector(null,2,(5),inst_27387,inst_27388,null));
var state_27400__$1 = (function (){var statearr_27406 = state_27400;
(statearr_27406[(8)] = inst_27386__$1);

return statearr_27406;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27400__$1,(8),jobs,inst_27389);
} else {
if((state_val_27401 === (5))){
var inst_27384 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27400__$1 = state_27400;
var statearr_27407_27518 = state_27400__$1;
(statearr_27407_27518[(2)] = inst_27384);

(statearr_27407_27518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (4))){
var inst_27381 = (state_27400[(10)]);
var inst_27381__$1 = (state_27400[(2)]);
var inst_27382 = (inst_27381__$1 == null);
var state_27400__$1 = (function (){var statearr_27408 = state_27400;
(statearr_27408[(10)] = inst_27381__$1);

return statearr_27408;
})();
if(cljs.core.truth_(inst_27382)){
var statearr_27409_27519 = state_27400__$1;
(statearr_27409_27519[(1)] = (5));

} else {
var statearr_27410_27520 = state_27400__$1;
(statearr_27410_27520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (3))){
var inst_27398 = (state_27400[(2)]);
var state_27400__$1 = state_27400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27400__$1,inst_27398);
} else {
if((state_val_27401 === (2))){
var state_27400__$1 = state_27400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27400__$1,(4),from);
} else {
if((state_val_27401 === (1))){
var state_27400__$1 = state_27400;
var statearr_27411_27521 = state_27400__$1;
(statearr_27411_27521[(2)] = null);

(statearr_27411_27521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__21646__auto___27515,jobs,results,process,async))
;
return ((function (switch__21584__auto__,c__21646__auto___27515,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21585__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21585__auto____0 = (function (){
var statearr_27415 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27415[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21585__auto__);

(statearr_27415[(1)] = (1));

return statearr_27415;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21585__auto____1 = (function (state_27400){
while(true){
var ret_value__21586__auto__ = (function (){try{while(true){
var result__21587__auto__ = switch__21584__auto__.call(null,state_27400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21587__auto__;
}
break;
}
}catch (e27416){if((e27416 instanceof Object)){
var ex__21588__auto__ = e27416;
var statearr_27417_27522 = state_27400;
(statearr_27417_27522[(5)] = ex__21588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27523 = state_27400;
state_27400 = G__27523;
continue;
} else {
return ret_value__21586__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21585__auto__ = function(state_27400){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21585__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21585__auto____1.call(this,state_27400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21585__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21585__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21585__auto__;
})()
;})(switch__21584__auto__,c__21646__auto___27515,jobs,results,process,async))
})();
var state__21648__auto__ = (function (){var statearr_27418 = f__21647__auto__.call(null);
(statearr_27418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21646__auto___27515);

return statearr_27418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21648__auto__);
});})(c__21646__auto___27515,jobs,results,process,async))
);


var c__21646__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21646__auto__,jobs,results,process,async){
return (function (){
var f__21647__auto__ = (function (){var switch__21584__auto__ = ((function (c__21646__auto__,jobs,results,process,async){
return (function (state_27456){
var state_val_27457 = (state_27456[(1)]);
if((state_val_27457 === (7))){
var inst_27452 = (state_27456[(2)]);
var state_27456__$1 = state_27456;
var statearr_27458_27524 = state_27456__$1;
(statearr_27458_27524[(2)] = inst_27452);

(statearr_27458_27524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (20))){
var state_27456__$1 = state_27456;
var statearr_27459_27525 = state_27456__$1;
(statearr_27459_27525[(2)] = null);

(statearr_27459_27525[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (1))){
var state_27456__$1 = state_27456;
var statearr_27460_27526 = state_27456__$1;
(statearr_27460_27526[(2)] = null);

(statearr_27460_27526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (4))){
var inst_27421 = (state_27456[(7)]);
var inst_27421__$1 = (state_27456[(2)]);
var inst_27422 = (inst_27421__$1 == null);
var state_27456__$1 = (function (){var statearr_27461 = state_27456;
(statearr_27461[(7)] = inst_27421__$1);

return statearr_27461;
})();
if(cljs.core.truth_(inst_27422)){
var statearr_27462_27527 = state_27456__$1;
(statearr_27462_27527[(1)] = (5));

} else {
var statearr_27463_27528 = state_27456__$1;
(statearr_27463_27528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (15))){
var inst_27434 = (state_27456[(8)]);
var state_27456__$1 = state_27456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27456__$1,(18),to,inst_27434);
} else {
if((state_val_27457 === (21))){
var inst_27447 = (state_27456[(2)]);
var state_27456__$1 = state_27456;
var statearr_27464_27529 = state_27456__$1;
(statearr_27464_27529[(2)] = inst_27447);

(statearr_27464_27529[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (13))){
var inst_27449 = (state_27456[(2)]);
var state_27456__$1 = (function (){var statearr_27465 = state_27456;
(statearr_27465[(9)] = inst_27449);

return statearr_27465;
})();
var statearr_27466_27530 = state_27456__$1;
(statearr_27466_27530[(2)] = null);

(statearr_27466_27530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (6))){
var inst_27421 = (state_27456[(7)]);
var state_27456__$1 = state_27456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27456__$1,(11),inst_27421);
} else {
if((state_val_27457 === (17))){
var inst_27442 = (state_27456[(2)]);
var state_27456__$1 = state_27456;
if(cljs.core.truth_(inst_27442)){
var statearr_27467_27531 = state_27456__$1;
(statearr_27467_27531[(1)] = (19));

} else {
var statearr_27468_27532 = state_27456__$1;
(statearr_27468_27532[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (3))){
var inst_27454 = (state_27456[(2)]);
var state_27456__$1 = state_27456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27456__$1,inst_27454);
} else {
if((state_val_27457 === (12))){
var inst_27431 = (state_27456[(10)]);
var state_27456__$1 = state_27456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27456__$1,(14),inst_27431);
} else {
if((state_val_27457 === (2))){
var state_27456__$1 = state_27456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27456__$1,(4),results);
} else {
if((state_val_27457 === (19))){
var state_27456__$1 = state_27456;
var statearr_27469_27533 = state_27456__$1;
(statearr_27469_27533[(2)] = null);

(statearr_27469_27533[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (11))){
var inst_27431 = (state_27456[(2)]);
var state_27456__$1 = (function (){var statearr_27470 = state_27456;
(statearr_27470[(10)] = inst_27431);

return statearr_27470;
})();
var statearr_27471_27534 = state_27456__$1;
(statearr_27471_27534[(2)] = null);

(statearr_27471_27534[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (9))){
var state_27456__$1 = state_27456;
var statearr_27472_27535 = state_27456__$1;
(statearr_27472_27535[(2)] = null);

(statearr_27472_27535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (5))){
var state_27456__$1 = state_27456;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27473_27536 = state_27456__$1;
(statearr_27473_27536[(1)] = (8));

} else {
var statearr_27474_27537 = state_27456__$1;
(statearr_27474_27537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (14))){
var inst_27436 = (state_27456[(11)]);
var inst_27434 = (state_27456[(8)]);
var inst_27434__$1 = (state_27456[(2)]);
var inst_27435 = (inst_27434__$1 == null);
var inst_27436__$1 = cljs.core.not.call(null,inst_27435);
var state_27456__$1 = (function (){var statearr_27475 = state_27456;
(statearr_27475[(11)] = inst_27436__$1);

(statearr_27475[(8)] = inst_27434__$1);

return statearr_27475;
})();
if(inst_27436__$1){
var statearr_27476_27538 = state_27456__$1;
(statearr_27476_27538[(1)] = (15));

} else {
var statearr_27477_27539 = state_27456__$1;
(statearr_27477_27539[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (16))){
var inst_27436 = (state_27456[(11)]);
var state_27456__$1 = state_27456;
var statearr_27478_27540 = state_27456__$1;
(statearr_27478_27540[(2)] = inst_27436);

(statearr_27478_27540[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (10))){
var inst_27428 = (state_27456[(2)]);
var state_27456__$1 = state_27456;
var statearr_27479_27541 = state_27456__$1;
(statearr_27479_27541[(2)] = inst_27428);

(statearr_27479_27541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (18))){
var inst_27439 = (state_27456[(2)]);
var state_27456__$1 = state_27456;
var statearr_27480_27542 = state_27456__$1;
(statearr_27480_27542[(2)] = inst_27439);

(statearr_27480_27542[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (8))){
var inst_27425 = cljs.core.async.close_BANG_.call(null,to);
var state_27456__$1 = state_27456;
var statearr_27481_27543 = state_27456__$1;
(statearr_27481_27543[(2)] = inst_27425);

(statearr_27481_27543[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21646__auto__,jobs,results,process,async))
;
return ((function (switch__21584__auto__,c__21646__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21585__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21585__auto____0 = (function (){
var statearr_27485 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27485[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21585__auto__);

(statearr_27485[(1)] = (1));

return statearr_27485;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21585__auto____1 = (function (state_27456){
while(true){
var ret_value__21586__auto__ = (function (){try{while(true){
var result__21587__auto__ = switch__21584__auto__.call(null,state_27456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21587__auto__;
}
break;
}
}catch (e27486){if((e27486 instanceof Object)){
var ex__21588__auto__ = e27486;
var statearr_27487_27544 = state_27456;
(statearr_27487_27544[(5)] = ex__21588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27545 = state_27456;
state_27456 = G__27545;
continue;
} else {
return ret_value__21586__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21585__auto__ = function(state_27456){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21585__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21585__auto____1.call(this,state_27456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21585__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21585__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21585__auto__;
})()
;})(switch__21584__auto__,c__21646__auto__,jobs,results,process,async))
})();
var state__21648__auto__ = (function (){var statearr_27488 = f__21647__auto__.call(null);
(statearr_27488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21646__auto__);

return statearr_27488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21648__auto__);
});})(c__21646__auto__,jobs,results,process,async))
);

return c__21646__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__27547 = arguments.length;
switch (G__27547) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__27550 = arguments.length;
switch (G__27550) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__27553 = arguments.length;
switch (G__27553) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21646__auto___27605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21646__auto___27605,tc,fc){
return (function (){
var f__21647__auto__ = (function (){var switch__21584__auto__ = ((function (c__21646__auto___27605,tc,fc){
return (function (state_27579){
var state_val_27580 = (state_27579[(1)]);
if((state_val_27580 === (7))){
var inst_27575 = (state_27579[(2)]);
var state_27579__$1 = state_27579;
var statearr_27581_27606 = state_27579__$1;
(statearr_27581_27606[(2)] = inst_27575);

(statearr_27581_27606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27580 === (1))){
var state_27579__$1 = state_27579;
var statearr_27582_27607 = state_27579__$1;
(statearr_27582_27607[(2)] = null);

(statearr_27582_27607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27580 === (4))){
var inst_27556 = (state_27579[(7)]);
var inst_27556__$1 = (state_27579[(2)]);
var inst_27557 = (inst_27556__$1 == null);
var state_27579__$1 = (function (){var statearr_27583 = state_27579;
(statearr_27583[(7)] = inst_27556__$1);

return statearr_27583;
})();
if(cljs.core.truth_(inst_27557)){
var statearr_27584_27608 = state_27579__$1;
(statearr_27584_27608[(1)] = (5));

} else {
var statearr_27585_27609 = state_27579__$1;
(statearr_27585_27609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27580 === (13))){
var state_27579__$1 = state_27579;
var statearr_27586_27610 = state_27579__$1;
(statearr_27586_27610[(2)] = null);

(statearr_27586_27610[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27580 === (6))){
var inst_27556 = (state_27579[(7)]);
var inst_27562 = p.call(null,inst_27556);
var state_27579__$1 = state_27579;
if(cljs.core.truth_(inst_27562)){
var statearr_27587_27611 = state_27579__$1;
(statearr_27587_27611[(1)] = (9));

} else {
var statearr_27588_27612 = state_27579__$1;
(statearr_27588_27612[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27580 === (3))){
var inst_27577 = (state_27579[(2)]);
var state_27579__$1 = state_27579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27579__$1,inst_27577);
} else {
if((state_val_27580 === (12))){
var state_27579__$1 = state_27579;
var statearr_27589_27613 = state_27579__$1;
(statearr_27589_27613[(2)] = null);

(statearr_27589_27613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27580 === (2))){
var state_27579__$1 = state_27579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27579__$1,(4),ch);
} else {
if((state_val_27580 === (11))){
var inst_27556 = (state_27579[(7)]);
var inst_27566 = (state_27579[(2)]);
var state_27579__$1 = state_27579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27579__$1,(8),inst_27566,inst_27556);
} else {
if((state_val_27580 === (9))){
var state_27579__$1 = state_27579;
var statearr_27590_27614 = state_27579__$1;
(statearr_27590_27614[(2)] = tc);

(statearr_27590_27614[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27580 === (5))){
var inst_27559 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27560 = cljs.core.async.close_BANG_.call(null,fc);
var state_27579__$1 = (function (){var statearr_27591 = state_27579;
(statearr_27591[(8)] = inst_27559);

return statearr_27591;
})();
var statearr_27592_27615 = state_27579__$1;
(statearr_27592_27615[(2)] = inst_27560);

(statearr_27592_27615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27580 === (14))){
var inst_27573 = (state_27579[(2)]);
var state_27579__$1 = state_27579;
var statearr_27593_27616 = state_27579__$1;
(statearr_27593_27616[(2)] = inst_27573);

(statearr_27593_27616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27580 === (10))){
var state_27579__$1 = state_27579;
var statearr_27594_27617 = state_27579__$1;
(statearr_27594_27617[(2)] = fc);

(statearr_27594_27617[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27580 === (8))){
var inst_27568 = (state_27579[(2)]);
var state_27579__$1 = state_27579;
if(cljs.core.truth_(inst_27568)){
var statearr_27595_27618 = state_27579__$1;
(statearr_27595_27618[(1)] = (12));

} else {
var statearr_27596_27619 = state_27579__$1;
(statearr_27596_27619[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21646__auto___27605,tc,fc))
;
return ((function (switch__21584__auto__,c__21646__auto___27605,tc,fc){
return (function() {
var cljs$core$async$state_machine__21585__auto__ = null;
var cljs$core$async$state_machine__21585__auto____0 = (function (){
var statearr_27600 = [null,null,null,null,null,null,null,null,null];
(statearr_27600[(0)] = cljs$core$async$state_machine__21585__auto__);

(statearr_27600[(1)] = (1));

return statearr_27600;
});
var cljs$core$async$state_machine__21585__auto____1 = (function (state_27579){
while(true){
var ret_value__21586__auto__ = (function (){try{while(true){
var result__21587__auto__ = switch__21584__auto__.call(null,state_27579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21587__auto__;
}
break;
}
}catch (e27601){if((e27601 instanceof Object)){
var ex__21588__auto__ = e27601;
var statearr_27602_27620 = state_27579;
(statearr_27602_27620[(5)] = ex__21588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27621 = state_27579;
state_27579 = G__27621;
continue;
} else {
return ret_value__21586__auto__;
}
break;
}
});
cljs$core$async$state_machine__21585__auto__ = function(state_27579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21585__auto____1.call(this,state_27579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21585__auto____0;
cljs$core$async$state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21585__auto____1;
return cljs$core$async$state_machine__21585__auto__;
})()
;})(switch__21584__auto__,c__21646__auto___27605,tc,fc))
})();
var state__21648__auto__ = (function (){var statearr_27603 = f__21647__auto__.call(null);
(statearr_27603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21646__auto___27605);

return statearr_27603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21648__auto__);
});})(c__21646__auto___27605,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21646__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21646__auto__){
return (function (){
var f__21647__auto__ = (function (){var switch__21584__auto__ = ((function (c__21646__auto__){
return (function (state_27668){
var state_val_27669 = (state_27668[(1)]);
if((state_val_27669 === (7))){
var inst_27664 = (state_27668[(2)]);
var state_27668__$1 = state_27668;
var statearr_27670_27686 = state_27668__$1;
(statearr_27670_27686[(2)] = inst_27664);

(statearr_27670_27686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (6))){
var inst_27657 = (state_27668[(7)]);
var inst_27654 = (state_27668[(8)]);
var inst_27661 = f.call(null,inst_27654,inst_27657);
var inst_27654__$1 = inst_27661;
var state_27668__$1 = (function (){var statearr_27671 = state_27668;
(statearr_27671[(8)] = inst_27654__$1);

return statearr_27671;
})();
var statearr_27672_27687 = state_27668__$1;
(statearr_27672_27687[(2)] = null);

(statearr_27672_27687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (5))){
var inst_27654 = (state_27668[(8)]);
var state_27668__$1 = state_27668;
var statearr_27673_27688 = state_27668__$1;
(statearr_27673_27688[(2)] = inst_27654);

(statearr_27673_27688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (4))){
var inst_27657 = (state_27668[(7)]);
var inst_27657__$1 = (state_27668[(2)]);
var inst_27658 = (inst_27657__$1 == null);
var state_27668__$1 = (function (){var statearr_27674 = state_27668;
(statearr_27674[(7)] = inst_27657__$1);

return statearr_27674;
})();
if(cljs.core.truth_(inst_27658)){
var statearr_27675_27689 = state_27668__$1;
(statearr_27675_27689[(1)] = (5));

} else {
var statearr_27676_27690 = state_27668__$1;
(statearr_27676_27690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (3))){
var inst_27666 = (state_27668[(2)]);
var state_27668__$1 = state_27668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27668__$1,inst_27666);
} else {
if((state_val_27669 === (2))){
var state_27668__$1 = state_27668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27668__$1,(4),ch);
} else {
if((state_val_27669 === (1))){
var inst_27654 = init;
var state_27668__$1 = (function (){var statearr_27677 = state_27668;
(statearr_27677[(8)] = inst_27654);

return statearr_27677;
})();
var statearr_27678_27691 = state_27668__$1;
(statearr_27678_27691[(2)] = null);

(statearr_27678_27691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__21646__auto__))
;
return ((function (switch__21584__auto__,c__21646__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21585__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21585__auto____0 = (function (){
var statearr_27682 = [null,null,null,null,null,null,null,null,null];
(statearr_27682[(0)] = cljs$core$async$reduce_$_state_machine__21585__auto__);

(statearr_27682[(1)] = (1));

return statearr_27682;
});
var cljs$core$async$reduce_$_state_machine__21585__auto____1 = (function (state_27668){
while(true){
var ret_value__21586__auto__ = (function (){try{while(true){
var result__21587__auto__ = switch__21584__auto__.call(null,state_27668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21587__auto__;
}
break;
}
}catch (e27683){if((e27683 instanceof Object)){
var ex__21588__auto__ = e27683;
var statearr_27684_27692 = state_27668;
(statearr_27684_27692[(5)] = ex__21588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27693 = state_27668;
state_27668 = G__27693;
continue;
} else {
return ret_value__21586__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21585__auto__ = function(state_27668){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21585__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21585__auto____1.call(this,state_27668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21585__auto____0;
cljs$core$async$reduce_$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21585__auto____1;
return cljs$core$async$reduce_$_state_machine__21585__auto__;
})()
;})(switch__21584__auto__,c__21646__auto__))
})();
var state__21648__auto__ = (function (){var statearr_27685 = f__21647__auto__.call(null);
(statearr_27685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21646__auto__);

return statearr_27685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21648__auto__);
});})(c__21646__auto__))
);

return c__21646__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__27695 = arguments.length;
switch (G__27695) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21646__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21646__auto__){
return (function (){
var f__21647__auto__ = (function (){var switch__21584__auto__ = ((function (c__21646__auto__){
return (function (state_27720){
var state_val_27721 = (state_27720[(1)]);
if((state_val_27721 === (7))){
var inst_27702 = (state_27720[(2)]);
var state_27720__$1 = state_27720;
var statearr_27722_27746 = state_27720__$1;
(statearr_27722_27746[(2)] = inst_27702);

(statearr_27722_27746[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27721 === (1))){
var inst_27696 = cljs.core.seq.call(null,coll);
var inst_27697 = inst_27696;
var state_27720__$1 = (function (){var statearr_27723 = state_27720;
(statearr_27723[(7)] = inst_27697);

return statearr_27723;
})();
var statearr_27724_27747 = state_27720__$1;
(statearr_27724_27747[(2)] = null);

(statearr_27724_27747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27721 === (4))){
var inst_27697 = (state_27720[(7)]);
var inst_27700 = cljs.core.first.call(null,inst_27697);
var state_27720__$1 = state_27720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27720__$1,(7),ch,inst_27700);
} else {
if((state_val_27721 === (13))){
var inst_27714 = (state_27720[(2)]);
var state_27720__$1 = state_27720;
var statearr_27725_27748 = state_27720__$1;
(statearr_27725_27748[(2)] = inst_27714);

(statearr_27725_27748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27721 === (6))){
var inst_27705 = (state_27720[(2)]);
var state_27720__$1 = state_27720;
if(cljs.core.truth_(inst_27705)){
var statearr_27726_27749 = state_27720__$1;
(statearr_27726_27749[(1)] = (8));

} else {
var statearr_27727_27750 = state_27720__$1;
(statearr_27727_27750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27721 === (3))){
var inst_27718 = (state_27720[(2)]);
var state_27720__$1 = state_27720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27720__$1,inst_27718);
} else {
if((state_val_27721 === (12))){
var state_27720__$1 = state_27720;
var statearr_27728_27751 = state_27720__$1;
(statearr_27728_27751[(2)] = null);

(statearr_27728_27751[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27721 === (2))){
var inst_27697 = (state_27720[(7)]);
var state_27720__$1 = state_27720;
if(cljs.core.truth_(inst_27697)){
var statearr_27729_27752 = state_27720__$1;
(statearr_27729_27752[(1)] = (4));

} else {
var statearr_27730_27753 = state_27720__$1;
(statearr_27730_27753[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27721 === (11))){
var inst_27711 = cljs.core.async.close_BANG_.call(null,ch);
var state_27720__$1 = state_27720;
var statearr_27731_27754 = state_27720__$1;
(statearr_27731_27754[(2)] = inst_27711);

(statearr_27731_27754[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27721 === (9))){
var state_27720__$1 = state_27720;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27732_27755 = state_27720__$1;
(statearr_27732_27755[(1)] = (11));

} else {
var statearr_27733_27756 = state_27720__$1;
(statearr_27733_27756[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27721 === (5))){
var inst_27697 = (state_27720[(7)]);
var state_27720__$1 = state_27720;
var statearr_27734_27757 = state_27720__$1;
(statearr_27734_27757[(2)] = inst_27697);

(statearr_27734_27757[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27721 === (10))){
var inst_27716 = (state_27720[(2)]);
var state_27720__$1 = state_27720;
var statearr_27735_27758 = state_27720__$1;
(statearr_27735_27758[(2)] = inst_27716);

(statearr_27735_27758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27721 === (8))){
var inst_27697 = (state_27720[(7)]);
var inst_27707 = cljs.core.next.call(null,inst_27697);
var inst_27697__$1 = inst_27707;
var state_27720__$1 = (function (){var statearr_27736 = state_27720;
(statearr_27736[(7)] = inst_27697__$1);

return statearr_27736;
})();
var statearr_27737_27759 = state_27720__$1;
(statearr_27737_27759[(2)] = null);

(statearr_27737_27759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21646__auto__))
;
return ((function (switch__21584__auto__,c__21646__auto__){
return (function() {
var cljs$core$async$state_machine__21585__auto__ = null;
var cljs$core$async$state_machine__21585__auto____0 = (function (){
var statearr_27741 = [null,null,null,null,null,null,null,null];
(statearr_27741[(0)] = cljs$core$async$state_machine__21585__auto__);

(statearr_27741[(1)] = (1));

return statearr_27741;
});
var cljs$core$async$state_machine__21585__auto____1 = (function (state_27720){
while(true){
var ret_value__21586__auto__ = (function (){try{while(true){
var result__21587__auto__ = switch__21584__auto__.call(null,state_27720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21587__auto__;
}
break;
}
}catch (e27742){if((e27742 instanceof Object)){
var ex__21588__auto__ = e27742;
var statearr_27743_27760 = state_27720;
(statearr_27743_27760[(5)] = ex__21588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27761 = state_27720;
state_27720 = G__27761;
continue;
} else {
return ret_value__21586__auto__;
}
break;
}
});
cljs$core$async$state_machine__21585__auto__ = function(state_27720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21585__auto____1.call(this,state_27720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21585__auto____0;
cljs$core$async$state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21585__auto____1;
return cljs$core$async$state_machine__21585__auto__;
})()
;})(switch__21584__auto__,c__21646__auto__))
})();
var state__21648__auto__ = (function (){var statearr_27744 = f__21647__auto__.call(null);
(statearr_27744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21646__auto__);

return statearr_27744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21648__auto__);
});})(c__21646__auto__))
);

return c__21646__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj27763 = {};
return obj27763;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__18104__auto__ = _;
if(and__18104__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__18104__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18752__auto__ = (((_ == null))?null:_);
return (function (){var or__18116__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj27765 = {};
return obj27765;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__18104__auto__ = m;
if(and__18104__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__18104__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18752__auto__ = (((m == null))?null:m);
return (function (){var or__18116__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__18104__auto__ = m;
if(and__18104__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__18104__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18752__auto__ = (((m == null))?null:m);
return (function (){var or__18116__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__18104__auto__ = m;
if(and__18104__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__18104__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18752__auto__ = (((m == null))?null:m);
return (function (){var or__18116__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t27987 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27987 = (function (cs,ch,mult,meta27988){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta27988 = meta27988;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27987.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t27987.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t27987.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t27987.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t27987.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27987.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t27987.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27989){
var self__ = this;
var _27989__$1 = this;
return self__.meta27988;
});})(cs))
;

cljs.core.async.t27987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27989,meta27988__$1){
var self__ = this;
var _27989__$1 = this;
return (new cljs.core.async.t27987(self__.cs,self__.ch,self__.mult,meta27988__$1));
});})(cs))
;

cljs.core.async.t27987.cljs$lang$type = true;

cljs.core.async.t27987.cljs$lang$ctorStr = "cljs.core.async/t27987";

cljs.core.async.t27987.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t27987");
});})(cs))
;

cljs.core.async.__GT_t27987 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t27987(cs__$1,ch__$1,mult__$1,meta27988){
return (new cljs.core.async.t27987(cs__$1,ch__$1,mult__$1,meta27988));
});})(cs))
;

}

return (new cljs.core.async.t27987(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21646__auto___28208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21646__auto___28208,cs,m,dchan,dctr,done){
return (function (){
var f__21647__auto__ = (function (){var switch__21584__auto__ = ((function (c__21646__auto___28208,cs,m,dchan,dctr,done){
return (function (state_28120){
var state_val_28121 = (state_28120[(1)]);
if((state_val_28121 === (7))){
var inst_28116 = (state_28120[(2)]);
var state_28120__$1 = state_28120;
var statearr_28122_28209 = state_28120__$1;
(statearr_28122_28209[(2)] = inst_28116);

(statearr_28122_28209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (20))){
var inst_28021 = (state_28120[(7)]);
var inst_28031 = cljs.core.first.call(null,inst_28021);
var inst_28032 = cljs.core.nth.call(null,inst_28031,(0),null);
var inst_28033 = cljs.core.nth.call(null,inst_28031,(1),null);
var state_28120__$1 = (function (){var statearr_28123 = state_28120;
(statearr_28123[(8)] = inst_28032);

return statearr_28123;
})();
if(cljs.core.truth_(inst_28033)){
var statearr_28124_28210 = state_28120__$1;
(statearr_28124_28210[(1)] = (22));

} else {
var statearr_28125_28211 = state_28120__$1;
(statearr_28125_28211[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (27))){
var inst_28061 = (state_28120[(9)]);
var inst_27992 = (state_28120[(10)]);
var inst_28068 = (state_28120[(11)]);
var inst_28063 = (state_28120[(12)]);
var inst_28068__$1 = cljs.core._nth.call(null,inst_28061,inst_28063);
var inst_28069 = cljs.core.async.put_BANG_.call(null,inst_28068__$1,inst_27992,done);
var state_28120__$1 = (function (){var statearr_28126 = state_28120;
(statearr_28126[(11)] = inst_28068__$1);

return statearr_28126;
})();
if(cljs.core.truth_(inst_28069)){
var statearr_28127_28212 = state_28120__$1;
(statearr_28127_28212[(1)] = (30));

} else {
var statearr_28128_28213 = state_28120__$1;
(statearr_28128_28213[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (1))){
var state_28120__$1 = state_28120;
var statearr_28129_28214 = state_28120__$1;
(statearr_28129_28214[(2)] = null);

(statearr_28129_28214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (24))){
var inst_28021 = (state_28120[(7)]);
var inst_28038 = (state_28120[(2)]);
var inst_28039 = cljs.core.next.call(null,inst_28021);
var inst_28001 = inst_28039;
var inst_28002 = null;
var inst_28003 = (0);
var inst_28004 = (0);
var state_28120__$1 = (function (){var statearr_28130 = state_28120;
(statearr_28130[(13)] = inst_28002);

(statearr_28130[(14)] = inst_28003);

(statearr_28130[(15)] = inst_28038);

(statearr_28130[(16)] = inst_28004);

(statearr_28130[(17)] = inst_28001);

return statearr_28130;
})();
var statearr_28131_28215 = state_28120__$1;
(statearr_28131_28215[(2)] = null);

(statearr_28131_28215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (39))){
var state_28120__$1 = state_28120;
var statearr_28135_28216 = state_28120__$1;
(statearr_28135_28216[(2)] = null);

(statearr_28135_28216[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (4))){
var inst_27992 = (state_28120[(10)]);
var inst_27992__$1 = (state_28120[(2)]);
var inst_27993 = (inst_27992__$1 == null);
var state_28120__$1 = (function (){var statearr_28136 = state_28120;
(statearr_28136[(10)] = inst_27992__$1);

return statearr_28136;
})();
if(cljs.core.truth_(inst_27993)){
var statearr_28137_28217 = state_28120__$1;
(statearr_28137_28217[(1)] = (5));

} else {
var statearr_28138_28218 = state_28120__$1;
(statearr_28138_28218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (15))){
var inst_28002 = (state_28120[(13)]);
var inst_28003 = (state_28120[(14)]);
var inst_28004 = (state_28120[(16)]);
var inst_28001 = (state_28120[(17)]);
var inst_28017 = (state_28120[(2)]);
var inst_28018 = (inst_28004 + (1));
var tmp28132 = inst_28002;
var tmp28133 = inst_28003;
var tmp28134 = inst_28001;
var inst_28001__$1 = tmp28134;
var inst_28002__$1 = tmp28132;
var inst_28003__$1 = tmp28133;
var inst_28004__$1 = inst_28018;
var state_28120__$1 = (function (){var statearr_28139 = state_28120;
(statearr_28139[(13)] = inst_28002__$1);

(statearr_28139[(14)] = inst_28003__$1);

(statearr_28139[(18)] = inst_28017);

(statearr_28139[(16)] = inst_28004__$1);

(statearr_28139[(17)] = inst_28001__$1);

return statearr_28139;
})();
var statearr_28140_28219 = state_28120__$1;
(statearr_28140_28219[(2)] = null);

(statearr_28140_28219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (21))){
var inst_28042 = (state_28120[(2)]);
var state_28120__$1 = state_28120;
var statearr_28144_28220 = state_28120__$1;
(statearr_28144_28220[(2)] = inst_28042);

(statearr_28144_28220[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (31))){
var inst_28068 = (state_28120[(11)]);
var inst_28072 = done.call(null,null);
var inst_28073 = cljs.core.async.untap_STAR_.call(null,m,inst_28068);
var state_28120__$1 = (function (){var statearr_28145 = state_28120;
(statearr_28145[(19)] = inst_28072);

return statearr_28145;
})();
var statearr_28146_28221 = state_28120__$1;
(statearr_28146_28221[(2)] = inst_28073);

(statearr_28146_28221[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (32))){
var inst_28060 = (state_28120[(20)]);
var inst_28061 = (state_28120[(9)]);
var inst_28062 = (state_28120[(21)]);
var inst_28063 = (state_28120[(12)]);
var inst_28075 = (state_28120[(2)]);
var inst_28076 = (inst_28063 + (1));
var tmp28141 = inst_28060;
var tmp28142 = inst_28061;
var tmp28143 = inst_28062;
var inst_28060__$1 = tmp28141;
var inst_28061__$1 = tmp28142;
var inst_28062__$1 = tmp28143;
var inst_28063__$1 = inst_28076;
var state_28120__$1 = (function (){var statearr_28147 = state_28120;
(statearr_28147[(20)] = inst_28060__$1);

(statearr_28147[(9)] = inst_28061__$1);

(statearr_28147[(22)] = inst_28075);

(statearr_28147[(21)] = inst_28062__$1);

(statearr_28147[(12)] = inst_28063__$1);

return statearr_28147;
})();
var statearr_28148_28222 = state_28120__$1;
(statearr_28148_28222[(2)] = null);

(statearr_28148_28222[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (40))){
var inst_28088 = (state_28120[(23)]);
var inst_28092 = done.call(null,null);
var inst_28093 = cljs.core.async.untap_STAR_.call(null,m,inst_28088);
var state_28120__$1 = (function (){var statearr_28149 = state_28120;
(statearr_28149[(24)] = inst_28092);

return statearr_28149;
})();
var statearr_28150_28223 = state_28120__$1;
(statearr_28150_28223[(2)] = inst_28093);

(statearr_28150_28223[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (33))){
var inst_28079 = (state_28120[(25)]);
var inst_28081 = cljs.core.chunked_seq_QMARK_.call(null,inst_28079);
var state_28120__$1 = state_28120;
if(inst_28081){
var statearr_28151_28224 = state_28120__$1;
(statearr_28151_28224[(1)] = (36));

} else {
var statearr_28152_28225 = state_28120__$1;
(statearr_28152_28225[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (13))){
var inst_28011 = (state_28120[(26)]);
var inst_28014 = cljs.core.async.close_BANG_.call(null,inst_28011);
var state_28120__$1 = state_28120;
var statearr_28153_28226 = state_28120__$1;
(statearr_28153_28226[(2)] = inst_28014);

(statearr_28153_28226[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (22))){
var inst_28032 = (state_28120[(8)]);
var inst_28035 = cljs.core.async.close_BANG_.call(null,inst_28032);
var state_28120__$1 = state_28120;
var statearr_28154_28227 = state_28120__$1;
(statearr_28154_28227[(2)] = inst_28035);

(statearr_28154_28227[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (36))){
var inst_28079 = (state_28120[(25)]);
var inst_28083 = cljs.core.chunk_first.call(null,inst_28079);
var inst_28084 = cljs.core.chunk_rest.call(null,inst_28079);
var inst_28085 = cljs.core.count.call(null,inst_28083);
var inst_28060 = inst_28084;
var inst_28061 = inst_28083;
var inst_28062 = inst_28085;
var inst_28063 = (0);
var state_28120__$1 = (function (){var statearr_28155 = state_28120;
(statearr_28155[(20)] = inst_28060);

(statearr_28155[(9)] = inst_28061);

(statearr_28155[(21)] = inst_28062);

(statearr_28155[(12)] = inst_28063);

return statearr_28155;
})();
var statearr_28156_28228 = state_28120__$1;
(statearr_28156_28228[(2)] = null);

(statearr_28156_28228[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (41))){
var inst_28079 = (state_28120[(25)]);
var inst_28095 = (state_28120[(2)]);
var inst_28096 = cljs.core.next.call(null,inst_28079);
var inst_28060 = inst_28096;
var inst_28061 = null;
var inst_28062 = (0);
var inst_28063 = (0);
var state_28120__$1 = (function (){var statearr_28157 = state_28120;
(statearr_28157[(20)] = inst_28060);

(statearr_28157[(9)] = inst_28061);

(statearr_28157[(27)] = inst_28095);

(statearr_28157[(21)] = inst_28062);

(statearr_28157[(12)] = inst_28063);

return statearr_28157;
})();
var statearr_28158_28229 = state_28120__$1;
(statearr_28158_28229[(2)] = null);

(statearr_28158_28229[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (43))){
var state_28120__$1 = state_28120;
var statearr_28159_28230 = state_28120__$1;
(statearr_28159_28230[(2)] = null);

(statearr_28159_28230[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (29))){
var inst_28104 = (state_28120[(2)]);
var state_28120__$1 = state_28120;
var statearr_28160_28231 = state_28120__$1;
(statearr_28160_28231[(2)] = inst_28104);

(statearr_28160_28231[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (44))){
var inst_28113 = (state_28120[(2)]);
var state_28120__$1 = (function (){var statearr_28161 = state_28120;
(statearr_28161[(28)] = inst_28113);

return statearr_28161;
})();
var statearr_28162_28232 = state_28120__$1;
(statearr_28162_28232[(2)] = null);

(statearr_28162_28232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (6))){
var inst_28052 = (state_28120[(29)]);
var inst_28051 = cljs.core.deref.call(null,cs);
var inst_28052__$1 = cljs.core.keys.call(null,inst_28051);
var inst_28053 = cljs.core.count.call(null,inst_28052__$1);
var inst_28054 = cljs.core.reset_BANG_.call(null,dctr,inst_28053);
var inst_28059 = cljs.core.seq.call(null,inst_28052__$1);
var inst_28060 = inst_28059;
var inst_28061 = null;
var inst_28062 = (0);
var inst_28063 = (0);
var state_28120__$1 = (function (){var statearr_28163 = state_28120;
(statearr_28163[(30)] = inst_28054);

(statearr_28163[(29)] = inst_28052__$1);

(statearr_28163[(20)] = inst_28060);

(statearr_28163[(9)] = inst_28061);

(statearr_28163[(21)] = inst_28062);

(statearr_28163[(12)] = inst_28063);

return statearr_28163;
})();
var statearr_28164_28233 = state_28120__$1;
(statearr_28164_28233[(2)] = null);

(statearr_28164_28233[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (28))){
var inst_28060 = (state_28120[(20)]);
var inst_28079 = (state_28120[(25)]);
var inst_28079__$1 = cljs.core.seq.call(null,inst_28060);
var state_28120__$1 = (function (){var statearr_28165 = state_28120;
(statearr_28165[(25)] = inst_28079__$1);

return statearr_28165;
})();
if(inst_28079__$1){
var statearr_28166_28234 = state_28120__$1;
(statearr_28166_28234[(1)] = (33));

} else {
var statearr_28167_28235 = state_28120__$1;
(statearr_28167_28235[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (25))){
var inst_28062 = (state_28120[(21)]);
var inst_28063 = (state_28120[(12)]);
var inst_28065 = (inst_28063 < inst_28062);
var inst_28066 = inst_28065;
var state_28120__$1 = state_28120;
if(cljs.core.truth_(inst_28066)){
var statearr_28168_28236 = state_28120__$1;
(statearr_28168_28236[(1)] = (27));

} else {
var statearr_28169_28237 = state_28120__$1;
(statearr_28169_28237[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (34))){
var state_28120__$1 = state_28120;
var statearr_28170_28238 = state_28120__$1;
(statearr_28170_28238[(2)] = null);

(statearr_28170_28238[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (17))){
var state_28120__$1 = state_28120;
var statearr_28171_28239 = state_28120__$1;
(statearr_28171_28239[(2)] = null);

(statearr_28171_28239[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (3))){
var inst_28118 = (state_28120[(2)]);
var state_28120__$1 = state_28120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28120__$1,inst_28118);
} else {
if((state_val_28121 === (12))){
var inst_28047 = (state_28120[(2)]);
var state_28120__$1 = state_28120;
var statearr_28172_28240 = state_28120__$1;
(statearr_28172_28240[(2)] = inst_28047);

(statearr_28172_28240[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (2))){
var state_28120__$1 = state_28120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28120__$1,(4),ch);
} else {
if((state_val_28121 === (23))){
var state_28120__$1 = state_28120;
var statearr_28173_28241 = state_28120__$1;
(statearr_28173_28241[(2)] = null);

(statearr_28173_28241[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (35))){
var inst_28102 = (state_28120[(2)]);
var state_28120__$1 = state_28120;
var statearr_28174_28242 = state_28120__$1;
(statearr_28174_28242[(2)] = inst_28102);

(statearr_28174_28242[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (19))){
var inst_28021 = (state_28120[(7)]);
var inst_28025 = cljs.core.chunk_first.call(null,inst_28021);
var inst_28026 = cljs.core.chunk_rest.call(null,inst_28021);
var inst_28027 = cljs.core.count.call(null,inst_28025);
var inst_28001 = inst_28026;
var inst_28002 = inst_28025;
var inst_28003 = inst_28027;
var inst_28004 = (0);
var state_28120__$1 = (function (){var statearr_28175 = state_28120;
(statearr_28175[(13)] = inst_28002);

(statearr_28175[(14)] = inst_28003);

(statearr_28175[(16)] = inst_28004);

(statearr_28175[(17)] = inst_28001);

return statearr_28175;
})();
var statearr_28176_28243 = state_28120__$1;
(statearr_28176_28243[(2)] = null);

(statearr_28176_28243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (11))){
var inst_28021 = (state_28120[(7)]);
var inst_28001 = (state_28120[(17)]);
var inst_28021__$1 = cljs.core.seq.call(null,inst_28001);
var state_28120__$1 = (function (){var statearr_28177 = state_28120;
(statearr_28177[(7)] = inst_28021__$1);

return statearr_28177;
})();
if(inst_28021__$1){
var statearr_28178_28244 = state_28120__$1;
(statearr_28178_28244[(1)] = (16));

} else {
var statearr_28179_28245 = state_28120__$1;
(statearr_28179_28245[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (9))){
var inst_28049 = (state_28120[(2)]);
var state_28120__$1 = state_28120;
var statearr_28180_28246 = state_28120__$1;
(statearr_28180_28246[(2)] = inst_28049);

(statearr_28180_28246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (5))){
var inst_27999 = cljs.core.deref.call(null,cs);
var inst_28000 = cljs.core.seq.call(null,inst_27999);
var inst_28001 = inst_28000;
var inst_28002 = null;
var inst_28003 = (0);
var inst_28004 = (0);
var state_28120__$1 = (function (){var statearr_28181 = state_28120;
(statearr_28181[(13)] = inst_28002);

(statearr_28181[(14)] = inst_28003);

(statearr_28181[(16)] = inst_28004);

(statearr_28181[(17)] = inst_28001);

return statearr_28181;
})();
var statearr_28182_28247 = state_28120__$1;
(statearr_28182_28247[(2)] = null);

(statearr_28182_28247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (14))){
var state_28120__$1 = state_28120;
var statearr_28183_28248 = state_28120__$1;
(statearr_28183_28248[(2)] = null);

(statearr_28183_28248[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (45))){
var inst_28110 = (state_28120[(2)]);
var state_28120__$1 = state_28120;
var statearr_28184_28249 = state_28120__$1;
(statearr_28184_28249[(2)] = inst_28110);

(statearr_28184_28249[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (26))){
var inst_28052 = (state_28120[(29)]);
var inst_28106 = (state_28120[(2)]);
var inst_28107 = cljs.core.seq.call(null,inst_28052);
var state_28120__$1 = (function (){var statearr_28185 = state_28120;
(statearr_28185[(31)] = inst_28106);

return statearr_28185;
})();
if(inst_28107){
var statearr_28186_28250 = state_28120__$1;
(statearr_28186_28250[(1)] = (42));

} else {
var statearr_28187_28251 = state_28120__$1;
(statearr_28187_28251[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (16))){
var inst_28021 = (state_28120[(7)]);
var inst_28023 = cljs.core.chunked_seq_QMARK_.call(null,inst_28021);
var state_28120__$1 = state_28120;
if(inst_28023){
var statearr_28188_28252 = state_28120__$1;
(statearr_28188_28252[(1)] = (19));

} else {
var statearr_28189_28253 = state_28120__$1;
(statearr_28189_28253[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (38))){
var inst_28099 = (state_28120[(2)]);
var state_28120__$1 = state_28120;
var statearr_28190_28254 = state_28120__$1;
(statearr_28190_28254[(2)] = inst_28099);

(statearr_28190_28254[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (30))){
var state_28120__$1 = state_28120;
var statearr_28191_28255 = state_28120__$1;
(statearr_28191_28255[(2)] = null);

(statearr_28191_28255[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (10))){
var inst_28002 = (state_28120[(13)]);
var inst_28004 = (state_28120[(16)]);
var inst_28010 = cljs.core._nth.call(null,inst_28002,inst_28004);
var inst_28011 = cljs.core.nth.call(null,inst_28010,(0),null);
var inst_28012 = cljs.core.nth.call(null,inst_28010,(1),null);
var state_28120__$1 = (function (){var statearr_28192 = state_28120;
(statearr_28192[(26)] = inst_28011);

return statearr_28192;
})();
if(cljs.core.truth_(inst_28012)){
var statearr_28193_28256 = state_28120__$1;
(statearr_28193_28256[(1)] = (13));

} else {
var statearr_28194_28257 = state_28120__$1;
(statearr_28194_28257[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (18))){
var inst_28045 = (state_28120[(2)]);
var state_28120__$1 = state_28120;
var statearr_28195_28258 = state_28120__$1;
(statearr_28195_28258[(2)] = inst_28045);

(statearr_28195_28258[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (42))){
var state_28120__$1 = state_28120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28120__$1,(45),dchan);
} else {
if((state_val_28121 === (37))){
var inst_28088 = (state_28120[(23)]);
var inst_27992 = (state_28120[(10)]);
var inst_28079 = (state_28120[(25)]);
var inst_28088__$1 = cljs.core.first.call(null,inst_28079);
var inst_28089 = cljs.core.async.put_BANG_.call(null,inst_28088__$1,inst_27992,done);
var state_28120__$1 = (function (){var statearr_28196 = state_28120;
(statearr_28196[(23)] = inst_28088__$1);

return statearr_28196;
})();
if(cljs.core.truth_(inst_28089)){
var statearr_28197_28259 = state_28120__$1;
(statearr_28197_28259[(1)] = (39));

} else {
var statearr_28198_28260 = state_28120__$1;
(statearr_28198_28260[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (8))){
var inst_28003 = (state_28120[(14)]);
var inst_28004 = (state_28120[(16)]);
var inst_28006 = (inst_28004 < inst_28003);
var inst_28007 = inst_28006;
var state_28120__$1 = state_28120;
if(cljs.core.truth_(inst_28007)){
var statearr_28199_28261 = state_28120__$1;
(statearr_28199_28261[(1)] = (10));

} else {
var statearr_28200_28262 = state_28120__$1;
(statearr_28200_28262[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21646__auto___28208,cs,m,dchan,dctr,done))
;
return ((function (switch__21584__auto__,c__21646__auto___28208,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21585__auto__ = null;
var cljs$core$async$mult_$_state_machine__21585__auto____0 = (function (){
var statearr_28204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28204[(0)] = cljs$core$async$mult_$_state_machine__21585__auto__);

(statearr_28204[(1)] = (1));

return statearr_28204;
});
var cljs$core$async$mult_$_state_machine__21585__auto____1 = (function (state_28120){
while(true){
var ret_value__21586__auto__ = (function (){try{while(true){
var result__21587__auto__ = switch__21584__auto__.call(null,state_28120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21587__auto__;
}
break;
}
}catch (e28205){if((e28205 instanceof Object)){
var ex__21588__auto__ = e28205;
var statearr_28206_28263 = state_28120;
(statearr_28206_28263[(5)] = ex__21588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28264 = state_28120;
state_28120 = G__28264;
continue;
} else {
return ret_value__21586__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21585__auto__ = function(state_28120){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21585__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21585__auto____1.call(this,state_28120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21585__auto____0;
cljs$core$async$mult_$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21585__auto____1;
return cljs$core$async$mult_$_state_machine__21585__auto__;
})()
;})(switch__21584__auto__,c__21646__auto___28208,cs,m,dchan,dctr,done))
})();
var state__21648__auto__ = (function (){var statearr_28207 = f__21647__auto__.call(null);
(statearr_28207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21646__auto___28208);

return statearr_28207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21648__auto__);
});})(c__21646__auto___28208,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__28266 = arguments.length;
switch (G__28266) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj28269 = {};
return obj28269;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__18104__auto__ = m;
if(and__18104__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__18104__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18752__auto__ = (((m == null))?null:m);
return (function (){var or__18116__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__18104__auto__ = m;
if(and__18104__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__18104__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18752__auto__ = (((m == null))?null:m);
return (function (){var or__18116__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__18104__auto__ = m;
if(and__18104__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__18104__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18752__auto__ = (((m == null))?null:m);
return (function (){var or__18116__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__18104__auto__ = m;
if(and__18104__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__18104__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18752__auto__ = (((m == null))?null:m);
return (function (){var or__18116__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__18104__auto__ = m;
if(and__18104__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__18104__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18752__auto__ = (((m == null))?null:m);
return (function (){var or__18116__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__19156__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19156__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28274){
var map__28275 = p__28274;
var map__28275__$1 = ((cljs.core.seq_QMARK_.call(null,map__28275))?cljs.core.apply.call(null,cljs.core.hash_map,map__28275):map__28275);
var opts = map__28275__$1;
var statearr_28276_28279 = state;
(statearr_28276_28279[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__28275,map__28275__$1,opts){
return (function (val){
var statearr_28277_28280 = state;
(statearr_28277_28280[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28275,map__28275__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_28278_28281 = state;
(statearr_28278_28281[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28270){
var G__28271 = cljs.core.first.call(null,seq28270);
var seq28270__$1 = cljs.core.next.call(null,seq28270);
var G__28272 = cljs.core.first.call(null,seq28270__$1);
var seq28270__$2 = cljs.core.next.call(null,seq28270__$1);
var G__28273 = cljs.core.first.call(null,seq28270__$2);
var seq28270__$3 = cljs.core.next.call(null,seq28270__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28271,G__28272,G__28273,seq28270__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t28401 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28401 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28402){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28402 = meta28402;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28401.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t28401.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28401.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28401.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28401.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28401.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28401.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28401.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28401.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28403){
var self__ = this;
var _28403__$1 = this;
return self__.meta28402;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28403,meta28402__$1){
var self__ = this;
var _28403__$1 = this;
return (new cljs.core.async.t28401(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28402__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28401.cljs$lang$type = true;

cljs.core.async.t28401.cljs$lang$ctorStr = "cljs.core.async/t28401";

cljs.core.async.t28401.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t28401");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t28401 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t28401(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28402){
return (new cljs.core.async.t28401(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28402));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t28401(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21646__auto___28520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21646__auto___28520,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21647__auto__ = (function (){var switch__21584__auto__ = ((function (c__21646__auto___28520,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28473){
var state_val_28474 = (state_28473[(1)]);
if((state_val_28474 === (7))){
var inst_28417 = (state_28473[(7)]);
var inst_28422 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28417);
var state_28473__$1 = state_28473;
var statearr_28475_28521 = state_28473__$1;
(statearr_28475_28521[(2)] = inst_28422);

(statearr_28475_28521[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (20))){
var inst_28432 = (state_28473[(8)]);
var state_28473__$1 = state_28473;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28473__$1,(23),out,inst_28432);
} else {
if((state_val_28474 === (1))){
var inst_28407 = (state_28473[(9)]);
var inst_28407__$1 = calc_state.call(null);
var inst_28408 = cljs.core.seq_QMARK_.call(null,inst_28407__$1);
var state_28473__$1 = (function (){var statearr_28476 = state_28473;
(statearr_28476[(9)] = inst_28407__$1);

return statearr_28476;
})();
if(inst_28408){
var statearr_28477_28522 = state_28473__$1;
(statearr_28477_28522[(1)] = (2));

} else {
var statearr_28478_28523 = state_28473__$1;
(statearr_28478_28523[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (24))){
var inst_28425 = (state_28473[(10)]);
var inst_28417 = inst_28425;
var state_28473__$1 = (function (){var statearr_28479 = state_28473;
(statearr_28479[(7)] = inst_28417);

return statearr_28479;
})();
var statearr_28480_28524 = state_28473__$1;
(statearr_28480_28524[(2)] = null);

(statearr_28480_28524[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (4))){
var inst_28407 = (state_28473[(9)]);
var inst_28413 = (state_28473[(2)]);
var inst_28414 = cljs.core.get.call(null,inst_28413,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28415 = cljs.core.get.call(null,inst_28413,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28416 = cljs.core.get.call(null,inst_28413,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28417 = inst_28407;
var state_28473__$1 = (function (){var statearr_28481 = state_28473;
(statearr_28481[(7)] = inst_28417);

(statearr_28481[(11)] = inst_28414);

(statearr_28481[(12)] = inst_28416);

(statearr_28481[(13)] = inst_28415);

return statearr_28481;
})();
var statearr_28482_28525 = state_28473__$1;
(statearr_28482_28525[(2)] = null);

(statearr_28482_28525[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (15))){
var state_28473__$1 = state_28473;
var statearr_28483_28526 = state_28473__$1;
(statearr_28483_28526[(2)] = null);

(statearr_28483_28526[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (21))){
var inst_28425 = (state_28473[(10)]);
var inst_28417 = inst_28425;
var state_28473__$1 = (function (){var statearr_28484 = state_28473;
(statearr_28484[(7)] = inst_28417);

return statearr_28484;
})();
var statearr_28485_28527 = state_28473__$1;
(statearr_28485_28527[(2)] = null);

(statearr_28485_28527[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (13))){
var inst_28469 = (state_28473[(2)]);
var state_28473__$1 = state_28473;
var statearr_28486_28528 = state_28473__$1;
(statearr_28486_28528[(2)] = inst_28469);

(statearr_28486_28528[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (22))){
var inst_28467 = (state_28473[(2)]);
var state_28473__$1 = state_28473;
var statearr_28487_28529 = state_28473__$1;
(statearr_28487_28529[(2)] = inst_28467);

(statearr_28487_28529[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (6))){
var inst_28471 = (state_28473[(2)]);
var state_28473__$1 = state_28473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28473__$1,inst_28471);
} else {
if((state_val_28474 === (25))){
var state_28473__$1 = state_28473;
var statearr_28488_28530 = state_28473__$1;
(statearr_28488_28530[(2)] = null);

(statearr_28488_28530[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (17))){
var inst_28447 = (state_28473[(14)]);
var state_28473__$1 = state_28473;
var statearr_28489_28531 = state_28473__$1;
(statearr_28489_28531[(2)] = inst_28447);

(statearr_28489_28531[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (3))){
var inst_28407 = (state_28473[(9)]);
var state_28473__$1 = state_28473;
var statearr_28490_28532 = state_28473__$1;
(statearr_28490_28532[(2)] = inst_28407);

(statearr_28490_28532[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (12))){
var inst_28428 = (state_28473[(15)]);
var inst_28433 = (state_28473[(16)]);
var inst_28447 = (state_28473[(14)]);
var inst_28447__$1 = inst_28428.call(null,inst_28433);
var state_28473__$1 = (function (){var statearr_28491 = state_28473;
(statearr_28491[(14)] = inst_28447__$1);

return statearr_28491;
})();
if(cljs.core.truth_(inst_28447__$1)){
var statearr_28492_28533 = state_28473__$1;
(statearr_28492_28533[(1)] = (17));

} else {
var statearr_28493_28534 = state_28473__$1;
(statearr_28493_28534[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (2))){
var inst_28407 = (state_28473[(9)]);
var inst_28410 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28407);
var state_28473__$1 = state_28473;
var statearr_28494_28535 = state_28473__$1;
(statearr_28494_28535[(2)] = inst_28410);

(statearr_28494_28535[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (23))){
var inst_28458 = (state_28473[(2)]);
var state_28473__$1 = state_28473;
if(cljs.core.truth_(inst_28458)){
var statearr_28495_28536 = state_28473__$1;
(statearr_28495_28536[(1)] = (24));

} else {
var statearr_28496_28537 = state_28473__$1;
(statearr_28496_28537[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (19))){
var inst_28455 = (state_28473[(2)]);
var state_28473__$1 = state_28473;
if(cljs.core.truth_(inst_28455)){
var statearr_28497_28538 = state_28473__$1;
(statearr_28497_28538[(1)] = (20));

} else {
var statearr_28498_28539 = state_28473__$1;
(statearr_28498_28539[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (11))){
var inst_28432 = (state_28473[(8)]);
var inst_28438 = (inst_28432 == null);
var state_28473__$1 = state_28473;
if(cljs.core.truth_(inst_28438)){
var statearr_28499_28540 = state_28473__$1;
(statearr_28499_28540[(1)] = (14));

} else {
var statearr_28500_28541 = state_28473__$1;
(statearr_28500_28541[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (9))){
var inst_28425 = (state_28473[(10)]);
var inst_28425__$1 = (state_28473[(2)]);
var inst_28426 = cljs.core.get.call(null,inst_28425__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28427 = cljs.core.get.call(null,inst_28425__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28428 = cljs.core.get.call(null,inst_28425__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_28473__$1 = (function (){var statearr_28501 = state_28473;
(statearr_28501[(15)] = inst_28428);

(statearr_28501[(10)] = inst_28425__$1);

(statearr_28501[(17)] = inst_28427);

return statearr_28501;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28473__$1,(10),inst_28426);
} else {
if((state_val_28474 === (5))){
var inst_28417 = (state_28473[(7)]);
var inst_28420 = cljs.core.seq_QMARK_.call(null,inst_28417);
var state_28473__$1 = state_28473;
if(inst_28420){
var statearr_28502_28542 = state_28473__$1;
(statearr_28502_28542[(1)] = (7));

} else {
var statearr_28503_28543 = state_28473__$1;
(statearr_28503_28543[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (14))){
var inst_28433 = (state_28473[(16)]);
var inst_28440 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28433);
var state_28473__$1 = state_28473;
var statearr_28504_28544 = state_28473__$1;
(statearr_28504_28544[(2)] = inst_28440);

(statearr_28504_28544[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (26))){
var inst_28463 = (state_28473[(2)]);
var state_28473__$1 = state_28473;
var statearr_28505_28545 = state_28473__$1;
(statearr_28505_28545[(2)] = inst_28463);

(statearr_28505_28545[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (16))){
var inst_28443 = (state_28473[(2)]);
var inst_28444 = calc_state.call(null);
var inst_28417 = inst_28444;
var state_28473__$1 = (function (){var statearr_28506 = state_28473;
(statearr_28506[(7)] = inst_28417);

(statearr_28506[(18)] = inst_28443);

return statearr_28506;
})();
var statearr_28507_28546 = state_28473__$1;
(statearr_28507_28546[(2)] = null);

(statearr_28507_28546[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (10))){
var inst_28433 = (state_28473[(16)]);
var inst_28432 = (state_28473[(8)]);
var inst_28431 = (state_28473[(2)]);
var inst_28432__$1 = cljs.core.nth.call(null,inst_28431,(0),null);
var inst_28433__$1 = cljs.core.nth.call(null,inst_28431,(1),null);
var inst_28434 = (inst_28432__$1 == null);
var inst_28435 = cljs.core._EQ_.call(null,inst_28433__$1,change);
var inst_28436 = (inst_28434) || (inst_28435);
var state_28473__$1 = (function (){var statearr_28508 = state_28473;
(statearr_28508[(16)] = inst_28433__$1);

(statearr_28508[(8)] = inst_28432__$1);

return statearr_28508;
})();
if(cljs.core.truth_(inst_28436)){
var statearr_28509_28547 = state_28473__$1;
(statearr_28509_28547[(1)] = (11));

} else {
var statearr_28510_28548 = state_28473__$1;
(statearr_28510_28548[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (18))){
var inst_28428 = (state_28473[(15)]);
var inst_28433 = (state_28473[(16)]);
var inst_28427 = (state_28473[(17)]);
var inst_28450 = cljs.core.empty_QMARK_.call(null,inst_28428);
var inst_28451 = inst_28427.call(null,inst_28433);
var inst_28452 = cljs.core.not.call(null,inst_28451);
var inst_28453 = (inst_28450) && (inst_28452);
var state_28473__$1 = state_28473;
var statearr_28511_28549 = state_28473__$1;
(statearr_28511_28549[(2)] = inst_28453);

(statearr_28511_28549[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (8))){
var inst_28417 = (state_28473[(7)]);
var state_28473__$1 = state_28473;
var statearr_28512_28550 = state_28473__$1;
(statearr_28512_28550[(2)] = inst_28417);

(statearr_28512_28550[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21646__auto___28520,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21584__auto__,c__21646__auto___28520,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21585__auto__ = null;
var cljs$core$async$mix_$_state_machine__21585__auto____0 = (function (){
var statearr_28516 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28516[(0)] = cljs$core$async$mix_$_state_machine__21585__auto__);

(statearr_28516[(1)] = (1));

return statearr_28516;
});
var cljs$core$async$mix_$_state_machine__21585__auto____1 = (function (state_28473){
while(true){
var ret_value__21586__auto__ = (function (){try{while(true){
var result__21587__auto__ = switch__21584__auto__.call(null,state_28473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21587__auto__;
}
break;
}
}catch (e28517){if((e28517 instanceof Object)){
var ex__21588__auto__ = e28517;
var statearr_28518_28551 = state_28473;
(statearr_28518_28551[(5)] = ex__21588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28552 = state_28473;
state_28473 = G__28552;
continue;
} else {
return ret_value__21586__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21585__auto__ = function(state_28473){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21585__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21585__auto____1.call(this,state_28473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21585__auto____0;
cljs$core$async$mix_$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21585__auto____1;
return cljs$core$async$mix_$_state_machine__21585__auto__;
})()
;})(switch__21584__auto__,c__21646__auto___28520,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21648__auto__ = (function (){var statearr_28519 = f__21647__auto__.call(null);
(statearr_28519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21646__auto___28520);

return statearr_28519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21648__auto__);
});})(c__21646__auto___28520,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj28554 = {};
return obj28554;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__18104__auto__ = p;
if(and__18104__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__18104__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18752__auto__ = (((p == null))?null:p);
return (function (){var or__18116__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__18104__auto__ = p;
if(and__18104__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__18104__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18752__auto__ = (((p == null))?null:p);
return (function (){var or__18116__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__28556 = arguments.length;
switch (G__28556) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__18104__auto__ = p;
if(and__18104__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__18104__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18752__auto__ = (((p == null))?null:p);
return (function (){var or__18116__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__18104__auto__ = p;
if(and__18104__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__18104__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18752__auto__ = (((p == null))?null:p);
return (function (){var or__18116__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__28560 = arguments.length;
switch (G__28560) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18116__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18116__auto__,mults){
return (function (p1__28558_SHARP_){
if(cljs.core.truth_(p1__28558_SHARP_.call(null,topic))){
return p1__28558_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28558_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18116__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t28561 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28561 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta28562){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta28562 = meta28562;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28561.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t28561.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t28561.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t28561.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t28561.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t28561.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28561.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t28561.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28563){
var self__ = this;
var _28563__$1 = this;
return self__.meta28562;
});})(mults,ensure_mult))
;

cljs.core.async.t28561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28563,meta28562__$1){
var self__ = this;
var _28563__$1 = this;
return (new cljs.core.async.t28561(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta28562__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t28561.cljs$lang$type = true;

cljs.core.async.t28561.cljs$lang$ctorStr = "cljs.core.async/t28561";

cljs.core.async.t28561.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t28561");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t28561 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t28561(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta28562){
return (new cljs.core.async.t28561(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta28562));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t28561(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21646__auto___28684 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21646__auto___28684,mults,ensure_mult,p){
return (function (){
var f__21647__auto__ = (function (){var switch__21584__auto__ = ((function (c__21646__auto___28684,mults,ensure_mult,p){
return (function (state_28635){
var state_val_28636 = (state_28635[(1)]);
if((state_val_28636 === (7))){
var inst_28631 = (state_28635[(2)]);
var state_28635__$1 = state_28635;
var statearr_28637_28685 = state_28635__$1;
(statearr_28637_28685[(2)] = inst_28631);

(statearr_28637_28685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (20))){
var state_28635__$1 = state_28635;
var statearr_28638_28686 = state_28635__$1;
(statearr_28638_28686[(2)] = null);

(statearr_28638_28686[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (1))){
var state_28635__$1 = state_28635;
var statearr_28639_28687 = state_28635__$1;
(statearr_28639_28687[(2)] = null);

(statearr_28639_28687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (24))){
var inst_28614 = (state_28635[(7)]);
var inst_28623 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28614);
var state_28635__$1 = state_28635;
var statearr_28640_28688 = state_28635__$1;
(statearr_28640_28688[(2)] = inst_28623);

(statearr_28640_28688[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (4))){
var inst_28566 = (state_28635[(8)]);
var inst_28566__$1 = (state_28635[(2)]);
var inst_28567 = (inst_28566__$1 == null);
var state_28635__$1 = (function (){var statearr_28641 = state_28635;
(statearr_28641[(8)] = inst_28566__$1);

return statearr_28641;
})();
if(cljs.core.truth_(inst_28567)){
var statearr_28642_28689 = state_28635__$1;
(statearr_28642_28689[(1)] = (5));

} else {
var statearr_28643_28690 = state_28635__$1;
(statearr_28643_28690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (15))){
var inst_28608 = (state_28635[(2)]);
var state_28635__$1 = state_28635;
var statearr_28644_28691 = state_28635__$1;
(statearr_28644_28691[(2)] = inst_28608);

(statearr_28644_28691[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (21))){
var inst_28628 = (state_28635[(2)]);
var state_28635__$1 = (function (){var statearr_28645 = state_28635;
(statearr_28645[(9)] = inst_28628);

return statearr_28645;
})();
var statearr_28646_28692 = state_28635__$1;
(statearr_28646_28692[(2)] = null);

(statearr_28646_28692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (13))){
var inst_28590 = (state_28635[(10)]);
var inst_28592 = cljs.core.chunked_seq_QMARK_.call(null,inst_28590);
var state_28635__$1 = state_28635;
if(inst_28592){
var statearr_28647_28693 = state_28635__$1;
(statearr_28647_28693[(1)] = (16));

} else {
var statearr_28648_28694 = state_28635__$1;
(statearr_28648_28694[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (22))){
var inst_28620 = (state_28635[(2)]);
var state_28635__$1 = state_28635;
if(cljs.core.truth_(inst_28620)){
var statearr_28649_28695 = state_28635__$1;
(statearr_28649_28695[(1)] = (23));

} else {
var statearr_28650_28696 = state_28635__$1;
(statearr_28650_28696[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (6))){
var inst_28614 = (state_28635[(7)]);
var inst_28616 = (state_28635[(11)]);
var inst_28566 = (state_28635[(8)]);
var inst_28614__$1 = topic_fn.call(null,inst_28566);
var inst_28615 = cljs.core.deref.call(null,mults);
var inst_28616__$1 = cljs.core.get.call(null,inst_28615,inst_28614__$1);
var state_28635__$1 = (function (){var statearr_28651 = state_28635;
(statearr_28651[(7)] = inst_28614__$1);

(statearr_28651[(11)] = inst_28616__$1);

return statearr_28651;
})();
if(cljs.core.truth_(inst_28616__$1)){
var statearr_28652_28697 = state_28635__$1;
(statearr_28652_28697[(1)] = (19));

} else {
var statearr_28653_28698 = state_28635__$1;
(statearr_28653_28698[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (25))){
var inst_28625 = (state_28635[(2)]);
var state_28635__$1 = state_28635;
var statearr_28654_28699 = state_28635__$1;
(statearr_28654_28699[(2)] = inst_28625);

(statearr_28654_28699[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (17))){
var inst_28590 = (state_28635[(10)]);
var inst_28599 = cljs.core.first.call(null,inst_28590);
var inst_28600 = cljs.core.async.muxch_STAR_.call(null,inst_28599);
var inst_28601 = cljs.core.async.close_BANG_.call(null,inst_28600);
var inst_28602 = cljs.core.next.call(null,inst_28590);
var inst_28576 = inst_28602;
var inst_28577 = null;
var inst_28578 = (0);
var inst_28579 = (0);
var state_28635__$1 = (function (){var statearr_28655 = state_28635;
(statearr_28655[(12)] = inst_28576);

(statearr_28655[(13)] = inst_28578);

(statearr_28655[(14)] = inst_28601);

(statearr_28655[(15)] = inst_28579);

(statearr_28655[(16)] = inst_28577);

return statearr_28655;
})();
var statearr_28656_28700 = state_28635__$1;
(statearr_28656_28700[(2)] = null);

(statearr_28656_28700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (3))){
var inst_28633 = (state_28635[(2)]);
var state_28635__$1 = state_28635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28635__$1,inst_28633);
} else {
if((state_val_28636 === (12))){
var inst_28610 = (state_28635[(2)]);
var state_28635__$1 = state_28635;
var statearr_28657_28701 = state_28635__$1;
(statearr_28657_28701[(2)] = inst_28610);

(statearr_28657_28701[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (2))){
var state_28635__$1 = state_28635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28635__$1,(4),ch);
} else {
if((state_val_28636 === (23))){
var state_28635__$1 = state_28635;
var statearr_28658_28702 = state_28635__$1;
(statearr_28658_28702[(2)] = null);

(statearr_28658_28702[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (19))){
var inst_28616 = (state_28635[(11)]);
var inst_28566 = (state_28635[(8)]);
var inst_28618 = cljs.core.async.muxch_STAR_.call(null,inst_28616);
var state_28635__$1 = state_28635;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28635__$1,(22),inst_28618,inst_28566);
} else {
if((state_val_28636 === (11))){
var inst_28576 = (state_28635[(12)]);
var inst_28590 = (state_28635[(10)]);
var inst_28590__$1 = cljs.core.seq.call(null,inst_28576);
var state_28635__$1 = (function (){var statearr_28659 = state_28635;
(statearr_28659[(10)] = inst_28590__$1);

return statearr_28659;
})();
if(inst_28590__$1){
var statearr_28660_28703 = state_28635__$1;
(statearr_28660_28703[(1)] = (13));

} else {
var statearr_28661_28704 = state_28635__$1;
(statearr_28661_28704[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (9))){
var inst_28612 = (state_28635[(2)]);
var state_28635__$1 = state_28635;
var statearr_28662_28705 = state_28635__$1;
(statearr_28662_28705[(2)] = inst_28612);

(statearr_28662_28705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (5))){
var inst_28573 = cljs.core.deref.call(null,mults);
var inst_28574 = cljs.core.vals.call(null,inst_28573);
var inst_28575 = cljs.core.seq.call(null,inst_28574);
var inst_28576 = inst_28575;
var inst_28577 = null;
var inst_28578 = (0);
var inst_28579 = (0);
var state_28635__$1 = (function (){var statearr_28663 = state_28635;
(statearr_28663[(12)] = inst_28576);

(statearr_28663[(13)] = inst_28578);

(statearr_28663[(15)] = inst_28579);

(statearr_28663[(16)] = inst_28577);

return statearr_28663;
})();
var statearr_28664_28706 = state_28635__$1;
(statearr_28664_28706[(2)] = null);

(statearr_28664_28706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (14))){
var state_28635__$1 = state_28635;
var statearr_28668_28707 = state_28635__$1;
(statearr_28668_28707[(2)] = null);

(statearr_28668_28707[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (16))){
var inst_28590 = (state_28635[(10)]);
var inst_28594 = cljs.core.chunk_first.call(null,inst_28590);
var inst_28595 = cljs.core.chunk_rest.call(null,inst_28590);
var inst_28596 = cljs.core.count.call(null,inst_28594);
var inst_28576 = inst_28595;
var inst_28577 = inst_28594;
var inst_28578 = inst_28596;
var inst_28579 = (0);
var state_28635__$1 = (function (){var statearr_28669 = state_28635;
(statearr_28669[(12)] = inst_28576);

(statearr_28669[(13)] = inst_28578);

(statearr_28669[(15)] = inst_28579);

(statearr_28669[(16)] = inst_28577);

return statearr_28669;
})();
var statearr_28670_28708 = state_28635__$1;
(statearr_28670_28708[(2)] = null);

(statearr_28670_28708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (10))){
var inst_28576 = (state_28635[(12)]);
var inst_28578 = (state_28635[(13)]);
var inst_28579 = (state_28635[(15)]);
var inst_28577 = (state_28635[(16)]);
var inst_28584 = cljs.core._nth.call(null,inst_28577,inst_28579);
var inst_28585 = cljs.core.async.muxch_STAR_.call(null,inst_28584);
var inst_28586 = cljs.core.async.close_BANG_.call(null,inst_28585);
var inst_28587 = (inst_28579 + (1));
var tmp28665 = inst_28576;
var tmp28666 = inst_28578;
var tmp28667 = inst_28577;
var inst_28576__$1 = tmp28665;
var inst_28577__$1 = tmp28667;
var inst_28578__$1 = tmp28666;
var inst_28579__$1 = inst_28587;
var state_28635__$1 = (function (){var statearr_28671 = state_28635;
(statearr_28671[(17)] = inst_28586);

(statearr_28671[(12)] = inst_28576__$1);

(statearr_28671[(13)] = inst_28578__$1);

(statearr_28671[(15)] = inst_28579__$1);

(statearr_28671[(16)] = inst_28577__$1);

return statearr_28671;
})();
var statearr_28672_28709 = state_28635__$1;
(statearr_28672_28709[(2)] = null);

(statearr_28672_28709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (18))){
var inst_28605 = (state_28635[(2)]);
var state_28635__$1 = state_28635;
var statearr_28673_28710 = state_28635__$1;
(statearr_28673_28710[(2)] = inst_28605);

(statearr_28673_28710[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (8))){
var inst_28578 = (state_28635[(13)]);
var inst_28579 = (state_28635[(15)]);
var inst_28581 = (inst_28579 < inst_28578);
var inst_28582 = inst_28581;
var state_28635__$1 = state_28635;
if(cljs.core.truth_(inst_28582)){
var statearr_28674_28711 = state_28635__$1;
(statearr_28674_28711[(1)] = (10));

} else {
var statearr_28675_28712 = state_28635__$1;
(statearr_28675_28712[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21646__auto___28684,mults,ensure_mult,p))
;
return ((function (switch__21584__auto__,c__21646__auto___28684,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21585__auto__ = null;
var cljs$core$async$state_machine__21585__auto____0 = (function (){
var statearr_28679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28679[(0)] = cljs$core$async$state_machine__21585__auto__);

(statearr_28679[(1)] = (1));

return statearr_28679;
});
var cljs$core$async$state_machine__21585__auto____1 = (function (state_28635){
while(true){
var ret_value__21586__auto__ = (function (){try{while(true){
var result__21587__auto__ = switch__21584__auto__.call(null,state_28635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21587__auto__;
}
break;
}
}catch (e28680){if((e28680 instanceof Object)){
var ex__21588__auto__ = e28680;
var statearr_28681_28713 = state_28635;
(statearr_28681_28713[(5)] = ex__21588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28714 = state_28635;
state_28635 = G__28714;
continue;
} else {
return ret_value__21586__auto__;
}
break;
}
});
cljs$core$async$state_machine__21585__auto__ = function(state_28635){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21585__auto____1.call(this,state_28635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21585__auto____0;
cljs$core$async$state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21585__auto____1;
return cljs$core$async$state_machine__21585__auto__;
})()
;})(switch__21584__auto__,c__21646__auto___28684,mults,ensure_mult,p))
})();
var state__21648__auto__ = (function (){var statearr_28682 = f__21647__auto__.call(null);
(statearr_28682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21646__auto___28684);

return statearr_28682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21648__auto__);
});})(c__21646__auto___28684,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__28716 = arguments.length;
switch (G__28716) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__28719 = arguments.length;
switch (G__28719) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__28722 = arguments.length;
switch (G__28722) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21646__auto___28792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21646__auto___28792,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21647__auto__ = (function (){var switch__21584__auto__ = ((function (c__21646__auto___28792,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28761){
var state_val_28762 = (state_28761[(1)]);
if((state_val_28762 === (7))){
var state_28761__$1 = state_28761;
var statearr_28763_28793 = state_28761__$1;
(statearr_28763_28793[(2)] = null);

(statearr_28763_28793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28762 === (1))){
var state_28761__$1 = state_28761;
var statearr_28764_28794 = state_28761__$1;
(statearr_28764_28794[(2)] = null);

(statearr_28764_28794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28762 === (4))){
var inst_28725 = (state_28761[(7)]);
var inst_28727 = (inst_28725 < cnt);
var state_28761__$1 = state_28761;
if(cljs.core.truth_(inst_28727)){
var statearr_28765_28795 = state_28761__$1;
(statearr_28765_28795[(1)] = (6));

} else {
var statearr_28766_28796 = state_28761__$1;
(statearr_28766_28796[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28762 === (15))){
var inst_28757 = (state_28761[(2)]);
var state_28761__$1 = state_28761;
var statearr_28767_28797 = state_28761__$1;
(statearr_28767_28797[(2)] = inst_28757);

(statearr_28767_28797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28762 === (13))){
var inst_28750 = cljs.core.async.close_BANG_.call(null,out);
var state_28761__$1 = state_28761;
var statearr_28768_28798 = state_28761__$1;
(statearr_28768_28798[(2)] = inst_28750);

(statearr_28768_28798[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28762 === (6))){
var state_28761__$1 = state_28761;
var statearr_28769_28799 = state_28761__$1;
(statearr_28769_28799[(2)] = null);

(statearr_28769_28799[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28762 === (3))){
var inst_28759 = (state_28761[(2)]);
var state_28761__$1 = state_28761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28761__$1,inst_28759);
} else {
if((state_val_28762 === (12))){
var inst_28747 = (state_28761[(8)]);
var inst_28747__$1 = (state_28761[(2)]);
var inst_28748 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28747__$1);
var state_28761__$1 = (function (){var statearr_28770 = state_28761;
(statearr_28770[(8)] = inst_28747__$1);

return statearr_28770;
})();
if(cljs.core.truth_(inst_28748)){
var statearr_28771_28800 = state_28761__$1;
(statearr_28771_28800[(1)] = (13));

} else {
var statearr_28772_28801 = state_28761__$1;
(statearr_28772_28801[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28762 === (2))){
var inst_28724 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28725 = (0);
var state_28761__$1 = (function (){var statearr_28773 = state_28761;
(statearr_28773[(7)] = inst_28725);

(statearr_28773[(9)] = inst_28724);

return statearr_28773;
})();
var statearr_28774_28802 = state_28761__$1;
(statearr_28774_28802[(2)] = null);

(statearr_28774_28802[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28762 === (11))){
var inst_28725 = (state_28761[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28761,(10),Object,null,(9));
var inst_28734 = chs__$1.call(null,inst_28725);
var inst_28735 = done.call(null,inst_28725);
var inst_28736 = cljs.core.async.take_BANG_.call(null,inst_28734,inst_28735);
var state_28761__$1 = state_28761;
var statearr_28775_28803 = state_28761__$1;
(statearr_28775_28803[(2)] = inst_28736);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28761__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28762 === (9))){
var inst_28725 = (state_28761[(7)]);
var inst_28738 = (state_28761[(2)]);
var inst_28739 = (inst_28725 + (1));
var inst_28725__$1 = inst_28739;
var state_28761__$1 = (function (){var statearr_28776 = state_28761;
(statearr_28776[(10)] = inst_28738);

(statearr_28776[(7)] = inst_28725__$1);

return statearr_28776;
})();
var statearr_28777_28804 = state_28761__$1;
(statearr_28777_28804[(2)] = null);

(statearr_28777_28804[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28762 === (5))){
var inst_28745 = (state_28761[(2)]);
var state_28761__$1 = (function (){var statearr_28778 = state_28761;
(statearr_28778[(11)] = inst_28745);

return statearr_28778;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28761__$1,(12),dchan);
} else {
if((state_val_28762 === (14))){
var inst_28747 = (state_28761[(8)]);
var inst_28752 = cljs.core.apply.call(null,f,inst_28747);
var state_28761__$1 = state_28761;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28761__$1,(16),out,inst_28752);
} else {
if((state_val_28762 === (16))){
var inst_28754 = (state_28761[(2)]);
var state_28761__$1 = (function (){var statearr_28779 = state_28761;
(statearr_28779[(12)] = inst_28754);

return statearr_28779;
})();
var statearr_28780_28805 = state_28761__$1;
(statearr_28780_28805[(2)] = null);

(statearr_28780_28805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28762 === (10))){
var inst_28729 = (state_28761[(2)]);
var inst_28730 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28761__$1 = (function (){var statearr_28781 = state_28761;
(statearr_28781[(13)] = inst_28729);

return statearr_28781;
})();
var statearr_28782_28806 = state_28761__$1;
(statearr_28782_28806[(2)] = inst_28730);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28761__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28762 === (8))){
var inst_28743 = (state_28761[(2)]);
var state_28761__$1 = state_28761;
var statearr_28783_28807 = state_28761__$1;
(statearr_28783_28807[(2)] = inst_28743);

(statearr_28783_28807[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21646__auto___28792,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21584__auto__,c__21646__auto___28792,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21585__auto__ = null;
var cljs$core$async$state_machine__21585__auto____0 = (function (){
var statearr_28787 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28787[(0)] = cljs$core$async$state_machine__21585__auto__);

(statearr_28787[(1)] = (1));

return statearr_28787;
});
var cljs$core$async$state_machine__21585__auto____1 = (function (state_28761){
while(true){
var ret_value__21586__auto__ = (function (){try{while(true){
var result__21587__auto__ = switch__21584__auto__.call(null,state_28761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21587__auto__;
}
break;
}
}catch (e28788){if((e28788 instanceof Object)){
var ex__21588__auto__ = e28788;
var statearr_28789_28808 = state_28761;
(statearr_28789_28808[(5)] = ex__21588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28809 = state_28761;
state_28761 = G__28809;
continue;
} else {
return ret_value__21586__auto__;
}
break;
}
});
cljs$core$async$state_machine__21585__auto__ = function(state_28761){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21585__auto____1.call(this,state_28761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21585__auto____0;
cljs$core$async$state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21585__auto____1;
return cljs$core$async$state_machine__21585__auto__;
})()
;})(switch__21584__auto__,c__21646__auto___28792,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21648__auto__ = (function (){var statearr_28790 = f__21647__auto__.call(null);
(statearr_28790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21646__auto___28792);

return statearr_28790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21648__auto__);
});})(c__21646__auto___28792,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__28812 = arguments.length;
switch (G__28812) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21646__auto___28867 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21646__auto___28867,out){
return (function (){
var f__21647__auto__ = (function (){var switch__21584__auto__ = ((function (c__21646__auto___28867,out){
return (function (state_28842){
var state_val_28843 = (state_28842[(1)]);
if((state_val_28843 === (7))){
var inst_28822 = (state_28842[(7)]);
var inst_28821 = (state_28842[(8)]);
var inst_28821__$1 = (state_28842[(2)]);
var inst_28822__$1 = cljs.core.nth.call(null,inst_28821__$1,(0),null);
var inst_28823 = cljs.core.nth.call(null,inst_28821__$1,(1),null);
var inst_28824 = (inst_28822__$1 == null);
var state_28842__$1 = (function (){var statearr_28844 = state_28842;
(statearr_28844[(7)] = inst_28822__$1);

(statearr_28844[(9)] = inst_28823);

(statearr_28844[(8)] = inst_28821__$1);

return statearr_28844;
})();
if(cljs.core.truth_(inst_28824)){
var statearr_28845_28868 = state_28842__$1;
(statearr_28845_28868[(1)] = (8));

} else {
var statearr_28846_28869 = state_28842__$1;
(statearr_28846_28869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (1))){
var inst_28813 = cljs.core.vec.call(null,chs);
var inst_28814 = inst_28813;
var state_28842__$1 = (function (){var statearr_28847 = state_28842;
(statearr_28847[(10)] = inst_28814);

return statearr_28847;
})();
var statearr_28848_28870 = state_28842__$1;
(statearr_28848_28870[(2)] = null);

(statearr_28848_28870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (4))){
var inst_28814 = (state_28842[(10)]);
var state_28842__$1 = state_28842;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28842__$1,(7),inst_28814);
} else {
if((state_val_28843 === (6))){
var inst_28838 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
var statearr_28849_28871 = state_28842__$1;
(statearr_28849_28871[(2)] = inst_28838);

(statearr_28849_28871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (3))){
var inst_28840 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28842__$1,inst_28840);
} else {
if((state_val_28843 === (2))){
var inst_28814 = (state_28842[(10)]);
var inst_28816 = cljs.core.count.call(null,inst_28814);
var inst_28817 = (inst_28816 > (0));
var state_28842__$1 = state_28842;
if(cljs.core.truth_(inst_28817)){
var statearr_28851_28872 = state_28842__$1;
(statearr_28851_28872[(1)] = (4));

} else {
var statearr_28852_28873 = state_28842__$1;
(statearr_28852_28873[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (11))){
var inst_28814 = (state_28842[(10)]);
var inst_28831 = (state_28842[(2)]);
var tmp28850 = inst_28814;
var inst_28814__$1 = tmp28850;
var state_28842__$1 = (function (){var statearr_28853 = state_28842;
(statearr_28853[(11)] = inst_28831);

(statearr_28853[(10)] = inst_28814__$1);

return statearr_28853;
})();
var statearr_28854_28874 = state_28842__$1;
(statearr_28854_28874[(2)] = null);

(statearr_28854_28874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (9))){
var inst_28822 = (state_28842[(7)]);
var state_28842__$1 = state_28842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28842__$1,(11),out,inst_28822);
} else {
if((state_val_28843 === (5))){
var inst_28836 = cljs.core.async.close_BANG_.call(null,out);
var state_28842__$1 = state_28842;
var statearr_28855_28875 = state_28842__$1;
(statearr_28855_28875[(2)] = inst_28836);

(statearr_28855_28875[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (10))){
var inst_28834 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
var statearr_28856_28876 = state_28842__$1;
(statearr_28856_28876[(2)] = inst_28834);

(statearr_28856_28876[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (8))){
var inst_28822 = (state_28842[(7)]);
var inst_28814 = (state_28842[(10)]);
var inst_28823 = (state_28842[(9)]);
var inst_28821 = (state_28842[(8)]);
var inst_28826 = (function (){var c = inst_28823;
var v = inst_28822;
var vec__28819 = inst_28821;
var cs = inst_28814;
return ((function (c,v,vec__28819,cs,inst_28822,inst_28814,inst_28823,inst_28821,state_val_28843,c__21646__auto___28867,out){
return (function (p1__28810_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28810_SHARP_);
});
;})(c,v,vec__28819,cs,inst_28822,inst_28814,inst_28823,inst_28821,state_val_28843,c__21646__auto___28867,out))
})();
var inst_28827 = cljs.core.filterv.call(null,inst_28826,inst_28814);
var inst_28814__$1 = inst_28827;
var state_28842__$1 = (function (){var statearr_28857 = state_28842;
(statearr_28857[(10)] = inst_28814__$1);

return statearr_28857;
})();
var statearr_28858_28877 = state_28842__$1;
(statearr_28858_28877[(2)] = null);

(statearr_28858_28877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__21646__auto___28867,out))
;
return ((function (switch__21584__auto__,c__21646__auto___28867,out){
return (function() {
var cljs$core$async$state_machine__21585__auto__ = null;
var cljs$core$async$state_machine__21585__auto____0 = (function (){
var statearr_28862 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28862[(0)] = cljs$core$async$state_machine__21585__auto__);

(statearr_28862[(1)] = (1));

return statearr_28862;
});
var cljs$core$async$state_machine__21585__auto____1 = (function (state_28842){
while(true){
var ret_value__21586__auto__ = (function (){try{while(true){
var result__21587__auto__ = switch__21584__auto__.call(null,state_28842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21587__auto__;
}
break;
}
}catch (e28863){if((e28863 instanceof Object)){
var ex__21588__auto__ = e28863;
var statearr_28864_28878 = state_28842;
(statearr_28864_28878[(5)] = ex__21588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28879 = state_28842;
state_28842 = G__28879;
continue;
} else {
return ret_value__21586__auto__;
}
break;
}
});
cljs$core$async$state_machine__21585__auto__ = function(state_28842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21585__auto____1.call(this,state_28842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21585__auto____0;
cljs$core$async$state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21585__auto____1;
return cljs$core$async$state_machine__21585__auto__;
})()
;})(switch__21584__auto__,c__21646__auto___28867,out))
})();
var state__21648__auto__ = (function (){var statearr_28865 = f__21647__auto__.call(null);
(statearr_28865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21646__auto___28867);

return statearr_28865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21648__auto__);
});})(c__21646__auto___28867,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__28881 = arguments.length;
switch (G__28881) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21646__auto___28929 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21646__auto___28929,out){
return (function (){
var f__21647__auto__ = (function (){var switch__21584__auto__ = ((function (c__21646__auto___28929,out){
return (function (state_28905){
var state_val_28906 = (state_28905[(1)]);
if((state_val_28906 === (7))){
var inst_28887 = (state_28905[(7)]);
var inst_28887__$1 = (state_28905[(2)]);
var inst_28888 = (inst_28887__$1 == null);
var inst_28889 = cljs.core.not.call(null,inst_28888);
var state_28905__$1 = (function (){var statearr_28907 = state_28905;
(statearr_28907[(7)] = inst_28887__$1);

return statearr_28907;
})();
if(inst_28889){
var statearr_28908_28930 = state_28905__$1;
(statearr_28908_28930[(1)] = (8));

} else {
var statearr_28909_28931 = state_28905__$1;
(statearr_28909_28931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28906 === (1))){
var inst_28882 = (0);
var state_28905__$1 = (function (){var statearr_28910 = state_28905;
(statearr_28910[(8)] = inst_28882);

return statearr_28910;
})();
var statearr_28911_28932 = state_28905__$1;
(statearr_28911_28932[(2)] = null);

(statearr_28911_28932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28906 === (4))){
var state_28905__$1 = state_28905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28905__$1,(7),ch);
} else {
if((state_val_28906 === (6))){
var inst_28900 = (state_28905[(2)]);
var state_28905__$1 = state_28905;
var statearr_28912_28933 = state_28905__$1;
(statearr_28912_28933[(2)] = inst_28900);

(statearr_28912_28933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28906 === (3))){
var inst_28902 = (state_28905[(2)]);
var inst_28903 = cljs.core.async.close_BANG_.call(null,out);
var state_28905__$1 = (function (){var statearr_28913 = state_28905;
(statearr_28913[(9)] = inst_28902);

return statearr_28913;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28905__$1,inst_28903);
} else {
if((state_val_28906 === (2))){
var inst_28882 = (state_28905[(8)]);
var inst_28884 = (inst_28882 < n);
var state_28905__$1 = state_28905;
if(cljs.core.truth_(inst_28884)){
var statearr_28914_28934 = state_28905__$1;
(statearr_28914_28934[(1)] = (4));

} else {
var statearr_28915_28935 = state_28905__$1;
(statearr_28915_28935[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28906 === (11))){
var inst_28882 = (state_28905[(8)]);
var inst_28892 = (state_28905[(2)]);
var inst_28893 = (inst_28882 + (1));
var inst_28882__$1 = inst_28893;
var state_28905__$1 = (function (){var statearr_28916 = state_28905;
(statearr_28916[(8)] = inst_28882__$1);

(statearr_28916[(10)] = inst_28892);

return statearr_28916;
})();
var statearr_28917_28936 = state_28905__$1;
(statearr_28917_28936[(2)] = null);

(statearr_28917_28936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28906 === (9))){
var state_28905__$1 = state_28905;
var statearr_28918_28937 = state_28905__$1;
(statearr_28918_28937[(2)] = null);

(statearr_28918_28937[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28906 === (5))){
var state_28905__$1 = state_28905;
var statearr_28919_28938 = state_28905__$1;
(statearr_28919_28938[(2)] = null);

(statearr_28919_28938[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28906 === (10))){
var inst_28897 = (state_28905[(2)]);
var state_28905__$1 = state_28905;
var statearr_28920_28939 = state_28905__$1;
(statearr_28920_28939[(2)] = inst_28897);

(statearr_28920_28939[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28906 === (8))){
var inst_28887 = (state_28905[(7)]);
var state_28905__$1 = state_28905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28905__$1,(11),out,inst_28887);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__21646__auto___28929,out))
;
return ((function (switch__21584__auto__,c__21646__auto___28929,out){
return (function() {
var cljs$core$async$state_machine__21585__auto__ = null;
var cljs$core$async$state_machine__21585__auto____0 = (function (){
var statearr_28924 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28924[(0)] = cljs$core$async$state_machine__21585__auto__);

(statearr_28924[(1)] = (1));

return statearr_28924;
});
var cljs$core$async$state_machine__21585__auto____1 = (function (state_28905){
while(true){
var ret_value__21586__auto__ = (function (){try{while(true){
var result__21587__auto__ = switch__21584__auto__.call(null,state_28905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21587__auto__;
}
break;
}
}catch (e28925){if((e28925 instanceof Object)){
var ex__21588__auto__ = e28925;
var statearr_28926_28940 = state_28905;
(statearr_28926_28940[(5)] = ex__21588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28941 = state_28905;
state_28905 = G__28941;
continue;
} else {
return ret_value__21586__auto__;
}
break;
}
});
cljs$core$async$state_machine__21585__auto__ = function(state_28905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21585__auto____1.call(this,state_28905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21585__auto____0;
cljs$core$async$state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21585__auto____1;
return cljs$core$async$state_machine__21585__auto__;
})()
;})(switch__21584__auto__,c__21646__auto___28929,out))
})();
var state__21648__auto__ = (function (){var statearr_28927 = f__21647__auto__.call(null);
(statearr_28927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21646__auto___28929);

return statearr_28927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21648__auto__);
});})(c__21646__auto___28929,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t28949 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28949 = (function (ch,f,map_LT_,meta28950){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28950 = meta28950;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28949.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28949.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t28949.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28949.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t28952 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28952 = (function (fn1,_,meta28950,map_LT_,f,ch,meta28953){
this.fn1 = fn1;
this._ = _;
this.meta28950 = meta28950;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28953 = meta28953;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28952.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28952.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t28952.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28942_SHARP_){
return f1.call(null,(((p1__28942_SHARP_ == null))?null:self__.f.call(null,p1__28942_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t28952.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28954){
var self__ = this;
var _28954__$1 = this;
return self__.meta28953;
});})(___$1))
;

cljs.core.async.t28952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28954,meta28953__$1){
var self__ = this;
var _28954__$1 = this;
return (new cljs.core.async.t28952(self__.fn1,self__._,self__.meta28950,self__.map_LT_,self__.f,self__.ch,meta28953__$1));
});})(___$1))
;

cljs.core.async.t28952.cljs$lang$type = true;

cljs.core.async.t28952.cljs$lang$ctorStr = "cljs.core.async/t28952";

cljs.core.async.t28952.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t28952");
});})(___$1))
;

cljs.core.async.__GT_t28952 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t28952(fn1__$1,___$2,meta28950__$1,map_LT___$1,f__$1,ch__$1,meta28953){
return (new cljs.core.async.t28952(fn1__$1,___$2,meta28950__$1,map_LT___$1,f__$1,ch__$1,meta28953));
});})(___$1))
;

}

return (new cljs.core.async.t28952(fn1,___$1,self__.meta28950,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18104__auto__ = ret;
if(cljs.core.truth_(and__18104__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18104__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t28949.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28949.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28949.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28951){
var self__ = this;
var _28951__$1 = this;
return self__.meta28950;
});

cljs.core.async.t28949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28951,meta28950__$1){
var self__ = this;
var _28951__$1 = this;
return (new cljs.core.async.t28949(self__.ch,self__.f,self__.map_LT_,meta28950__$1));
});

cljs.core.async.t28949.cljs$lang$type = true;

cljs.core.async.t28949.cljs$lang$ctorStr = "cljs.core.async/t28949";

cljs.core.async.t28949.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t28949");
});

cljs.core.async.__GT_t28949 = (function cljs$core$async$map_LT__$___GT_t28949(ch__$1,f__$1,map_LT___$1,meta28950){
return (new cljs.core.async.t28949(ch__$1,f__$1,map_LT___$1,meta28950));
});

}

return (new cljs.core.async.t28949(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t28958 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28958 = (function (ch,f,map_GT_,meta28959){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta28959 = meta28959;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28958.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28958.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t28958.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28958.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28958.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28958.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28960){
var self__ = this;
var _28960__$1 = this;
return self__.meta28959;
});

cljs.core.async.t28958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28960,meta28959__$1){
var self__ = this;
var _28960__$1 = this;
return (new cljs.core.async.t28958(self__.ch,self__.f,self__.map_GT_,meta28959__$1));
});

cljs.core.async.t28958.cljs$lang$type = true;

cljs.core.async.t28958.cljs$lang$ctorStr = "cljs.core.async/t28958";

cljs.core.async.t28958.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t28958");
});

cljs.core.async.__GT_t28958 = (function cljs$core$async$map_GT__$___GT_t28958(ch__$1,f__$1,map_GT___$1,meta28959){
return (new cljs.core.async.t28958(ch__$1,f__$1,map_GT___$1,meta28959));
});

}

return (new cljs.core.async.t28958(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t28964 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28964 = (function (ch,p,filter_GT_,meta28965){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta28965 = meta28965;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28964.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28964.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t28964.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28964.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28964.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28964.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28964.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28966){
var self__ = this;
var _28966__$1 = this;
return self__.meta28965;
});

cljs.core.async.t28964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28966,meta28965__$1){
var self__ = this;
var _28966__$1 = this;
return (new cljs.core.async.t28964(self__.ch,self__.p,self__.filter_GT_,meta28965__$1));
});

cljs.core.async.t28964.cljs$lang$type = true;

cljs.core.async.t28964.cljs$lang$ctorStr = "cljs.core.async/t28964";

cljs.core.async.t28964.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t28964");
});

cljs.core.async.__GT_t28964 = (function cljs$core$async$filter_GT__$___GT_t28964(ch__$1,p__$1,filter_GT___$1,meta28965){
return (new cljs.core.async.t28964(ch__$1,p__$1,filter_GT___$1,meta28965));
});

}

return (new cljs.core.async.t28964(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__28968 = arguments.length;
switch (G__28968) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21646__auto___29011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21646__auto___29011,out){
return (function (){
var f__21647__auto__ = (function (){var switch__21584__auto__ = ((function (c__21646__auto___29011,out){
return (function (state_28989){
var state_val_28990 = (state_28989[(1)]);
if((state_val_28990 === (7))){
var inst_28985 = (state_28989[(2)]);
var state_28989__$1 = state_28989;
var statearr_28991_29012 = state_28989__$1;
(statearr_28991_29012[(2)] = inst_28985);

(statearr_28991_29012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28990 === (1))){
var state_28989__$1 = state_28989;
var statearr_28992_29013 = state_28989__$1;
(statearr_28992_29013[(2)] = null);

(statearr_28992_29013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28990 === (4))){
var inst_28971 = (state_28989[(7)]);
var inst_28971__$1 = (state_28989[(2)]);
var inst_28972 = (inst_28971__$1 == null);
var state_28989__$1 = (function (){var statearr_28993 = state_28989;
(statearr_28993[(7)] = inst_28971__$1);

return statearr_28993;
})();
if(cljs.core.truth_(inst_28972)){
var statearr_28994_29014 = state_28989__$1;
(statearr_28994_29014[(1)] = (5));

} else {
var statearr_28995_29015 = state_28989__$1;
(statearr_28995_29015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28990 === (6))){
var inst_28971 = (state_28989[(7)]);
var inst_28976 = p.call(null,inst_28971);
var state_28989__$1 = state_28989;
if(cljs.core.truth_(inst_28976)){
var statearr_28996_29016 = state_28989__$1;
(statearr_28996_29016[(1)] = (8));

} else {
var statearr_28997_29017 = state_28989__$1;
(statearr_28997_29017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28990 === (3))){
var inst_28987 = (state_28989[(2)]);
var state_28989__$1 = state_28989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28989__$1,inst_28987);
} else {
if((state_val_28990 === (2))){
var state_28989__$1 = state_28989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28989__$1,(4),ch);
} else {
if((state_val_28990 === (11))){
var inst_28979 = (state_28989[(2)]);
var state_28989__$1 = state_28989;
var statearr_28998_29018 = state_28989__$1;
(statearr_28998_29018[(2)] = inst_28979);

(statearr_28998_29018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28990 === (9))){
var state_28989__$1 = state_28989;
var statearr_28999_29019 = state_28989__$1;
(statearr_28999_29019[(2)] = null);

(statearr_28999_29019[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28990 === (5))){
var inst_28974 = cljs.core.async.close_BANG_.call(null,out);
var state_28989__$1 = state_28989;
var statearr_29000_29020 = state_28989__$1;
(statearr_29000_29020[(2)] = inst_28974);

(statearr_29000_29020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28990 === (10))){
var inst_28982 = (state_28989[(2)]);
var state_28989__$1 = (function (){var statearr_29001 = state_28989;
(statearr_29001[(8)] = inst_28982);

return statearr_29001;
})();
var statearr_29002_29021 = state_28989__$1;
(statearr_29002_29021[(2)] = null);

(statearr_29002_29021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28990 === (8))){
var inst_28971 = (state_28989[(7)]);
var state_28989__$1 = state_28989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28989__$1,(11),out,inst_28971);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__21646__auto___29011,out))
;
return ((function (switch__21584__auto__,c__21646__auto___29011,out){
return (function() {
var cljs$core$async$state_machine__21585__auto__ = null;
var cljs$core$async$state_machine__21585__auto____0 = (function (){
var statearr_29006 = [null,null,null,null,null,null,null,null,null];
(statearr_29006[(0)] = cljs$core$async$state_machine__21585__auto__);

(statearr_29006[(1)] = (1));

return statearr_29006;
});
var cljs$core$async$state_machine__21585__auto____1 = (function (state_28989){
while(true){
var ret_value__21586__auto__ = (function (){try{while(true){
var result__21587__auto__ = switch__21584__auto__.call(null,state_28989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21587__auto__;
}
break;
}
}catch (e29007){if((e29007 instanceof Object)){
var ex__21588__auto__ = e29007;
var statearr_29008_29022 = state_28989;
(statearr_29008_29022[(5)] = ex__21588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29023 = state_28989;
state_28989 = G__29023;
continue;
} else {
return ret_value__21586__auto__;
}
break;
}
});
cljs$core$async$state_machine__21585__auto__ = function(state_28989){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21585__auto____1.call(this,state_28989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21585__auto____0;
cljs$core$async$state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21585__auto____1;
return cljs$core$async$state_machine__21585__auto__;
})()
;})(switch__21584__auto__,c__21646__auto___29011,out))
})();
var state__21648__auto__ = (function (){var statearr_29009 = f__21647__auto__.call(null);
(statearr_29009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21646__auto___29011);

return statearr_29009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21648__auto__);
});})(c__21646__auto___29011,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__29025 = arguments.length;
switch (G__29025) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21646__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21646__auto__){
return (function (){
var f__21647__auto__ = (function (){var switch__21584__auto__ = ((function (c__21646__auto__){
return (function (state_29192){
var state_val_29193 = (state_29192[(1)]);
if((state_val_29193 === (7))){
var inst_29188 = (state_29192[(2)]);
var state_29192__$1 = state_29192;
var statearr_29194_29235 = state_29192__$1;
(statearr_29194_29235[(2)] = inst_29188);

(statearr_29194_29235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (20))){
var inst_29158 = (state_29192[(7)]);
var inst_29169 = (state_29192[(2)]);
var inst_29170 = cljs.core.next.call(null,inst_29158);
var inst_29144 = inst_29170;
var inst_29145 = null;
var inst_29146 = (0);
var inst_29147 = (0);
var state_29192__$1 = (function (){var statearr_29195 = state_29192;
(statearr_29195[(8)] = inst_29147);

(statearr_29195[(9)] = inst_29146);

(statearr_29195[(10)] = inst_29145);

(statearr_29195[(11)] = inst_29144);

(statearr_29195[(12)] = inst_29169);

return statearr_29195;
})();
var statearr_29196_29236 = state_29192__$1;
(statearr_29196_29236[(2)] = null);

(statearr_29196_29236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (1))){
var state_29192__$1 = state_29192;
var statearr_29197_29237 = state_29192__$1;
(statearr_29197_29237[(2)] = null);

(statearr_29197_29237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (4))){
var inst_29133 = (state_29192[(13)]);
var inst_29133__$1 = (state_29192[(2)]);
var inst_29134 = (inst_29133__$1 == null);
var state_29192__$1 = (function (){var statearr_29198 = state_29192;
(statearr_29198[(13)] = inst_29133__$1);

return statearr_29198;
})();
if(cljs.core.truth_(inst_29134)){
var statearr_29199_29238 = state_29192__$1;
(statearr_29199_29238[(1)] = (5));

} else {
var statearr_29200_29239 = state_29192__$1;
(statearr_29200_29239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (15))){
var state_29192__$1 = state_29192;
var statearr_29204_29240 = state_29192__$1;
(statearr_29204_29240[(2)] = null);

(statearr_29204_29240[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (21))){
var state_29192__$1 = state_29192;
var statearr_29205_29241 = state_29192__$1;
(statearr_29205_29241[(2)] = null);

(statearr_29205_29241[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (13))){
var inst_29147 = (state_29192[(8)]);
var inst_29146 = (state_29192[(9)]);
var inst_29145 = (state_29192[(10)]);
var inst_29144 = (state_29192[(11)]);
var inst_29154 = (state_29192[(2)]);
var inst_29155 = (inst_29147 + (1));
var tmp29201 = inst_29146;
var tmp29202 = inst_29145;
var tmp29203 = inst_29144;
var inst_29144__$1 = tmp29203;
var inst_29145__$1 = tmp29202;
var inst_29146__$1 = tmp29201;
var inst_29147__$1 = inst_29155;
var state_29192__$1 = (function (){var statearr_29206 = state_29192;
(statearr_29206[(8)] = inst_29147__$1);

(statearr_29206[(9)] = inst_29146__$1);

(statearr_29206[(14)] = inst_29154);

(statearr_29206[(10)] = inst_29145__$1);

(statearr_29206[(11)] = inst_29144__$1);

return statearr_29206;
})();
var statearr_29207_29242 = state_29192__$1;
(statearr_29207_29242[(2)] = null);

(statearr_29207_29242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (22))){
var state_29192__$1 = state_29192;
var statearr_29208_29243 = state_29192__$1;
(statearr_29208_29243[(2)] = null);

(statearr_29208_29243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (6))){
var inst_29133 = (state_29192[(13)]);
var inst_29142 = f.call(null,inst_29133);
var inst_29143 = cljs.core.seq.call(null,inst_29142);
var inst_29144 = inst_29143;
var inst_29145 = null;
var inst_29146 = (0);
var inst_29147 = (0);
var state_29192__$1 = (function (){var statearr_29209 = state_29192;
(statearr_29209[(8)] = inst_29147);

(statearr_29209[(9)] = inst_29146);

(statearr_29209[(10)] = inst_29145);

(statearr_29209[(11)] = inst_29144);

return statearr_29209;
})();
var statearr_29210_29244 = state_29192__$1;
(statearr_29210_29244[(2)] = null);

(statearr_29210_29244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (17))){
var inst_29158 = (state_29192[(7)]);
var inst_29162 = cljs.core.chunk_first.call(null,inst_29158);
var inst_29163 = cljs.core.chunk_rest.call(null,inst_29158);
var inst_29164 = cljs.core.count.call(null,inst_29162);
var inst_29144 = inst_29163;
var inst_29145 = inst_29162;
var inst_29146 = inst_29164;
var inst_29147 = (0);
var state_29192__$1 = (function (){var statearr_29211 = state_29192;
(statearr_29211[(8)] = inst_29147);

(statearr_29211[(9)] = inst_29146);

(statearr_29211[(10)] = inst_29145);

(statearr_29211[(11)] = inst_29144);

return statearr_29211;
})();
var statearr_29212_29245 = state_29192__$1;
(statearr_29212_29245[(2)] = null);

(statearr_29212_29245[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (3))){
var inst_29190 = (state_29192[(2)]);
var state_29192__$1 = state_29192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29192__$1,inst_29190);
} else {
if((state_val_29193 === (12))){
var inst_29178 = (state_29192[(2)]);
var state_29192__$1 = state_29192;
var statearr_29213_29246 = state_29192__$1;
(statearr_29213_29246[(2)] = inst_29178);

(statearr_29213_29246[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (2))){
var state_29192__$1 = state_29192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29192__$1,(4),in$);
} else {
if((state_val_29193 === (23))){
var inst_29186 = (state_29192[(2)]);
var state_29192__$1 = state_29192;
var statearr_29214_29247 = state_29192__$1;
(statearr_29214_29247[(2)] = inst_29186);

(statearr_29214_29247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (19))){
var inst_29173 = (state_29192[(2)]);
var state_29192__$1 = state_29192;
var statearr_29215_29248 = state_29192__$1;
(statearr_29215_29248[(2)] = inst_29173);

(statearr_29215_29248[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (11))){
var inst_29158 = (state_29192[(7)]);
var inst_29144 = (state_29192[(11)]);
var inst_29158__$1 = cljs.core.seq.call(null,inst_29144);
var state_29192__$1 = (function (){var statearr_29216 = state_29192;
(statearr_29216[(7)] = inst_29158__$1);

return statearr_29216;
})();
if(inst_29158__$1){
var statearr_29217_29249 = state_29192__$1;
(statearr_29217_29249[(1)] = (14));

} else {
var statearr_29218_29250 = state_29192__$1;
(statearr_29218_29250[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (9))){
var inst_29180 = (state_29192[(2)]);
var inst_29181 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29192__$1 = (function (){var statearr_29219 = state_29192;
(statearr_29219[(15)] = inst_29180);

return statearr_29219;
})();
if(cljs.core.truth_(inst_29181)){
var statearr_29220_29251 = state_29192__$1;
(statearr_29220_29251[(1)] = (21));

} else {
var statearr_29221_29252 = state_29192__$1;
(statearr_29221_29252[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (5))){
var inst_29136 = cljs.core.async.close_BANG_.call(null,out);
var state_29192__$1 = state_29192;
var statearr_29222_29253 = state_29192__$1;
(statearr_29222_29253[(2)] = inst_29136);

(statearr_29222_29253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (14))){
var inst_29158 = (state_29192[(7)]);
var inst_29160 = cljs.core.chunked_seq_QMARK_.call(null,inst_29158);
var state_29192__$1 = state_29192;
if(inst_29160){
var statearr_29223_29254 = state_29192__$1;
(statearr_29223_29254[(1)] = (17));

} else {
var statearr_29224_29255 = state_29192__$1;
(statearr_29224_29255[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (16))){
var inst_29176 = (state_29192[(2)]);
var state_29192__$1 = state_29192;
var statearr_29225_29256 = state_29192__$1;
(statearr_29225_29256[(2)] = inst_29176);

(statearr_29225_29256[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (10))){
var inst_29147 = (state_29192[(8)]);
var inst_29145 = (state_29192[(10)]);
var inst_29152 = cljs.core._nth.call(null,inst_29145,inst_29147);
var state_29192__$1 = state_29192;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29192__$1,(13),out,inst_29152);
} else {
if((state_val_29193 === (18))){
var inst_29158 = (state_29192[(7)]);
var inst_29167 = cljs.core.first.call(null,inst_29158);
var state_29192__$1 = state_29192;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29192__$1,(20),out,inst_29167);
} else {
if((state_val_29193 === (8))){
var inst_29147 = (state_29192[(8)]);
var inst_29146 = (state_29192[(9)]);
var inst_29149 = (inst_29147 < inst_29146);
var inst_29150 = inst_29149;
var state_29192__$1 = state_29192;
if(cljs.core.truth_(inst_29150)){
var statearr_29226_29257 = state_29192__$1;
(statearr_29226_29257[(1)] = (10));

} else {
var statearr_29227_29258 = state_29192__$1;
(statearr_29227_29258[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21646__auto__))
;
return ((function (switch__21584__auto__,c__21646__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21585__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21585__auto____0 = (function (){
var statearr_29231 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29231[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21585__auto__);

(statearr_29231[(1)] = (1));

return statearr_29231;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21585__auto____1 = (function (state_29192){
while(true){
var ret_value__21586__auto__ = (function (){try{while(true){
var result__21587__auto__ = switch__21584__auto__.call(null,state_29192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21587__auto__;
}
break;
}
}catch (e29232){if((e29232 instanceof Object)){
var ex__21588__auto__ = e29232;
var statearr_29233_29259 = state_29192;
(statearr_29233_29259[(5)] = ex__21588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29260 = state_29192;
state_29192 = G__29260;
continue;
} else {
return ret_value__21586__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21585__auto__ = function(state_29192){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21585__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21585__auto____1.call(this,state_29192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21585__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21585__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21585__auto__;
})()
;})(switch__21584__auto__,c__21646__auto__))
})();
var state__21648__auto__ = (function (){var statearr_29234 = f__21647__auto__.call(null);
(statearr_29234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21646__auto__);

return statearr_29234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21648__auto__);
});})(c__21646__auto__))
);

return c__21646__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__29262 = arguments.length;
switch (G__29262) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__29265 = arguments.length;
switch (G__29265) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__29268 = arguments.length;
switch (G__29268) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21646__auto___29318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21646__auto___29318,out){
return (function (){
var f__21647__auto__ = (function (){var switch__21584__auto__ = ((function (c__21646__auto___29318,out){
return (function (state_29292){
var state_val_29293 = (state_29292[(1)]);
if((state_val_29293 === (7))){
var inst_29287 = (state_29292[(2)]);
var state_29292__$1 = state_29292;
var statearr_29294_29319 = state_29292__$1;
(statearr_29294_29319[(2)] = inst_29287);

(statearr_29294_29319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29293 === (1))){
var inst_29269 = null;
var state_29292__$1 = (function (){var statearr_29295 = state_29292;
(statearr_29295[(7)] = inst_29269);

return statearr_29295;
})();
var statearr_29296_29320 = state_29292__$1;
(statearr_29296_29320[(2)] = null);

(statearr_29296_29320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29293 === (4))){
var inst_29272 = (state_29292[(8)]);
var inst_29272__$1 = (state_29292[(2)]);
var inst_29273 = (inst_29272__$1 == null);
var inst_29274 = cljs.core.not.call(null,inst_29273);
var state_29292__$1 = (function (){var statearr_29297 = state_29292;
(statearr_29297[(8)] = inst_29272__$1);

return statearr_29297;
})();
if(inst_29274){
var statearr_29298_29321 = state_29292__$1;
(statearr_29298_29321[(1)] = (5));

} else {
var statearr_29299_29322 = state_29292__$1;
(statearr_29299_29322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29293 === (6))){
var state_29292__$1 = state_29292;
var statearr_29300_29323 = state_29292__$1;
(statearr_29300_29323[(2)] = null);

(statearr_29300_29323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29293 === (3))){
var inst_29289 = (state_29292[(2)]);
var inst_29290 = cljs.core.async.close_BANG_.call(null,out);
var state_29292__$1 = (function (){var statearr_29301 = state_29292;
(statearr_29301[(9)] = inst_29289);

return statearr_29301;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29292__$1,inst_29290);
} else {
if((state_val_29293 === (2))){
var state_29292__$1 = state_29292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29292__$1,(4),ch);
} else {
if((state_val_29293 === (11))){
var inst_29272 = (state_29292[(8)]);
var inst_29281 = (state_29292[(2)]);
var inst_29269 = inst_29272;
var state_29292__$1 = (function (){var statearr_29302 = state_29292;
(statearr_29302[(10)] = inst_29281);

(statearr_29302[(7)] = inst_29269);

return statearr_29302;
})();
var statearr_29303_29324 = state_29292__$1;
(statearr_29303_29324[(2)] = null);

(statearr_29303_29324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29293 === (9))){
var inst_29272 = (state_29292[(8)]);
var state_29292__$1 = state_29292;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29292__$1,(11),out,inst_29272);
} else {
if((state_val_29293 === (5))){
var inst_29272 = (state_29292[(8)]);
var inst_29269 = (state_29292[(7)]);
var inst_29276 = cljs.core._EQ_.call(null,inst_29272,inst_29269);
var state_29292__$1 = state_29292;
if(inst_29276){
var statearr_29305_29325 = state_29292__$1;
(statearr_29305_29325[(1)] = (8));

} else {
var statearr_29306_29326 = state_29292__$1;
(statearr_29306_29326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29293 === (10))){
var inst_29284 = (state_29292[(2)]);
var state_29292__$1 = state_29292;
var statearr_29307_29327 = state_29292__$1;
(statearr_29307_29327[(2)] = inst_29284);

(statearr_29307_29327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29293 === (8))){
var inst_29269 = (state_29292[(7)]);
var tmp29304 = inst_29269;
var inst_29269__$1 = tmp29304;
var state_29292__$1 = (function (){var statearr_29308 = state_29292;
(statearr_29308[(7)] = inst_29269__$1);

return statearr_29308;
})();
var statearr_29309_29328 = state_29292__$1;
(statearr_29309_29328[(2)] = null);

(statearr_29309_29328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__21646__auto___29318,out))
;
return ((function (switch__21584__auto__,c__21646__auto___29318,out){
return (function() {
var cljs$core$async$state_machine__21585__auto__ = null;
var cljs$core$async$state_machine__21585__auto____0 = (function (){
var statearr_29313 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29313[(0)] = cljs$core$async$state_machine__21585__auto__);

(statearr_29313[(1)] = (1));

return statearr_29313;
});
var cljs$core$async$state_machine__21585__auto____1 = (function (state_29292){
while(true){
var ret_value__21586__auto__ = (function (){try{while(true){
var result__21587__auto__ = switch__21584__auto__.call(null,state_29292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21587__auto__;
}
break;
}
}catch (e29314){if((e29314 instanceof Object)){
var ex__21588__auto__ = e29314;
var statearr_29315_29329 = state_29292;
(statearr_29315_29329[(5)] = ex__21588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29330 = state_29292;
state_29292 = G__29330;
continue;
} else {
return ret_value__21586__auto__;
}
break;
}
});
cljs$core$async$state_machine__21585__auto__ = function(state_29292){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21585__auto____1.call(this,state_29292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21585__auto____0;
cljs$core$async$state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21585__auto____1;
return cljs$core$async$state_machine__21585__auto__;
})()
;})(switch__21584__auto__,c__21646__auto___29318,out))
})();
var state__21648__auto__ = (function (){var statearr_29316 = f__21647__auto__.call(null);
(statearr_29316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21646__auto___29318);

return statearr_29316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21648__auto__);
});})(c__21646__auto___29318,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__29332 = arguments.length;
switch (G__29332) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21646__auto___29401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21646__auto___29401,out){
return (function (){
var f__21647__auto__ = (function (){var switch__21584__auto__ = ((function (c__21646__auto___29401,out){
return (function (state_29370){
var state_val_29371 = (state_29370[(1)]);
if((state_val_29371 === (7))){
var inst_29366 = (state_29370[(2)]);
var state_29370__$1 = state_29370;
var statearr_29372_29402 = state_29370__$1;
(statearr_29372_29402[(2)] = inst_29366);

(statearr_29372_29402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (1))){
var inst_29333 = (new Array(n));
var inst_29334 = inst_29333;
var inst_29335 = (0);
var state_29370__$1 = (function (){var statearr_29373 = state_29370;
(statearr_29373[(7)] = inst_29334);

(statearr_29373[(8)] = inst_29335);

return statearr_29373;
})();
var statearr_29374_29403 = state_29370__$1;
(statearr_29374_29403[(2)] = null);

(statearr_29374_29403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (4))){
var inst_29338 = (state_29370[(9)]);
var inst_29338__$1 = (state_29370[(2)]);
var inst_29339 = (inst_29338__$1 == null);
var inst_29340 = cljs.core.not.call(null,inst_29339);
var state_29370__$1 = (function (){var statearr_29375 = state_29370;
(statearr_29375[(9)] = inst_29338__$1);

return statearr_29375;
})();
if(inst_29340){
var statearr_29376_29404 = state_29370__$1;
(statearr_29376_29404[(1)] = (5));

} else {
var statearr_29377_29405 = state_29370__$1;
(statearr_29377_29405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (15))){
var inst_29360 = (state_29370[(2)]);
var state_29370__$1 = state_29370;
var statearr_29378_29406 = state_29370__$1;
(statearr_29378_29406[(2)] = inst_29360);

(statearr_29378_29406[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (13))){
var state_29370__$1 = state_29370;
var statearr_29379_29407 = state_29370__$1;
(statearr_29379_29407[(2)] = null);

(statearr_29379_29407[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (6))){
var inst_29335 = (state_29370[(8)]);
var inst_29356 = (inst_29335 > (0));
var state_29370__$1 = state_29370;
if(cljs.core.truth_(inst_29356)){
var statearr_29380_29408 = state_29370__$1;
(statearr_29380_29408[(1)] = (12));

} else {
var statearr_29381_29409 = state_29370__$1;
(statearr_29381_29409[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (3))){
var inst_29368 = (state_29370[(2)]);
var state_29370__$1 = state_29370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29370__$1,inst_29368);
} else {
if((state_val_29371 === (12))){
var inst_29334 = (state_29370[(7)]);
var inst_29358 = cljs.core.vec.call(null,inst_29334);
var state_29370__$1 = state_29370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29370__$1,(15),out,inst_29358);
} else {
if((state_val_29371 === (2))){
var state_29370__$1 = state_29370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29370__$1,(4),ch);
} else {
if((state_val_29371 === (11))){
var inst_29350 = (state_29370[(2)]);
var inst_29351 = (new Array(n));
var inst_29334 = inst_29351;
var inst_29335 = (0);
var state_29370__$1 = (function (){var statearr_29382 = state_29370;
(statearr_29382[(7)] = inst_29334);

(statearr_29382[(10)] = inst_29350);

(statearr_29382[(8)] = inst_29335);

return statearr_29382;
})();
var statearr_29383_29410 = state_29370__$1;
(statearr_29383_29410[(2)] = null);

(statearr_29383_29410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (9))){
var inst_29334 = (state_29370[(7)]);
var inst_29348 = cljs.core.vec.call(null,inst_29334);
var state_29370__$1 = state_29370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29370__$1,(11),out,inst_29348);
} else {
if((state_val_29371 === (5))){
var inst_29334 = (state_29370[(7)]);
var inst_29335 = (state_29370[(8)]);
var inst_29343 = (state_29370[(11)]);
var inst_29338 = (state_29370[(9)]);
var inst_29342 = (inst_29334[inst_29335] = inst_29338);
var inst_29343__$1 = (inst_29335 + (1));
var inst_29344 = (inst_29343__$1 < n);
var state_29370__$1 = (function (){var statearr_29384 = state_29370;
(statearr_29384[(11)] = inst_29343__$1);

(statearr_29384[(12)] = inst_29342);

return statearr_29384;
})();
if(cljs.core.truth_(inst_29344)){
var statearr_29385_29411 = state_29370__$1;
(statearr_29385_29411[(1)] = (8));

} else {
var statearr_29386_29412 = state_29370__$1;
(statearr_29386_29412[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (14))){
var inst_29363 = (state_29370[(2)]);
var inst_29364 = cljs.core.async.close_BANG_.call(null,out);
var state_29370__$1 = (function (){var statearr_29388 = state_29370;
(statearr_29388[(13)] = inst_29363);

return statearr_29388;
})();
var statearr_29389_29413 = state_29370__$1;
(statearr_29389_29413[(2)] = inst_29364);

(statearr_29389_29413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (10))){
var inst_29354 = (state_29370[(2)]);
var state_29370__$1 = state_29370;
var statearr_29390_29414 = state_29370__$1;
(statearr_29390_29414[(2)] = inst_29354);

(statearr_29390_29414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (8))){
var inst_29334 = (state_29370[(7)]);
var inst_29343 = (state_29370[(11)]);
var tmp29387 = inst_29334;
var inst_29334__$1 = tmp29387;
var inst_29335 = inst_29343;
var state_29370__$1 = (function (){var statearr_29391 = state_29370;
(statearr_29391[(7)] = inst_29334__$1);

(statearr_29391[(8)] = inst_29335);

return statearr_29391;
})();
var statearr_29392_29415 = state_29370__$1;
(statearr_29392_29415[(2)] = null);

(statearr_29392_29415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21646__auto___29401,out))
;
return ((function (switch__21584__auto__,c__21646__auto___29401,out){
return (function() {
var cljs$core$async$state_machine__21585__auto__ = null;
var cljs$core$async$state_machine__21585__auto____0 = (function (){
var statearr_29396 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29396[(0)] = cljs$core$async$state_machine__21585__auto__);

(statearr_29396[(1)] = (1));

return statearr_29396;
});
var cljs$core$async$state_machine__21585__auto____1 = (function (state_29370){
while(true){
var ret_value__21586__auto__ = (function (){try{while(true){
var result__21587__auto__ = switch__21584__auto__.call(null,state_29370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21587__auto__;
}
break;
}
}catch (e29397){if((e29397 instanceof Object)){
var ex__21588__auto__ = e29397;
var statearr_29398_29416 = state_29370;
(statearr_29398_29416[(5)] = ex__21588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29417 = state_29370;
state_29370 = G__29417;
continue;
} else {
return ret_value__21586__auto__;
}
break;
}
});
cljs$core$async$state_machine__21585__auto__ = function(state_29370){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21585__auto____1.call(this,state_29370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21585__auto____0;
cljs$core$async$state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21585__auto____1;
return cljs$core$async$state_machine__21585__auto__;
})()
;})(switch__21584__auto__,c__21646__auto___29401,out))
})();
var state__21648__auto__ = (function (){var statearr_29399 = f__21647__auto__.call(null);
(statearr_29399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21646__auto___29401);

return statearr_29399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21648__auto__);
});})(c__21646__auto___29401,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__29419 = arguments.length;
switch (G__29419) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21646__auto___29492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21646__auto___29492,out){
return (function (){
var f__21647__auto__ = (function (){var switch__21584__auto__ = ((function (c__21646__auto___29492,out){
return (function (state_29461){
var state_val_29462 = (state_29461[(1)]);
if((state_val_29462 === (7))){
var inst_29457 = (state_29461[(2)]);
var state_29461__$1 = state_29461;
var statearr_29463_29493 = state_29461__$1;
(statearr_29463_29493[(2)] = inst_29457);

(statearr_29463_29493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (1))){
var inst_29420 = [];
var inst_29421 = inst_29420;
var inst_29422 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29461__$1 = (function (){var statearr_29464 = state_29461;
(statearr_29464[(7)] = inst_29422);

(statearr_29464[(8)] = inst_29421);

return statearr_29464;
})();
var statearr_29465_29494 = state_29461__$1;
(statearr_29465_29494[(2)] = null);

(statearr_29465_29494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (4))){
var inst_29425 = (state_29461[(9)]);
var inst_29425__$1 = (state_29461[(2)]);
var inst_29426 = (inst_29425__$1 == null);
var inst_29427 = cljs.core.not.call(null,inst_29426);
var state_29461__$1 = (function (){var statearr_29466 = state_29461;
(statearr_29466[(9)] = inst_29425__$1);

return statearr_29466;
})();
if(inst_29427){
var statearr_29467_29495 = state_29461__$1;
(statearr_29467_29495[(1)] = (5));

} else {
var statearr_29468_29496 = state_29461__$1;
(statearr_29468_29496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (15))){
var inst_29451 = (state_29461[(2)]);
var state_29461__$1 = state_29461;
var statearr_29469_29497 = state_29461__$1;
(statearr_29469_29497[(2)] = inst_29451);

(statearr_29469_29497[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (13))){
var state_29461__$1 = state_29461;
var statearr_29470_29498 = state_29461__$1;
(statearr_29470_29498[(2)] = null);

(statearr_29470_29498[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (6))){
var inst_29421 = (state_29461[(8)]);
var inst_29446 = inst_29421.length;
var inst_29447 = (inst_29446 > (0));
var state_29461__$1 = state_29461;
if(cljs.core.truth_(inst_29447)){
var statearr_29471_29499 = state_29461__$1;
(statearr_29471_29499[(1)] = (12));

} else {
var statearr_29472_29500 = state_29461__$1;
(statearr_29472_29500[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (3))){
var inst_29459 = (state_29461[(2)]);
var state_29461__$1 = state_29461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29461__$1,inst_29459);
} else {
if((state_val_29462 === (12))){
var inst_29421 = (state_29461[(8)]);
var inst_29449 = cljs.core.vec.call(null,inst_29421);
var state_29461__$1 = state_29461;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29461__$1,(15),out,inst_29449);
} else {
if((state_val_29462 === (2))){
var state_29461__$1 = state_29461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29461__$1,(4),ch);
} else {
if((state_val_29462 === (11))){
var inst_29425 = (state_29461[(9)]);
var inst_29429 = (state_29461[(10)]);
var inst_29439 = (state_29461[(2)]);
var inst_29440 = [];
var inst_29441 = inst_29440.push(inst_29425);
var inst_29421 = inst_29440;
var inst_29422 = inst_29429;
var state_29461__$1 = (function (){var statearr_29473 = state_29461;
(statearr_29473[(11)] = inst_29441);

(statearr_29473[(12)] = inst_29439);

(statearr_29473[(7)] = inst_29422);

(statearr_29473[(8)] = inst_29421);

return statearr_29473;
})();
var statearr_29474_29501 = state_29461__$1;
(statearr_29474_29501[(2)] = null);

(statearr_29474_29501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (9))){
var inst_29421 = (state_29461[(8)]);
var inst_29437 = cljs.core.vec.call(null,inst_29421);
var state_29461__$1 = state_29461;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29461__$1,(11),out,inst_29437);
} else {
if((state_val_29462 === (5))){
var inst_29425 = (state_29461[(9)]);
var inst_29429 = (state_29461[(10)]);
var inst_29422 = (state_29461[(7)]);
var inst_29429__$1 = f.call(null,inst_29425);
var inst_29430 = cljs.core._EQ_.call(null,inst_29429__$1,inst_29422);
var inst_29431 = cljs.core.keyword_identical_QMARK_.call(null,inst_29422,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29432 = (inst_29430) || (inst_29431);
var state_29461__$1 = (function (){var statearr_29475 = state_29461;
(statearr_29475[(10)] = inst_29429__$1);

return statearr_29475;
})();
if(cljs.core.truth_(inst_29432)){
var statearr_29476_29502 = state_29461__$1;
(statearr_29476_29502[(1)] = (8));

} else {
var statearr_29477_29503 = state_29461__$1;
(statearr_29477_29503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (14))){
var inst_29454 = (state_29461[(2)]);
var inst_29455 = cljs.core.async.close_BANG_.call(null,out);
var state_29461__$1 = (function (){var statearr_29479 = state_29461;
(statearr_29479[(13)] = inst_29454);

return statearr_29479;
})();
var statearr_29480_29504 = state_29461__$1;
(statearr_29480_29504[(2)] = inst_29455);

(statearr_29480_29504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (10))){
var inst_29444 = (state_29461[(2)]);
var state_29461__$1 = state_29461;
var statearr_29481_29505 = state_29461__$1;
(statearr_29481_29505[(2)] = inst_29444);

(statearr_29481_29505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (8))){
var inst_29425 = (state_29461[(9)]);
var inst_29429 = (state_29461[(10)]);
var inst_29421 = (state_29461[(8)]);
var inst_29434 = inst_29421.push(inst_29425);
var tmp29478 = inst_29421;
var inst_29421__$1 = tmp29478;
var inst_29422 = inst_29429;
var state_29461__$1 = (function (){var statearr_29482 = state_29461;
(statearr_29482[(14)] = inst_29434);

(statearr_29482[(7)] = inst_29422);

(statearr_29482[(8)] = inst_29421__$1);

return statearr_29482;
})();
var statearr_29483_29506 = state_29461__$1;
(statearr_29483_29506[(2)] = null);

(statearr_29483_29506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21646__auto___29492,out))
;
return ((function (switch__21584__auto__,c__21646__auto___29492,out){
return (function() {
var cljs$core$async$state_machine__21585__auto__ = null;
var cljs$core$async$state_machine__21585__auto____0 = (function (){
var statearr_29487 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29487[(0)] = cljs$core$async$state_machine__21585__auto__);

(statearr_29487[(1)] = (1));

return statearr_29487;
});
var cljs$core$async$state_machine__21585__auto____1 = (function (state_29461){
while(true){
var ret_value__21586__auto__ = (function (){try{while(true){
var result__21587__auto__ = switch__21584__auto__.call(null,state_29461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21587__auto__;
}
break;
}
}catch (e29488){if((e29488 instanceof Object)){
var ex__21588__auto__ = e29488;
var statearr_29489_29507 = state_29461;
(statearr_29489_29507[(5)] = ex__21588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29508 = state_29461;
state_29461 = G__29508;
continue;
} else {
return ret_value__21586__auto__;
}
break;
}
});
cljs$core$async$state_machine__21585__auto__ = function(state_29461){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21585__auto____1.call(this,state_29461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21585__auto____0;
cljs$core$async$state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21585__auto____1;
return cljs$core$async$state_machine__21585__auto__;
})()
;})(switch__21584__auto__,c__21646__auto___29492,out))
})();
var state__21648__auto__ = (function (){var statearr_29490 = f__21647__auto__.call(null);
(statearr_29490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21646__auto___29492);

return statearr_29490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21648__auto__);
});})(c__21646__auto___29492,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1433328042436