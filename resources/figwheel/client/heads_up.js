// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__19156__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19156__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__26003_26011 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__26004_26012 = null;
var count__26005_26013 = (0);
var i__26006_26014 = (0);
while(true){
if((i__26006_26014 < count__26005_26013)){
var k_26015 = cljs.core._nth.call(null,chunk__26004_26012,i__26006_26014);
e.setAttribute(cljs.core.name.call(null,k_26015),cljs.core.get.call(null,attrs,k_26015));

var G__26016 = seq__26003_26011;
var G__26017 = chunk__26004_26012;
var G__26018 = count__26005_26013;
var G__26019 = (i__26006_26014 + (1));
seq__26003_26011 = G__26016;
chunk__26004_26012 = G__26017;
count__26005_26013 = G__26018;
i__26006_26014 = G__26019;
continue;
} else {
var temp__4126__auto___26020 = cljs.core.seq.call(null,seq__26003_26011);
if(temp__4126__auto___26020){
var seq__26003_26021__$1 = temp__4126__auto___26020;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26003_26021__$1)){
var c__18901__auto___26022 = cljs.core.chunk_first.call(null,seq__26003_26021__$1);
var G__26023 = cljs.core.chunk_rest.call(null,seq__26003_26021__$1);
var G__26024 = c__18901__auto___26022;
var G__26025 = cljs.core.count.call(null,c__18901__auto___26022);
var G__26026 = (0);
seq__26003_26011 = G__26023;
chunk__26004_26012 = G__26024;
count__26005_26013 = G__26025;
i__26006_26014 = G__26026;
continue;
} else {
var k_26027 = cljs.core.first.call(null,seq__26003_26021__$1);
e.setAttribute(cljs.core.name.call(null,k_26027),cljs.core.get.call(null,attrs,k_26027));

var G__26028 = cljs.core.next.call(null,seq__26003_26021__$1);
var G__26029 = null;
var G__26030 = (0);
var G__26031 = (0);
seq__26003_26011 = G__26028;
chunk__26004_26012 = G__26029;
count__26005_26013 = G__26030;
i__26006_26014 = G__26031;
continue;
}
} else {
}
}
break;
}

