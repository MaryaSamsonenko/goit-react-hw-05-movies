"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[467],{6558:function(n,t,e){e.d(t,{zx:function(){return h},tk:function(){return x},k3:function(){return d},II:function(){return g},Hr:function(){return v},mS:function(){return m},DX:function(){return b}});var r,a,c,i,o,u,s,p=e(168),f=e(5751),l=e(501),h=f.ZP.button(r||(r=(0,p.Z)(["\n  margin: 0 auto;\n  margin-top: 28px;\n  display: block;\n  padding: 12px 20px;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 22px;\n  color: #ffffff;\n  background-color: #99baed;\n  border-radius: 6px;\n  transition: all 300ms ease;\n  &:hover {\n    color: #fbb400;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  }\n"]))),x=f.ZP.h2(a||(a=(0,p.Z)(["\n  font-weight: 700;\n  font-size: 22px;\n  line-height: 26px;\n  text-align: center;\n  margin-bottom: 28px;\n  color: #163561;\n"]))),d=f.ZP.h3(c||(c=(0,p.Z)(["\n  font-weight: 700;\n  font-size: 22px;\n  line-height: 26px;\n  text-align: center;\n  color: #163561;\n"]))),g=(0,f.ZP)(l.rU)(i||(i=(0,p.Z)(["\n  margin-bottom: 28px;\n  display: inline-block;\n  padding: 12px 20px;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 22px;\n  color: #ffffff;\n  background-color: #99baed;\n  border-radius: 6px;\n  transition: all 300ms ease;\n  &:hover {\n    color: #fbb400;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  }\n"]))),v=f.ZP.hr(o||(o=(0,p.Z)(["\n  background-color: #163561;\n"]))),m=f.ZP.div(u||(u=(0,p.Z)(["\n  display: flex;\n  gap: 60px;\n  justify-content: center;\n  margin-bottom: 28px;\n"]))),b=(0,f.ZP)(l.OL)(s||(s=(0,p.Z)(["\n  font-weight: 700;\n  font-size: 22px;\n  line-height: 26px;\n  transition: color 250ms linear;\n  color: #163561;\n  &.active {\n    color: #fbb400;\n  }\n"])))},5538:function(n,t,e){e.d(t,{Vu:function(){return p},iP:function(){return f},an:function(){return l},x4:function(){return h},MR:function(){return x}});var r=e(5861),a=e(7757),c=e.n(a),i=e(4569),o=e.n(i),u="https://api.themoviedb.org/3/",s="4249ab3b22f63bc9cae3378d32ce7e3b",p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(u,"/trending/movie/day?api_key=").concat(s,"&page=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(u,"search/movie?api_key=").concat(s,"&query=").concat(t,"&language=en-US&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(u,"/movie/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},9467:function(n,t,e){e.r(t),e.d(t,{Cast:function(){return y}});var r,a,c,i,o=e(5861),u=e(885),s=e(7757),p=e.n(s),f=e(2791),l=e(6871),h=e(5538),x=e(168),d=e(5751),g=d.ZP.ul(r||(r=(0,x.Z)(["\n  padding: 20px;\n  display: grid;\n  gap: 50px;\n  grid-template-columns: repeat(4, minmax(300px, 1fr));\n"]))),v=d.ZP.img(a||(a=(0,x.Z)(["\n  width: 300px;\n  height: 450px;\n  object-fit: cover;\n"]))),m=d.ZP.h4(c||(c=(0,x.Z)(["\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 22px;\n   color: #163561;\n   margin-top: 10px;\n  \n  }\n"]))),b=d.ZP.p(i||(i=(0,x.Z)(["\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 22px;\n  color: #163561;\n margin-top: 10px;\n  }\n"]))),w=e(184),Z=function(n){var t=n.cast;return(0,w.jsx)(g,{children:t.map((function(n){var t=n.profile_path,e=n.character,r=n.name,a=n.id;return(0,w.jsxs)("li",{children:[(0,w.jsx)("div",{children:(0,w.jsx)(v,{src:t,alt:r})}),(0,w.jsxs)("div",{children:[(0,w.jsx)(m,{children:r}),(0,w.jsxs)(b,{children:["Character:",(0,w.jsx)("br",{})," ",e]})]})]},a)}))})},k=e(6558),y=function(){var n=(0,l.UO)().movieId,t=(0,f.useState)(null),e=(0,u.Z)(t,2),r=e[0],a=e[1],c=(0,f.useState)(!1),i=(0,u.Z)(c,2),s=i[0],x=i[1],d=(0,f.useState)(""),g=(0,u.Z)(d,2),v=g[0],m=g[1];return(0,f.useEffect)((function(){var t=function(){var t=(0,o.Z)(p().mark((function t(){var r,c,i;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,x(!0),m(""),t.next=5,(0,h.x4)(n);case 5:r=t.sent,c=r.cast,i=e(c),a(i),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),m(t.t0.message);case 14:return t.prev=14,x(!1),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[0,11,14,17]])})));return function(){return t.apply(this,arguments)}}(),e=function(n){return n.map((function(n){var t=n.id,e=n.name,r=n.character,a=n.profile_path;return{id:t,name:e,character:r,profile_path:a?"https://image.tmdb.org/t/p/w300/".concat(a):"https://vjoy.cc/wp-content/uploads/2020/10/1-36-1024x1024-1.jpg"}}))};t()}),[n]),(0,w.jsxs)(w.Fragment,{children:[s&&(0,w.jsx)(k.k3,{children:"...Loading"}),v&&(0,w.jsx)(k.k3,{children:"Something went wrong, please try again"}),!v&&!s&&r&&(0,w.jsx)(Z,{cast:r})]})}}}]);
//# sourceMappingURL=467.89e732fa.chunk.js.map