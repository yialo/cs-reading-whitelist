"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[143],{468:(e,t,s)=>{s.d(t,{z:()=>o});var r=s(8669),n=s(7353);const a="SP9mhH933Xfc3CKdkByb";var l=s(2880);const c=e=>{let{children:t,className:s,forwardedRef:r,type:c="button",...o}=e;return(0,l.jsx)("button",{ref:r,className:(0,n.Z)(a,s),type:c,...o,children:t})},o=r.forwardRef(((e,t)=>(0,l.jsx)(c,{...e,forwardedRef:t})));o.displayName="Button"},6606:(e,t,s)=>{s.d(t,{c:()=>c});s(8669);var r=s(7353),n=s(468);const a="Ayg3yIU42ur4s8B4XhJl";var l=s(2880);const c=e=>{let{className:t,...s}=e;return(0,l.jsx)(n.z,{className:(0,r.Z)(a,t),...s})}},6489:(e,t,s)=>{s.d(t,{p:()=>l});s(8669);var r=s(7353);const n="uejIaqI5vaPjY8TvWoYe";var a=s(2880);const l=e=>{let{className:t}=e;return(0,a.jsx)("div",{className:(0,r.Z)(n,t),role:"status",children:(0,a.jsx)("span",{className:"Spinner","aria-label":"Пожалуйста, подождите..."})})}},5312:(e,t,s)=>{s.d(t,{Yf:()=>r,dM:()=>n,ln:()=>a});const r={ENTER:"Enter",ESCAPE:"Escape",SPACE:" ",UP:"ArrowUp",DOWN:"ArrowDown"},n={IDLE:"IDLE",LOADING:"LOADING",SUCCESS:"SUCCESS",FAILURE:"FAILURE"},a={HOME:"/",NAMING:"naming"}},4264:(e,t,s)=>{s.d(t,{K:()=>r});const r={FETCH_START:"@link-list/fetch-start",FETCH_SUCCESS:"@link-list/fetch-complete",FETCH_FAILURE:"@link-list/fetch-error",SEARCH:"@link-list/search",FILTER:"@link-list/filter-toggle",SORTING:"@link-list/sorting-toggle",NEXT_PAGE:"@link-list/next-page"}},1890:(e,t,s)=>{s.d(t,{F:()=>n,g:()=>r});const r={CAPTION:"caption",HASHTAG:"hashtag",URL:"url"},n={NEW:"new",OLD:"old"}},6049:(e,t,s)=>{s.d(t,{K:()=>r});const r={FETCH_START:"@naming/fetch_start",FETCH_SUCCESS:"@naming/fetch_success",FETCH_FAILURE:"@naming/fetch_failure"}},3305:(e,t,s)=>{var r=s(8669),n=s(5167),a=s(8776),l=s(4189),c=s(6753);s(6519);const o="J2toRl1auMw1b7DMDMWY";var i=s(2880);class d extends r.Component{constructor(){super(...arguments),(0,c.Z)(this,"state",{error:null})}static getDerivedStateFromError(e){return{error:e}}render(){return this.state.error?(0,i.jsx)("p",{className:o,children:"Something went wrong in React app:("}):this.props.children}}s(1781);const u=r.createContext(void 0),h=r.createContext(void 0),p="ui-theme",E=()=>{let e;try{e=window.localStorage.getItem(p),e||(e="light")}catch{e="light"}return e},m=e=>{let{children:t}=e;const[s,n]=r.useState(E);return(0,i.jsx)(u.Provider,{value:s,children:(0,i.jsx)(h.Provider,{value:n,children:t})})},x=()=>{const e=r.useContext(u);if(void 0===e)throw new Error("useThemeState must be used within a ThemeProvider");return r.useEffect((()=>{window.localStorage.setItem(p,e)}),[e]),"dark"===e};var S=s(7379),g=(s(2933),s(4370)),C=s(1705),f=s(4264);const y=async()=>{const e="".concat("/cs-reading-whitelist/","data/link-list.json?").concat(Date.now());return(await fetch(e)).json()},T=function*(){try{const e=yield(0,C.RE)(y);yield(0,C.gz)({type:f.K.FETCH_SUCCESS,payload:e.data})}catch(e){yield(0,C.gz)({type:f.K.FETCH_FAILURE,payload:e})}},N=function*(){yield(0,C.Fm)(f.K.FETCH_START,T)};var j=s(6049);const v=async()=>{const e="".concat("/cs-reading-whitelist/","data/naming.json?").concat(Date.now());return(await fetch(e)).json()},A=function*(){try{const e=yield(0,C.RE)(v);yield(0,C.gz)({type:j.K.FETCH_SUCCESS,payload:e.data})}catch(e){yield(0,C.gz)({type:j.K.FETCH_FAILURE,payload:e})}},w=function*(){yield(0,C.Fm)(j.K.FETCH_START,A)};var I=s(5312),L=s(1890);const R={error:null,list:[],process:"IDLE",searchString:"",page:1,filter:L.g.CAPTION,sorting:L.F.NEW},H={process:"IDLE",error:null,content:[]},F=(0,S.UY)({links:(e,t)=>{const s=null!=e?e:R;switch(t.type){case f.K.FETCH_START:return s.process===I.dM.LOADING?s:{...s,process:I.dM.LOADING,error:null};case f.K.FETCH_SUCCESS:return s.process!==I.dM.LOADING?s:{...s,list:t.payload,process:I.dM.SUCCESS};case f.K.FETCH_FAILURE:return s.process!==I.dM.LOADING?s:{...s,list:[],process:I.dM.FAILURE,error:t.payload};case f.K.SEARCH:return{...s,page:1,searchString:t.payload};case f.K.FILTER:return{...s,filter:t.payload,page:1};case f.K.SORTING:return{...s,sorting:t.payload};case f.K.NEXT_PAGE:return{...s,page:s.page+1};default:return s}},naming:(e,t)=>{const s=null!=e?e:H;switch(t.type){case j.K.FETCH_START:return s.process===I.dM.LOADING?s:{...s,process:I.dM.LOADING,error:null};case j.K.FETCH_SUCCESS:return s.process!==I.dM.LOADING?s:{...s,process:I.dM.SUCCESS,content:t.payload};case j.K.FETCH_FAILURE:return s.process!==I.dM.LOADING?s:{...s,process:I.dM.FAILURE,error:t.payload,content:[]};default:return s}}}),b=function*(){yield(0,C.$6)([(0,C.RE)(N),(0,C.RE)(w)])};var M=s(7353),U=s(6473);const k="kOw8hT9ZcvmR_z4miikK",D="pTYs9LP_kPZtRgQt4OhM TTwZQh8ZRgEekxufKSIX",_="dMuTjA3uIUlUzXIU8n7Q eLMys6WuT5CYHEs4A5ez",O=[{legend:"GitHub",url:"https://github.com/yialo/cs-reading-whitelist"},{legend:"Twitter",url:"https://twitter.com/xarroalex"},{legend:"CodeSandbox",url:"https://codesandbox.io/u/yialo/sandboxes"},{legend:"CodePen",url:"https://codepen.io/yialo/pens/public?grid_type=list"}],P=()=>(0,i.jsx)("footer",{className:k,children:(0,i.jsx)("ul",{className:_,children:O.map(((e,t)=>{let{legend:s,url:r}=e;return(0,i.jsx)("li",{children:(0,i.jsx)("a",{className:D,href:r,children:s})},t)}))})});var K=s(1713),Z=s.n(K),z=s(3805),G=s(468);const B="E6C219dYaExcSOFec2KE",Y="OsurD09yZ4Tt5Uqhmom6",X="ulcaoF3P5qsh5fgZ287T",W="__XghosfcdQ3JVXc4XcB eLMys6WuT5CYHEs4A5ez",V="SyuqBbhzR7Zf9uxZqL8N",q="Le__Qhs2Zz4dZlf0MDoJ",J=(0,i.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),Q=(0,i.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),$=e=>{let{isExpanded:t}=e;return(0,i.jsxs)("svg",{"aria-hidden":"true",className:X,viewBox:"0 0 24 24",width:"100%",height:"100%",children:[(0,i.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),t?J:Q]})},ee=[{url:I.ln.HOME,label:"Reading"},{url:I.ln.NAMING,label:"Naming"}],te=e=>{let{className:t}=e;const[s,n]=r.useState(!1);return r.useEffect((()=>{const e=e=>{e.key===I.Yf.ESCAPE&&n(!1)};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[]),(0,i.jsxs)("nav",{className:(0,M.Z)(B,t,{isCollapsedScreenSm:!s}),children:[(0,i.jsx)("button",{"aria-haspopup":"listbox","aria-expanded":s,"aria-label":"Меню",className:Y,type:"button",onClick:()=>{n((e=>!e))},children:(0,i.jsx)($,{isExpanded:s})}),(0,i.jsx)("ul",{className:W,children:ee.map((e=>{let{url:t,label:s}=e;return(0,i.jsx)("li",{children:(0,i.jsx)(l.OL,{className:e=>{let{isActive:t}=e;return(0,M.Z)(V,{[q]:t})},to:t,end:!0,onClick:()=>{n(!1)},children:s})},s)}))})]})};var se=s(6606);const re="fUcYawYO5edNVSBXa7A5",ne=e=>{let{className:t}=e;const s=x(),n=(()=>{const e=r.useContext(h);if(void 0===e)throw new Error("useThemeToggle must be used within a ThemeProvider");return r.useCallback((()=>{e((e=>"dark"===e?"light":"dark"))}),[e])})();return(0,i.jsx)(se.c,{className:(0,M.Z)(re,t),"aria-label":"Режим тёмной темы","aria-pressed":s,onClick:n,children:"Go ".concat(s?"light":"dark")})},ae="Dt5NLdixBylCzYwXIMLC",le="OEp4xwsW17RDVhdvL2Ls",ce="JJ0mH1lBaUxmcIm1SGdw",oe="HCy0rBmVjhsYPUpMppyU",ie="waiwS3DB4cwSwrHALpcU",de="Kw0gy3X_eQWenwn3XVHR",ue="kompoiI4cpvSOazeP8be",he=40,pe=60,Ee=document.querySelector(".Page-Root"),me=e=>{let{className:t}=e;const[s,n]=r.useState(!1),[a,l]=r.useState(he),c=x(),o=r.useRef(document.createElement("div"));r.useEffect((()=>{const e=o.current;return document.body.appendChild(e),()=>{document.body.removeChild(e)}}),[]),r.useEffect((()=>{if(!(Ee instanceof HTMLDivElement))return;const e=Z()((()=>{const e=Ee.scrollTop>100;n(e);const t=Ee.scrollHeight-(Ee.scrollTop+Ee.offsetHeight)<pe;l(t?pe:he)}),25);return Ee.addEventListener("scroll",e),()=>{e.cancel(),Ee.removeEventListener("scroll",e)}}),[]);return(0,i.jsxs)("header",{className:(0,M.Z)(ae,{[le]:s},t),children:[(0,i.jsx)(te,{}),(0,i.jsx)(ne,{className:ce}),(()=>{const e=(0,i.jsx)("div",{className:oe,style:{paddingBottom:a},children:(0,i.jsx)(G.z,{"aria-label":"Вернуться наверх",className:(0,M.Z)(ie,{[ue]:c,[de]:s}),disabled:!s,onClick:()=>{null==Ee||Ee.scrollTo({top:0})}})});return(0,z.createPortal)(e,o.current)})()]})};var xe=s(6489),Se=s(4438);const ge="xjoBm8ceRfExJvHRV9K3",Ce="L3VHMhVtZGo2eybEEu7g",fe=()=>(0,i.jsxs)(Se.Z,{children:[(0,i.jsx)("h1",{className:ge,children:"Error 404"}),(0,i.jsx)("p",{className:Ce,children:"Page not found"})]}),ye=r.lazy((()=>Promise.all([s.e(216),s.e(639)]).then(s.bind(s,4050)))),Te=r.lazy((()=>Promise.all([s.e(216),s.e(804)]).then(s.bind(s,1879)))),Ne=()=>(0,i.jsx)(r.Suspense,{fallback:(0,i.jsx)(xe.p,{}),children:(0,i.jsxs)(U.Z5,{children:[(0,i.jsx)(U.AW,{path:I.ln.HOME,element:(0,i.jsx)(ye,{})}),(0,i.jsx)(U.AW,{path:I.ln.NAMING,element:(0,i.jsx)(Te,{})}),(0,i.jsx)(U.AW,{path:"*",element:(0,i.jsx)(fe,{})})]})}),je="KVbhB_rS0qK5xgSUgeFA",ve="Nx0DYIgMXOQLl8NDrZ93",Ae=document.querySelector(".Page-Root"),we=()=>{const{pathname:e}=(0,U.TH)(),t=(e=>{const t=r.useRef();return r.useEffect((()=>{t.current=e})),t.current})(e),s=x();return r.useEffect((()=>{(()=>{const e=document.getElementById("overlay");null==e||e.remove()})()}),[]),r.useEffect((()=>{Ae&&e!==t&&Ae.scrollTo({top:0})}),[e,t]),(0,i.jsxs)("div",{className:(0,M.Z)(je,{hasDarkTheme:s}),children:[(0,i.jsx)(me,{className:ve}),(0,i.jsx)(Ne,{}),(0,i.jsx)(P,{})]})},Ie=(()=>{const e=(0,g.ZP)(),t=(0,S.md)(e),s=(0,S.MT)(F,t);return e.run(b),s})(),Le=()=>(0,i.jsx)(d,{children:(0,i.jsx)(a.zt,{store:Ie,children:(0,i.jsx)(l.UT,{children:(0,i.jsx)(m,{children:(0,i.jsx)(we,{})})})})});(()=>{const e=document.getElementById("app-root");if(!e)return;const t=n.createRoot(e),s=(0,i.jsx)(r.StrictMode,{children:(0,i.jsx)(Le,{})});t.render(s)})()},4438:(e,t,s)=>{s.d(t,{Z:()=>a});s(8669);const r="qbmebYa0uI8G2zFDy8y2";var n=s(2880);const a=e=>{let{children:t}=e;return(0,n.jsx)("main",{className:r,children:t})}}},e=>{e.O(0,[143],(()=>{[216,639,804].map(e.E)}),5);e.O(0,[514,216],(()=>{return t=3305,e(e.s=t);var t}));e.O()}]);