var seq__26007_26032 = cljs.core.seq.call(null,children);
var chunk__26008_26033 = null;
var count__26009_26034 = (0);
var i__26010_26035 = (0);
while(true){
if((i__26010_26035 < count__26009_26034)){
var ch_26036 = cljs.core._nth.call(null,chunk__26008_26033,i__26010_26035);
e.appendChild(ch_26036);

var G__26037 = seq__26007_26032;
var G__26038 = chunk__26008_26033;
var G__26039 = count__26009_26034;
var G__26040 = (i__26010_26035 + (1));
seq__26007_26032 = G__26037;
chunk__26008_26033 = G__26038;
count__26009_26034 = G__26039;
i__26010_26035 = G__26040;
continue;
} else {
var temp__4126__auto___26041 = cljs.core.seq.call(null,seq__26007_26032);
if(temp__4126__auto___26041){
var seq__26007_26042__$1 = temp__4126__auto___26041;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26007_26042__$1)){
var c__18901__auto___26043 = cljs.core.chunk_first.call(null,seq__26007_26042__$1);
var G__26044 = cljs.core.chunk_rest.call(null,seq__26007_26042__$1);
var G__26045 = c__18901__auto___26043;
var G__26046 = cljs.core.count.call(null,c__18901__auto___26043);
var G__26047 = (0);
seq__26007_26032 = G__26044;
chunk__26008_26033 = G__26045;
count__26009_26034 = G__26046;
i__26010_26035 = G__26047;
continue;
} else {
var ch_26048 = cljs.core.first.call(null,seq__26007_26042__$1);
e.appendChild(ch_26048);

var G__26049 = cljs.core.next.call(null,seq__26007_26042__$1);
var G__26050 = null;
var G__26051 = (0);
var G__26052 = (0);
seq__26007_26032 = G__26049;
chunk__26008_26033 = G__26050;
count__26009_26034 = G__26051;
i__26010_26035 = G__26052;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq26000){
var G__26001 = cljs.core.first.call(null,seq26000);
var seq26000__$1 = cljs.core.next.call(null,seq26000);
var G__26002 = cljs.core.first.call(null,seq26000__$1);
var seq26000__$2 = cljs.core.next.call(null,seq26000__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__26001,G__26002,seq26000__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19011__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19012__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19013__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19014__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19015__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19011__auto__,prefer_table__19012__auto__,method_cache__19013__auto__,cached_hierarchy__19014__auto__,hierarchy__19015__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19011__auto__,prefer_table__19012__auto__,method_cache__19013__auto__,cached_hierarchy__19014__auto__,hierarchy__19015__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19015__auto__,method_table__19011__auto__,prefer_table__19012__auto__,method_cache__19013__auto__,cached_hierarchy__19014__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_26053 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_26053.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_26053.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_26053.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_26053);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__26054,st_map){
var map__26058 = p__26054;
var map__26058__$1 = ((cljs.core.seq_QMARK_.call(null,map__26058))?cljs.core.apply.call(null,cljs.core.hash_map,map__26058):map__26058);
var container_el = cljs.core.get.call(null,map__26058__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__26058,map__26058__$1,container_el){
return (function (p__26059){
var vec__26060 = p__26059;
var k = cljs.core.nth.call(null,vec__26060,(0),null);
var v = cljs.core.nth.call(null,vec__26060,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__26058,map__26058__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__26061,dom_str){
var map__26063 = p__26061;
var map__26063__$1 = ((cljs.core.seq_QMARK_.call(null,map__26063))?cljs.core.apply.call(null,cljs.core.hash_map,map__26063):map__26063);
var c = map__26063__$1;
var content_area_el = cljs.core.get.call(null,map__26063__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__26064){
var map__26066 = p__26064;
var map__26066__$1 = ((cljs.core.seq_QMARK_.call(null,map__26066))?cljs.core.apply.call(null,cljs.core.hash_map,map__26066):map__26066);
var content_area_el = cljs.core.get.call(null,map__26066__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21646__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21646__auto__){
return (function (){
var f__21647__auto__ = (function (){var switch__21584__auto__ = ((function (c__21646__auto__){
return (function (state_26108){
var state_val_26109 = (state_26108[(1)]);
if((state_val_26109 === (2))){
var inst_26093 = (state_26108[(7)]);
var inst_26102 = (state_26108[(2)]);
var inst_26103 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_26104 = ["auto"];
var inst_26105 = cljs.core.PersistentHashMap.fromArrays(inst_26103,inst_26104);
var inst_26106 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26093,inst_26105);
var state_26108__$1 = (function (){var statearr_26110 = state_26108;
(statearr_26110[(8)] = inst_26102);

return statearr_26110;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26108__$1,inst_26106);
} else {
if((state_val_26109 === (1))){
var inst_26093 = (state_26108[(7)]);
var inst_26093__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26094 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26095 = ["10px","10px","100%","68px","1.0"];
var inst_26096 = cljs.core.PersistentHashMap.fromArrays(inst_26094,inst_26095);
var inst_26097 = cljs.core.merge.call(null,inst_26096,style);
var inst_26098 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26093__$1,inst_26097);
var inst_26099 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26093__$1,msg);
var inst_26100 = cljs.core.async.timeout.call(null,(300));
var state_26108__$1 = (function (){var statearr_26111 = state_26108;
(statearr_26111[(9)] = inst_26098);

(statearr_26111[(10)] = inst_26099);

(statearr_26111[(7)] = inst_26093__$1);

return statearr_26111;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26108__$1,(2),inst_26100);
} else {
return null;
}
}
});})(c__21646__auto__))
;
return ((function (switch__21584__auto__,c__21646__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21585__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21585__auto____0 = (function (){
var statearr_26115 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26115[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21585__auto__);

(statearr_26115[(1)] = (1));

return statearr_26115;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21585__auto____1 = (function (state_26108){
while(true){
var ret_value__21586__auto__ = (function (){try{while(true){
var result__21587__auto__ = switch__21584__auto__.call(null,state_26108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21587__auto__;
}
break;
}
}catch (e26116){if((e26116 instanceof Object)){
var ex__21588__auto__ = e26116;
var statearr_26117_26119 = state_26108;
(statearr_26117_26119[(5)] = ex__21588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26120 = state_26108;
state_26108 = G__26120;
continue;
} else {
return ret_value__21586__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21585__auto__ = function(state_26108){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21585__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21585__auto____1.call(this,state_26108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21585__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21585__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21585__auto__;
})()
;})(switch__21584__auto__,c__21646__auto__))
})();
var state__21648__auto__ = (function (){var statearr_26118 = f__21647__auto__.call(null);
(statearr_26118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21646__auto__);

return statearr_26118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21648__auto__);
});})(c__21646__auto__))
);

return c__21646__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__26122 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__26122,(0),null);
var ln = cljs.core.nth.call(null,vec__26122,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__26125 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__26125,(0),null);
var file_line = cljs.core.nth.call(null,vec__26125,(1),null);
var file_column = cljs.core.nth.call(null,vec__26125,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__26125,file_name,file_line,file_column){
return (function (p1__26123_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__26123_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__26125,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18116__auto__ = file_line;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
var and__18104__auto__ = cause;
if(cljs.core.truth_(and__18104__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18104__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__26127 = figwheel.client.heads_up.ensure_container.call(null);
var map__26127__$1 = ((cljs.core.seq_QMARK_.call(null,map__26127))?cljs.core.apply.call(null,cljs.core.hash_map,map__26127):map__26127);
var content_area_el = cljs.core.get.call(null,map__26127__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21646__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21646__auto__){
return (function (){
var f__21647__auto__ = (function (){var switch__21584__auto__ = ((function (c__21646__auto__){
return (function (state_26174){
var state_val_26175 = (state_26174[(1)]);
if((state_val_26175 === (3))){
var inst_26157 = (state_26174[(7)]);
var inst_26171 = (state_26174[(2)]);
var inst_26172 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26157,"");
var state_26174__$1 = (function (){var statearr_26176 = state_26174;
(statearr_26176[(8)] = inst_26171);

return statearr_26176;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26174__$1,inst_26172);
} else {
if((state_val_26175 === (2))){
var inst_26157 = (state_26174[(7)]);
var inst_26164 = (state_26174[(2)]);
var inst_26165 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_26166 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_26167 = cljs.core.PersistentHashMap.fromArrays(inst_26165,inst_26166);
var inst_26168 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26157,inst_26167);
var inst_26169 = cljs.core.async.timeout.call(null,(200));
var state_26174__$1 = (function (){var statearr_26177 = state_26174;
(statearr_26177[(9)] = inst_26168);

(statearr_26177[(10)] = inst_26164);

return statearr_26177;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26174__$1,(3),inst_26169);
} else {
if((state_val_26175 === (1))){
var inst_26157 = (state_26174[(7)]);
var inst_26157__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26158 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26159 = ["0.0"];
var inst_26160 = cljs.core.PersistentHashMap.fromArrays(inst_26158,inst_26159);
var inst_26161 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26157__$1,inst_26160);
var inst_26162 = cljs.core.async.timeout.call(null,(300));
var state_26174__$1 = (function (){var statearr_26178 = state_26174;
(statearr_26178[(11)] = inst_26161);

(statearr_26178[(7)] = inst_26157__$1);

return statearr_26178;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26174__$1,(2),inst_26162);
} else {
return null;
}
}
}
});})(c__21646__auto__))
;
return ((function (switch__21584__auto__,c__21646__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21585__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21585__auto____0 = (function (){
var statearr_26182 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26182[(0)] = figwheel$client$heads_up$clear_$_state_machine__21585__auto__);

(statearr_26182[(1)] = (1));

return statearr_26182;
});
var figwheel$client$heads_up$clear_$_state_machine__21585__auto____1 = (function (state_26174){
while(true){
var ret_value__21586__auto__ = (function (){try{while(true){
var result__21587__auto__ = switch__21584__auto__.call(null,state_26174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21587__auto__;
}
break;
}
}catch (e26183){if((e26183 instanceof Object)){
var ex__21588__auto__ = e26183;
var statearr_26184_26186 = state_26174;
(statearr_26184_26186[(5)] = ex__21588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26187 = state_26174;
state_26174 = G__26187;
continue;
} else {
return ret_value__21586__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21585__auto__ = function(state_26174){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21585__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21585__auto____1.call(this,state_26174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21585__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21585__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21585__auto__;
})()
;})(switch__21584__auto__,c__21646__auto__))
})();
var state__21648__auto__ = (function (){var statearr_26185 = f__21647__auto__.call(null);
(statearr_26185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21646__auto__);

return statearr_26185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21648__auto__);
});})(c__21646__auto__))
);

return c__21646__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21646__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21646__auto__){
return (function (){
var f__21647__auto__ = (function (){var switch__21584__auto__ = ((function (c__21646__auto__){
return (function (state_26219){
var state_val_26220 = (state_26219[(1)]);
if((state_val_26220 === (4))){
var inst_26217 = (state_26219[(2)]);
var state_26219__$1 = state_26219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26219__$1,inst_26217);
} else {
if((state_val_26220 === (3))){
var inst_26214 = (state_26219[(2)]);
var inst_26215 = figwheel.client.heads_up.clear.call(null);
var state_26219__$1 = (function (){var statearr_26221 = state_26219;
(statearr_26221[(7)] = inst_26214);

return statearr_26221;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26219__$1,(4),inst_26215);
} else {
if((state_val_26220 === (2))){
var inst_26211 = (state_26219[(2)]);
var inst_26212 = cljs.core.async.timeout.call(null,(400));
var state_26219__$1 = (function (){var statearr_26222 = state_26219;
(statearr_26222[(8)] = inst_26211);

return statearr_26222;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26219__$1,(3),inst_26212);
} else {
if((state_val_26220 === (1))){
var inst_26209 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_26219__$1 = state_26219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26219__$1,(2),inst_26209);
} else {
return null;
}
}
}
}
});})(c__21646__auto__))
;
return ((function (switch__21584__auto__,c__21646__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21585__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21585__auto____0 = (function (){
var statearr_26226 = [null,null,null,null,null,null,null,null,null];
(statearr_26226[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21585__auto__);

(statearr_26226[(1)] = (1));

return statearr_26226;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21585__auto____1 = (function (state_26219){
while(true){
var ret_value__21586__auto__ = (function (){try{while(true){
var result__21587__auto__ = switch__21584__auto__.call(null,state_26219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21587__auto__;
}
break;
}
}catch (e26227){if((e26227 instanceof Object)){
var ex__21588__auto__ = e26227;
var statearr_26228_26230 = state_26219;
(statearr_26228_26230[(5)] = ex__21588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26231 = state_26219;
state_26219 = G__26231;
continue;
} else {
return ret_value__21586__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21585__auto__ = function(state_26219){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21585__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21585__auto____1.call(this,state_26219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21585__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21585__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21585__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21585__auto__;
})()
;})(switch__21584__auto__,c__21646__auto__))
})();
var state__21648__auto__ = (function (){var statearr_26229 = f__21647__auto__.call(null);
(statearr_26229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21646__auto__);

return statearr_26229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21648__auto__);
});})(c__21646__auto__))
);

return c__21646__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1433328038133