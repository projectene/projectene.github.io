(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{8165:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return s(1282)}])},6796:function(t,e,s){"use strict";s.d(e,{Z:function(){return o}});var n=s(5893),i=s(9008),l=s.n(i);function o(t){let{title:e,description:s,pageSlug:i,pageType:o="website"}=t,a=e.replace(" | E&E","");return(0,n.jsxs)(l(),{children:[(0,n.jsx)("title",{children:e}),(0,n.jsx)("meta",{name:"description",content:s}),(0,n.jsx)("link",{rel:"canonical",href:i}),(0,n.jsx)("meta",{property:"og:type",content:o}),(0,n.jsx)("meta",{property:"og:title",content:a}),(0,n.jsx)("meta",{property:"og:description",content:s})]})}},1282:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return h}});var n=s(5893),i=s(5675),l=s.n(i),o=s(1664),a=s.n(o),c=s(7294),r=s(1163),_=s(6796),d=()=>(0,n.jsx)("main",{id:"content",className:"content","aria-label":"Content",children:(0,n.jsxs)("div",{className:"loadingContainer",children:[(0,n.jsx)("div",{className:"dot-pulse"}),(0,n.jsx)("div",{className:"dot-pulse"}),(0,n.jsx)("div",{className:"dot-pulse"})]})}),u=s(191),p=s.n(u);let m=async t=>{let e=await fetch("https://projectene.github.io/data/all-posts.json");if(!e.ok)throw Error("Kutilmagan xatolik yuz berdi.");let s=(await e.json()).find(e=>e.slug===t);if(!s)throw Error("Kutilmagan xatolik yuz berdi.");return s};var h=()=>{let{slug:t}=(0,r.useRouter)().query,[e,s]=(0,c.useState)(null);return((0,c.useEffect)(()=>{"string"==typeof t&&m(t).then(s)},[t]),e)?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(_.Z,{pageSlug:"/blog/".concat(e.slug,"/"),title:"".concat(e.title," | E&E"),description:e.summary}),(0,n.jsx)("main",{id:"content",className:"content","aria-label":"Content",children:(0,n.jsxs)("article",{className:p()._post,"data-bi-an":"blog body",children:[(0,n.jsxs)("header",{className:p().entry,children:[(0,n.jsx)("div",{className:p().post__time,children:(0,n.jsx)("time",{children:e.time})}),(0,n.jsx)("div",{className:"mt-3 mb-3",children:(0,n.jsx)("h1",{className:"page-header ".concat(p().post__title),children:e.title})}),e.img&&(0,n.jsx)("div",{className:p().post__img,children:(0,n.jsx)(l(),{src:e.img,alt:"",width:600,height:600})})]}),(0,n.jsx)("div",{className:p().post__content,children:(0,n.jsx)("p",{children:e.content})}),(0,n.jsx)(a(),{className:"".concat(p().seeAllArticles),href:"/blog",children:"Barcha maqolalar"})]},e.id)})]}):(0,n.jsx)(d,{})}},191:function(t){t.exports={_post:"singlePost__post__wEf_Z",entry:"singlePost_entry__c83MV",post__time:"singlePost_post__time__l4DXH",post__title:"singlePost_post__title__bv66n",post__img:"singlePost_post__img__9y5b2",post__content:"singlePost_post__content__JImuK",seeAllArticles:"singlePost_seeAllArticles__5h0UF"}},9008:function(t,e,s){t.exports=s(7828)},1163:function(t,e,s){t.exports=s(9090)}},function(t){t.O(0,[888,774,179],function(){return t(t.s=8165)}),_N_E=t.O()}]);