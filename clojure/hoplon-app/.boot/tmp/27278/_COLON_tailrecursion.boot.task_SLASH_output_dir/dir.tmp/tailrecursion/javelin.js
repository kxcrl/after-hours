// Compiled by ClojureScript 0.0-2138
goog.provide('tailrecursion.javelin');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');
goog.require('tailrecursion.priority_map');
/**
* Like tree-seq but traversal is breadth-first instead of depth-first.
*/
tailrecursion.javelin.bf_seq = (function bf_seq(branch_QMARK_,children,root){var walk = (function walk(queue){var temp__4092__auto__ = cljs.core.peek.call(null,queue);if(cljs.core.truth_(temp__4092__auto__))
{var node = temp__4092__auto__;return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,node,walk.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(cljs.core.truth_(branch_QMARK_.call(null,node))?children.call(null,node):null))));
}),null,null));
} else
{return null;
}
});
return walk.call(null,cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,root));
});
tailrecursion.javelin.last_rank = cljs.core.atom.call(null,0);
tailrecursion.javelin.next_rank = (function next_rank(){return cljs.core.swap_BANG_.call(null,tailrecursion.javelin.last_rank,cljs.core.inc);
});
tailrecursion.javelin.deref_STAR_ = (function deref_STAR_(x){if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
tailrecursion.javelin.propagate_BANG_ = (function propagate_BANG_(cell){var queue = tailrecursion.priority_map.priority_map.call(null,cell,cell.rank);while(true){
if(cljs.core.seq.call(null,queue))
{var next = cljs.core.key.call(null,cljs.core.peek.call(null,queue));var value = next.thunk.call(null);var continue_QMARK_ = cljs.core.not_EQ_.call(null,value,next.prev);var reducer = ((function (queue,next,value,continue_QMARK_){
return (function (p1__10394_SHARP_,p2__10395_SHARP_){return cljs.core.assoc.call(null,p1__10394_SHARP_,p2__10395_SHARP_,p2__10395_SHARP_.rank);
});})(queue,next,value,continue_QMARK_))
;var siblings = cljs.core.pop.call(null,queue);var children = next.sinks;if(continue_QMARK_)
{next.prev = value;
} else
{}
{
var G__10396 = ((continue_QMARK_)?cljs.core.reduce.call(null,reducer,siblings,children):siblings);
queue = G__10396;
continue;
}
} else
{return null;
}
break;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function destroy_cell_BANG_(this$){var srcs = this$.sources;this$.sources = cljs.core.PersistentVector.EMPTY;
var seq__10401 = cljs.core.seq.call(null,cljs.core.filter.call(null,tailrecursion.javelin.cell_QMARK_,srcs));var chunk__10402 = null;var count__10403 = 0;var i__10404 = 0;while(true){
if((i__10404 < count__10403))
{var src = cljs.core._nth.call(null,chunk__10402,i__10404);src.sinks = cljs.core.disj.call(null,src.sinks,this$);
{
var G__10405 = seq__10401;
var G__10406 = chunk__10402;
var G__10407 = count__10403;
var G__10408 = (i__10404 + 1);
seq__10401 = G__10405;
chunk__10402 = G__10406;
count__10403 = G__10407;
i__10404 = G__10408;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10401);if(temp__4092__auto__)
{var seq__10401__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10401__$1))
{var c__9300__auto__ = cljs.core.chunk_first.call(null,seq__10401__$1);{
var G__10409 = cljs.core.chunk_rest.call(null,seq__10401__$1);
var G__10410 = c__9300__auto__;
var G__10411 = cljs.core.count.call(null,c__9300__auto__);
var G__10412 = 0;
seq__10401 = G__10409;
chunk__10402 = G__10410;
count__10403 = G__10411;
i__10404 = G__10412;
continue;
}
} else
{var src = cljs.core.first.call(null,seq__10401__$1);src.sinks = cljs.core.disj.call(null,src.sinks,this$);
{
var G__10413 = cljs.core.next.call(null,seq__10401__$1);
var G__10414 = null;
var G__10415 = 0;
var G__10416 = 0;
seq__10401 = G__10413;
chunk__10402 = G__10414;
count__10403 = G__10415;
i__10404 = G__10416;
continue;
}
}
} else
{return null;
}
}
break;
}
});
/**
* @param {...*} var_args
*/
tailrecursion.javelin.set_formula_BANG_ = (function() { 
var set_formula_BANG___delegate = function (this$,p__10421){var vec__10442 = p__10421;var f = cljs.core.nth.call(null,vec__10442,0,null);var sources = cljs.core.nth.call(null,vec__10442,1,null);tailrecursion.javelin.destroy_cell_BANG_.call(null,this$);
this$.sources = (cljs.core.truth_(f)?cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f):cljs.core.vec.call(null,sources));
var seq__10443_10462 = cljs.core.seq.call(null,cljs.core.filter.call(null,tailrecursion.javelin.cell_QMARK_,this$.sources));var chunk__10444_10463 = null;var count__10445_10464 = 0;var i__10446_10465 = 0;while(true){
if((i__10446_10465 < count__10445_10464))
{var source_10466 = cljs.core._nth.call(null,chunk__10444_10463,i__10446_10465);source_10466.sinks = cljs.core.conj.call(null,source_10466.sinks,this$);
if((source_10466.rank > this$.rank))
{var seq__10447_10467 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__10443_10462,chunk__10444_10463,count__10445_10464,i__10446_10465,source_10466){
return (function (p1__10417_SHARP_){return p1__10417_SHARP_.sinks;
});})(seq__10443_10462,chunk__10444_10463,count__10445_10464,i__10446_10465,source_10466))
,source_10466));var chunk__10448_10468 = null;var count__10449_10469 = 0;var i__10450_10470 = 0;while(true){
if((i__10450_10470 < count__10449_10469))
{var dep_10471 = cljs.core._nth.call(null,chunk__10448_10468,i__10450_10470);dep_10471.rank = tailrecursion.javelin.next_rank.call(null);
{
var G__10472 = seq__10447_10467;
var G__10473 = chunk__10448_10468;
var G__10474 = count__10449_10469;
var G__10475 = (i__10450_10470 + 1);
seq__10447_10467 = G__10472;
chunk__10448_10468 = G__10473;
count__10449_10469 = G__10474;
i__10450_10470 = G__10475;
continue;
}
} else
{var temp__4092__auto___10476 = cljs.core.seq.call(null,seq__10447_10467);if(temp__4092__auto___10476)
{var seq__10447_10477__$1 = temp__4092__auto___10476;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10447_10477__$1))
{var c__9300__auto___10478 = cljs.core.chunk_first.call(null,seq__10447_10477__$1);{
var G__10479 = cljs.core.chunk_rest.call(null,seq__10447_10477__$1);
var G__10480 = c__9300__auto___10478;
var G__10481 = cljs.core.count.call(null,c__9300__auto___10478);
var G__10482 = 0;
seq__10447_10467 = G__10479;
chunk__10448_10468 = G__10480;
count__10449_10469 = G__10481;
i__10450_10470 = G__10482;
continue;
}
} else
{var dep_10483 = cljs.core.first.call(null,seq__10447_10477__$1);dep_10483.rank = tailrecursion.javelin.next_rank.call(null);
{
var G__10484 = cljs.core.next.call(null,seq__10447_10477__$1);
var G__10485 = null;
var G__10486 = 0;
var G__10487 = 0;
seq__10447_10467 = G__10484;
chunk__10448_10468 = G__10485;
count__10449_10469 = G__10486;
i__10450_10470 = G__10487;
continue;
}
}
} else
{}
}
break;
}
} else
{}
{
var G__10488 = seq__10443_10462;
var G__10489 = chunk__10444_10463;
var G__10490 = count__10445_10464;
var G__10491 = (i__10446_10465 + 1);
seq__10443_10462 = G__10488;
chunk__10444_10463 = G__10489;
count__10445_10464 = G__10490;
i__10446_10465 = G__10491;
continue;
}
} else
{var temp__4092__auto___10492 = cljs.core.seq.call(null,seq__10443_10462);if(temp__4092__auto___10492)
{var seq__10443_10493__$1 = temp__4092__auto___10492;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10443_10493__$1))
{var c__9300__auto___10494 = cljs.core.chunk_first.call(null,seq__10443_10493__$1);{
var G__10495 = cljs.core.chunk_rest.call(null,seq__10443_10493__$1);
var G__10496 = c__9300__auto___10494;
var G__10497 = cljs.core.count.call(null,c__9300__auto___10494);
var G__10498 = 0;
seq__10443_10462 = G__10495;
chunk__10444_10463 = G__10496;
count__10445_10464 = G__10497;
i__10446_10465 = G__10498;
continue;
}
} else
{var source_10499 = cljs.core.first.call(null,seq__10443_10493__$1);source_10499.sinks = cljs.core.conj.call(null,source_10499.sinks,this$);
if((source_10499.rank > this$.rank))
{var seq__10451_10500 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__10443_10462,chunk__10444_10463,count__10445_10464,i__10446_10465,source_10499,seq__10443_10493__$1,temp__4092__auto___10492){
return (function (p1__10417_SHARP_){return p1__10417_SHARP_.sinks;
});})(seq__10443_10462,chunk__10444_10463,count__10445_10464,i__10446_10465,source_10499,seq__10443_10493__$1,temp__4092__auto___10492))
,source_10499));var chunk__10452_10501 = null;var count__10453_10502 = 0;var i__10454_10503 = 0;while(true){
if((i__10454_10503 < count__10453_10502))
{var dep_10504 = cljs.core._nth.call(null,chunk__10452_10501,i__10454_10503);dep_10504.rank = tailrecursion.javelin.next_rank.call(null);
{
var G__10505 = seq__10451_10500;
var G__10506 = chunk__10452_10501;
var G__10507 = count__10453_10502;
var G__10508 = (i__10454_10503 + 1);
seq__10451_10500 = G__10505;
chunk__10452_10501 = G__10506;
count__10453_10502 = G__10507;
i__10454_10503 = G__10508;
continue;
}
} else
{var temp__4092__auto___10509__$1 = cljs.core.seq.call(null,seq__10451_10500);if(temp__4092__auto___10509__$1)
{var seq__10451_10510__$1 = temp__4092__auto___10509__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10451_10510__$1))
{var c__9300__auto___10511 = cljs.core.chunk_first.call(null,seq__10451_10510__$1);{
var G__10512 = cljs.core.chunk_rest.call(null,seq__10451_10510__$1);
var G__10513 = c__9300__auto___10511;
var G__10514 = cljs.core.count.call(null,c__9300__auto___10511);
var G__10515 = 0;
seq__10451_10500 = G__10512;
chunk__10452_10501 = G__10513;
count__10453_10502 = G__10514;
i__10454_10503 = G__10515;
continue;
}
} else
{var dep_10516 = cljs.core.first.call(null,seq__10451_10510__$1);dep_10516.rank = tailrecursion.javelin.next_rank.call(null);
{
var G__10517 = cljs.core.next.call(null,seq__10451_10510__$1);
var G__10518 = null;
var G__10519 = 0;
var G__10520 = 0;
seq__10451_10500 = G__10517;
chunk__10452_10501 = G__10518;
count__10453_10502 = G__10519;
i__10454_10503 = G__10520;
continue;
}
}
} else
{}
}
break;
}
} else
{}
{
var G__10521 = cljs.core.next.call(null,seq__10443_10493__$1);
var G__10522 = null;
var G__10523 = 0;
var G__10524 = 0;
seq__10443_10462 = G__10521;
chunk__10444_10463 = G__10522;
count__10445_10464 = G__10523;
i__10446_10465 = G__10524;
continue;
}
}
} else
{}
}
break;
}
var compute = (function (p1__10418_SHARP_){return cljs.core.apply.call(null,tailrecursion.javelin.deref_STAR_.call(null,cljs.core.peek.call(null,p1__10418_SHARP_)),cljs.core.map.call(null,tailrecursion.javelin.deref_STAR_,cljs.core.pop.call(null,p1__10418_SHARP_)));
});var thunk = ((function (compute){
return (function (){var x = this$.state;var y = compute.call(null,this$.sources);var seq__10455_10525 = cljs.core.seq.call(null,cljs.core.dissoc.call(null,this$.watches,new cljs.core.Keyword("tailrecursion.javelin","cell","tailrecursion.javelin/cell",3109523258)));var chunk__10456_10526 = null;var count__10457_10527 = 0;var i__10458_10528 = 0;while(true){
if((i__10458_10528 < count__10457_10527))
{var vec__10459_10529 = cljs.core._nth.call(null,chunk__10456_10526,i__10458_10528);var k_10530 = cljs.core.nth.call(null,vec__10459_10529,0,null);var f_10531__$1 = cljs.core.nth.call(null,vec__10459_10529,1,null);f_10531__$1.call(null,k_10530,this$,x,y);
{
var G__10532 = seq__10455_10525;
var G__10533 = chunk__10456_10526;
var G__10534 = count__10457_10527;
var G__10535 = (i__10458_10528 + 1);
seq__10455_10525 = G__10532;
chunk__10456_10526 = G__10533;
count__10457_10527 = G__10534;
i__10458_10528 = G__10535;
continue;
}
} else
{var temp__4092__auto___10536 = cljs.core.seq.call(null,seq__10455_10525);if(temp__4092__auto___10536)
{var seq__10455_10537__$1 = temp__4092__auto___10536;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10455_10537__$1))
{var c__9300__auto___10538 = cljs.core.chunk_first.call(null,seq__10455_10537__$1);{
var G__10539 = cljs.core.chunk_rest.call(null,seq__10455_10537__$1);
var G__10540 = c__9300__auto___10538;
var G__10541 = cljs.core.count.call(null,c__9300__auto___10538);
var G__10542 = 0;
seq__10455_10525 = G__10539;
chunk__10456_10526 = G__10540;
count__10457_10527 = G__10541;
i__10458_10528 = G__10542;
continue;
}
} else
{var vec__10460_10543 = cljs.core.first.call(null,seq__10455_10537__$1);var k_10544 = cljs.core.nth.call(null,vec__10460_10543,0,null);var f_10545__$1 = cljs.core.nth.call(null,vec__10460_10543,1,null);f_10545__$1.call(null,k_10544,this$,x,y);
{
var G__10546 = cljs.core.next.call(null,seq__10455_10537__$1);
var G__10547 = null;
var G__10548 = 0;
var G__10549 = 0;
seq__10455_10525 = G__10546;
chunk__10456_10526 = G__10547;
count__10457_10527 = G__10548;
i__10458_10528 = G__10549;
continue;
}
}
} else
{}
}
break;
}
return this$.state = y;
});})(compute))
;var err_mesg = "formula cell can't be updated via swap! or reset!";cljs.core._add_watch.call(null,this$,new cljs.core.Keyword("tailrecursion.javelin","cell","tailrecursion.javelin/cell",3109523258),(cljs.core.truth_(f)?(function (){throw (new Error(err_mesg));
}):(function (p1__10420_SHARP_,p2__10419_SHARP_){return tailrecursion.javelin.propagate_BANG_.call(null,p2__10419_SHARP_);
})));
this$.input_QMARK_ = (cljs.core.truth_(f)?false:true);
this$.thunk = (cljs.core.truth_(f)?thunk:(function (){return cljs.core.deref.call(null,this$);
}));
var G__10461 = this$;tailrecursion.javelin.propagate_BANG_.call(null,G__10461);
return G__10461;
};
var set_formula_BANG_ = function (this$,var_args){
var p__10421 = null;if (arguments.length > 1) {
  p__10421 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_formula_BANG___delegate.call(this,this$,p__10421);};
set_formula_BANG_.cljs$lang$maxFixedArity = 1;
set_formula_BANG_.cljs$lang$applyTo = (function (arglist__10550){
var this$ = cljs.core.first(arglist__10550);
var p__10421 = cljs.core.rest(arglist__10550);
return set_formula_BANG___delegate(this$,p__10421);
});
set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_formula_BANG___delegate;
return set_formula_BANG_;
})()
;

