google.maps.__gjsload__('search_impl', function(_){'use strict';var I$=_.k(),J$={Gg:function(a){if(_.Jf[15]){var b=a.U,c=a.U=a.getMap();b&&J$.Np(a,b);c&&J$.Em(a,c)}},Em:function(a,b){var c=J$.lo(a.get("layerId"),a.get("spotlightDescription"));a.j=c;a.T=a.get("renderOnBaseMap");if(a.T){var d=b.__gm.j;d.set(_.tj(d.get(),c))}else J$.Am(a,b,c);_.X(b,"Lg")},Am:function(a,b,c){var d=new _.$0(window.document,_.Rh,_.gg,_.Sx,_.S),d=_.OB(d);c.V=(0,_.u)(d.load,d);c.Tb=0!=a.get("clickable");_.a1.Fg(c,b);var e=[];e.push(_.I.addListener(c,"click",(0,_.u)(J$.Oh,
J$,a)));_.H(["mouseover","mouseout","mousemove"],function(b){e.push(_.I.addListener(c,b,(0,_.u)(J$.Iq,J$,a,b)))});e.push(_.I.addListener(a,"clickable_changed",function(){a.j.Tb=0!=a.get("clickable")}));a.R=e},lo:function(a,b){var c=new _.Qv,d=a.split("|");c.Ua=d[0];for(var e=1;e<d.length;++e){var f=d[e].split(":");c.j[f[0]]=f[1]}b&&(c.R=new _.$p(b));return c},Oh:function(a,b,c,d,e){var f=null;if(e&&(f={status:e.getStatus()},0==e.getStatus())){f.location=null!=e.j[1]?new _.L(_.qj(e.getLocation()),
_.oj(e.getLocation())):null;f.fields={};for(var g=0,h=_.Wc(e.j,2);g<h;++g){var l=_.R0(e,g);f.fields[_.O0(l)]=_.P0(l)}}_.I.trigger(a,"click",b,c,d,f)},Iq:function(a,b,c,d,e,f,g){var h=null;f&&(h={title:f[1].title,snippet:f[1].snippet});_.I.trigger(a,b,c,d,e,h,g)},Np:function(a,b){if(a.j)if(a.T){var c=b.__gm.j;c.set(c.get().nc(a.j))}else J$.Mp(a,b)},Mp:function(a,b){a.j&&_.a1.Bh(a.j,b)&&(_.H(a.R,_.I.removeListener),a.R=null)}};I$.prototype.Gg=J$.Gg;_.lc("search_impl",new I$);});
