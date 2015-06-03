// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25235__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25235 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25236__i = 0, G__25236__a = new Array(arguments.length -  0);
while (G__25236__i < G__25236__a.length) {G__25236__a[G__25236__i] = arguments[G__25236__i + 0]; ++G__25236__i;}
  args = new cljs.core.IndexedSeq(G__25236__a,0);
} 
return G__25235__delegate.call(this,args);};
G__25235.cljs$lang$maxFixedArity = 0;
G__25235.cljs$lang$applyTo = (function (arglist__25237){
var args = cljs.core.seq(arglist__25237);
return G__25235__delegate(args);
});
G__25235.cljs$core$IFn$_invoke$arity$variadic = G__25235__delegate;
return G__25235;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25238){
var map__25240 = p__25238;
var map__25240__$1 = ((cljs.core.seq_QMARK_.call(null,map__25240))?cljs.core.apply.call(null,cljs.core.hash_map,map__25240):map__25240);
var class$ = cljs.core.get.call(null,map__25240__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__25240__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18116__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18104__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18104__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18104__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21646__auto___25369 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21646__auto___25369,ch){
return (function (){
var f__21647__auto__ = (function (){var switch__21584__auto__ = ((function (c__21646__auto___25369,ch){
return (function (state_25343){
var state_val_25344 = (state_25343[(1)]);
if((state_val_25344 === (7))){
var inst_25339 = (state_25343[(2)]);
var state_25343__$1 = state_25343;
var statearr_25345_25370 = state_25343__$1;
(statearr_25345_25370[(2)] = inst_25339);

(statearr_25345_25370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (1))){
var state_25343__$1 = state_25343;
var statearr_25346_25371 = state_25343__$1;
(statearr_25346_25371[(2)] = null);

(statearr_25346_25371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (4))){
var inst_25307 = (state_25343[(7)]);
var inst_25307__$1 = (state_25343[(2)]);
var state_25343__$1 = (function (){var statearr_25347 = state_25343;
(statearr_25347[(7)] = inst_25307__$1);

return statearr_25347;
})();
if(cljs.core.truth_(inst_25307__$1)){
var statearr_25348_25372 = state_25343__$1;
(statearr_25348_25372[(1)] = (5));

} else {
var statearr_25349_25373 = state_25343__$1;
(statearr_25349_25373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (13))){
var state_25343__$1 = state_25343;
var statearr_25350_25374 = state_25343__$1;
(statearr_25350_25374[(2)] = null);

(statearr_25350_25374[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (6))){
var state_25343__$1 = state_25343;
var statearr_25351_25375 = state_25343__$1;
(statearr_25351_25375[(2)] = null);

(statearr_25351_25375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (3))){
var inst_25341 = (state_25343[(2)]);
var state_25343__$1 = state_25343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25343__$1,inst_25341);
} else {
if((state_val_25344 === (12))){
var inst_25314 = (state_25343[(8)]);
var inst_25327 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25314);
var inst_25328 = cljs.core.first.call(null,inst_25327);
var inst_25329 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25328);
var inst_25330 = console.warn("Figwheel: Not loading code with warnings - ",inst_25329);
var state_25343__$1 = state_25343;
var statearr_25352_25376 = state_25343__$1;
(statearr_25352_25376[(2)] = inst_25330);

(statearr_25352_25376[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (2))){
var state_25343__$1 = state_25343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25343__$1,(4),ch);
} else {
if((state_val_25344 === (11))){
var inst_25323 = (state_25343[(2)]);
var state_25343__$1 = state_25343;
var statearr_25353_25377 = state_25343__$1;
(statearr_25353_25377[(2)] = inst_25323);

(statearr_25353_25377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (9))){
var inst_25313 = (state_25343[(9)]);
var inst_25325 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25313,opts);
var state_25343__$1 = state_25343;
if(cljs.core.truth_(inst_25325)){
var statearr_25354_25378 = state_25343__$1;
(statearr_25354_25378[(1)] = (12));

} else {
var statearr_25355_25379 = state_25343__$1;
(statearr_25355_25379[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (5))){
var inst_25307 = (state_25343[(7)]);
var inst_25313 = (state_25343[(9)]);
var inst_25309 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25310 = (new cljs.core.PersistentArrayMap(null,2,inst_25309,null));
var inst_25311 = (new cljs.core.PersistentHashSet(null,inst_25310,null));
var inst_25312 = figwheel.client.focus_msgs.call(null,inst_25311,inst_25307);
var inst_25313__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25312);
var inst_25314 = cljs.core.first.call(null,inst_25312);
var inst_25315 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25313__$1,opts);
var state_25343__$1 = (function (){var statearr_25356 = state_25343;
(statearr_25356[(8)] = inst_25314);

(statearr_25356[(9)] = inst_25313__$1);

return statearr_25356;
})();
if(cljs.core.truth_(inst_25315)){
var statearr_25357_25380 = state_25343__$1;
(statearr_25357_25380[(1)] = (8));

} else {
var statearr_25358_25381 = state_25343__$1;
(statearr_25358_25381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (14))){
var inst_25333 = (state_25343[(2)]);
var state_25343__$1 = state_25343;
var statearr_25359_25382 = state_25343__$1;
(statearr_25359_25382[(2)] = inst_25333);

(statearr_25359_25382[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (10))){
var inst_25335 = (state_25343[(2)]);
var state_25343__$1 = (function (){var statearr_25360 = state_25343;
(statearr_25360[(10)] = inst_25335);

return statearr_25360;
})();
var statearr_25361_25383 = state_25343__$1;
(statearr_25361_25383[(2)] = null);

(statearr_25361_25383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (8))){
var inst_25314 = (state_25343[(8)]);
var inst_25317 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25318 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25314);
var inst_25319 = cljs.core.async.timeout.call(null,(1000));
var inst_25320 = [inst_25318,inst_25319];
var inst_25321 = (new cljs.core.PersistentVector(null,2,(5),inst_25317,inst_25320,null));
var state_25343__$1 = state_25343;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25343__$1,(11),inst_25321);
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
});})(c__21646__auto___25369,ch))
;
return ((function (switch__21584__auto__,c__21646__auto___25369,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21585__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21585__auto____0 = (function (){
var statearr_25365 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25365[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21585__auto__);

(statearr_25365[(1)] = (1));

return statearr_25365;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21585__auto____1 = (function (state_25343){
while(true){
var ret_value__21586__auto__ = (function (){try{while(true){
var result__21587__auto__ = switch__21584__auto__.call(null,state_25343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21587__auto__;
}
break;
}
}catch (e25366){if((e25366 instanceof Object)){
var ex__21588__auto__ = e25366;
var statearr_25367_25384 = state_25343;
(statearr_25367_25384[(5)] = ex__21588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25385 = state_25343;
state_25343 = G__25385;
continue;
} else {
return ret_value__21586__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21585__auto__ = function(state_25343){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21585__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21585__auto____1.call(this,state_25343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21585__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21585__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21585__auto__;
})()
;})(switch__21584__auto__,c__21646__auto___25369,ch))
})();
var state__21648__auto__ = (function (){var statearr_25368 = f__21647__auto__.call(null);
(statearr_25368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21646__auto___25369);

return statearr_25368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21648__auto__);
});})(c__21646__auto___25369,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25386_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25386_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_25393 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25393){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_25391 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25392 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_25391,_STAR_print_newline_STAR_25392,base_path_25393){
return (function() { 
var G__25394__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25394 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25395__i = 0, G__25395__a = new Array(arguments.length -  0);
while (G__25395__i < G__25395__a.length) {G__25395__a[G__25395__i] = arguments[G__25395__i + 0]; ++G__25395__i;}
  args = new cljs.core.IndexedSeq(G__25395__a,0);
} 
return G__25394__delegate.call(this,args);};
G__25394.cljs$lang$maxFixedArity = 0;
G__25394.cljs$lang$applyTo = (function (arglist__25396){
var args = cljs.core.seq(arglist__25396);
return G__25394__delegate(args);
});
G__25394.cljs$core$IFn$_invoke$arity$variadic = G__25394__delegate;
return G__25394;
})()
;})(_STAR_print_fn_STAR_25391,_STAR_print_newline_STAR_25392,base_path_25393))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25392;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25391;
}}catch (e25390){if((e25390 instanceof Error)){
var e = e25390;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25393], null));
} else {
var e = e25390;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25393))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25397){
var map__25402 = p__25397;
var map__25402__$1 = ((cljs.core.seq_QMARK_.call(null,map__25402))?cljs.core.apply.call(null,cljs.core.hash_map,map__25402):map__25402);
var opts = map__25402__$1;
var build_id = cljs.core.get.call(null,map__25402__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25402,map__25402__$1,opts,build_id){
return (function (p__25403){
var vec__25404 = p__25403;
var map__25405 = cljs.core.nth.call(null,vec__25404,(0),null);
var map__25405__$1 = ((cljs.core.seq_QMARK_.call(null,map__25405))?cljs.core.apply.call(null,cljs.core.hash_map,map__25405):map__25405);
var msg = map__25405__$1;
var msg_name = cljs.core.get.call(null,map__25405__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25404,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__25404,map__25405,map__25405__$1,msg,msg_name,_,map__25402,map__25402__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25404,map__25405,map__25405__$1,msg,msg_name,_,map__25402,map__25402__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25402,map__25402__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25409){
var vec__25410 = p__25409;
var map__25411 = cljs.core.nth.call(null,vec__25410,(0),null);
var map__25411__$1 = ((cljs.core.seq_QMARK_.call(null,map__25411))?cljs.core.apply.call(null,cljs.core.hash_map,map__25411):map__25411);
var msg = map__25411__$1;
var msg_name = cljs.core.get.call(null,map__25411__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25410,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25412){
var map__25420 = p__25412;
var map__25420__$1 = ((cljs.core.seq_QMARK_.call(null,map__25420))?cljs.core.apply.call(null,cljs.core.hash_map,map__25420):map__25420);
var on_compile_fail = cljs.core.get.call(null,map__25420__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__25420__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__25420,map__25420__$1,on_compile_fail,on_compile_warning){
return (function (p__25421){
var vec__25422 = p__25421;
var map__25423 = cljs.core.nth.call(null,vec__25422,(0),null);
var map__25423__$1 = ((cljs.core.seq_QMARK_.call(null,map__25423))?cljs.core.apply.call(null,cljs.core.hash_map,map__25423):map__25423);
var msg = map__25423__$1;
var msg_name = cljs.core.get.call(null,map__25423__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25422,(1));
var pred__25424 = cljs.core._EQ_;
var expr__25425 = msg_name;
if(cljs.core.truth_(pred__25424.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25425))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25424.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25425))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25420,map__25420__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21646__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21646__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21647__auto__ = (function (){var switch__21584__auto__ = ((function (c__21646__auto__,msg_hist,msg_names,msg){
return (function (state_25626){
var state_val_25627 = (state_25626[(1)]);
if((state_val_25627 === (7))){
var inst_25560 = (state_25626[(2)]);
var state_25626__$1 = state_25626;
var statearr_25628_25669 = state_25626__$1;
(statearr_25628_25669[(2)] = inst_25560);

(statearr_25628_25669[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (20))){
var inst_25588 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25626__$1 = state_25626;
if(cljs.core.truth_(inst_25588)){
var statearr_25629_25670 = state_25626__$1;
(statearr_25629_25670[(1)] = (22));

} else {
var statearr_25630_25671 = state_25626__$1;
(statearr_25630_25671[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (27))){
var inst_25600 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25601 = figwheel.client.heads_up.display_warning.call(null,inst_25600);
var state_25626__$1 = state_25626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25626__$1,(30),inst_25601);
} else {
if((state_val_25627 === (1))){
var inst_25548 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25626__$1 = state_25626;
if(cljs.core.truth_(inst_25548)){
var statearr_25631_25672 = state_25626__$1;
(statearr_25631_25672[(1)] = (2));

} else {
var statearr_25632_25673 = state_25626__$1;
(statearr_25632_25673[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (24))){
var inst_25616 = (state_25626[(2)]);
var state_25626__$1 = state_25626;
var statearr_25633_25674 = state_25626__$1;
(statearr_25633_25674[(2)] = inst_25616);

(statearr_25633_25674[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (4))){
var inst_25624 = (state_25626[(2)]);
var state_25626__$1 = state_25626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25626__$1,inst_25624);
} else {
if((state_val_25627 === (15))){
var inst_25576 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25577 = figwheel.client.format_messages.call(null,inst_25576);
var inst_25578 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25579 = figwheel.client.heads_up.display_error.call(null,inst_25577,inst_25578);
var state_25626__$1 = state_25626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25626__$1,(18),inst_25579);
} else {
if((state_val_25627 === (21))){
var inst_25618 = (state_25626[(2)]);
var state_25626__$1 = state_25626;
var statearr_25634_25675 = state_25626__$1;
(statearr_25634_25675[(2)] = inst_25618);

(statearr_25634_25675[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (31))){
var inst_25607 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25626__$1 = state_25626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25626__$1,(34),inst_25607);
} else {
if((state_val_25627 === (32))){
var state_25626__$1 = state_25626;
var statearr_25635_25676 = state_25626__$1;
(statearr_25635_25676[(2)] = null);

(statearr_25635_25676[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (33))){
var inst_25612 = (state_25626[(2)]);
var state_25626__$1 = state_25626;
var statearr_25636_25677 = state_25626__$1;
(statearr_25636_25677[(2)] = inst_25612);

(statearr_25636_25677[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (13))){
var inst_25566 = (state_25626[(2)]);
var inst_25567 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25568 = figwheel.client.format_messages.call(null,inst_25567);
var inst_25569 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25570 = figwheel.client.heads_up.display_error.call(null,inst_25568,inst_25569);
var state_25626__$1 = (function (){var statearr_25637 = state_25626;
(statearr_25637[(7)] = inst_25566);

return statearr_25637;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25626__$1,(14),inst_25570);
} else {
if((state_val_25627 === (22))){
var inst_25590 = figwheel.client.heads_up.clear.call(null);
var state_25626__$1 = state_25626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25626__$1,(25),inst_25590);
} else {
if((state_val_25627 === (29))){
var inst_25614 = (state_25626[(2)]);
var state_25626__$1 = state_25626;
var statearr_25638_25678 = state_25626__$1;
(statearr_25638_25678[(2)] = inst_25614);

(statearr_25638_25678[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (6))){
var inst_25556 = figwheel.client.heads_up.clear.call(null);
var state_25626__$1 = state_25626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25626__$1,(9),inst_25556);
} else {
if((state_val_25627 === (28))){
var inst_25605 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25626__$1 = state_25626;
if(cljs.core.truth_(inst_25605)){
var statearr_25639_25679 = state_25626__$1;
(statearr_25639_25679[(1)] = (31));

} else {
var statearr_25640_25680 = state_25626__$1;
(statearr_25640_25680[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (25))){
var inst_25592 = (state_25626[(2)]);
var inst_25593 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25594 = figwheel.client.heads_up.display_warning.call(null,inst_25593);
var state_25626__$1 = (function (){var statearr_25641 = state_25626;
(statearr_25641[(8)] = inst_25592);

return statearr_25641;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25626__$1,(26),inst_25594);
} else {
if((state_val_25627 === (34))){
var inst_25609 = (state_25626[(2)]);
var state_25626__$1 = state_25626;
var statearr_25642_25681 = state_25626__$1;
(statearr_25642_25681[(2)] = inst_25609);

(statearr_25642_25681[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (17))){
var inst_25620 = (state_25626[(2)]);
var state_25626__$1 = state_25626;
var statearr_25643_25682 = state_25626__$1;
(statearr_25643_25682[(2)] = inst_25620);

(statearr_25643_25682[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (3))){
var inst_25562 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25626__$1 = state_25626;
if(cljs.core.truth_(inst_25562)){
var statearr_25644_25683 = state_25626__$1;
(statearr_25644_25683[(1)] = (10));

} else {
var statearr_25645_25684 = state_25626__$1;
(statearr_25645_25684[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (12))){
var inst_25622 = (state_25626[(2)]);
var state_25626__$1 = state_25626;
var statearr_25646_25685 = state_25626__$1;
(statearr_25646_25685[(2)] = inst_25622);

(statearr_25646_25685[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (2))){
var inst_25550 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25626__$1 = state_25626;
if(cljs.core.truth_(inst_25550)){
var statearr_25647_25686 = state_25626__$1;
(statearr_25647_25686[(1)] = (5));

} else {
var statearr_25648_25687 = state_25626__$1;
(statearr_25648_25687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (23))){
var inst_25598 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25626__$1 = state_25626;
if(cljs.core.truth_(inst_25598)){
var statearr_25649_25688 = state_25626__$1;
(statearr_25649_25688[(1)] = (27));

} else {
var statearr_25650_25689 = state_25626__$1;
(statearr_25650_25689[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (19))){
var inst_25585 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25586 = figwheel.client.heads_up.append_message.call(null,inst_25585);
var state_25626__$1 = state_25626;
var statearr_25651_25690 = state_25626__$1;
(statearr_25651_25690[(2)] = inst_25586);

(statearr_25651_25690[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (11))){
var inst_25574 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25626__$1 = state_25626;
if(cljs.core.truth_(inst_25574)){
var statearr_25652_25691 = state_25626__$1;
(statearr_25652_25691[(1)] = (15));

} else {
var statearr_25653_25692 = state_25626__$1;
(statearr_25653_25692[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (9))){
var inst_25558 = (state_25626[(2)]);
var state_25626__$1 = state_25626;
var statearr_25654_25693 = state_25626__$1;
(statearr_25654_25693[(2)] = inst_25558);

(statearr_25654_25693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (5))){
var inst_25552 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25626__$1 = state_25626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25626__$1,(8),inst_25552);
} else {
if((state_val_25627 === (14))){
var inst_25572 = (state_25626[(2)]);
var state_25626__$1 = state_25626;
var statearr_25655_25694 = state_25626__$1;
(statearr_25655_25694[(2)] = inst_25572);

(statearr_25655_25694[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (26))){
var inst_25596 = (state_25626[(2)]);
var state_25626__$1 = state_25626;
var statearr_25656_25695 = state_25626__$1;
(statearr_25656_25695[(2)] = inst_25596);

(statearr_25656_25695[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (16))){
var inst_25583 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25626__$1 = state_25626;
if(cljs.core.truth_(inst_25583)){
var statearr_25657_25696 = state_25626__$1;
(statearr_25657_25696[(1)] = (19));

} else {
var statearr_25658_25697 = state_25626__$1;
(statearr_25658_25697[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (30))){
var inst_25603 = (state_25626[(2)]);
var state_25626__$1 = state_25626;
var statearr_25659_25698 = state_25626__$1;
(statearr_25659_25698[(2)] = inst_25603);

(statearr_25659_25698[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (10))){
var inst_25564 = figwheel.client.heads_up.clear.call(null);
var state_25626__$1 = state_25626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25626__$1,(13),inst_25564);
} else {
if((state_val_25627 === (18))){
var inst_25581 = (state_25626[(2)]);
var state_25626__$1 = state_25626;
var statearr_25660_25699 = state_25626__$1;
(statearr_25660_25699[(2)] = inst_25581);

(statearr_25660_25699[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (8))){
var inst_25554 = (state_25626[(2)]);
var state_25626__$1 = state_25626;
var statearr_25661_25700 = state_25626__$1;
(statearr_25661_25700[(2)] = inst_25554);

(statearr_25661_25700[(1)] = (7));


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
});})(c__21646__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21584__auto__,c__21646__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21585__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21585__auto____0 = (function (){
var statearr_25665 = [null,null,null,null,null,null,null,null,null];
(statearr_25665[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21585__auto__);

(statearr_25665[(1)] = (1));

return statearr_25665;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21585__auto____1 = (function (state_25626){
while(true){
var ret_value__21586__auto__ = (function (){try{while(true){
var result__21587__auto__ = switch__21584__auto__.call(null,state_25626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21587__auto__;
}
break;
}
}catch (e25666){if((e25666 instanceof Object)){
var ex__21588__auto__ = e25666;
var statearr_25667_25701 = state_25626;
(statearr_25667_25701[(5)] = ex__21588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25702 = state_25626;
state_25626 = G__25702;
continue;
} else {
return ret_value__21586__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21585__auto__ = function(state_25626){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21585__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21585__auto____1.call(this,state_25626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21585__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21585__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21585__auto__;
})()
;})(switch__21584__auto__,c__21646__auto__,msg_hist,msg_names,msg))
})();
var state__21648__auto__ = (function (){var statearr_25668 = f__21647__auto__.call(null);
(statearr_25668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21646__auto__);

return statearr_25668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21648__auto__);
});})(c__21646__auto__,msg_hist,msg_names,msg))
);

return c__21646__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21646__auto___25765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21646__auto___25765,ch){
return (function (){
var f__21647__auto__ = (function (){var switch__21584__auto__ = ((function (c__21646__auto___25765,ch){
return (function (state_25748){
var state_val_25749 = (state_25748[(1)]);
if((state_val_25749 === (8))){
var inst_25740 = (state_25748[(2)]);
var state_25748__$1 = (function (){var statearr_25750 = state_25748;
(statearr_25750[(7)] = inst_25740);

return statearr_25750;
})();
var statearr_25751_25766 = state_25748__$1;
(statearr_25751_25766[(2)] = null);

(statearr_25751_25766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (7))){
var inst_25744 = (state_25748[(2)]);
var state_25748__$1 = state_25748;
var statearr_25752_25767 = state_25748__$1;
(statearr_25752_25767[(2)] = inst_25744);

(statearr_25752_25767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (6))){
var state_25748__$1 = state_25748;
var statearr_25753_25768 = state_25748__$1;
(statearr_25753_25768[(2)] = null);

(statearr_25753_25768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (5))){
var inst_25736 = (state_25748[(8)]);
var inst_25738 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25736);
var state_25748__$1 = state_25748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25748__$1,(8),inst_25738);
} else {
if((state_val_25749 === (4))){
var inst_25736 = (state_25748[(8)]);
var inst_25736__$1 = (state_25748[(2)]);
var state_25748__$1 = (function (){var statearr_25754 = state_25748;
(statearr_25754[(8)] = inst_25736__$1);

return statearr_25754;
})();
if(cljs.core.truth_(inst_25736__$1)){
var statearr_25755_25769 = state_25748__$1;
(statearr_25755_25769[(1)] = (5));

} else {
var statearr_25756_25770 = state_25748__$1;
(statearr_25756_25770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (3))){
var inst_25746 = (state_25748[(2)]);
var state_25748__$1 = state_25748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25748__$1,inst_25746);
} else {
if((state_val_25749 === (2))){
var state_25748__$1 = state_25748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25748__$1,(4),ch);
} else {
if((state_val_25749 === (1))){
var state_25748__$1 = state_25748;
var statearr_25757_25771 = state_25748__$1;
(statearr_25757_25771[(2)] = null);

(statearr_25757_25771[(1)] = (2));


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
});})(c__21646__auto___25765,ch))
;
return ((function (switch__21584__auto__,c__21646__auto___25765,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21585__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21585__auto____0 = (function (){
var statearr_25761 = [null,null,null,null,null,null,null,null,null];
(statearr_25761[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21585__auto__);

(statearr_25761[(1)] = (1));

return statearr_25761;
});
var figwheel$client$heads_up_plugin_$_state_machine__21585__auto____1 = (function (state_25748){
while(true){
var ret_value__21586__auto__ = (function (){try{while(true){
var result__21587__auto__ = switch__21584__auto__.call(null,state_25748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21587__auto__;
}
break;
}
}catch (e25762){if((e25762 instanceof Object)){
var ex__21588__auto__ = e25762;
var statearr_25763_25772 = state_25748;
(statearr_25763_25772[(5)] = ex__21588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25773 = state_25748;
state_25748 = G__25773;
continue;
} else {
return ret_value__21586__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21585__auto__ = function(state_25748){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21585__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21585__auto____1.call(this,state_25748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21585__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21585__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21585__auto__;
})()
;})(switch__21584__auto__,c__21646__auto___25765,ch))
})();
var state__21648__auto__ = (function (){var statearr_25764 = f__21647__auto__.call(null);
(statearr_25764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21646__auto___25765);

return statearr_25764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21648__auto__);
});})(c__21646__auto___25765,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21646__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21646__auto__){
return (function (){
var f__21647__auto__ = (function (){var switch__21584__auto__ = ((function (c__21646__auto__){
return (function (state_25794){
var state_val_25795 = (state_25794[(1)]);
if((state_val_25795 === (2))){
var inst_25791 = (state_25794[(2)]);
var inst_25792 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25794__$1 = (function (){var statearr_25796 = state_25794;
(statearr_25796[(7)] = inst_25791);

return statearr_25796;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25794__$1,inst_25792);
} else {
if((state_val_25795 === (1))){
var inst_25789 = cljs.core.async.timeout.call(null,(3000));
var state_25794__$1 = state_25794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25794__$1,(2),inst_25789);
} else {
return null;
}
}
});})(c__21646__auto__))
;
return ((function (switch__21584__auto__,c__21646__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21585__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21585__auto____0 = (function (){
var statearr_25800 = [null,null,null,null,null,null,null,null];
(statearr_25800[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21585__auto__);

(statearr_25800[(1)] = (1));

return statearr_25800;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21585__auto____1 = (function (state_25794){
while(true){
var ret_value__21586__auto__ = (function (){try{while(true){
var result__21587__auto__ = switch__21584__auto__.call(null,state_25794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21587__auto__;
}
break;
}
}catch (e25801){if((e25801 instanceof Object)){
var ex__21588__auto__ = e25801;
var statearr_25802_25804 = state_25794;
(statearr_25802_25804[(5)] = ex__21588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25805 = state_25794;
state_25794 = G__25805;
continue;
} else {
return ret_value__21586__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21585__auto__ = function(state_25794){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21585__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21585__auto____1.call(this,state_25794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21585__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21585__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21585__auto__;
})()
;})(switch__21584__auto__,c__21646__auto__))
})();
var state__21648__auto__ = (function (){var statearr_25803 = f__21647__auto__.call(null);
(statearr_25803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21646__auto__);

return statearr_25803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21648__auto__);
});})(c__21646__auto__))
);

return c__21646__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__18104__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__18104__auto__)){
return ("CustomEvent" in window);
} else {
return and__18104__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj25809 = {"detail":url};
return obj25809;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25810){
var map__25816 = p__25810;
var map__25816__$1 = ((cljs.core.seq_QMARK_.call(null,map__25816))?cljs.core.apply.call(null,cljs.core.hash_map,map__25816):map__25816);
var ed = map__25816__$1;
var cause = cljs.core.get.call(null,map__25816__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__25816__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__25816__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25817_25821 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25818_25822 = null;
var count__25819_25823 = (0);
var i__25820_25824 = (0);
while(true){
if((i__25820_25824 < count__25819_25823)){
var msg_25825 = cljs.core._nth.call(null,chunk__25818_25822,i__25820_25824);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25825);

var G__25826 = seq__25817_25821;
var G__25827 = chunk__25818_25822;
var G__25828 = count__25819_25823;
var G__25829 = (i__25820_25824 + (1));
seq__25817_25821 = G__25826;
chunk__25818_25822 = G__25827;
count__25819_25823 = G__25828;
i__25820_25824 = G__25829;
continue;
} else {
var temp__4126__auto___25830 = cljs.core.seq.call(null,seq__25817_25821);
if(temp__4126__auto___25830){
var seq__25817_25831__$1 = temp__4126__auto___25830;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25817_25831__$1)){
var c__18901__auto___25832 = cljs.core.chunk_first.call(null,seq__25817_25831__$1);
var G__25833 = cljs.core.chunk_rest.call(null,seq__25817_25831__$1);
var G__25834 = c__18901__auto___25832;
var G__25835 = cljs.core.count.call(null,c__18901__auto___25832);
var G__25836 = (0);
seq__25817_25821 = G__25833;
chunk__25818_25822 = G__25834;
count__25819_25823 = G__25835;
i__25820_25824 = G__25836;
continue;
} else {
var msg_25837 = cljs.core.first.call(null,seq__25817_25831__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25837);

var G__25838 = cljs.core.next.call(null,seq__25817_25831__$1);
var G__25839 = null;
var G__25840 = (0);
var G__25841 = (0);
seq__25817_25821 = G__25838;
chunk__25818_25822 = G__25839;
count__25819_25823 = G__25840;
i__25820_25824 = G__25841;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25842){
var map__25844 = p__25842;
var map__25844__$1 = ((cljs.core.seq_QMARK_.call(null,map__25844))?cljs.core.apply.call(null,cljs.core.hash_map,map__25844):map__25844);
var w = map__25844__$1;
var message = cljs.core.get.call(null,map__25844__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18104__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18104__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18104__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__25851 = cljs.core.seq.call(null,plugins);
var chunk__25852 = null;
var count__25853 = (0);
var i__25854 = (0);
while(true){
if((i__25854 < count__25853)){
var vec__25855 = cljs.core._nth.call(null,chunk__25852,i__25854);
var k = cljs.core.nth.call(null,vec__25855,(0),null);
var plugin = cljs.core.nth.call(null,vec__25855,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25857 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25851,chunk__25852,count__25853,i__25854,pl_25857,vec__25855,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25857.call(null,msg_hist);
});})(seq__25851,chunk__25852,count__25853,i__25854,pl_25857,vec__25855,k,plugin))
);
} else {
}

var G__25858 = seq__25851;
var G__25859 = chunk__25852;
var G__25860 = count__25853;
var G__25861 = (i__25854 + (1));
seq__25851 = G__25858;
chunk__25852 = G__25859;
count__25853 = G__25860;
i__25854 = G__25861;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__25851);
if(temp__4126__auto__){
var seq__25851__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25851__$1)){
var c__18901__auto__ = cljs.core.chunk_first.call(null,seq__25851__$1);
var G__25862 = cljs.core.chunk_rest.call(null,seq__25851__$1);
var G__25863 = c__18901__auto__;
var G__25864 = cljs.core.count.call(null,c__18901__auto__);
var G__25865 = (0);
seq__25851 = G__25862;
chunk__25852 = G__25863;
count__25853 = G__25864;
i__25854 = G__25865;
continue;
} else {
var vec__25856 = cljs.core.first.call(null,seq__25851__$1);
var k = cljs.core.nth.call(null,vec__25856,(0),null);
var plugin = cljs.core.nth.call(null,vec__25856,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25866 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25851,chunk__25852,count__25853,i__25854,pl_25866,vec__25856,k,plugin,seq__25851__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25866.call(null,msg_hist);
});})(seq__25851,chunk__25852,count__25853,i__25854,pl_25866,vec__25856,k,plugin,seq__25851__$1,temp__4126__auto__))
);
} else {
}

var G__25867 = cljs.core.next.call(null,seq__25851__$1);
var G__25868 = null;
var G__25869 = (0);
var G__25870 = (0);
seq__25851 = G__25867;
chunk__25852 = G__25868;
count__25853 = G__25869;
i__25854 = G__25870;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__25872 = arguments.length;
switch (G__25872) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__19156__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19156__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25875){
var map__25876 = p__25875;
var map__25876__$1 = ((cljs.core.seq_QMARK_.call(null,map__25876))?cljs.core.apply.call(null,cljs.core.hash_map,map__25876):map__25876);
var opts = map__25876__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25874){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25874));
});

//# sourceMappingURL=client.js.map?rel=1433328036796