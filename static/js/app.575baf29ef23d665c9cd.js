"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[143],{468:(e,t,a)=>{a.d(t,{z:()=>o});var n=a(6780),r=a(8669),l=a(7353);const s="SP9mhH933Xfc3CKdkByb",c=({children:e,className:t,forwardedRef:a,type:c="button",...o})=>r.createElement("button",(0,n.Z)({ref:a,className:(0,l.Z)(s,t),type:c},o),e),o=r.forwardRef(((e,t)=>r.createElement(c,(0,n.Z)({},e,{forwardedRef:t}))));o.displayName="Button"},6606:(e,t,a)=>{a.d(t,{c:()=>o});var n=a(6780),r=a(8669),l=a(7353),s=a(468);const c="Ayg3yIU42ur4s8B4XhJl",o=({className:e,...t})=>r.createElement(s.z,(0,n.Z)({className:(0,l.Z)(c,e)},t))},6489:(e,t,a)=>{a.d(t,{p:()=>s});var n=a(8669),r=a(7353);const l="uejIaqI5vaPjY8TvWoYe",s=({className:e})=>n.createElement("div",{className:(0,r.Z)(l,e),role:"status"},n.createElement("span",{className:"Spinner","aria-label":"Пожалуйста, подождите..."}))},5312:(e,t,a)=>{a.d(t,{Yf:()=>n,dM:()=>r,ln:()=>l});const n={ENTER:"Enter",ESCAPE:"Escape",SPACE:" ",UP:"ArrowUp",DOWN:"ArrowDown"},r={IDLE:"IDLE",LOADING:"LOADING",SUCCESS:"SUCCESS",FAILURE:"FAILURE"},l={HOME:"/",NAMING:"naming"}},4264:(e,t,a)=>{a.d(t,{K:()=>n});const n={FETCH_START:"@link-list/fetch-start",FETCH_SUCCESS:"@link-list/fetch-complete",FETCH_FAILURE:"@link-list/fetch-error",SEARCH:"@link-list/search",FILTER:"@link-list/filter-toggle",SORTING:"@link-list/sorting-toggle",NEXT_PAGE:"@link-list/next-page"}},9886:(e,t,a)=>{a(5312),a(1890),a(4264)},1890:(e,t,a)=>{a.d(t,{g:()=>n,F:()=>r});const n={CAPTION:"caption",HASHTAG:"hashtag",URL:"url"},r={NEW:"new",OLD:"old"}},6049:(e,t,a)=>{a.d(t,{K:()=>n});const n={FETCH_START:"@naming/fetch_start",FETCH_SUCCESS:"@naming/fetch_success",FETCH_FAILURE:"@naming/fetch_failure"}},2903:(e,t,a)=>{var n=a(8669),r=a(3805),l=a(5586),s=a(4189),c=a(6753);a(6519);const o="J2toRl1auMw1b7DMDMWY";class i extends n.Component{constructor(...e){super(...e),(0,c.Z)(this,"state",{error:null})}static getDerivedStateFromError(e){return{error:e}}render(){return this.state.error?n.createElement("p",{className:o},"Something went wrong in React app:("):this.props.children}}const d=n.createContext(void 0),E=n.createContext(void 0),m="ui-theme",u=()=>{let e;try{e=window.localStorage.getItem(m),e||(e="light")}catch{e="light"}return e},p=({children:e})=>{const[t,a]=n.useState(u);return n.createElement(d.Provider,{value:t},n.createElement(E.Provider,{value:a},e))},h=()=>{const e=n.useContext(d);if(void 0===e)throw new Error("useThemeState must be used within a ThemeProvider");return n.useEffect((()=>{window.localStorage.setItem(m,e)}),[e]),"dark"===e};var S=a(7379),g=(a(2933),a(4370)),C=a(1705),N=a(4264);const y=async()=>{const e=`/cs-reading-whitelist/data/link-list.json?${Date.now()}`;return(await fetch(e)).json()},T=function*(){try{const e=yield(0,C.RE)(y);yield(0,C.gz)({type:N.K.FETCH_SUCCESS,payload:e.data})}catch(e){yield(0,C.gz)({type:N.K.FETCH_FAILURE,payload:e})}},A=function*(){yield(0,C.Fm)(N.K.FETCH_START,T)};var f=a(6049);const v=async()=>{const e=`/cs-reading-whitelist/data/naming.json?${Date.now()}`;return(await fetch(e)).json()},I=function*(){try{const e=yield(0,C.RE)(v);yield(0,C.gz)({type:f.K.FETCH_SUCCESS,payload:e.data})}catch(e){yield(0,C.gz)({type:f.K.FETCH_FAILURE,payload:e})}},w=function*(){yield(0,C.Fm)(f.K.FETCH_START,I)};var L=a(3410);const R=function*(){yield(0,C.$6)([(0,C.RE)(A),(0,C.RE)(w)])};var F=a(7353);const H="kOw8hT9ZcvmR_z4miikK",M="pTYs9LP_kPZtRgQt4OhM TTwZQh8ZRgEekxufKSIX",U="dMuTjA3uIUlUzXIU8n7Q eLMys6WuT5CYHEs4A5ez",k=[{legend:"GitHub",url:"https://github.com/yialo/cs-reading-whitelist"},{legend:"Twitter",url:"https://twitter.com/xarroalex"},{legend:"CodeSandbox",url:"https://codesandbox.io/u/yialo/sandboxes"},{legend:"CodePen",url:"https://codepen.io/yialo/pens/public?grid_type=list"}],b=()=>n.createElement("footer",{className:H},n.createElement("ul",{className:U},k.map((({legend:e,url:t},a)=>n.createElement("li",{key:a},n.createElement("a",{className:M,href:t},e))))));var _=a(5312);const D="E6C219dYaExcSOFec2KE",O="OsurD09yZ4Tt5Uqhmom6",Z="ulcaoF3P5qsh5fgZ287T",K="__XghosfcdQ3JVXc4XcB eLMys6WuT5CYHEs4A5ez",x="SyuqBbhzR7Zf9uxZqL8N",G="Le__Qhs2Zz4dZlf0MDoJ",z=n.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),P=n.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),Y=({isExpanded:e})=>n.createElement("svg",{"aria-hidden":"true",className:Z,viewBox:"0 0 24 24",width:"100%",height:"100%"},n.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),e?z:P),B=[{url:_.ln.HOME,label:"Reading"},{url:_.ln.NAMING,label:"Naming"}],X="AppNavMenu-list",W=({className:e})=>{const[t,a]=n.useState(!1);return n.useEffect((()=>{const e=e=>{e.key===_.Yf.ESCAPE&&a((e=>e&&!e))};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[]),n.createElement("nav",{className:(0,F.Z)(D,e,{isCollapsedScreenSm:!t})},n.createElement("button",{"aria-controls":X,"aria-expanded":t,"aria-label":"Меню",className:O,type:"button",onClick:()=>{a((e=>!e))}},n.createElement(Y,{isExpanded:t})),n.createElement("ul",{className:K,id:X},B.map((({url:e,label:t})=>n.createElement("li",{key:t},n.createElement(s.OL,{className:({isActive:e})=>(0,F.Z)(x,{[G]:e}),to:e,end:!0},t))))))};var j=a(6606);const Q="fUcYawYO5edNVSBXa7A5",q=({className:e})=>{const t=h(),a=(()=>{const e=n.useContext(E);if(void 0===e)throw new Error("useThemeToggle must be used within a ThemeProvider");return n.useCallback((()=>{e((e=>"dark"===e?"light":"dark"))}),[e])})();return n.createElement(j.c,{className:(0,F.Z)(Q,e),"aria-label":`Перейти к ${t?"светлой":"тёмной"} теме`,onClick:a},"Go "+(t?"light":"dark"))},J="Dt5NLdixBylCzYwXIMLC",V="JJ0mH1lBaUxmcIm1SGdw",$=({className:e})=>n.createElement("header",{className:(0,F.Z)(J,e)},n.createElement(W,null),n.createElement(q,{className:V}));var ee=a(6473),te=a(6489),ae=a(4438);const ne="xjoBm8ceRfExJvHRV9K3",re="L3VHMhVtZGo2eybEEu7g",le=()=>n.createElement(ae.Z,null,n.createElement("h1",{className:ne},"Error 404"),n.createElement("p",{className:re},"Page not found")),se=(0,n.lazy)((()=>Promise.all([a.e(216),a.e(639)]).then(a.bind(a,4050)))),ce=(0,n.lazy)((()=>Promise.all([a.e(216),a.e(804)]).then(a.bind(a,5440)))),oe=()=>n.createElement(n.Suspense,{fallback:n.createElement(te.p,null)},n.createElement(ee.Z5,null,n.createElement(ee.AW,{path:_.ln.HOME,element:n.createElement(se,null)}),n.createElement(ee.AW,{path:_.ln.NAMING,element:n.createElement(ce,null)}),n.createElement(ee.AW,{path:"*",element:n.createElement(le,null)}))),ie="KVbhB_rS0qK5xgSUgeFA",de="Nx0DYIgMXOQLl8NDrZ93",Ee=()=>{const e=h();return n.useEffect((()=>{(()=>{const e=document.getElementById("overlay");null==e||e.classList.add("isHidden")})()}),[]),n.createElement("div",{className:(0,F.Z)(ie,{hasDarkTheme:e})},n.createElement($,{className:de}),n.createElement(oe,null),n.createElement(b,null))},me=(()=>{const e=(0,g.ZP)(),t=(0,S.md)(e),a=(0,S.MT)(L.Q,t);return e.run(R),a})(),ue=()=>n.createElement(n.StrictMode,null,n.createElement(i,null,n.createElement(l.zt,{store:me},n.createElement(s.UT,null,n.createElement(p,null,n.createElement(Ee,null))))));(()=>{const e=document.getElementById("app-root");r.render(n.createElement(ue,null),e)})()},4438:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(8669);const r="qbmebYa0uI8G2zFDy8y2",l=({children:e})=>n.createElement("main",{className:r},e)},3410:(e,t,a)=>{a.d(t,{Q:()=>d});var n=a(7379),r=a(5312),l=a(1890),s=a(4264);a(9886);const c={error:null,list:[],process:"IDLE",searchString:"",page:1,filter:l.g.CAPTION,sorting:l.F.NEW};var o=a(6049);const i={process:"IDLE",error:null,content:[]},d=(0,n.UY)({links:(e,t)=>{const a=null!=e?e:c;switch(t.type){case s.K.FETCH_START:return a.process===r.dM.LOADING?a:{...a,process:r.dM.LOADING,error:null};case s.K.FETCH_SUCCESS:return a.process!==r.dM.LOADING?a:{...a,list:t.payload,process:r.dM.SUCCESS};case s.K.FETCH_FAILURE:return a.process!==r.dM.LOADING?a:{...a,list:[],process:r.dM.FAILURE,error:t.payload};case s.K.SEARCH:return{...a,page:1,searchString:t.payload};case s.K.FILTER:return{...a,filter:t.payload,page:1};case s.K.SORTING:return{...a,sorting:t.payload};case s.K.NEXT_PAGE:return{...a,page:a.page+1};default:return a}},naming:(e,t)=>{const a=null!=e?e:i;switch(t.type){case o.K.FETCH_START:return a.process===r.dM.LOADING?a:{...a,process:r.dM.LOADING,error:null};case o.K.FETCH_SUCCESS:return a.process!==r.dM.LOADING?a:{...a,process:r.dM.SUCCESS,content:t.payload};case o.K.FETCH_FAILURE:return a.process!==r.dM.LOADING?a:{...a,process:r.dM.FAILURE,error:t.payload,content:[]};default:return a}}})}},e=>{e.O(0,[143],(()=>{[216,639,804].map(e.E)}),5);e.O(0,[514,216],(()=>{return t=2903,e(e.s=t);var t}));e.O()}]);