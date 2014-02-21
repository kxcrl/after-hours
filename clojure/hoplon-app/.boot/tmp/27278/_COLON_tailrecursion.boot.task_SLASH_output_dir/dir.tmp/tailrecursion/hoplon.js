// Compiled by ClojureScript 0.0-2138
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('tailrecursion.javelin');
tailrecursion.hoplon.is_ie8 = cljs.core.not.call(null,(window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__11743_SHARP_){return (p1__11743_SHARP_ instanceof Node);
}):(function (p1__11744_SHARP_){try{return p1__11744_SHARP_.nodeType;
}catch (e11745){if((e11745 instanceof Error))
{var _ = e11745;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11745;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__11746_SHARP_){try{return cljs.core.vector_QMARK_.call(null,p1__11746_SHARP_);
}catch (e11747){if((e11747 instanceof Error))
{var _ = e11747;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11747;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__11748_SHARP_){try{return cljs.core.seq_QMARK_.call(null,p1__11748_SHARP_);
}catch (e11749){if((e11749 instanceof Error))
{var _ = e11749;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11749;
} else
{return null;
}
}
}}));
cljs.core.set_print_fn_BANG_.call(null,(function (p1__11750_SHARP_){if(cljs.core.truth_((function (){var and__8546__auto__ = console;if(cljs.core.truth_(and__8546__auto__))
{return console.log;
} else
{return and__8546__auto__;
}
})()))
{return console.log(p1__11750_SHARP_);
} else
{return null;
}
}));
tailrecursion.hoplon.safe_nth = (function() {
var safe_nth = null;
var safe_nth__2 = (function (coll,index){return safe_nth.call(null,coll,index,null);
});
var safe_nth__3 = (function (coll,index,not_found){try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e11752){if((e11752 instanceof Error))
{var _ = e11752;return not_found;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11752;
} else
{return null;
}
}
}});
safe_nth = function(coll,index,not_found){
switch(arguments.length){
case 2:
return safe_nth__2.call(this,coll,index);
case 3:
return safe_nth__3.call(this,coll,index,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
safe_nth.cljs$core$IFn$_invoke$arity$2 = safe_nth__2;
safe_nth.cljs$core$IFn$_invoke$arity$3 = safe_nth__3;
return safe_nth;
})()
;
/**
* @param {...*} var_args
*/
tailrecursion.hoplon.pad_seq = (function() { 
var pad_seq__delegate = function (n,coll,p__11753){var vec__11755 = p__11753;var x = cljs.core.nth.call(null,vec__11755,0,null);var p = cljs.core.repeat.call(null,n,x);var z = (n - cljs.core.count.call(null,coll));if((z > 0))
{return cljs.core.concat.call(null,coll,cljs.core.take.call(null,z,p));
} else
{return coll;
}
};
var pad_seq = function (n,coll,var_args){
var p__11753 = null;if (arguments.length > 2) {
  p__11753 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return pad_seq__delegate.call(this,n,coll,p__11753);};
pad_seq.cljs$lang$maxFixedArity = 2;
pad_seq.cljs$lang$applyTo = (function (arglist__11756){
var n = cljs.core.first(arglist__11756);
arglist__11756 = cljs.core.next(arglist__11756);
var coll = cljs.core.first(arglist__11756);
var p__11753 = cljs.core.rest(arglist__11756);
return pad_seq__delegate(n,coll,p__11753);
});
pad_seq.cljs$core$IFn$_invoke$arity$variadic = pad_seq__delegate;
return pad_seq;
})()
;
tailrecursion.hoplon.timeout = (function() {
var timeout = null;
var timeout__1 = (function (f){return timeout.call(null,f,0);
});
var timeout__2 = (function (f,t){return window.setTimeout(f,t);
});
timeout = function(f,t){
switch(arguments.length){
case 1:
return timeout__1.call(this,f);
case 2:
return timeout__2.call(this,f,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
timeout.cljs$core$IFn$_invoke$arity$1 = timeout__1;
timeout.cljs$core$IFn$_invoke$arity$2 = timeout__2;
return timeout;
})()
;
tailrecursion.hoplon.unsplice = (function unsplice(forms){return cljs.core.mapcat.call(null,(function (p1__11757_SHARP_){if(cljs.core.truth_((function (){var or__8558__auto__ = tailrecursion.hoplon.seq_QMARK__STAR_.call(null,p1__11757_SHARP_);if(cljs.core.truth_(or__8558__auto__))
{return or__8558__auto__;
} else
{return tailrecursion.hoplon.vector_QMARK__STAR_.call(null,p1__11757_SHARP_);
}
})()))
{return unsplice.call(null,p1__11757_SHARP_);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11757_SHARP_], null);
}
}),forms);
});
tailrecursion.hoplon.when_dom = (function when_dom(this$,f){return tailrecursion.hoplon.timeout.call(null,(function doit(){if(cljs.core.truth_(document.documentElement.contains(this$)))
{return f.call(null);
} else
{return tailrecursion.hoplon.timeout.call(null,doit,20);
}
}));
});
tailrecursion.hoplon.parse_args = (function parse_args(p__11760){var vec__11762 = p__11760;var head = cljs.core.nth.call(null,vec__11762,0,null);var tail = cljs.core.nthnext.call(null,vec__11762,1);var args = vec__11762;var kw1_QMARK_ = cljs.core.comp.call(null,cljs.core.keyword_QMARK_,cljs.core.first);var mkkw = ((function (kw1_QMARK_){
return (function (p1__11758_SHARP_){return cljs.core.map.call(null,cljs.core.vec,cljs.core.take_while.call(null,kw1_QMARK_,cljs.core.partition.call(null,2,p1__11758_SHARP_)));
});})(kw1_QMARK_))
;var drkw = ((function (kw1_QMARK_,mkkw){
return (function (p1__11759_SHARP_){return cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.drop_while.call(null,kw1_QMARK_,cljs.core.partition.call(null,2,2,cljs.core.PersistentVector.EMPTY,p1__11759_SHARP_)));
});})(kw1_QMARK_,mkkw))
;if(cljs.core.map_QMARK_.call(null,head))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,tail], null);
} else
{if((head instanceof cljs.core.Keyword))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,mkkw.call(null,args)),drkw.call(null,args)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null);
} else
{return null;
}
}
}
});
tailrecursion.hoplon.add_attributes_BANG_ = (function add_attributes_BANG_(this$,attr){var prefix = (function (p1__11763_SHARP_){return p1__11763_SHARP_.substr(0,3);
});var suffix = ((function (prefix){
return (function (p1__11764_SHARP_){return cljs.core.keyword.call(null,p1__11764_SHARP_.substr(3));
});})(prefix))
;var dos = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ons = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var addcls = ((function (prefix,suffix,dos,ons){
return (function (p1__11765_SHARP_,p2__11766_SHARP_){return clojure.string.join.call(null," ",cljs.core.into.call(null,cljs.core.set.call(null,clojure.string.split.call(null,p1__11765_SHARP_,/ /)),clojure.string.split.call(null,p2__11766_SHARP_,/ /)));
});})(prefix,suffix,dos,ons))
;var seq__11797_11823 = cljs.core.seq.call(null,attr);var chunk__11798_11824 = null;var count__11799_11825 = 0;var i__11800_11826 = 0;while(true){
if((i__11800_11826 < count__11799_11825))
{var vec__11801_11827 = cljs.core._nth.call(null,chunk__11798_11824,i__11800_11826);var k_11828 = cljs.core.nth.call(null,vec__11801_11827,0,null);var v_11829 = cljs.core.nth.call(null,vec__11801_11827,1,null);var k_11830__$1 = cljs.core.name.call(null,k_11828);var e_11831 = jQuery(this$);if(cljs.core._EQ_.call(null,k_11830__$1,"class"))
{var seq__11802_11832 = cljs.core.seq.call(null,clojure.string.split.call(null,v_11829,/ /));var chunk__11803_11833 = null;var count__11804_11834 = 0;var i__11805_11835 = 0;while(true){
if((i__11805_11835 < count__11804_11834))
{var cls_11836 = cljs.core._nth.call(null,chunk__11803_11833,i__11805_11835);e_11831.addClass(cls_11836);
{
var G__11837 = seq__11802_11832;
var G__11838 = chunk__11803_11833;
var G__11839 = count__11804_11834;
var G__11840 = (i__11805_11835 + 1);
seq__11802_11832 = G__11837;
chunk__11803_11833 = G__11838;
count__11804_11834 = G__11839;
i__11805_11835 = G__11840;
continue;
}
} else
{var temp__4092__auto___11841 = cljs.core.seq.call(null,seq__11802_11832);if(temp__4092__auto___11841)
{var seq__11802_11842__$1 = temp__4092__auto___11841;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11802_11842__$1))
{var c__9300__auto___11843 = cljs.core.chunk_first.call(null,seq__11802_11842__$1);{
var G__11844 = cljs.core.chunk_rest.call(null,seq__11802_11842__$1);
var G__11845 = c__9300__auto___11843;
var G__11846 = cljs.core.count.call(null,c__9300__auto___11843);
var G__11847 = 0;
seq__11802_11832 = G__11844;
chunk__11803_11833 = G__11845;
count__11804_11834 = G__11846;
i__11805_11835 = G__11847;
continue;
}
} else
{var cls_11848 = cljs.core.first.call(null,seq__11802_11842__$1);e_11831.addClass(cls_11848);
{
var G__11849 = cljs.core.next.call(null,seq__11802_11842__$1);
var G__11850 = null;
var G__11851 = 0;
var G__11852 = 0;
seq__11802_11832 = G__11849;
chunk__11803_11833 = G__11850;
count__11804_11834 = G__11851;
i__11805_11835 = G__11852;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,k_11830__$1,"css"))
{e_11831.css(cljs.core.clj__GT_js.call(null,v_11829));
} else
{if(cljs.core._EQ_.call(null,"do-",prefix.call(null,k_11830__$1)))
{cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,suffix.call(null,k_11830__$1),v_11829);
} else
{if(cljs.core._EQ_.call(null,"on-",prefix.call(null,k_11830__$1)))
{cljs.core.swap_BANG_.call(null,ons,cljs.core.assoc,suffix.call(null,k_11830__$1),v_11829);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,false,v_11829))
{e_11831.removeAttr(k_11830__$1);
} else
{if(cljs.core._EQ_.call(null,true,v_11829))
{e_11831.attr(k_11830__$1,k_11830__$1);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{e_11831.attr(k_11830__$1,[cljs.core.str(v_11829)].join(''));
} else
{}
}
}
} else
{}
}
}
}
}
{
var G__11853 = seq__11797_11823;
var G__11854 = chunk__11798_11824;
var G__11855 = count__11799_11825;
var G__11856 = (i__11800_11826 + 1);
seq__11797_11823 = G__11853;
chunk__11798_11824 = G__11854;
count__11799_11825 = G__11855;
i__11800_11826 = G__11856;
continue;
}
} else
{var temp__4092__auto___11857 = cljs.core.seq.call(null,seq__11797_11823);if(temp__4092__auto___11857)
{var seq__11797_11858__$1 = temp__4092__auto___11857;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11797_11858__$1))
{var c__9300__auto___11859 = cljs.core.chunk_first.call(null,seq__11797_11858__$1);{
var G__11860 = cljs.core.chunk_rest.call(null,seq__11797_11858__$1);
var G__11861 = c__9300__auto___11859;
var G__11862 = cljs.core.count.call(null,c__9300__auto___11859);
var G__11863 = 0;
seq__11797_11823 = G__11860;
chunk__11798_11824 = G__11861;
count__11799_11825 = G__11862;
i__11800_11826 = G__11863;
continue;
}
} else
{var vec__11806_11864 = cljs.core.first.call(null,seq__11797_11858__$1);var k_11865 = cljs.core.nth.call(null,vec__11806_11864,0,null);var v_11866 = cljs.core.nth.call(null,vec__11806_11864,1,null);var k_11867__$1 = cljs.core.name.call(null,k_11865);var e_11868 = jQuery(this$);if(cljs.core._EQ_.call(null,k_11867__$1,"class"))
{var seq__11807_11869 = cljs.core.seq.call(null,clojure.string.split.call(null,v_11866,/ /));var chunk__11808_11870 = null;var count__11809_11871 = 0;var i__11810_11872 = 0;while(true){
if((i__11810_11872 < count__11809_11871))
{var cls_11873 = cljs.core._nth.call(null,chunk__11808_11870,i__11810_11872);e_11868.addClass(cls_11873);
{
var G__11874 = seq__11807_11869;
var G__11875 = chunk__11808_11870;
var G__11876 = count__11809_11871;
var G__11877 = (i__11810_11872 + 1);
seq__11807_11869 = G__11874;
chunk__11808_11870 = G__11875;
count__11809_11871 = G__11876;
i__11810_11872 = G__11877;
continue;
}
} else
{var temp__4092__auto___11878__$1 = cljs.core.seq.call(null,seq__11807_11869);if(temp__4092__auto___11878__$1)
{var seq__11807_11879__$1 = temp__4092__auto___11878__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11807_11879__$1))
{var c__9300__auto___11880 = cljs.core.chunk_first.call(null,seq__11807_11879__$1);{
var G__11881 = cljs.core.chunk_rest.call(null,seq__11807_11879__$1);
var G__11882 = c__9300__auto___11880;
var G__11883 = cljs.core.count.call(null,c__9300__auto___11880);
var G__11884 = 0;
seq__11807_11869 = G__11881;
chunk__11808_11870 = G__11882;
count__11809_11871 = G__11883;
i__11810_11872 = G__11884;
continue;
}
} else
{var cls_11885 = cljs.core.first.call(null,seq__11807_11879__$1);e_11868.addClass(cls_11885);
{
var G__11886 = cljs.core.next.call(null,seq__11807_11879__$1);
var G__11887 = null;
var G__11888 = 0;
var G__11889 = 0;
seq__11807_11869 = G__11886;
chunk__11808_11870 = G__11887;
count__11809_11871 = G__11888;
i__11810_11872 = G__11889;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,k_11867__$1,"css"))
{e_11868.css(cljs.core.clj__GT_js.call(null,v_11866));
} else
{if(cljs.core._EQ_.call(null,"do-",prefix.call(null,k_11867__$1)))
{cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,suffix.call(null,k_11867__$1),v_11866);
} else
{if(cljs.core._EQ_.call(null,"on-",prefix.call(null,k_11867__$1)))
{cljs.core.swap_BANG_.call(null,ons,cljs.core.assoc,suffix.call(null,k_11867__$1),v_11866);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,false,v_11866))
{e_11868.removeAttr(k_11867__$1);
} else
{if(cljs.core._EQ_.call(null,true,v_11866))
{e_11868.attr(k_11867__$1,k_11867__$1);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{e_11868.attr(k_11867__$1,[cljs.core.str(v_11866)].join(''));
} else
{}
}
}
} else
{}
}
}
}
}
{
var G__11890 = cljs.core.next.call(null,seq__11797_11858__$1);
var G__11891 = null;
var G__11892 = 0;
var G__11893 = 0;
seq__11797_11823 = G__11890;
chunk__11798_11824 = G__11891;
count__11799_11825 = G__11892;
i__11800_11826 = G__11893;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.seq.call(null,cljs.core.deref.call(null,ons)))
{tailrecursion.hoplon.timeout.call(null,(function (){var seq__11811 = cljs.core.seq.call(null,cljs.core.deref.call(null,ons));var chunk__11812 = null;var count__11813 = 0;var i__11814 = 0;while(true){
if((i__11814 < count__11813))
{var vec__11815 = cljs.core._nth.call(null,chunk__11812,i__11814);var k = cljs.core.nth.call(null,vec__11815,0,null);var v = cljs.core.nth.call(null,vec__11815,1,null);tailrecursion.hoplon.on_BANG_.call(null,this$,k,v);
{
var G__11894 = seq__11811;
var G__11895 = chunk__11812;
var G__11896 = count__11813;
var G__11897 = (i__11814 + 1);
seq__11811 = G__11894;
chunk__11812 = G__11895;
count__11813 = G__11896;
i__11814 = G__11897;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11811);if(temp__4092__auto__)
{var seq__11811__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11811__$1))
{var c__9300__auto__ = cljs.core.chunk_first.call(null,seq__11811__$1);{
var G__11898 = cljs.core.chunk_rest.call(null,seq__11811__$1);
var G__11899 = c__9300__auto__;
var G__11900 = cljs.core.count.call(null,c__9300__auto__);
var G__11901 = 0;
seq__11811 = G__11898;
chunk__11812 = G__11899;
count__11813 = G__11900;
i__11814 = G__11901;
continue;
}
} else
{var vec__11816 = cljs.core.first.call(null,seq__11811__$1);var k = cljs.core.nth.call(null,vec__11816,0,null);var v = cljs.core.nth.call(null,vec__11816,1,null);tailrecursion.hoplon.on_BANG_.call(null,this$,k,v);
{
var G__11902 = cljs.core.next.call(null,seq__11811__$1);
var G__11903 = null;
var G__11904 = 0;
var G__11905 = 0;
seq__11811 = G__11902;
chunk__11812 = G__11903;
count__11813 = G__11904;
i__11814 = G__11905;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
} else
{}
if(cljs.core.seq.call(null,cljs.core.deref.call(null,dos)))
{tailrecursion.hoplon.timeout.call(null,(function (){var seq__11817 = cljs.core.seq.call(null,cljs.core.deref.call(null,dos));var chunk__11818 = null;var count__11819 = 0;var i__11820 = 0;while(true){
if((i__11820 < count__11819))
{var vec__11821 = cljs.core._nth.call(null,chunk__11818,i__11820);var k = cljs.core.nth.call(null,vec__11821,0,null);var v = cljs.core.nth.call(null,vec__11821,1,null);tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref.call(null,v));
cljs.core.add_watch.call(null,v,cljs.core.gensym.call(null),((function (seq__11817,chunk__11818,count__11819,i__11820,vec__11821,k,v){
return (function (p1__11768_SHARP_,p2__11769_SHARP_,p3__11770_SHARP_,p4__11767_SHARP_){return tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__11767_SHARP_);
});})(seq__11817,chunk__11818,count__11819,i__11820,vec__11821,k,v))
);
{
var G__11906 = seq__11817;
var G__11907 = chunk__11818;
var G__11908 = count__11819;
var G__11909 = (i__11820 + 1);
seq__11817 = G__11906;
chunk__11818 = G__11907;
count__11819 = G__11908;
i__11820 = G__11909;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11817);if(temp__4092__auto__)
{var seq__11817__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11817__$1))
{var c__9300__auto__ = cljs.core.chunk_first.call(null,seq__11817__$1);{
var G__11910 = cljs.core.chunk_rest.call(null,seq__11817__$1);
var G__11911 = c__9300__auto__;
var G__11912 = cljs.core.count.call(null,c__9300__auto__);
var G__11913 = 0;
seq__11817 = G__11910;
chunk__11818 = G__11911;
count__11819 = G__11912;
i__11820 = G__11913;
continue;
}
} else
{var vec__11822 = cljs.core.first.call(null,seq__11817__$1);var k = cljs.core.nth.call(null,vec__11822,0,null);var v = cljs.core.nth.call(null,vec__11822,1,null);tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref.call(null,v));
cljs.core.add_watch.call(null,v,cljs.core.gensym.call(null),((function (seq__11817,chunk__11818,count__11819,i__11820,vec__11822,k,v,seq__11817__$1,temp__4092__auto__){
return (function (p1__11768_SHARP_,p2__11769_SHARP_,p3__11770_SHARP_,p4__11767_SHARP_){return tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__11767_SHARP_);
});})(seq__11817,chunk__11818,count__11819,i__11820,vec__11822,k,v,seq__11817__$1,temp__4092__auto__))
);
{
var G__11914 = cljs.core.next.call(null,seq__11817__$1);
var G__11915 = null;
var G__11916 = 0;
var G__11917 = 0;
seq__11817 = G__11914;
chunk__11818 = G__11915;
count__11819 = G__11916;
i__11820 = G__11917;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
} else
{}
return this$;
});
tailrecursion.hoplon.append_child = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__11918_SHARP_,p2__11919_SHARP_){return p1__11918_SHARP_.appendChild(p2__11919_SHARP_);
}):(function (p1__11920_SHARP_,p2__11921_SHARP_){try{return p1__11920_SHARP_.appendChild(p2__11921_SHARP_);
}catch (e11922){if((e11922 instanceof Error))
{var _ = e11922;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11922;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.add_children_BANG_ = (function add_children_BANG_(this$,kids){var node = (function (p1__11923_SHARP_){if(typeof p1__11923_SHARP_ === 'string')
{return tailrecursion.hoplon.$text.call(null,p1__11923_SHARP_);
} else
{if(cljs.core.truth_(tailrecursion.hoplon.node_QMARK_.call(null,p1__11923_SHARP_)))
{return p1__11923_SHARP_;
} else
{return null;
}
}
});var seq__11928_11932 = cljs.core.seq.call(null,cljs.core.keep.call(null,node,tailrecursion.hoplon.unsplice.call(null,kids)));var chunk__11929_11933 = null;var count__11930_11934 = 0;var i__11931_11935 = 0;while(true){
if((i__11931_11935 < count__11930_11934))
{var x_11936 = cljs.core._nth.call(null,chunk__11929_11933,i__11931_11935);tailrecursion.hoplon.append_child.call(null,this$,x_11936);
{
var G__11937 = seq__11928_11932;
var G__11938 = chunk__11929_11933;
var G__11939 = count__11930_11934;
var G__11940 = (i__11931_11935 + 1);
seq__11928_11932 = G__11937;
chunk__11929_11933 = G__11938;
count__11930_11934 = G__11939;
i__11931_11935 = G__11940;
continue;
}
} else
{var temp__4092__auto___11941 = cljs.core.seq.call(null,seq__11928_11932);if(temp__4092__auto___11941)
{var seq__11928_11942__$1 = temp__4092__auto___11941;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11928_11942__$1))
{var c__9300__auto___11943 = cljs.core.chunk_first.call(null,seq__11928_11942__$1);{
var G__11944 = cljs.core.chunk_rest.call(null,seq__11928_11942__$1);
var G__11945 = c__9300__auto___11943;
var G__11946 = cljs.core.count.call(null,c__9300__auto___11943);
var G__11947 = 0;
seq__11928_11932 = G__11944;
chunk__11929_11933 = G__11945;
count__11930_11934 = G__11946;
i__11931_11935 = G__11947;
continue;
}
} else
{var x_11948 = cljs.core.first.call(null,seq__11928_11942__$1);tailrecursion.hoplon.append_child.call(null,this$,x_11948);
{
var G__11949 = cljs.core.next.call(null,seq__11928_11942__$1);
var G__11950 = null;
var G__11951 = 0;
var G__11952 = 0;
seq__11928_11932 = G__11949;
chunk__11929_11933 = G__11950;
count__11930_11934 = G__11951;
i__11931_11935 = G__11952;
continue;
}
}
} else
{}
}
break;
}
return this$;
});
tailrecursion.hoplon.on_append_BANG_ = (function on_append_BANG_(this$,f){return this$.hoplonIFn = f;
});
Element.prototype.cljs$core$IFn$ = true;
Element.prototype.call = (function() { 
var G__11960__delegate = function (self__,args){var self____$1 = this;var this$ = self____$1;var vec__11954 = tailrecursion.hoplon.parse_args.call(null,args);var attr = cljs.core.nth.call(null,vec__11954,0,null);var kids = cljs.core.nth.call(null,vec__11954,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__11955 = this$;G__11955.hoplonIFn(attr,kids);
return G__11955;
} else
{var G__11956 = this$;tailrecursion.hoplon.add_attributes_BANG_.call(null,G__11956,attr);
tailrecursion.hoplon.add_children_BANG_.call(null,G__11956,kids);
return G__11956;
}
};
var G__11960 = function (self__,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11960__delegate.call(this,self__,args);};
G__11960.cljs$lang$maxFixedArity = 1;
G__11960.cljs$lang$applyTo = (function (arglist__11961){
var self__ = cljs.core.first(arglist__11961);
var args = cljs.core.rest(arglist__11961);
return G__11960__delegate(self__,args);
});
G__11960.cljs$core$IFn$_invoke$arity$variadic = G__11960__delegate;
return G__11960;
})()
;
Element.prototype.apply = (function (self__,args11953){var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args11953)));
});
Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__11962__delegate = function (args){var this$ = this;var vec__11957 = tailrecursion.hoplon.parse_args.call(null,args);var attr = cljs.core.nth.call(null,vec__11957,0,null);var kids = cljs.core.nth.call(null,vec__11957,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__11958 = this$;G__11958.hoplonIFn(attr,kids);
return G__11958;
} else
{var G__11959 = this$;tailrecursion.hoplon.add_attributes_BANG_.call(null,G__11959,attr);
tailrecursion.hoplon.add_children_BANG_.call(null,G__11959,kids);
return G__11959;
}
};
var G__11962 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11962__delegate.call(this,args);};
G__11962.cljs$lang$maxFixedArity = 0;
G__11962.cljs$lang$applyTo = (function (arglist__11963){
var args = cljs.core.seq(arglist__11963);
return G__11962__delegate(args);
});
G__11962.cljs$core$IFn$_invoke$arity$variadic = G__11962__delegate;
return G__11962;
})()
;
Element.prototype.cljs$core$IPrintWithWriter$ = true;
Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var this$__$1 = this;return cljs.core.write_all.call(null,writer,"#<Element: ",this$__$1.tagName,">");
});
tailrecursion.hoplon.make_elem_ctor = (function make_elem_ctor(tag){return (function() { 
var G__11964__delegate = function (args){return cljs.core.apply.call(null,document.createElement(tag),args);
};
var G__11964 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11964__delegate.call(this,args);};
G__11964.cljs$lang$maxFixedArity = 0;
G__11964.cljs$lang$applyTo = (function (arglist__11965){
var args = cljs.core.seq(arglist__11965);
return G__11964__delegate(args);
});
G__11964.cljs$core$IFn$_invoke$arity$variadic = G__11964__delegate;
return G__11964;
})()
;
});
tailrecursion.hoplon.a = tailrecursion.hoplon.make_elem_ctor.call(null,"a");
tailrecursion.hoplon.abbr = tailrecursion.hoplon.make_elem_ctor.call(null,"abbr");
tailrecursion.hoplon.acronym = tailrecursion.hoplon.make_elem_ctor.call(null,"acronym");
tailrecursion.hoplon.address = tailrecursion.hoplon.make_elem_ctor.call(null,"address");
tailrecursion.hoplon.applet = tailrecursion.hoplon.make_elem_ctor.call(null,"applet");
tailrecursion.hoplon.area = tailrecursion.hoplon.make_elem_ctor.call(null,"area");
tailrecursion.hoplon.article = tailrecursion.hoplon.make_elem_ctor.call(null,"article");
tailrecursion.hoplon.aside = tailrecursion.hoplon.make_elem_ctor.call(null,"aside");
tailrecursion.hoplon.audio = tailrecursion.hoplon.make_elem_ctor.call(null,"audio");
tailrecursion.hoplon.b = tailrecursion.hoplon.make_elem_ctor.call(null,"b");
tailrecursion.hoplon.base = tailrecursion.hoplon.make_elem_ctor.call(null,"base");
tailrecursion.hoplon.basefont = tailrecursion.hoplon.make_elem_ctor.call(null,"basefont");
tailrecursion.hoplon.bdi = tailrecursion.hoplon.make_elem_ctor.call(null,"bdi");
tailrecursion.hoplon.bdo = tailrecursion.hoplon.make_elem_ctor.call(null,"bdo");
tailrecursion.hoplon.big = tailrecursion.hoplon.make_elem_ctor.call(null,"big");
tailrecursion.hoplon.blockquote = tailrecursion.hoplon.make_elem_ctor.call(null,"blockquote");
tailrecursion.hoplon.body = tailrecursion.hoplon.make_elem_ctor.call(null,"body");
tailrecursion.hoplon.br = tailrecursion.hoplon.make_elem_ctor.call(null,"br");
tailrecursion.hoplon.button = tailrecursion.hoplon.make_elem_ctor.call(null,"button");
tailrecursion.hoplon.canvas = tailrecursion.hoplon.make_elem_ctor.call(null,"canvas");
tailrecursion.hoplon.caption = tailrecursion.hoplon.make_elem_ctor.call(null,"caption");
tailrecursion.hoplon.center = tailrecursion.hoplon.make_elem_ctor.call(null,"center");
tailrecursion.hoplon.cite = tailrecursion.hoplon.make_elem_ctor.call(null,"cite");
tailrecursion.hoplon.code = tailrecursion.hoplon.make_elem_ctor.call(null,"code");
tailrecursion.hoplon.col = tailrecursion.hoplon.make_elem_ctor.call(null,"col");
tailrecursion.hoplon.colgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"colgroup");
tailrecursion.hoplon.command = tailrecursion.hoplon.make_elem_ctor.call(null,"command");
tailrecursion.hoplon.data = tailrecursion.hoplon.make_elem_ctor.call(null,"data");
tailrecursion.hoplon.datalist = tailrecursion.hoplon.make_elem_ctor.call(null,"datalist");
tailrecursion.hoplon.dd = tailrecursion.hoplon.make_elem_ctor.call(null,"dd");
tailrecursion.hoplon.del = tailrecursion.hoplon.make_elem_ctor.call(null,"del");
tailrecursion.hoplon.details = tailrecursion.hoplon.make_elem_ctor.call(null,"details");
tailrecursion.hoplon.dfn = tailrecursion.hoplon.make_elem_ctor.call(null,"dfn");
tailrecursion.hoplon.dir = tailrecursion.hoplon.make_elem_ctor.call(null,"dir");
tailrecursion.hoplon.div = tailrecursion.hoplon.make_elem_ctor.call(null,"div");
tailrecursion.hoplon.dl = tailrecursion.hoplon.make_elem_ctor.call(null,"dl");
tailrecursion.hoplon.dt = tailrecursion.hoplon.make_elem_ctor.call(null,"dt");
tailrecursion.hoplon.em = tailrecursion.hoplon.make_elem_ctor.call(null,"em");
tailrecursion.hoplon.embed = tailrecursion.hoplon.make_elem_ctor.call(null,"embed");
tailrecursion.hoplon.eventsource = tailrecursion.hoplon.make_elem_ctor.call(null,"eventsource");
tailrecursion.hoplon.fieldset = tailrecursion.hoplon.make_elem_ctor.call(null,"fieldset");
tailrecursion.hoplon.figcaption = tailrecursion.hoplon.make_elem_ctor.call(null,"figcaption");
tailrecursion.hoplon.figure = tailrecursion.hoplon.make_elem_ctor.call(null,"figure");
tailrecursion.hoplon.font = tailrecursion.hoplon.make_elem_ctor.call(null,"font");
tailrecursion.hoplon.footer = tailrecursion.hoplon.make_elem_ctor.call(null,"footer");
tailrecursion.hoplon.form = tailrecursion.hoplon.make_elem_ctor.call(null,"form");
tailrecursion.hoplon.frame = tailrecursion.hoplon.make_elem_ctor.call(null,"frame");
tailrecursion.hoplon.frameset = tailrecursion.hoplon.make_elem_ctor.call(null,"frameset");
tailrecursion.hoplon.h1 = tailrecursion.hoplon.make_elem_ctor.call(null,"h1");
tailrecursion.hoplon.h2 = tailrecursion.hoplon.make_elem_ctor.call(null,"h2");
tailrecursion.hoplon.h3 = tailrecursion.hoplon.make_elem_ctor.call(null,"h3");
tailrecursion.hoplon.h4 = tailrecursion.hoplon.make_elem_ctor.call(null,"h4");
tailrecursion.hoplon.h5 = tailrecursion.hoplon.make_elem_ctor.call(null,"h5");
tailrecursion.hoplon.h6 = tailrecursion.hoplon.make_elem_ctor.call(null,"h6");
tailrecursion.hoplon.head = tailrecursion.hoplon.make_elem_ctor.call(null,"head");
tailrecursion.hoplon.header = tailrecursion.hoplon.make_elem_ctor.call(null,"header");
tailrecursion.hoplon.hgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"hgroup");
tailrecursion.hoplon.hr = tailrecursion.hoplon.make_elem_ctor.call(null,"hr");
tailrecursion.hoplon.html = tailrecursion.hoplon.make_elem_ctor.call(null,"html");
tailrecursion.hoplon.i = tailrecursion.hoplon.make_elem_ctor.call(null,"i");
tailrecursion.hoplon.iframe = tailrecursion.hoplon.make_elem_ctor.call(null,"iframe");
tailrecursion.hoplon.img = tailrecursion.hoplon.make_elem_ctor.call(null,"img");
tailrecursion.hoplon.input = tailrecursion.hoplon.make_elem_ctor.call(null,"input");
tailrecursion.hoplon.ins = tailrecursion.hoplon.make_elem_ctor.call(null,"ins");
tailrecursion.hoplon.isindex = tailrecursion.hoplon.make_elem_ctor.call(null,"isindex");
tailrecursion.hoplon.kbd = tailrecursion.hoplon.make_elem_ctor.call(null,"kbd");
tailrecursion.hoplon.keygen = tailrecursion.hoplon.make_elem_ctor.call(null,"keygen");
tailrecursion.hoplon.label = tailrecursion.hoplon.make_elem_ctor.call(null,"label");
tailrecursion.hoplon.legend = tailrecursion.hoplon.make_elem_ctor.call(null,"legend");
tailrecursion.hoplon.li = tailrecursion.hoplon.make_elem_ctor.call(null,"li");
tailrecursion.hoplon.link = tailrecursion.hoplon.make_elem_ctor.call(null,"link");
tailrecursion.hoplon.html_map = tailrecursion.hoplon.make_elem_ctor.call(null,"map");
tailrecursion.hoplon.mark = tailrecursion.hoplon.make_elem_ctor.call(null,"mark");
tailrecursion.hoplon.menu = tailrecursion.hoplon.make_elem_ctor.call(null,"menu");
tailrecursion.hoplon.html_meta = tailrecursion.hoplon.make_elem_ctor.call(null,"meta");
tailrecursion.hoplon.meter = tailrecursion.hoplon.make_elem_ctor.call(null,"meter");
tailrecursion.hoplon.nav = tailrecursion.hoplon.make_elem_ctor.call(null,"nav");
tailrecursion.hoplon.noframes = tailrecursion.hoplon.make_elem_ctor.call(null,"noframes");
tailrecursion.hoplon.noscript = tailrecursion.hoplon.make_elem_ctor.call(null,"noscript");
tailrecursion.hoplon.object = tailrecursion.hoplon.make_elem_ctor.call(null,"object");
tailrecursion.hoplon.ol = tailrecursion.hoplon.make_elem_ctor.call(null,"ol");
tailrecursion.hoplon.optgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"optgroup");
tailrecursion.hoplon.option = tailrecursion.hoplon.make_elem_ctor.call(null,"option");
tailrecursion.hoplon.output = tailrecursion.hoplon.make_elem_ctor.call(null,"output");
tailrecursion.hoplon.p = tailrecursion.hoplon.make_elem_ctor.call(null,"p");
tailrecursion.hoplon.param = tailrecursion.hoplon.make_elem_ctor.call(null,"param");
tailrecursion.hoplon.pre = tailrecursion.hoplon.make_elem_ctor.call(null,"pre");
tailrecursion.hoplon.progress = tailrecursion.hoplon.make_elem_ctor.call(null,"progress");
tailrecursion.hoplon.q = tailrecursion.hoplon.make_elem_ctor.call(null,"q");
tailrecursion.hoplon.rp = tailrecursion.hoplon.make_elem_ctor.call(null,"rp");
tailrecursion.hoplon.rt = tailrecursion.hoplon.make_elem_ctor.call(null,"rt");
tailrecursion.hoplon.ruby = tailrecursion.hoplon.make_elem_ctor.call(null,"ruby");
tailrecursion.hoplon.s = tailrecursion.hoplon.make_elem_ctor.call(null,"s");
tailrecursion.hoplon.samp = tailrecursion.hoplon.make_elem_ctor.call(null,"samp");
tailrecursion.hoplon.script = tailrecursion.hoplon.make_elem_ctor.call(null,"script");
tailrecursion.hoplon.section = tailrecursion.hoplon.make_elem_ctor.call(null,"section");
tailrecursion.hoplon.select = tailrecursion.hoplon.make_elem_ctor.call(null,"select");
tailrecursion.hoplon.small = tailrecursion.hoplon.make_elem_ctor.call(null,"small");
tailrecursion.hoplon.source = tailrecursion.hoplon.make_elem_ctor.call(null,"source");
tailrecursion.hoplon.span = tailrecursion.hoplon.make_elem_ctor.call(null,"span");
tailrecursion.hoplon.strike = tailrecursion.hoplon.make_elem_ctor.call(null,"strike");
tailrecursion.hoplon.strong = tailrecursion.hoplon.make_elem_ctor.call(null,"strong");
tailrecursion.hoplon.style = tailrecursion.hoplon.make_elem_ctor.call(null,"style");
tailrecursion.hoplon.sub = tailrecursion.hoplon.make_elem_ctor.call(null,"sub");
tailrecursion.hoplon.summary = tailrecursion.hoplon.make_elem_ctor.call(null,"summary");
tailrecursion.hoplon.sup = tailrecursion.hoplon.make_elem_ctor.call(null,"sup");
tailrecursion.hoplon.table = tailrecursion.hoplon.make_elem_ctor.call(null,"table");
tailrecursion.hoplon.tbody = tailrecursion.hoplon.make_elem_ctor.call(null,"tbody");
tailrecursion.hoplon.td = tailrecursion.hoplon.make_elem_ctor.call(null,"td");
tailrecursion.hoplon.textarea = tailrecursion.hoplon.make_elem_ctor.call(null,"textarea");
tailrecursion.hoplon.tfoot = tailrecursion.hoplon.make_elem_ctor.call(null,"tfoot");
tailrecursion.hoplon.th = tailrecursion.hoplon.make_elem_ctor.call(null,"th");
tailrecursion.hoplon.thead = tailrecursion.hoplon.make_elem_ctor.call(null,"thead");
tailrecursion.hoplon.html_time = tailrecursion.hoplon.make_elem_ctor.call(null,"time");
tailrecursion.hoplon.title = tailrecursion.hoplon.make_elem_ctor.call(null,"title");
tailrecursion.hoplon.tr = tailrecursion.hoplon.make_elem_ctor.call(null,"tr");
tailrecursion.hoplon.track = tailrecursion.hoplon.make_elem_ctor.call(null,"track");
tailrecursion.hoplon.tt = tailrecursion.hoplon.make_elem_ctor.call(null,"tt");
tailrecursion.hoplon.u = tailrecursion.hoplon.make_elem_ctor.call(null,"u");
tailrecursion.hoplon.ul = tailrecursion.hoplon.make_elem_ctor.call(null,"ul");
tailrecursion.hoplon.html_var = tailrecursion.hoplon.make_elem_ctor.call(null,"var");
tailrecursion.hoplon.video = tailrecursion.hoplon.make_elem_ctor.call(null,"video");
tailrecursion.hoplon.wbr = tailrecursion.hoplon.make_elem_ctor.call(null,"wbr");
tailrecursion.hoplon.spliced = cljs.core.vector;
tailrecursion.hoplon.$text = (function $text(p1__11966_SHARP_){return document.createTextNode(p1__11966_SHARP_);
});
tailrecursion.hoplon.$comment = (function $comment(p1__11967_SHARP_){return document.createComment(p1__11967_SHARP_);
});
tailrecursion.hoplon._STAR_initfns_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
tailrecursion.hoplon.add_initfn_BANG_ = cljs.core.partial.call(null,cljs.core.swap_BANG_,tailrecursion.hoplon._STAR_initfns_STAR_,cljs.core.conj);
tailrecursion.hoplon.init = (function init(html){return tailrecursion.hoplon.timeout.call(null,(function (){var body = jQuery("body");body.empty();
var seq__11976_11984 = cljs.core.seq.call(null,html);var chunk__11977_11985 = null;var count__11978_11986 = 0;var i__11979_11987 = 0;while(true){
if((i__11979_11987 < count__11978_11986))
{var x_11988 = cljs.core._nth.call(null,chunk__11977_11985,i__11979_11987);body.append(x_11988);
{
var G__11989 = seq__11976_11984;
var G__11990 = chunk__11977_11985;
var G__11991 = count__11978_11986;
var G__11992 = (i__11979_11987 + 1);
seq__11976_11984 = G__11989;
chunk__11977_11985 = G__11990;
count__11978_11986 = G__11991;
i__11979_11987 = G__11992;
continue;
}
} else
{var temp__4092__auto___11993 = cljs.core.seq.call(null,seq__11976_11984);if(temp__4092__auto___11993)
{var seq__11976_11994__$1 = temp__4092__auto___11993;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11976_11994__$1))
{var c__9300__auto___11995 = cljs.core.chunk_first.call(null,seq__11976_11994__$1);{
var G__11996 = cljs.core.chunk_rest.call(null,seq__11976_11994__$1);
var G__11997 = c__9300__auto___11995;
var G__11998 = cljs.core.count.call(null,c__9300__auto___11995);
var G__11999 = 0;
seq__11976_11984 = G__11996;
chunk__11977_11985 = G__11997;
count__11978_11986 = G__11998;
i__11979_11987 = G__11999;
continue;
}
} else
{var x_12000 = cljs.core.first.call(null,seq__11976_11994__$1);body.append(x_12000);
{
var G__12001 = cljs.core.next.call(null,seq__11976_11994__$1);
var G__12002 = null;
var G__12003 = 0;
var G__12004 = 0;
seq__11976_11984 = G__12001;
chunk__11977_11985 = G__12002;
count__11978_11986 = G__12003;
i__11979_11987 = G__12004;
continue;
}
}
} else
{}
}
break;
}
body.on("submit",(function (e){return e.preventDefault();
}));
var seq__11980 = cljs.core.seq.call(null,cljs.core.deref.call(null,tailrecursion.hoplon._STAR_initfns_STAR_));var chunk__11981 = null;var count__11982 = 0;var i__11983 = 0;while(true){
if((i__11983 < count__11982))
{var f = cljs.core._nth.call(null,chunk__11981,i__11983);f.call(null);
{
var G__12005 = seq__11980;
var G__12006 = chunk__11981;
var G__12007 = count__11982;
var G__12008 = (i__11983 + 1);
seq__11980 = G__12005;
chunk__11981 = G__12006;
count__11982 = G__12007;
i__11983 = G__12008;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11980);if(temp__4092__auto__)
{var seq__11980__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11980__$1))
{var c__9300__auto__ = cljs.core.chunk_first.call(null,seq__11980__$1);{
var G__12009 = cljs.core.chunk_rest.call(null,seq__11980__$1);
var G__12010 = c__9300__auto__;
var G__12011 = cljs.core.count.call(null,c__9300__auto__);
var G__12012 = 0;
seq__11980 = G__12009;
chunk__11981 = G__12010;
count__11982 = G__12011;
i__11983 = G__12012;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__11980__$1);f.call(null);
{
var G__12013 = cljs.core.next.call(null,seq__11980__$1);
var G__12014 = null;
var G__12015 = 0;
var G__12016 = 0;
seq__11980 = G__12013;
chunk__11981 = G__12014;
count__11982 = G__12015;
i__11983 = G__12016;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
});
tailrecursion.hoplon.by_id = (function by_id(id){return document.getElementById(cljs.core.name.call(null,id));
});
tailrecursion.hoplon.val_id = (function val_id(id){return tailrecursion.hoplon.do_BANG_.call(null,tailrecursion.hoplon.by_id.call(null,id),new cljs.core.Keyword(null,"value","value",1125876963));
});
tailrecursion.hoplon.rel = (function rel(other,event){var os = cljs.core.js__GT_clj.call(null,jQuery(other).offset());var ox = os.call(null,"left");var oy = os.call(null,"top");return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),(event.pageX - ox),new cljs.core.Keyword(null,"y","y",1013904363),(event.pageY - oy)], null);
});
tailrecursion.hoplon.relx = (function relx(other,event){return new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel.call(null,other,event));
});
tailrecursion.hoplon.rely = (function rely(other,event){return new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel.call(null,other,event));
});
tailrecursion.hoplon.rel_event = (function rel_event(rel_to,tag,handler){return (function (event){(event[[cljs.core.str(tag),cljs.core.str("X")].join('')] = tailrecursion.hoplon.relx.call(null,rel_to,event));
(event[[cljs.core.str(tag),cljs.core.str("Y")].join('')] = tailrecursion.hoplon.rely.call(null,rel_to,event));
return handler.call(null,event);
});
});
tailrecursion.hoplon.text_val_BANG_ = (function() {
var text_val_BANG_ = null;
var text_val_BANG___1 = (function (e){return e.val();
});
var text_val_BANG___2 = (function (e,v){return e.val([cljs.core.str(v)].join('')).trigger("change");
});
text_val_BANG_ = function(e,v){
switch(arguments.length){
case 1:
return text_val_BANG___1.call(this,e);
case 2:
return text_val_BANG___2.call(this,e,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = text_val_BANG___1;
text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = text_val_BANG___2;
return text_val_BANG_;
})()
;
tailrecursion.hoplon.check_val_BANG_ = (function() {
var check_val_BANG_ = null;
var check_val_BANG___1 = (function (e){return e.is(":checked");
});
var check_val_BANG___2 = (function (e,v){return e.prop("checked",cljs.core.boolean$.call(null,v)).trigger("change");
});
check_val_BANG_ = function(e,v){
switch(arguments.length){
case 1:
return check_val_BANG___1.call(this,e);
case 2:
return check_val_BANG___2.call(this,e,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = check_val_BANG___1;
check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = check_val_BANG___2;
return check_val_BANG_;
})()
;
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__9410__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9411__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9412__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9413__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9414__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("do!",(function() { 
var G__12017__delegate = function (elem,action,args){return action;
};
var G__12017 = function (elem,action,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12017__delegate.call(this,elem,action,args);};
G__12017.cljs$lang$maxFixedArity = 2;
G__12017.cljs$lang$applyTo = (function (arglist__12018){
var elem = cljs.core.first(arglist__12018);
arglist__12018 = cljs.core.next(arglist__12018);
var action = cljs.core.first(arglist__12018);
var args = cljs.core.rest(arglist__12018);
return G__12017__delegate(elem,action,args);
});
G__12017.cljs$core$IFn$_invoke$arity$variadic = G__12017__delegate;
return G__12017;
})()
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9414__auto__,method_table__9410__auto__,prefer_table__9411__auto__,method_cache__9412__auto__,cached_hierarchy__9413__auto__));
})();
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"value","value",1125876963),(function() { 
var G__12019__delegate = function (elem,_,args){var e = jQuery(elem);return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__12019 = function (elem,_,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12019__delegate.call(this,elem,_,args);};
G__12019.cljs$lang$maxFixedArity = 2;
G__12019.cljs$lang$applyTo = (function (arglist__12020){
var elem = cljs.core.first(arglist__12020);
arglist__12020 = cljs.core.next(arglist__12020);
var _ = cljs.core.first(arglist__12020);
var args = cljs.core.rest(arglist__12020);
return G__12019__delegate(elem,_,args);
});
G__12019.cljs$core$IFn$_invoke$arity$variadic = G__12019__delegate;
return G__12019;
})()
);
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"attr","attr",1016909155),(function (elem,_,kvs){return elem.call(null,kvs);
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"class","class",1108647146),(function (elem,_,kvs){var elem__$1 = jQuery(elem);var seq__12021 = cljs.core.seq.call(null,kvs);var chunk__12022 = null;var count__12023 = 0;var i__12024 = 0;while(true){
if((i__12024 < count__12023))
{var vec__12025 = cljs.core._nth.call(null,chunk__12022,i__12024);var c = cljs.core.nth.call(null,vec__12025,0,null);var p_QMARK_ = cljs.core.nth.call(null,vec__12025,1,null);elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));
{
var G__12027 = seq__12021;
var G__12028 = chunk__12022;
var G__12029 = count__12023;
var G__12030 = (i__12024 + 1);
seq__12021 = G__12027;
chunk__12022 = G__12028;
count__12023 = G__12029;
i__12024 = G__12030;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12021);if(temp__4092__auto__)
{var seq__12021__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12021__$1))
{var c__9300__auto__ = cljs.core.chunk_first.call(null,seq__12021__$1);{
var G__12031 = cljs.core.chunk_rest.call(null,seq__12021__$1);
var G__12032 = c__9300__auto__;
var G__12033 = cljs.core.count.call(null,c__9300__auto__);
var G__12034 = 0;
seq__12021 = G__12031;
chunk__12022 = G__12032;
count__12023 = G__12033;
i__12024 = G__12034;
continue;
}
} else
{var vec__12026 = cljs.core.first.call(null,seq__12021__$1);var c = cljs.core.nth.call(null,vec__12026,0,null);var p_QMARK_ = cljs.core.nth.call(null,vec__12026,1,null);elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));
{
var G__12035 = cljs.core.next.call(null,seq__12021__$1);
var G__12036 = null;
var G__12037 = 0;
var G__12038 = 0;
seq__12021 = G__12035;
chunk__12022 = G__12036;
count__12023 = G__12037;
i__12024 = G__12038;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"css","css",1014003061),(function (elem,_,kvs){var e = jQuery(elem);var seq__12039 = cljs.core.seq.call(null,kvs);var chunk__12040 = null;var count__12041 = 0;var i__12042 = 0;while(true){
if((i__12042 < count__12041))
{var vec__12043 = cljs.core._nth.call(null,chunk__12040,i__12042);var k = cljs.core.nth.call(null,vec__12043,0,null);var v = cljs.core.nth.call(null,vec__12043,1,null);e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));
{
var G__12045 = seq__12039;
var G__12046 = chunk__12040;
var G__12047 = count__12041;
var G__12048 = (i__12042 + 1);
seq__12039 = G__12045;
chunk__12040 = G__12046;
count__12041 = G__12047;
i__12042 = G__12048;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12039);if(temp__4092__auto__)
{var seq__12039__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12039__$1))
{var c__9300__auto__ = cljs.core.chunk_first.call(null,seq__12039__$1);{
var G__12049 = cljs.core.chunk_rest.call(null,seq__12039__$1);
var G__12050 = c__9300__auto__;
var G__12051 = cljs.core.count.call(null,c__9300__auto__);
var G__12052 = 0;
seq__12039 = G__12049;
chunk__12040 = G__12050;
count__12041 = G__12051;
i__12042 = G__12052;
continue;
}
} else
{var vec__12044 = cljs.core.first.call(null,seq__12039__$1);var k = cljs.core.nth.call(null,vec__12044,0,null);var v = cljs.core.nth.call(null,vec__12044,1,null);e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));
{
var G__12053 = cljs.core.next.call(null,seq__12039__$1);
var G__12054 = null;
var G__12055 = 0;
var G__12056 = 0;
seq__12039 = G__12053;
chunk__12040 = G__12054;
count__12041 = G__12055;
i__12042 = G__12056;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"toggle","toggle",4440567494),(function (elem,_,v){return jQuery(elem).toggle(cljs.core.boolean$.call(null,v));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"slide-toggle","slide-toggle",3005235810),(function (elem,_,v){if(cljs.core.truth_(v))
{return jQuery(elem).hide().slideDown("fast");
} else
{return jQuery(elem).slideUp("fast");
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"fade-toggle","fade-toggle",514539319),(function (elem,_,v){if(cljs.core.truth_(v))
{return jQuery(elem).hide().fadeIn("fast");
} else
{return jQuery(elem).fadeOut("fast");
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"focus","focus",1111509066),(function (elem,_,v){if(cljs.core.truth_(v))
{return tailrecursion.hoplon.timeout.call(null,(function (){return jQuery(elem).focus();
}));
} else
{return tailrecursion.hoplon.timeout.call(null,(function (){return jQuery(elem).focusout();
}));
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"select","select",4402849902),(function (elem,_,___$1){return jQuery(elem).select();
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"focus-select","focus-select",3635190531),(function (elem,_,v){if(cljs.core.truth_(v))
{tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"focus","focus",1111509066),v);
return tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"select","select",4402849902),v);
} else
{return null;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"text","text",1017460895),(function (elem,_,v){return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"scroll-to","scroll-to",1431647469),(function (elem,_,v){if(cljs.core.truth_(v))
{var body = jQuery("body");var elem__$1 = jQuery(elem);return body.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrollTop","scrollTop",1431684794),elem__$1.offset().top], null)));
} else
{return null;
}
}));
tailrecursion.hoplon.on_BANG_ = (function on_BANG_(elem,event,callback){return tailrecursion.hoplon.when_dom.call(null,elem,(function (){return jQuery(elem).on(cljs.core.name.call(null,event),callback);
}));
});
