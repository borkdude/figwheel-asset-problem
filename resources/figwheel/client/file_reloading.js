// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__26307_SHARP_,p2__26308_SHARP_){
var and__18104__auto__ = p1__26307_SHARP_;
if(cljs.core.truth_(and__18104__auto__)){
return p2__26308_SHARP_;
} else {
return and__18104__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18116__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18116__auto__){
return or__18116__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__18116__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18116__auto__){
return or__18116__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18116__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__19011__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19012__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19013__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19014__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19015__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19015__auto__,method_table__19011__auto__,prefer_table__19012__auto__,method_cache__19013__auto__,cached_hierarchy__19014__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__26309){
var map__26310 = p__26309;
var map__26310__$1 = ((cljs.core.seq_QMARK_.call(null,map__26310))?cljs.core.apply.call(null,cljs.core.hash_map,map__26310):map__26310);
var file = cljs.core.get.call(null,map__26310__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__26311){
var map__26312 = p__26311;
var map__26312__$1 = ((cljs.core.seq_QMARK_.call(null,map__26312))?cljs.core.apply.call(null,cljs.core.hash_map,map__26312):map__26312);
var namespace = cljs.core.get.call(null,map__26312__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__19011__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19012__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19013__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19014__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19015__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19015__auto__,method_table__19011__auto__,prefer_table__19012__auto__,method_cache__19013__auto__,cached_hierarchy__19014__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e26313){if((e26313 instanceof Error)){
var e = e26313;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26313;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__26315 = arguments.length;
switch (G__26315) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26317,callback){
var map__26319 = p__26317;
var map__26319__$1 = ((cljs.core.seq_QMARK_.call(null,map__26319))?cljs.core.apply.call(null,cljs.core.hash_map,map__26319):map__26319);
var file_msg = map__26319__$1;
var request_url = cljs.core.get.call(null,map__26319__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26319,map__26319__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26319,map__26319__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26320){
var map__26322 = p__26320;
var map__26322__$1 = ((cljs.core.seq_QMARK_.call(null,map__26322))?cljs.core.apply.call(null,cljs.core.hash_map,map__26322):map__26322);
var file_msg = map__26322__$1;
var meta_data = cljs.core.get.call(null,map__26322__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__26322__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__18116__auto__ = meta_data;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18104__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18104__auto__){
var or__18116__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18116__auto____$1)){
return or__18116__auto____$1;
} else {
var and__18104__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18104__auto____$1){
var or__18116__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18116__auto____$2){
return or__18116__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18104__auto____$1;
}
}
}
} else {
return and__18104__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26323,callback){
var map__26325 = p__26323;
var map__26325__$1 = ((cljs.core.seq_QMARK_.call(null,map__26325))?cljs.core.apply.call(null,cljs.core.hash_map,map__26325):map__26325);
var file_msg = map__26325__$1;
var namespace = cljs.core.get.call(null,map__26325__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__26325__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21646__auto___26412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21646__auto___26412,out){
return (function (){
var f__21647__auto__ = (function (){var switch__21584__auto__ = ((function (c__21646__auto___26412,out){
return (function (state_26394){
var state_val_26395 = (state_26394[(1)]);
if((state_val_26395 === (7))){
var inst_26378 = (state_26394[(7)]);
var inst_26384 = (state_26394[(2)]);
var inst_26385 = cljs.core.async.put_BANG_.call(null,out,inst_26384);
var inst_26374 = inst_26378;
var state_26394__$1 = (function (){var statearr_26396 = state_26394;
(statearr_26396[(8)] = inst_26374);

(statearr_26396[(9)] = inst_26385);

return statearr_26396;
})();
var statearr_26397_26413 = state_26394__$1;
(statearr_26397_26413[(2)] = null);

(statearr_26397_26413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26395 === (6))){
var inst_26390 = (state_26394[(2)]);
var state_26394__$1 = state_26394;
var statearr_26398_26414 = state_26394__$1;
(statearr_26398_26414[(2)] = inst_26390);

(statearr_26398_26414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26395 === (5))){
var inst_26388 = cljs.core.async.close_BANG_.call(null,out);
var state_26394__$1 = state_26394;
var statearr_26399_26415 = state_26394__$1;
(statearr_26399_26415[(2)] = inst_26388);

(statearr_26399_26415[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26395 === (4))){
var inst_26377 = (state_26394[(10)]);
var inst_26382 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26377);
var state_26394__$1 = state_26394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26394__$1,(7),inst_26382);
} else {
if((state_val_26395 === (3))){
var inst_26392 = (state_26394[(2)]);
var state_26394__$1 = state_26394;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26394__$1,inst_26392);
} else {
if((state_val_26395 === (2))){
var inst_26374 = (state_26394[(8)]);
var inst_26377 = (state_26394[(10)]);
var inst_26377__$1 = cljs.core.nth.call(null,inst_26374,(0),null);
var inst_26378 = cljs.core.nthnext.call(null,inst_26374,(1));
var inst_26379 = (inst_26377__$1 == null);
var inst_26380 = cljs.core.not.call(null,inst_26379);
var state_26394__$1 = (function (){var statearr_26400 = state_26394;
(statearr_26400[(7)] = inst_26378);

(statearr_26400[(10)] = inst_26377__$1);

return statearr_26400;
})();
if(inst_26380){
var statearr_26401_26416 = state_26394__$1;
(statearr_26401_26416[(1)] = (4));

} else {
var statearr_26402_26417 = state_26394__$1;
(statearr_26402_26417[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26395 === (1))){
var inst_26372 = cljs.core.nth.call(null,files,(0),null);
var inst_26373 = cljs.core.nthnext.call(null,files,(1));
var inst_26374 = files;
var state_26394__$1 = (function (){var statearr_26403 = state_26394;
(statearr_26403[(11)] = inst_26373);

(statearr_26403[(8)] = inst_26374);

(statearr_26403[(12)] = inst_26372);

return statearr_26403;
})();
var statearr_26404_26418 = state_26394__$1;
(statearr_26404_26418[(2)] = null);

(statearr_26404_26418[(1)] = (2));


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
});})(c__21646__auto___26412,out))
;
return ((function (switch__21584__auto__,c__21646__auto___26412,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21585__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21585__auto____0 = (function (){
var statearr_26408 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26408[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21585__auto__);

(statearr_26408[(1)] = (1));

return statearr_26408;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21585__auto____1 = (function (state_26394){
while(true){
var ret_value__21586__auto__ = (function (){try{while(true){
var result__21587__auto__ = switch__21584__auto__.call(null,state_26394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21587__auto__;
}
break;
}
}catch (e26409){if((e26409 instanceof Object)){
var ex__21588__auto__ = e26409;
var statearr_26410_26419 = state_26394;
(statearr_26410_26419[(5)] = ex__21588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26420 = state_26394;
state_26394 = G__26420;
continue;
} else {
return ret_value__21586__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21585__auto__ = function(state_26394){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21585__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21585__auto____1.call(this,state_26394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21585__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21585__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21585__auto__;
})()
;})(switch__21584__auto__,c__21646__auto___26412,out))
})();
var state__21648__auto__ = (function (){var statearr_26411 = f__21647__auto__.call(null);
(statearr_26411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21646__auto___26412);

return statearr_26411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21648__auto__);
});})(c__21646__auto___26412,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__26421,p__26422){
var map__26425 = p__26421;
var map__26425__$1 = ((cljs.core.seq_QMARK_.call(null,map__26425))?cljs.core.apply.call(null,cljs.core.hash_map,map__26425):map__26425);
var opts = map__26425__$1;
var url_rewriter = cljs.core.get.call(null,map__26425__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__26426 = p__26422;
var map__26426__$1 = ((cljs.core.seq_QMARK_.call(null,map__26426))?cljs.core.apply.call(null,cljs.core.hash_map,map__26426):map__26426);
var file_msg = map__26426__$1;
var file = cljs.core.get.call(null,map__26426__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26427){
var map__26430 = p__26427;
var map__26430__$1 = ((cljs.core.seq_QMARK_.call(null,map__26430))?cljs.core.apply.call(null,cljs.core.hash_map,map__26430):map__26430);
var file = cljs.core.get.call(null,map__26430__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__26430__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__18104__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18104__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18104__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e26431){var e = e26431;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26436,p__26437){
var map__26638 = p__26436;
var map__26638__$1 = ((cljs.core.seq_QMARK_.call(null,map__26638))?cljs.core.apply.call(null,cljs.core.hash_map,map__26638):map__26638);
var opts = map__26638__$1;
var load_unchanged_files = cljs.core.get.call(null,map__26638__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__26638__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__26638__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__26639 = p__26437;
var map__26639__$1 = ((cljs.core.seq_QMARK_.call(null,map__26639))?cljs.core.apply.call(null,cljs.core.hash_map,map__26639):map__26639);
var msg = map__26639__$1;
var files = cljs.core.get.call(null,map__26639__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__21646__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21646__auto__,map__26638,map__26638__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26639,map__26639__$1,msg,files){
return (function (){
var f__21647__auto__ = (function (){var switch__21584__auto__ = ((function (c__21646__auto__,map__26638,map__26638__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26639,map__26639__$1,msg,files){
return (function (state_26763){
var state_val_26764 = (state_26763[(1)]);
if((state_val_26764 === (7))){
var inst_26652 = (state_26763[(7)]);
var inst_26651 = (state_26763[(8)]);
var inst_26653 = (state_26763[(9)]);
var inst_26650 = (state_26763[(10)]);
var inst_26658 = cljs.core._nth.call(null,inst_26651,inst_26653);
var inst_26659 = figwheel.client.file_reloading.eval_body.call(null,inst_26658);
var inst_26660 = (inst_26653 + (1));
var tmp26765 = inst_26652;
var tmp26766 = inst_26651;
var tmp26767 = inst_26650;
var inst_26650__$1 = tmp26767;
var inst_26651__$1 = tmp26766;
var inst_26652__$1 = tmp26765;
var inst_26653__$1 = inst_26660;
var state_26763__$1 = (function (){var statearr_26768 = state_26763;
(statearr_26768[(7)] = inst_26652__$1);

(statearr_26768[(8)] = inst_26651__$1);

(statearr_26768[(11)] = inst_26659);

(statearr_26768[(9)] = inst_26653__$1);

(statearr_26768[(10)] = inst_26650__$1);

return statearr_26768;
})();
var statearr_26769_26838 = state_26763__$1;
(statearr_26769_26838[(2)] = null);

(statearr_26769_26838[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (20))){
var inst_26702 = (state_26763[(12)]);
var inst_26695 = (state_26763[(13)]);
var inst_26700 = (state_26763[(14)]);
var inst_26696 = (state_26763[(15)]);
var inst_26699 = (state_26763[(16)]);
var inst_26705 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26707 = (function (){var files_not_loaded = inst_26702;
var res = inst_26700;
var res_SINGLEQUOTE_ = inst_26699;
var files_SINGLEQUOTE_ = inst_26696;
var all_files = inst_26695;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26702,inst_26695,inst_26700,inst_26696,inst_26699,inst_26705,state_val_26764,c__21646__auto__,map__26638,map__26638__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26639,map__26639__$1,msg,files){
return (function (p__26706){
var map__26770 = p__26706;
var map__26770__$1 = ((cljs.core.seq_QMARK_.call(null,map__26770))?cljs.core.apply.call(null,cljs.core.hash_map,map__26770):map__26770);
var file = cljs.core.get.call(null,map__26770__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__26770__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26702,inst_26695,inst_26700,inst_26696,inst_26699,inst_26705,state_val_26764,c__21646__auto__,map__26638,map__26638__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26639,map__26639__$1,msg,files))
})();
var inst_26708 = cljs.core.map.call(null,inst_26707,inst_26700);
var inst_26709 = cljs.core.pr_str.call(null,inst_26708);
var inst_26710 = figwheel.client.utils.log.call(null,inst_26709);
var inst_26711 = (function (){var files_not_loaded = inst_26702;
var res = inst_26700;
var res_SINGLEQUOTE_ = inst_26699;
var files_SINGLEQUOTE_ = inst_26696;
var all_files = inst_26695;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26702,inst_26695,inst_26700,inst_26696,inst_26699,inst_26705,inst_26707,inst_26708,inst_26709,inst_26710,state_val_26764,c__21646__auto__,map__26638,map__26638__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26639,map__26639__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26702,inst_26695,inst_26700,inst_26696,inst_26699,inst_26705,inst_26707,inst_26708,inst_26709,inst_26710,state_val_26764,c__21646__auto__,map__26638,map__26638__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26639,map__26639__$1,msg,files))
})();
var inst_26712 = setTimeout(inst_26711,(10));
var state_26763__$1 = (function (){var statearr_26771 = state_26763;
(statearr_26771[(17)] = inst_26710);

(statearr_26771[(18)] = inst_26705);

return statearr_26771;
})();
var statearr_26772_26839 = state_26763__$1;
(statearr_26772_26839[(2)] = inst_26712);

(statearr_26772_26839[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (27))){
var inst_26722 = (state_26763[(19)]);
var state_26763__$1 = state_26763;
var statearr_26773_26840 = state_26763__$1;
(statearr_26773_26840[(2)] = inst_26722);

(statearr_26773_26840[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (1))){
var inst_26642 = (state_26763[(20)]);
var inst_26640 = before_jsload.call(null,files);
var inst_26641 = (function (){return ((function (inst_26642,inst_26640,state_val_26764,c__21646__auto__,map__26638,map__26638__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26639,map__26639__$1,msg,files){
return (function (p1__26432_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26432_SHARP_);
});
;})(inst_26642,inst_26640,state_val_26764,c__21646__auto__,map__26638,map__26638__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26639,map__26639__$1,msg,files))
})();
var inst_26642__$1 = cljs.core.filter.call(null,inst_26641,files);
var inst_26643 = cljs.core.not_empty.call(null,inst_26642__$1);
var state_26763__$1 = (function (){var statearr_26774 = state_26763;
(statearr_26774[(20)] = inst_26642__$1);

(statearr_26774[(21)] = inst_26640);

return statearr_26774;
})();
if(cljs.core.truth_(inst_26643)){
var statearr_26775_26841 = state_26763__$1;
(statearr_26775_26841[(1)] = (2));

} else {
var statearr_26776_26842 = state_26763__$1;
(statearr_26776_26842[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (24))){
var state_26763__$1 = state_26763;
var statearr_26777_26843 = state_26763__$1;
(statearr_26777_26843[(2)] = null);

(statearr_26777_26843[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (4))){
var inst_26687 = (state_26763[(2)]);
var inst_26688 = (function (){return ((function (inst_26687,state_val_26764,c__21646__auto__,map__26638,map__26638__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26639,map__26639__$1,msg,files){
return (function (p1__26433_SHARP_){
var and__18104__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26433_SHARP_);
if(cljs.core.truth_(and__18104__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26433_SHARP_));
} else {
return and__18104__auto__;
}
});
;})(inst_26687,state_val_26764,c__21646__auto__,map__26638,map__26638__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26639,map__26639__$1,msg,files))
})();
var inst_26689 = cljs.core.filter.call(null,inst_26688,files);
var state_26763__$1 = (function (){var statearr_26778 = state_26763;
(statearr_26778[(22)] = inst_26687);

(statearr_26778[(23)] = inst_26689);

return statearr_26778;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_26779_26844 = state_26763__$1;
(statearr_26779_26844[(1)] = (16));

} else {
var statearr_26780_26845 = state_26763__$1;
(statearr_26780_26845[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (15))){
var inst_26677 = (state_26763[(2)]);
var state_26763__$1 = state_26763;
var statearr_26781_26846 = state_26763__$1;
(statearr_26781_26846[(2)] = inst_26677);

(statearr_26781_26846[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (21))){
var state_26763__$1 = state_26763;
var statearr_26782_26847 = state_26763__$1;
(statearr_26782_26847[(2)] = null);

(statearr_26782_26847[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (31))){
var inst_26730 = (state_26763[(24)]);
var inst_26740 = (state_26763[(2)]);
var inst_26741 = cljs.core.not_empty.call(null,inst_26730);
var state_26763__$1 = (function (){var statearr_26783 = state_26763;
(statearr_26783[(25)] = inst_26740);

return statearr_26783;
})();
if(cljs.core.truth_(inst_26741)){
var statearr_26784_26848 = state_26763__$1;
(statearr_26784_26848[(1)] = (32));

} else {
var statearr_26785_26849 = state_26763__$1;
(statearr_26785_26849[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (32))){
var inst_26730 = (state_26763[(24)]);
var inst_26743 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26730);
var inst_26744 = cljs.core.pr_str.call(null,inst_26743);
var inst_26745 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_26744)].join('');
var inst_26746 = figwheel.client.utils.log.call(null,inst_26745);
var state_26763__$1 = state_26763;
var statearr_26786_26850 = state_26763__$1;
(statearr_26786_26850[(2)] = inst_26746);

(statearr_26786_26850[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (33))){
var state_26763__$1 = state_26763;
var statearr_26787_26851 = state_26763__$1;
(statearr_26787_26851[(2)] = null);

(statearr_26787_26851[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (13))){
var inst_26663 = (state_26763[(26)]);
var inst_26667 = cljs.core.chunk_first.call(null,inst_26663);
var inst_26668 = cljs.core.chunk_rest.call(null,inst_26663);
var inst_26669 = cljs.core.count.call(null,inst_26667);
var inst_26650 = inst_26668;
var inst_26651 = inst_26667;
var inst_26652 = inst_26669;
var inst_26653 = (0);
var state_26763__$1 = (function (){var statearr_26788 = state_26763;
(statearr_26788[(7)] = inst_26652);

(statearr_26788[(8)] = inst_26651);

(statearr_26788[(9)] = inst_26653);

(statearr_26788[(10)] = inst_26650);

return statearr_26788;
})();
var statearr_26789_26852 = state_26763__$1;
(statearr_26789_26852[(2)] = null);

(statearr_26789_26852[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (22))){
var inst_26702 = (state_26763[(12)]);
var inst_26715 = (state_26763[(2)]);
var inst_26716 = cljs.core.not_empty.call(null,inst_26702);
var state_26763__$1 = (function (){var statearr_26790 = state_26763;
(statearr_26790[(27)] = inst_26715);

return statearr_26790;
})();
if(cljs.core.truth_(inst_26716)){
var statearr_26791_26853 = state_26763__$1;
(statearr_26791_26853[(1)] = (23));

} else {
var statearr_26792_26854 = state_26763__$1;
(statearr_26792_26854[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (36))){
var state_26763__$1 = state_26763;
var statearr_26793_26855 = state_26763__$1;
(statearr_26793_26855[(2)] = null);

(statearr_26793_26855[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (29))){
var inst_26731 = (state_26763[(28)]);
var inst_26734 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26731);
var inst_26735 = cljs.core.pr_str.call(null,inst_26734);
var inst_26736 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26735)].join('');
var inst_26737 = figwheel.client.utils.log.call(null,inst_26736);
var state_26763__$1 = state_26763;
var statearr_26794_26856 = state_26763__$1;
(statearr_26794_26856[(2)] = inst_26737);

(statearr_26794_26856[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (6))){
var inst_26684 = (state_26763[(2)]);
var state_26763__$1 = state_26763;
var statearr_26795_26857 = state_26763__$1;
(statearr_26795_26857[(2)] = inst_26684);

(statearr_26795_26857[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (28))){
var inst_26731 = (state_26763[(28)]);
var inst_26728 = (state_26763[(2)]);
var inst_26729 = cljs.core.get.call(null,inst_26728,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26730 = cljs.core.get.call(null,inst_26728,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_26731__$1 = cljs.core.get.call(null,inst_26728,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26732 = cljs.core.not_empty.call(null,inst_26731__$1);
var state_26763__$1 = (function (){var statearr_26796 = state_26763;
(statearr_26796[(28)] = inst_26731__$1);

(statearr_26796[(29)] = inst_26729);

(statearr_26796[(24)] = inst_26730);

return statearr_26796;
})();
if(cljs.core.truth_(inst_26732)){
var statearr_26797_26858 = state_26763__$1;
(statearr_26797_26858[(1)] = (29));

} else {
var statearr_26798_26859 = state_26763__$1;
(statearr_26798_26859[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (25))){
var inst_26761 = (state_26763[(2)]);
var state_26763__$1 = state_26763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26763__$1,inst_26761);
} else {
if((state_val_26764 === (34))){
var inst_26729 = (state_26763[(29)]);
var inst_26749 = (state_26763[(2)]);
var inst_26750 = cljs.core.not_empty.call(null,inst_26729);
var state_26763__$1 = (function (){var statearr_26799 = state_26763;
(statearr_26799[(30)] = inst_26749);

return statearr_26799;
})();
if(cljs.core.truth_(inst_26750)){
var statearr_26800_26860 = state_26763__$1;
(statearr_26800_26860[(1)] = (35));

} else {
var statearr_26801_26861 = state_26763__$1;
(statearr_26801_26861[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (17))){
var inst_26689 = (state_26763[(23)]);
var state_26763__$1 = state_26763;
var statearr_26802_26862 = state_26763__$1;
(statearr_26802_26862[(2)] = inst_26689);

(statearr_26802_26862[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (3))){
var state_26763__$1 = state_26763;
var statearr_26803_26863 = state_26763__$1;
(statearr_26803_26863[(2)] = null);

(statearr_26803_26863[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (12))){
var inst_26680 = (state_26763[(2)]);
var state_26763__$1 = state_26763;
var statearr_26804_26864 = state_26763__$1;
(statearr_26804_26864[(2)] = inst_26680);

(statearr_26804_26864[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (2))){
var inst_26642 = (state_26763[(20)]);
var inst_26649 = cljs.core.seq.call(null,inst_26642);
var inst_26650 = inst_26649;
var inst_26651 = null;
var inst_26652 = (0);
var inst_26653 = (0);
var state_26763__$1 = (function (){var statearr_26805 = state_26763;
(statearr_26805[(7)] = inst_26652);

(statearr_26805[(8)] = inst_26651);

(statearr_26805[(9)] = inst_26653);

(statearr_26805[(10)] = inst_26650);

return statearr_26805;
})();
var statearr_26806_26865 = state_26763__$1;
(statearr_26806_26865[(2)] = null);

(statearr_26806_26865[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (23))){
var inst_26722 = (state_26763[(19)]);
var inst_26702 = (state_26763[(12)]);
var inst_26695 = (state_26763[(13)]);
var inst_26700 = (state_26763[(14)]);
var inst_26696 = (state_26763[(15)]);
var inst_26699 = (state_26763[(16)]);
var inst_26718 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26721 = (function (){var files_not_loaded = inst_26702;
var res = inst_26700;
var res_SINGLEQUOTE_ = inst_26699;
var files_SINGLEQUOTE_ = inst_26696;
var all_files = inst_26695;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26722,inst_26702,inst_26695,inst_26700,inst_26696,inst_26699,inst_26718,state_val_26764,c__21646__auto__,map__26638,map__26638__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26639,map__26639__$1,msg,files){
return (function (p__26720){
var map__26807 = p__26720;
var map__26807__$1 = ((cljs.core.seq_QMARK_.call(null,map__26807))?cljs.core.apply.call(null,cljs.core.hash_map,map__26807):map__26807);
var meta_data = cljs.core.get.call(null,map__26807__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26722,inst_26702,inst_26695,inst_26700,inst_26696,inst_26699,inst_26718,state_val_26764,c__21646__auto__,map__26638,map__26638__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26639,map__26639__$1,msg,files))
})();
var inst_26722__$1 = cljs.core.group_by.call(null,inst_26721,inst_26702);
var inst_26723 = cljs.core.seq_QMARK_.call(null,inst_26722__$1);
var state_26763__$1 = (function (){var statearr_26808 = state_26763;
(statearr_26808[(19)] = inst_26722__$1);

(statearr_26808[(31)] = inst_26718);

return statearr_26808;
})();
if(inst_26723){
var statearr_26809_26866 = state_26763__$1;
(statearr_26809_26866[(1)] = (26));

} else {
var statearr_26810_26867 = state_26763__$1;
(statearr_26810_26867[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (35))){
var inst_26729 = (state_26763[(29)]);
var inst_26752 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26729);
var inst_26753 = cljs.core.pr_str.call(null,inst_26752);
var inst_26754 = [cljs.core.str("not required: "),cljs.core.str(inst_26753)].join('');
var inst_26755 = figwheel.client.utils.log.call(null,inst_26754);
var state_26763__$1 = state_26763;
var statearr_26811_26868 = state_26763__$1;
(statearr_26811_26868[(2)] = inst_26755);

(statearr_26811_26868[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (19))){
var inst_26695 = (state_26763[(13)]);
var inst_26700 = (state_26763[(14)]);
var inst_26696 = (state_26763[(15)]);
var inst_26699 = (state_26763[(16)]);
var inst_26699__$1 = (state_26763[(2)]);
var inst_26700__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26699__$1);
var inst_26701 = (function (){var res = inst_26700__$1;
var res_SINGLEQUOTE_ = inst_26699__$1;
var files_SINGLEQUOTE_ = inst_26696;
var all_files = inst_26695;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26695,inst_26700,inst_26696,inst_26699,inst_26699__$1,inst_26700__$1,state_val_26764,c__21646__auto__,map__26638,map__26638__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26639,map__26639__$1,msg,files){
return (function (p1__26435_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26435_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26695,inst_26700,inst_26696,inst_26699,inst_26699__$1,inst_26700__$1,state_val_26764,c__21646__auto__,map__26638,map__26638__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26639,map__26639__$1,msg,files))
})();
var inst_26702 = cljs.core.filter.call(null,inst_26701,inst_26699__$1);
var inst_26703 = cljs.core.not_empty.call(null,inst_26700__$1);
var state_26763__$1 = (function (){var statearr_26812 = state_26763;
(statearr_26812[(12)] = inst_26702);

(statearr_26812[(14)] = inst_26700__$1);

(statearr_26812[(16)] = inst_26699__$1);

return statearr_26812;
})();
if(cljs.core.truth_(inst_26703)){
var statearr_26813_26869 = state_26763__$1;
(statearr_26813_26869[(1)] = (20));

} else {
var statearr_26814_26870 = state_26763__$1;
(statearr_26814_26870[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (11))){
var state_26763__$1 = state_26763;
var statearr_26815_26871 = state_26763__$1;
(statearr_26815_26871[(2)] = null);

(statearr_26815_26871[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (9))){
var inst_26682 = (state_26763[(2)]);
var state_26763__$1 = state_26763;
var statearr_26816_26872 = state_26763__$1;
(statearr_26816_26872[(2)] = inst_26682);

(statearr_26816_26872[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (5))){
var inst_26652 = (state_26763[(7)]);
var inst_26653 = (state_26763[(9)]);
var inst_26655 = (inst_26653 < inst_26652);
var inst_26656 = inst_26655;
var state_26763__$1 = state_26763;
if(cljs.core.truth_(inst_26656)){
var statearr_26817_26873 = state_26763__$1;
(statearr_26817_26873[(1)] = (7));

} else {
var statearr_26818_26874 = state_26763__$1;
(statearr_26818_26874[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (14))){
var inst_26663 = (state_26763[(26)]);
var inst_26672 = cljs.core.first.call(null,inst_26663);
var inst_26673 = figwheel.client.file_reloading.eval_body.call(null,inst_26672);
var inst_26674 = cljs.core.next.call(null,inst_26663);
var inst_26650 = inst_26674;
var inst_26651 = null;
var inst_26652 = (0);
var inst_26653 = (0);
var state_26763__$1 = (function (){var statearr_26819 = state_26763;
(statearr_26819[(7)] = inst_26652);

(statearr_26819[(32)] = inst_26673);

(statearr_26819[(8)] = inst_26651);

(statearr_26819[(9)] = inst_26653);

(statearr_26819[(10)] = inst_26650);

return statearr_26819;
})();
var statearr_26820_26875 = state_26763__$1;
(statearr_26820_26875[(2)] = null);

(statearr_26820_26875[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (26))){
var inst_26722 = (state_26763[(19)]);
var inst_26725 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26722);
var state_26763__$1 = state_26763;
var statearr_26821_26876 = state_26763__$1;
(statearr_26821_26876[(2)] = inst_26725);

(statearr_26821_26876[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (16))){
var inst_26689 = (state_26763[(23)]);
var inst_26691 = (function (){var all_files = inst_26689;
return ((function (all_files,inst_26689,state_val_26764,c__21646__auto__,map__26638,map__26638__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26639,map__26639__$1,msg,files){
return (function (p1__26434_SHARP_){
return cljs.core.update_in.call(null,p1__26434_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_26689,state_val_26764,c__21646__auto__,map__26638,map__26638__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26639,map__26639__$1,msg,files))
})();
var inst_26692 = cljs.core.map.call(null,inst_26691,inst_26689);
var state_26763__$1 = state_26763;
var statearr_26822_26877 = state_26763__$1;
(statearr_26822_26877[(2)] = inst_26692);

(statearr_26822_26877[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (30))){
var state_26763__$1 = state_26763;
var statearr_26823_26878 = state_26763__$1;
(statearr_26823_26878[(2)] = null);

(statearr_26823_26878[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (10))){
var inst_26663 = (state_26763[(26)]);
var inst_26665 = cljs.core.chunked_seq_QMARK_.call(null,inst_26663);
var state_26763__$1 = state_26763;
if(inst_26665){
var statearr_26824_26879 = state_26763__$1;
(statearr_26824_26879[(1)] = (13));

} else {
var statearr_26825_26880 = state_26763__$1;
(statearr_26825_26880[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (18))){
var inst_26695 = (state_26763[(13)]);
var inst_26696 = (state_26763[(15)]);
var inst_26695__$1 = (state_26763[(2)]);
var inst_26696__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_26695__$1);
var inst_26697 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26696__$1);
var state_26763__$1 = (function (){var statearr_26826 = state_26763;
(statearr_26826[(13)] = inst_26695__$1);

(statearr_26826[(15)] = inst_26696__$1);

return statearr_26826;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26763__$1,(19),inst_26697);
} else {
if((state_val_26764 === (37))){
var inst_26758 = (state_26763[(2)]);
var state_26763__$1 = state_26763;
var statearr_26827_26881 = state_26763__$1;
(statearr_26827_26881[(2)] = inst_26758);

(statearr_26827_26881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (8))){
var inst_26650 = (state_26763[(10)]);
var inst_26663 = (state_26763[(26)]);
var inst_26663__$1 = cljs.core.seq.call(null,inst_26650);
var state_26763__$1 = (function (){var statearr_26828 = state_26763;
(statearr_26828[(26)] = inst_26663__$1);

return statearr_26828;
})();
if(inst_26663__$1){
var statearr_26829_26882 = state_26763__$1;
(statearr_26829_26882[(1)] = (10));

} else {
var statearr_26830_26883 = state_26763__$1;
(statearr_26830_26883[(1)] = (11));

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
});})(c__21646__auto__,map__26638,map__26638__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26639,map__26639__$1,msg,files))
;
return ((function (switch__21584__auto__,c__21646__auto__,map__26638,map__26638__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26639,map__26639__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21585__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21585__auto____0 = (function (){
var statearr_26834 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26834[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21585__auto__);

(statearr_26834[(1)] = (1));

return statearr_26834;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21585__auto____1 = (function (state_26763){
while(true){
var ret_value__21586__auto__ = (function (){try{while(true){
var result__21587__auto__ = switch__21584__auto__.call(null,state_26763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21587__auto__;
}
break;
}
}catch (e26835){if((e26835 instanceof Object)){
var ex__21588__auto__ = e26835;
var statearr_26836_26884 = state_26763;
(statearr_26836_26884[(5)] = ex__21588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26885 = state_26763;
state_26763 = G__26885;
continue;
} else {
return ret_value__21586__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21585__auto__ = function(state_26763){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21585__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21585__auto____1.call(this,state_26763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21585__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21585__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21585__auto__;
})()
;})(switch__21584__auto__,c__21646__auto__,map__26638,map__26638__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26639,map__26639__$1,msg,files))
})();
var state__21648__auto__ = (function (){var statearr_26837 = f__21647__auto__.call(null);
(statearr_26837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21646__auto__);

return statearr_26837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21648__auto__);
});})(c__21646__auto__,map__26638,map__26638__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26639,map__26639__$1,msg,files))
);

return c__21646__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26888,link){
var map__26890 = p__26888;
var map__26890__$1 = ((cljs.core.seq_QMARK_.call(null,map__26890))?cljs.core.apply.call(null,cljs.core.hash_map,map__26890):map__26890);
var file = cljs.core.get.call(null,map__26890__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__26890,map__26890__$1,file){
return (function (p1__26886_SHARP_,p2__26887_SHARP_){
if(cljs.core._EQ_.call(null,p1__26886_SHARP_,p2__26887_SHARP_)){
return p1__26886_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__26890,map__26890__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26894){
var map__26895 = p__26894;
var map__26895__$1 = ((cljs.core.seq_QMARK_.call(null,map__26895))?cljs.core.apply.call(null,cljs.core.hash_map,map__26895):map__26895);
var current_url_length = cljs.core.get.call(null,map__26895__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__26895__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26891_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26891_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__26897 = arguments.length;
switch (G__26897) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26899){
var map__26901 = p__26899;
var map__26901__$1 = ((cljs.core.seq_QMARK_.call(null,map__26901))?cljs.core.apply.call(null,cljs.core.hash_map,map__26901):map__26901);
var f_data = map__26901__$1;
var request_url = cljs.core.get.call(null,map__26901__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__26901__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18116__auto__ = request_url;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26902,files_msg){
var map__26924 = p__26902;
var map__26924__$1 = ((cljs.core.seq_QMARK_.call(null,map__26924))?cljs.core.apply.call(null,cljs.core.hash_map,map__26924):map__26924);
var opts = map__26924__$1;
var on_cssload = cljs.core.get.call(null,map__26924__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26925_26945 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26926_26946 = null;
var count__26927_26947 = (0);
var i__26928_26948 = (0);
while(true){
if((i__26928_26948 < count__26927_26947)){
var f_26949 = cljs.core._nth.call(null,chunk__26926_26946,i__26928_26948);
figwheel.client.file_reloading.reload_css_file.call(null,f_26949);

var G__26950 = seq__26925_26945;
var G__26951 = chunk__26926_26946;
var G__26952 = count__26927_26947;
var G__26953 = (i__26928_26948 + (1));
seq__26925_26945 = G__26950;
chunk__26926_26946 = G__26951;
count__26927_26947 = G__26952;
i__26928_26948 = G__26953;
continue;
} else {
var temp__4126__auto___26954 = cljs.core.seq.call(null,seq__26925_26945);
if(temp__4126__auto___26954){
var seq__26925_26955__$1 = temp__4126__auto___26954;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26925_26955__$1)){
var c__18901__auto___26956 = cljs.core.chunk_first.call(null,seq__26925_26955__$1);
var G__26957 = cljs.core.chunk_rest.call(null,seq__26925_26955__$1);
var G__26958 = c__18901__auto___26956;
var G__26959 = cljs.core.count.call(null,c__18901__auto___26956);
var G__26960 = (0);
seq__26925_26945 = G__26957;
chunk__26926_26946 = G__26958;
count__26927_26947 = G__26959;
i__26928_26948 = G__26960;
continue;
} else {
var f_26961 = cljs.core.first.call(null,seq__26925_26955__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26961);

var G__26962 = cljs.core.next.call(null,seq__26925_26955__$1);
var G__26963 = null;
var G__26964 = (0);
var G__26965 = (0);
seq__26925_26945 = G__26962;
chunk__26926_26946 = G__26963;
count__26927_26947 = G__26964;
i__26928_26948 = G__26965;
continue;
}
} else {
}
}
break;
}

var c__21646__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21646__auto__,map__26924,map__26924__$1,opts,on_cssload){
return (function (){
var f__21647__auto__ = (function (){var switch__21584__auto__ = ((function (c__21646__auto__,map__26924,map__26924__$1,opts,on_cssload){
return (function (state_26935){
var state_val_26936 = (state_26935[(1)]);
if((state_val_26936 === (2))){
var inst_26931 = (state_26935[(2)]);
var inst_26932 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_26933 = on_cssload.call(null,inst_26932);
var state_26935__$1 = (function (){var statearr_26937 = state_26935;
(statearr_26937[(7)] = inst_26931);

return statearr_26937;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26935__$1,inst_26933);
} else {
if((state_val_26936 === (1))){
var inst_26929 = cljs.core.async.timeout.call(null,(100));
var state_26935__$1 = state_26935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26935__$1,(2),inst_26929);
} else {
return null;
}
}
});})(c__21646__auto__,map__26924,map__26924__$1,opts,on_cssload))
;
return ((function (switch__21584__auto__,c__21646__auto__,map__26924,map__26924__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21585__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21585__auto____0 = (function (){
var statearr_26941 = [null,null,null,null,null,null,null,null];
(statearr_26941[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21585__auto__);

(statearr_26941[(1)] = (1));

return statearr_26941;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21585__auto____1 = (function (state_26935){
while(true){
var ret_value__21586__auto__ = (function (){try{while(true){
var result__21587__auto__ = switch__21584__auto__.call(null,state_26935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21587__auto__;
}
break;
}
}catch (e26942){if((e26942 instanceof Object)){
var ex__21588__auto__ = e26942;
var statearr_26943_26966 = state_26935;
(statearr_26943_26966[(5)] = ex__21588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26967 = state_26935;
state_26935 = G__26967;
continue;
} else {
return ret_value__21586__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21585__auto__ = function(state_26935){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21585__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21585__auto____1.call(this,state_26935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21585__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21585__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21585__auto__;
})()
;})(switch__21584__auto__,c__21646__auto__,map__26924,map__26924__$1,opts,on_cssload))
})();
var state__21648__auto__ = (function (){var statearr_26944 = f__21647__auto__.call(null);
(statearr_26944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21646__auto__);

return statearr_26944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21648__auto__);
});})(c__21646__auto__,map__26924,map__26924__$1,opts,on_cssload))
);

return c__21646__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1433328039182