"use strict";(self.webpackChunkcontents_list_page=self.webpackChunkcontents_list_page||[]).push([[179],{8952:(e,t,n)=>{var o=n(745),r=n(4268),i=n(7294),a=n(6974);const s=(0,n(8804).vJ)(["html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}html{font-family:'Roboto',sans-serif;background-color:rgb(26,26,31);color:rgb(255,255,255);font-size:10px;min-width:480px;}.blind{position:absolute;width:1px;height:1px;clip:rect(0px,0px,0px,0px);overflow:hidden;}"]);var c=n(5893),l=(0,i.lazy)((function(){return Promise.all([n.e(365),n.e(943)]).then(n.bind(n,3943))}));function d(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s,{}),(0,c.jsxs)(a.Z5,{children:[(0,c.jsx)(a.AW,{path:"/store",element:(0,c.jsx)(l,{})}),(0,c.jsx)(a.AW,{path:"*",element:(0,c.jsx)(a.Fg,{to:"/store",replace:!0})})]})]})}var u=n(2776),p=n(743),b=n(5260),f=n(9711),g=document.getElementById("root"),h=(0,r.xC)({reducer:u.Z,middleware:function(e){return e().concat(b.z.middleware)}});g&&(0,o.s)(g).render((0,c.jsx)(f.VK,{basename:"/store-contents-page/",children:(0,c.jsx)(p.zt,{store:h,children:(0,c.jsx)(d,{})})}))},1916:(e,t,n)=>{n.d(t,{ZP:()=>s,we:()=>a});var o=n(4268),r={pricingOptions:[],page:1,keyword:""},i=(0,o.oM)({name:"filter",initialState:r,reducers:{initialize:function(e){},setPricingOptions:function(e,t){e.pricingOptions=t.payload},setPage:function(e,t){e.page=t.payload},increasePage:function(e){e.page=e.page+1},decreasePage:function(e){e.page=e.page-1},setKeyword:function(e,t){e.keyword=t.payload}}}),a=i.actions;const s=i.reducer},2776:(e,t,n)=>{n.d(t,{Z:()=>c,j:()=>l});var o=n(4942),r=n(7779),i=n(743),a=n(1916),s=n(5260);const c=(0,r.UY)((0,o.Z)({filter:a.ZP},s.z.reducerPath,s.z.reducer));function l(e,t){return(0,i.v9)(e,t)}},5260:(e,t,n)=>{n.d(t,{X:()=>a,z:()=>i});var o=n(848),r=n(5673),i=(0,o.LC)({reducerPath:"contentsListApi",baseQuery:(0,r.ni)({baseUrl:"https://closet-sample.azurewebsites.net/api/"}),endpoints:function(e){return{getContentsList:e.query({query:function(){return"data"}})}}}),a=i.useGetContentsListQuery}},e=>{e.O(0,[62],(()=>(8952,e(e.s=8952)))),e.O()}]);