// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26246_26258 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26247_26259 = null;
var count__26248_26260 = (0);
var i__26249_26261 = (0);
while(true){
if((i__26249_26261 < count__26248_26260)){
var f_26262 = cljs.core._nth.call(null,chunk__26247_26259,i__26249_26261);
cljs.core.println.call(null,"  ",f_26262);

var G__26263 = seq__26246_26258;
var G__26264 = chunk__26247_26259;
var G__26265 = count__26248_26260;
var G__26266 = (i__26249_26261 + (1));
seq__26246_26258 = G__26263;
chunk__26247_26259 = G__26264;
count__26248_26260 = G__26265;
i__26249_26261 = G__26266;
continue;
} else {
var temp__4126__auto___26267 = cljs.core.seq.call(null,seq__26246_26258);
if(temp__4126__auto___26267){
var seq__26246_26268__$1 = temp__4126__auto___26267;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26246_26268__$1)){
var c__18901__auto___26269 = cljs.core.chunk_first.call(null,seq__26246_26268__$1);
var G__26270 = cljs.core.chunk_rest.call(null,seq__26246_26268__$1);
var G__26271 = c__18901__auto___26269;
var G__26272 = cljs.core.count.call(null,c__18901__auto___26269);
var G__26273 = (0);
seq__26246_26258 = G__26270;
chunk__26247_26259 = G__26271;
count__26248_26260 = G__26272;
i__26249_26261 = G__26273;
continue;
} else {
var f_26274 = cljs.core.first.call(null,seq__26246_26268__$1);
cljs.core.println.call(null,"  ",f_26274);

var G__26275 = cljs.core.next.call(null,seq__26246_26268__$1);
var G__26276 = null;
var G__26277 = (0);
var G__26278 = (0);
seq__26246_26258 = G__26275;
chunk__26247_26259 = G__26276;
count__26248_26260 = G__26277;
i__26249_26261 = G__26278;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__18116__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26250 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26251 = null;
var count__26252 = (0);
var i__26253 = (0);
while(true){
if((i__26253 < count__26252)){
var vec__26254 = cljs.core._nth.call(null,chunk__26251,i__26253);
var name = cljs.core.nth.call(null,vec__26254,(0),null);
var map__26255 = cljs.core.nth.call(null,vec__26254,(1),null);
var map__26255__$1 = ((cljs.core.seq_QMARK_.call(null,map__26255))?cljs.core.apply.call(null,cljs.core.hash_map,map__26255):map__26255);
var arglists = cljs.core.get.call(null,map__26255__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__26255__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26279 = seq__26250;
var G__26280 = chunk__26251;
var G__26281 = count__26252;
var G__26282 = (i__26253 + (1));
seq__26250 = G__26279;
chunk__26251 = G__26280;
count__26252 = G__26281;
i__26253 = G__26282;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__26250);
if(temp__4126__auto__){
var seq__26250__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26250__$1)){
var c__18901__auto__ = cljs.core.chunk_first.call(null,seq__26250__$1);
var G__26283 = cljs.core.chunk_rest.call(null,seq__26250__$1);
var G__26284 = c__18901__auto__;
var G__26285 = cljs.core.count.call(null,c__18901__auto__);
var G__26286 = (0);
seq__26250 = G__26283;
chunk__26251 = G__26284;
count__26252 = G__26285;
i__26253 = G__26286;
continue;
} else {
var vec__26256 = cljs.core.first.call(null,seq__26250__$1);
var name = cljs.core.nth.call(null,vec__26256,(0),null);
var map__26257 = cljs.core.nth.call(null,vec__26256,(1),null);
var map__26257__$1 = ((cljs.core.seq_QMARK_.call(null,map__26257))?cljs.core.apply.call(null,cljs.core.hash_map,map__26257):map__26257);
var arglists = cljs.core.get.call(null,map__26257__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__26257__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26287 = cljs.core.next.call(null,seq__26250__$1);
var G__26288 = null;
var G__26289 = (0);
var G__26290 = (0);
seq__26250 = G__26287;
chunk__26251 = G__26288;
count__26252 = G__26289;
i__26253 = G__26290;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1433328038275