/**
* @constructor
*/
tailrecursion.javelin.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,input_QMARK_){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.input_QMARK_ = input_QMARK_;
this.cljs$lang$protocol_mask$partition1$ = 2;
this.cljs$lang$protocol_mask$partition0$ = 2147647488;
})
tailrecursion.javelin.Cell.cljs$lang$type = true;
tailrecursion.javelin.Cell.cljs$lang$ctorStr = "tailrecursion.javelin/Cell";
tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__9120__auto__,writer__9121__auto__,opt__9122__auto__){return cljs.core._write.call(null,writer__9121__auto__,"tailrecursion.javelin/Cell");
});
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__10551 = cljs.core.seq.call(null,self__.watches);var chunk__10552 = null;var count__10553 = 0;var i__10554 = 0;while(true){
if((i__10554 < count__10553))
{var vec__10555 = cljs.core._nth.call(null,chunk__10552,i__10554);var key = cljs.core.nth.call(null,vec__10555,0,null);var f = cljs.core.nth.call(null,vec__10555,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__10557 = seq__10551;
var G__10558 = chunk__10552;
var G__10559 = count__10553;
var G__10560 = (i__10554 + 1);
seq__10551 = G__10557;
chunk__10552 = G__10558;
count__10553 = G__10559;
i__10554 = G__10560;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10551);if(temp__4092__auto__)
{var seq__10551__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10551__$1))
{var c__9300__auto__ = cljs.core.chunk_first.call(null,seq__10551__$1);{
var G__10561 = cljs.core.chunk_rest.call(null,seq__10551__$1);
var G__10562 = c__9300__auto__;
var G__10563 = cljs.core.count.call(null,c__9300__auto__);
var G__10564 = 0;
seq__10551 = G__10561;
chunk__10552 = G__10562;
count__10553 = G__10563;
i__10554 = G__10564;
continue;
}
} else
{var vec__10556 = cljs.core.first.call(null,seq__10551__$1);var key = cljs.core.nth.call(null,vec__10556,0,null);var f = cljs.core.nth.call(null,vec__10556,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__10565 = cljs.core.next.call(null,seq__10551__$1);
var G__10566 = null;
var G__10567 = 0;
var G__10568 = 0;
seq__10551 = G__10565;
chunk__10552 = G__10566;
count__10553 = G__10567;
i__10554 = G__10568;
continue;
}
}
} else
{return null;
}
}
break;
}
});
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
tailrecursion.javelin.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1.state;
});
tailrecursion.javelin.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
tailrecursion.javelin.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core.write_all.call(null,writer,"#<Cell: ",cljs.core.pr_str.call(null,self__.state),">");
});
tailrecursion.javelin.__GT_Cell = (function __GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,input_QMARK_){return (new tailrecursion.javelin.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,input_QMARK_));
});
tailrecursion.javelin.lift = (function lift(f){return (function() { 
var G__10569__delegate = function (sources){return tailrecursion.javelin.set_formula_BANG_.call(null,tailrecursion.javelin.cell.call(null,new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",3109973412)),f,sources);
};
var G__10569 = function (var_args){
var sources = null;if (arguments.length > 0) {
  sources = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__10569__delegate.call(this,sources);};
G__10569.cljs$lang$maxFixedArity = 0;
G__10569.cljs$lang$applyTo = (function (arglist__10570){
var sources = cljs.core.seq(arglist__10570);
return G__10569__delegate(sources);
});
G__10569.cljs$core$IFn$_invoke$arity$variadic = G__10569__delegate;
return G__10569;
})()
;
});
tailrecursion.javelin.cell = (function cell(x){return tailrecursion.javelin.set_formula_BANG_.call(null,(new tailrecursion.javelin.Cell(cljs.core.PersistentArrayMap.EMPTY,x,tailrecursion.javelin.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});
tailrecursion.javelin.cell_QMARK_ = (function cell_QMARK_(c){if(cljs.core._EQ_.call(null,cljs.core.type.call(null,c),tailrecursion.javelin.Cell))
{return c;
} else
{return null;
}
});
tailrecursion.javelin.input_QMARK_ = (function input_QMARK_(c){if(cljs.core.truth_((function (){var and__8546__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);if(cljs.core.truth_(and__8546__auto__))
{return c.input_QMARK_;
} else
{return and__8546__auto__;
}
})()))
{return c;
} else
{return null;
}
});
tailrecursion.javelin.set_cell_BANG_ = (function set_cell_BANG_(c,x){c.state = x;
return tailrecursion.javelin.set_formula_BANG_.call(null,c);
});
/**
* @param {...*} var_args
*/
tailrecursion.javelin.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (cells){var olds = cljs.core.atom.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,cells),new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",3109973412)));var tag_neq = ((function (olds){
return (function (p1__10571_SHARP_,p2__10572_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__10571_SHARP_,p2__10572_SHARP_),p2__10572_SHARP_],null));
});})(olds))
;var diff = ((function (olds,tag_neq){
return (function (p1__10574_SHARP_,p2__10573_SHARP_){return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__10574_SHARP_,p2__10573_SHARP_))));
});})(olds,tag_neq))
;var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__10576__delegate = function (rest__10575_SHARP_){var news = diff.call(null,cljs.core.deref.call(null,olds),rest__10575_SHARP_);cljs.core.reset_BANG_.call(null,olds,rest__10575_SHARP_);
return news;
};
var G__10576 = function (var_args){
var rest__10575_SHARP_ = null;if (arguments.length > 0) {
  rest__10575_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__10576__delegate.call(this,rest__10575_SHARP_);};
G__10576.cljs$lang$maxFixedArity = 0;
G__10576.cljs$lang$applyTo = (function (arglist__10577){
var rest__10575_SHARP_ = cljs.core.seq(arglist__10577);
return G__10576__delegate(rest__10575_SHARP_);
});
G__10576.cljs$core$IFn$_invoke$arity$variadic = G__10576__delegate;
return G__10576;
})()
;})(olds,tag_neq,diff))
;return cljs.core.apply.call(null,tailrecursion.javelin.lift.call(null,proc),cells);
};
var alts_BANG_ = function (var_args){
var cells = null;if (arguments.length > 0) {
  cells = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return alts_BANG___delegate.call(this,cells);};
alts_BANG_.cljs$lang$maxFixedArity = 0;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10578){
var cells = cljs.core.seq(arglist__10578);
return alts_BANG___delegate(cells);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
tailrecursion.javelin.cell_map = (function cell_map(f,c){var safe_nth = (function (p1__10579_SHARP_,p2__10580_SHARP_){try{return cljs.core.nth.call(null,p1__10579_SHARP_,p2__10580_SHARP_);
}catch (e10583){if((e10583 instanceof Error))
{var _ = e10583;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10583;
} else
{return null;
}
}
}});return cljs.core.map.call(null,(function (p1__10581_SHARP_){return tailrecursion.javelin.lift.call(null,cljs.core.comp.call(null,f,safe_nth)).call(null,c,p1__10581_SHARP_);
}),cljs.core.range.call(null,0,cljs.core.count.call(null,cljs.core.deref.call(null,c))));
});
