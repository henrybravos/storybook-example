var Pt=Object.defineProperty;var Mt=(e,t,r)=>t in e?Pt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var fe=(e,t,r)=>(Mt(e,typeof t!="symbol"?t+"":t,r),r);import{E as N,j as J,a as T,T as Ot,D as L}from"./Task.stories-164d7068.js";import{r as Nt,a as Re,R as At}from"./index-76fb7be0.js";var nt={exports:{}},st={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q=Nt;function Dt(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:Dt,It=Q.useSyncExternalStore,zt=Q.useRef,Ft=Q.useEffect,$t=Q.useMemo,Lt=Q.useDebugValue;st.useSyncExternalStoreWithSelector=function(e,t,r,n,s){var o=zt(null);if(o.current===null){var i={hasValue:!1,value:null};o.current=i}else i=o.current;o=$t(function(){function a(y){if(!f){if(f=!0,u=y,y=n(y),s!==void 0&&i.hasValue){var p=i.value;if(s(p,y))return l=p}return l=y}if(p=l,jt(u,y))return p;var S=n(y);return s!==void 0&&s(p,S)?p:(u=y,l=S)}var f=!1,u,l,d=r===void 0?null:r;return[function(){return a(t())},d===null?void 0:function(){return a(d())}]},[t,r,n,s]);var c=It(e,o[0],o[1]);return Ft(function(){i.hasValue=!0,i.value=c},[c]),Lt(c),c};nt.exports=st;var Wt=nt.exports,x="default"in Re?At:Re,Pe=Symbol.for("react-redux-context"),Me=typeof globalThis<"u"?globalThis:{};function Kt(){if(!x.createContext)return{};const e=Me[Pe]??(Me[Pe]=new Map);let t=e.get(x.createContext);return t||(t=x.createContext(null),e.set(x.createContext,t)),t}var I=Kt(),Bt=()=>{throw new Error("uSES not initialized!")};function ke(e=I){return function(){return x.useContext(e)}}var ot=ke(),it=Bt,Ut=e=>{it=e},qt=(e,t)=>e===t;function Vt(e=I){const t=e===I?ot:ke(e),r=(n,s={})=>{const{equalityFn:o=qt,devModeChecks:i={}}=typeof s=="function"?{equalityFn:s}:s,{store:c,subscription:a,getServerState:f,stabilityCheck:u,identityFunctionCheck:l}=t();x.useRef(!0);const d=x.useCallback({[n.name](p){return n(p)}}[n.name],[n,u,i.stabilityCheck]),y=it(a.addNestedSub,c.getState,f||c.getState,d,o);return x.useDebugValue(y),y};return Object.assign(r,{withTypes:()=>r}),r}var Oe=Vt();function Ht(e){e()}function Xt(){let e=null,t=null;return{clear(){e=null,t=null},notify(){Ht(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){const r=[];let n=e;for(;n;)r.push(n),n=n.next;return r},subscribe(r){let n=!0;const s=t={callback:r,next:null,prev:t};return s.prev?s.prev.next=s:e=s,function(){!n||e===null||(n=!1,s.next?s.next.prev=s.prev:t=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}var Ne={notify(){},get:()=>[]};function Gt(e,t){let r,n=Ne,s=0,o=!1;function i(S){u();const h=n.subscribe(S);let g=!1;return()=>{g||(g=!0,h(),l())}}function c(){n.notify()}function a(){p.onStateChange&&p.onStateChange()}function f(){return o}function u(){s++,r||(r=t?t.addNestedSub(a):e.subscribe(a),n=Xt())}function l(){s--,r&&s===0&&(r(),r=void 0,n.clear(),n=Ne)}function d(){o||(o=!0,u())}function y(){o&&(o=!1,l())}const p={addNestedSub:i,notifyNestedSubs:c,handleChangeWrapper:a,isSubscribed:f,trySubscribe:d,tryUnsubscribe:y,getListeners:()=>n};return p}var Yt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Qt=Yt?x.useLayoutEffect:x.useEffect;function Jt({store:e,context:t,children:r,serverState:n,stabilityCheck:s="once",identityFunctionCheck:o="once"}){const i=x.useMemo(()=>{const f=Gt(e);return{store:e,subscription:f,getServerState:n?()=>n:void 0,stabilityCheck:s,identityFunctionCheck:o}},[e,n,s,o]),c=x.useMemo(()=>e.getState(),[e]);Qt(()=>{const{subscription:f}=i;return f.onStateChange=f.notifyNestedSubs,f.trySubscribe(),c!==e.getState()&&f.notifyNestedSubs(),()=>{f.tryUnsubscribe(),f.onStateChange=void 0}},[i,c]);const a=t||I;return x.createElement(a.Provider,{value:i},r)}var Zt=Jt;function ct(e=I){const t=e===I?ot:ke(e),r=()=>{const{store:n}=t();return n};return Object.assign(r,{withTypes:()=>r}),r}var er=ct();function tr(e=I){const t=e===I?er:ct(e),r=()=>t().dispatch;return Object.assign(r,{withTypes:()=>r}),r}var rr=tr();Ut(Wt.useSyncExternalStoreWithSelector);function E(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var nr=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),Ae=nr,le=()=>Math.random().toString(36).substring(7).split("").join("."),sr={INIT:`@@redux/INIT${le()}`,REPLACE:`@@redux/REPLACE${le()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${le()}`},te=sr;function ve(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function at(e,t,r){if(typeof e!="function")throw new Error(E(2));if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(E(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(E(1));return r(at)(e,t)}let n=e,s=t,o=new Map,i=o,c=0,a=!1;function f(){i===o&&(i=new Map,o.forEach((h,g)=>{i.set(g,h)}))}function u(){if(a)throw new Error(E(3));return s}function l(h){if(typeof h!="function")throw new Error(E(4));if(a)throw new Error(E(5));let g=!0;f();const _=c++;return i.set(_,h),function(){if(g){if(a)throw new Error(E(6));g=!1,f(),i.delete(_),o=null}}}function d(h){if(!ve(h))throw new Error(E(7));if(typeof h.type>"u")throw new Error(E(8));if(typeof h.type!="string")throw new Error(E(17));if(a)throw new Error(E(9));try{a=!0,s=n(s,h)}finally{a=!1}return(o=i).forEach(_=>{_()}),h}function y(h){if(typeof h!="function")throw new Error(E(10));n=h,d({type:te.REPLACE})}function p(){const h=l;return{subscribe(g){if(typeof g!="object"||g===null)throw new Error(E(11));function _(){const w=g;w.next&&w.next(u())}return _(),{unsubscribe:h(_)}},[Ae](){return this}}}return d({type:te.INIT}),{dispatch:d,subscribe:l,getState:u,replaceReducer:y,[Ae]:p}}function or(e){Object.keys(e).forEach(t=>{const r=e[t];if(typeof r(void 0,{type:te.INIT})>"u")throw new Error(E(12));if(typeof r(void 0,{type:te.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(E(13))})}function ir(e){const t=Object.keys(e),r={};for(let o=0;o<t.length;o++){const i=t[o];typeof e[i]=="function"&&(r[i]=e[i])}const n=Object.keys(r);let s;try{or(r)}catch(o){s=o}return function(i={},c){if(s)throw s;let a=!1;const f={};for(let u=0;u<n.length;u++){const l=n[u],d=r[l],y=i[l],p=d(y,c);if(typeof p>"u")throw c&&c.type,new Error(E(14));f[l]=p,a=a||p!==y}return a=a||n.length!==Object.keys(i).length,a?f:i}}function re(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,r)=>(...n)=>t(r(...n)))}function cr(...e){return t=>(r,n)=>{const s=t(r,n);let o=()=>{throw new Error(E(15))};const i={getState:s.getState,dispatch:(a,...f)=>o(a,...f)},c=e.map(a=>a(i));return o=re(...c)(s.dispatch),{...s,dispatch:o}}}function ar(e){return ve(e)&&"type"in e&&typeof e.type=="string"}var ut=Symbol.for("immer-nothing"),De=Symbol.for("immer-draftable"),R=Symbol.for("immer-state");function O(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var W=Object.getPrototypeOf;function z(e){return!!e&&!!e[R]}function D(e){var t;return e?ft(e)||Array.isArray(e)||!!e[De]||!!((t=e.constructor)!=null&&t[De])||ie(e)||ce(e):!1}var ur=Object.prototype.constructor.toString();function ft(e){if(!e||typeof e!="object")return!1;const t=W(e);if(t===null)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===ur}function X(e,t){oe(e)===0?Object.entries(e).forEach(([r,n])=>{t(r,n,e)}):e.forEach((r,n)=>t(n,r,e))}function oe(e){const t=e[R];return t?t.type_:Array.isArray(e)?1:ie(e)?2:ce(e)?3:0}function me(e,t){return oe(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function lt(e,t,r){const n=oe(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function fr(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function ie(e){return e instanceof Map}function ce(e){return e instanceof Set}function F(e){return e.copy_||e.base_}function we(e,t){if(ie(e))return new Map(e);if(ce(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&ft(e))return W(e)?{...e}:Object.assign(Object.create(null),e);const r=Object.getOwnPropertyDescriptors(e);delete r[R];let n=Reflect.ownKeys(r);for(let s=0;s<n.length;s++){const o=n[s],i=r[o];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(r[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(W(e),r)}function Ee(e,t=!1){return ae(e)||z(e)||!D(e)||(oe(e)>1&&(e.set=e.add=e.clear=e.delete=lr),Object.freeze(e),t&&X(e,(r,n)=>Ee(n,!0))),e}function lr(){O(2)}function ae(e){return Object.isFrozen(e)}var dr={};function $(e){const t=dr[e];return t||O(0,e),t}var G;function dt(){return G}function pr(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function je(e,t){t&&($("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function be(e){Se(e),e.drafts_.forEach(yr),e.drafts_=null}function Se(e){e===G&&(G=e.parent_)}function Ie(e){return G=pr(G,e)}function yr(e){const t=e[R];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function ze(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return e!==void 0&&e!==r?(r[R].modified_&&(be(t),O(4)),D(e)&&(e=ne(t,e),t.parent_||se(t,e)),t.patches_&&$("Patches").generateReplacementPatches_(r[R].base_,e,t.patches_,t.inversePatches_)):e=ne(t,r,[]),be(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==ut?e:void 0}function ne(e,t,r){if(ae(t))return t;const n=t[R];if(!n)return X(t,(s,o)=>Fe(e,n,t,s,o,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return se(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const s=n.copy_;let o=s,i=!1;n.type_===3&&(o=new Set(s),s.clear(),i=!0),X(o,(c,a)=>Fe(e,n,s,c,a,r,i)),se(e,s,!1),r&&e.patches_&&$("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function Fe(e,t,r,n,s,o,i){if(z(s)){const c=o&&t&&t.type_!==3&&!me(t.assigned_,n)?o.concat(n):void 0,a=ne(e,s,c);if(lt(r,n,a),z(a))e.canAutoFreeze_=!1;else return}else i&&r.add(s);if(D(s)&&!ae(s)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;ne(e,s),(!t||!t.scope_.parent_)&&se(e,s)}}function se(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Ee(t,r)}function hr(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:dt(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let s=n,o=Te;r&&(s=[n],o=Y);const{revoke:i,proxy:c}=Proxy.revocable(s,o);return n.draft_=c,n.revoke_=i,c}var Te={get(e,t){if(t===R)return e;const r=F(e);if(!me(r,t))return mr(e,r,t);const n=r[t];return e.finalized_||!D(n)?n:n===de(e.base_,t)?(pe(e),e.copy_[t]=ge(n,e)):n},has(e,t){return t in F(e)},ownKeys(e){return Reflect.ownKeys(F(e))},set(e,t,r){const n=pt(F(e),t);if(n!=null&&n.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const s=de(F(e),t),o=s==null?void 0:s[R];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(fr(r,s)&&(r!==void 0||me(e.base_,t)))return!0;pe(e),_e(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return de(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,pe(e),_e(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=F(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){O(11)},getPrototypeOf(e){return W(e.base_)},setPrototypeOf(){O(12)}},Y={};X(Te,(e,t)=>{Y[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});Y.deleteProperty=function(e,t){return Y.set.call(this,e,t,void 0)};Y.set=function(e,t,r){return Te.set.call(this,e[0],t,r,e[0])};function de(e,t){const r=e[R];return(r?F(r):e)[t]}function mr(e,t,r){var s;const n=pt(t,r);return n?"value"in n?n.value:(s=n.get)==null?void 0:s.call(e.draft_):void 0}function pt(e,t){if(!(t in e))return;let r=W(e);for(;r;){const n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=W(r)}}function _e(e){e.modified_||(e.modified_=!0,e.parent_&&_e(e.parent_))}function pe(e){e.copy_||(e.copy_=we(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var wr=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){const o=r;r=t;const i=this;return function(a=o,...f){return i.produce(a,u=>r.call(this,u,...f))}}typeof r!="function"&&O(6),n!==void 0&&typeof n!="function"&&O(7);let s;if(D(t)){const o=Ie(this),i=ge(t,void 0);let c=!0;try{s=r(i),c=!1}finally{c?be(o):Se(o)}return je(o,n),ze(s,o)}else if(!t||typeof t!="object"){if(s=r(t),s===void 0&&(s=t),s===ut&&(s=void 0),this.autoFreeze_&&Ee(s,!0),n){const o=[],i=[];$("Patches").generateReplacementPatches_(t,s,o,i),n(o,i)}return s}else O(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(i,...c)=>this.produceWithPatches(i,a=>t(a,...c));let n,s;return[this.produce(t,r,(i,c)=>{n=i,s=c}),n,s]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){D(e)||O(8),z(e)&&(e=yt(e));const t=Ie(this),r=ge(e,void 0);return r[R].isManual_=!0,Se(t),r}finishDraft(e,t){const r=e&&e[R];(!r||!r.isManual_)&&O(9);const{scope_:n}=r;return je(n,t),ze(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const s=t[r];if(s.path.length===0&&s.op==="replace"){e=s.value;break}}r>-1&&(t=t.slice(r+1));const n=$("Patches").applyPatches_;return z(e)?n(e,t):this.produce(e,s=>n(s,t))}};function ge(e,t){const r=ie(e)?$("MapSet").proxyMap_(e,t):ce(e)?$("MapSet").proxySet_(e,t):hr(e,t);return(t?t.scope_:dt()).drafts_.push(r),r}function yt(e){return z(e)||O(10,e),ht(e)}function ht(e){if(!D(e)||ae(e))return e;const t=e[R];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=we(e,t.scope_.immer_.useStrictShallowCopy_)}else r=we(e,!0);return X(r,(n,s)=>{lt(r,n,ht(s))}),t&&(t.finalized_=!1),r}var P=new wr,mt=P.produce;P.produceWithPatches.bind(P);P.setAutoFreeze.bind(P);P.setUseStrictShallowCopy.bind(P);P.applyPatches.bind(P);P.createDraft.bind(P);P.finishDraft.bind(P);function br(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function Sr(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function _r(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(r=>typeof r=="function")){const r=e.map(n=>typeof n=="function"?`function ${n.name||"unnamed"}()`:typeof n).join(", ");throw new TypeError(`${t}[${r}]`)}}var $e=e=>Array.isArray(e)?e:[e];function gr(e){const t=Array.isArray(e[0])?e[0]:e;return _r(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function kr(e,t){const r=[],{length:n}=e;for(let s=0;s<n;s++)r.push(e[s].apply(null,t));return r}var vr=class{constructor(e){this.value=e}deref(){return this.value}},Er=typeof WeakRef<"u"?WeakRef:vr,Tr=0,Le=1;function Z(){return{s:Tr,v:void 0,o:null,p:null}}function Ce(e,t={}){let r=Z();const{resultEqualityCheck:n}=t;let s,o=0;function i(){var l;let c=r;const{length:a}=arguments;for(let d=0,y=a;d<y;d++){const p=arguments[d];if(typeof p=="function"||typeof p=="object"&&p!==null){let S=c.o;S===null&&(c.o=S=new WeakMap);const h=S.get(p);h===void 0?(c=Z(),S.set(p,c)):c=h}else{let S=c.p;S===null&&(c.p=S=new Map);const h=S.get(p);h===void 0?(c=Z(),S.set(p,c)):c=h}}const f=c;let u;if(c.s===Le?u=c.v:(u=e.apply(null,arguments),o++),f.s=Le,n){const d=((l=s==null?void 0:s.deref)==null?void 0:l.call(s))??s;d!=null&&n(d,u)&&(u=d,o!==0&&o--),s=typeof u=="object"&&u!==null||typeof u=="function"?new Er(u):u}return f.v=u,u}return i.clearCache=()=>{r=Z(),i.resetResultsCount()},i.resultsCount=()=>o,i.resetResultsCount=()=>{o=0},i}function wt(e,...t){const r=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,n=(...s)=>{let o=0,i=0,c,a={},f=s.pop();typeof f=="object"&&(a=f,f=s.pop()),br(f,`createSelector expects an output function after the inputs, but received: [${typeof f}]`);const u={...r,...a},{memoize:l,memoizeOptions:d=[],argsMemoize:y=Ce,argsMemoizeOptions:p=[],devModeChecks:S={}}=u,h=$e(d),g=$e(p),_=gr(s),m=l(function(){return o++,f.apply(null,arguments)},...h),w=y(function(){i++;const k=kr(_,arguments);return c=m.apply(null,k),c},...g);return Object.assign(w,{resultFunc:f,memoizedResultFunc:m,dependencies:_,dependencyRecomputations:()=>i,resetDependencyRecomputations:()=>{i=0},lastResult:()=>c,recomputations:()=>o,resetRecomputations:()=>{o=0},memoize:l,argsMemoize:y})};return Object.assign(n,{withTypes:()=>n}),n}var bt=wt(Ce),Cr=Object.assign((e,t=bt)=>{Sr(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const r=Object.keys(e),n=r.map(o=>e[o]);return t(n,(...o)=>o.reduce((i,c,a)=>(i[r[a]]=c,i),{}))},{withTypes:()=>Cr});function St(e){return({dispatch:r,getState:n})=>s=>o=>typeof o=="function"?o(r,n,e):s(o)}var xr=St(),Rr=St,Pr=(...e)=>{const t=wt(...e),r=Object.assign((...n)=>{const s=t(...n),o=(i,...c)=>s(z(i)?yt(i):i,...c);return Object.assign(o,s),o},{withTypes:()=>r});return r};Pr(Ce);var Mr=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?re:re.apply(null,arguments)},Or=e=>e&&typeof e.match=="function";function A(e,t){function r(...n){if(t){let s=t(...n);if(!s)throw new Error(C(0));return{type:e,payload:s.payload,..."meta"in s&&{meta:s.meta},..."error"in s&&{error:s.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=n=>ar(n)&&n.type===e,r}var _t=class B extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,B.prototype)}static get[Symbol.species](){return B}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new B(...t[0].concat(this)):new B(...t.concat(this))}};function We(e){return D(e)?mt(e,()=>{}):e}function Ke(e,t,r){if(e.has(t)){let s=e.get(t);return r.update&&(s=r.update(s,t,e),e.set(t,s)),s}if(!r.insert)throw new Error(C(10));const n=r.insert(t,e);return e.set(t,n),n}function Nr(e){return typeof e=="boolean"}var Ar=()=>function(t){const{thunk:r=!0,immutableCheck:n=!0,serializableCheck:s=!0,actionCreatorCheck:o=!0}=t??{};let i=new _t;return r&&(Nr(r)?i.push(xr):i.push(Rr(r.extraArgument))),i},Dr="RTK_autoBatch",gt=e=>t=>{setTimeout(t,e)},jr=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:gt(10),Ir=(e={type:"raf"})=>t=>(...r)=>{const n=t(...r);let s=!0,o=!1,i=!1;const c=new Set,a=e.type==="tick"?queueMicrotask:e.type==="raf"?jr:e.type==="callback"?e.queueNotification:gt(e.timeout),f=()=>{i=!1,o&&(o=!1,c.forEach(u=>u()))};return Object.assign({},n,{subscribe(u){const l=()=>s&&u(),d=n.subscribe(l);return c.add(u),()=>{d(),c.delete(u)}},dispatch(u){var l;try{return s=!((l=u==null?void 0:u.meta)!=null&&l[Dr]),o=!s,o&&(i||(i=!0,a(f))),n.dispatch(u)}finally{s=!0}}})},zr=e=>function(r){const{autoBatch:n=!0}=r??{};let s=new _t(e);return n&&s.push(Ir(typeof n=="object"?n:void 0)),s},Fr=!0;function kt(e){const t=Ar(),{reducer:r=void 0,middleware:n,devTools:s=!0,preloadedState:o=void 0,enhancers:i=void 0}=e||{};let c;if(typeof r=="function")c=r;else if(ve(r))c=ir(r);else throw new Error(C(1));let a;typeof n=="function"?a=n(t):a=t();let f=re;s&&(f=Mr({trace:!Fr,...typeof s=="object"&&s}));const u=cr(...a),l=zr(u);let d=typeof i=="function"?i(l):l();const y=f(...d);return at(c,o,y)}function vt(e){const t={},r=[];let n;const s={addCase(o,i){const c=typeof o=="string"?o:o.type;if(!c)throw new Error(C(28));if(c in t)throw new Error(C(29));return t[c]=i,s},addMatcher(o,i){return r.push({matcher:o,reducer:i}),s},addDefaultCase(o){return n=o,s}};return e(s),[t,r,n]}function $r(e){return typeof e=="function"}function Lr(e,t){let[r,n,s]=vt(t),o;if($r(e))o=()=>We(e());else{const c=We(e);o=()=>c}function i(c=o(),a){let f=[r[a.type],...n.filter(({matcher:u})=>u(a)).map(({reducer:u})=>u)];return f.filter(u=>!!u).length===0&&(f=[s]),f.reduce((u,l)=>{if(l)if(z(u)){const y=l(u,a);return y===void 0?u:y}else{if(D(u))return mt(u,d=>l(d,a));{const d=l(u,a);if(d===void 0){if(u===null)return u;throw new Error(C(9))}return d}}return u},c)}return i.getInitialState=o,i}var Wr="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Et=(e=21)=>{let t="",r=e;for(;r--;)t+=Wr[Math.random()*64|0];return t},Kr=(e,t)=>Or(e)?e.match(t):e(t);function Br(...e){return t=>e.some(r=>Kr(r,t))}var Ur=["name","message","stack","code"],ye=class{constructor(e,t){fe(this,"_type");this.payload=e,this.meta=t}},Be=class{constructor(e,t){fe(this,"_type");this.payload=e,this.meta=t}},qr=e=>{if(typeof e=="object"&&e!==null){const t={};for(const r of Ur)typeof e[r]=="string"&&(t[r]=e[r]);return t}return{message:String(e)}},Vr=(()=>{function e(t,r,n){const s=A(t+"/fulfilled",(a,f,u,l)=>({payload:a,meta:{...l||{},arg:u,requestId:f,requestStatus:"fulfilled"}})),o=A(t+"/pending",(a,f,u)=>({payload:void 0,meta:{...u||{},arg:f,requestId:a,requestStatus:"pending"}})),i=A(t+"/rejected",(a,f,u,l,d)=>({payload:l,error:(n&&n.serializeError||qr)(a||"Rejected"),meta:{...d||{},arg:u,requestId:f,rejectedWithValue:!!l,requestStatus:"rejected",aborted:(a==null?void 0:a.name)==="AbortError",condition:(a==null?void 0:a.name)==="ConditionError"}}));function c(a){return(f,u,l)=>{const d=n!=null&&n.idGenerator?n.idGenerator(a):Et(),y=new AbortController;let p,S;function h(_){S=_,y.abort()}const g=async function(){var w,v;let _;try{let k=(w=n==null?void 0:n.condition)==null?void 0:w.call(n,a,{getState:u,extra:l});if(Xr(k)&&(k=await k),k===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const M=new Promise((b,j)=>{p=()=>{j({name:"AbortError",message:S||"Aborted"})},y.signal.addEventListener("abort",p)});f(o(d,a,(v=n==null?void 0:n.getPendingMeta)==null?void 0:v.call(n,{requestId:d,arg:a},{getState:u,extra:l}))),_=await Promise.race([M,Promise.resolve(r(a,{dispatch:f,getState:u,extra:l,requestId:d,signal:y.signal,abort:h,rejectWithValue:(b,j)=>new ye(b,j),fulfillWithValue:(b,j)=>new Be(b,j)})).then(b=>{if(b instanceof ye)throw b;return b instanceof Be?s(b.payload,d,a,b.meta):s(b,d,a)})])}catch(k){_=k instanceof ye?i(null,d,a,k.payload,k.meta):i(k,d,a)}finally{p&&y.signal.removeEventListener("abort",p)}return n&&!n.dispatchConditionRejection&&i.match(_)&&_.meta.condition||f(_),_}();return Object.assign(g,{abort:h,requestId:d,arg:a,unwrap(){return g.then(Hr)}})}}return Object.assign(c,{pending:o,rejected:i,fulfilled:s,settled:Br(i,s),typePrefix:t})}return e.withTypes=()=>e,e})();function Hr(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Xr(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Gr=Symbol.for("rtk-slice-createasyncthunk");function Yr(e,t){return`${e}/${t}`}function Qr({creators:e}={}){var r;const t=(r=e==null?void 0:e.asyncThunk)==null?void 0:r[Gr];return function(s){const{name:o,reducerPath:i=o}=s;if(!o)throw new Error(C(11));typeof process<"u";const c=(typeof s.reducers=="function"?s.reducers(Zr()):s.reducers)||{},a=Object.keys(c),f={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},u={addCase(m,w){const v=typeof m=="string"?m:m.type;if(!v)throw new Error(C(12));if(v in f.sliceCaseReducersByType)throw new Error(C(13));return f.sliceCaseReducersByType[v]=w,u},addMatcher(m,w){return f.sliceMatchers.push({matcher:m,reducer:w}),u},exposeAction(m,w){return f.actionCreators[m]=w,u},exposeCaseReducer(m,w){return f.sliceCaseReducersByName[m]=w,u}};a.forEach(m=>{const w=c[m],v={reducerName:m,type:Yr(o,m),createNotation:typeof s.reducers=="function"};tn(w)?nn(v,w,u,t):en(v,w,u)});function l(){const[m={},w=[],v=void 0]=typeof s.extraReducers=="function"?vt(s.extraReducers):[s.extraReducers],k={...m,...f.sliceCaseReducersByType};return Lr(s.initialState,M=>{for(let b in k)M.addCase(b,k[b]);for(let b of f.sliceMatchers)M.addMatcher(b.matcher,b.reducer);for(let b of w)M.addMatcher(b.matcher,b.reducer);v&&M.addDefaultCase(v)})}const d=m=>m,y=new Map;let p;function S(m,w){return p||(p=l()),p(m,w)}function h(){return p||(p=l()),p.getInitialState()}function g(m,w=!1){function v(M){let b=M[m];return typeof b>"u"&&w&&(b=h()),b}function k(M=d){const b=Ke(y,w,{insert:()=>new WeakMap});return Ke(b,M,{insert:()=>{const j={};for(const[xt,Rt]of Object.entries(s.selectors??{}))j[xt]=Jr(Rt,M,h,w);return j}})}return{reducerPath:m,getSelectors:k,get selectors(){return k(v)},selectSlice:v}}const _={name:o,reducer:S,actions:f.actionCreators,caseReducers:f.sliceCaseReducersByName,getInitialState:h,...g(i),injectInto(m,{reducerPath:w,...v}={}){const k=w??i;return m.inject({reducerPath:k,reducer:S},v),{..._,...g(k,!0)}}};return _}}function Jr(e,t,r,n){function s(o,...i){let c=t(o);return typeof c>"u"&&n&&(c=r()),e(c,...i)}return s.unwrapped=e,s}var Tt=Qr();function Zr(){function e(t,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...r}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...r){return t(...r)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:r}},asyncThunk:e}}function en({type:e,reducerName:t,createNotation:r},n,s){let o,i;if("reducer"in n){if(r&&!rn(n))throw new Error(C(17));o=n.reducer,i=n.prepare}else o=n;s.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,i?A(e,i):A(e))}function tn(e){return e._reducerDefinitionType==="asyncThunk"}function rn(e){return e._reducerDefinitionType==="reducerWithPrepare"}function nn({type:e,reducerName:t},r,n,s){if(!s)throw new Error(C(18));const{payloadCreator:o,fulfilled:i,pending:c,rejected:a,settled:f,options:u}=r,l=s(e,o,u);n.exposeAction(t,l),i&&n.addCase(l.fulfilled,i),c&&n.addCase(l.pending,c),a&&n.addCase(l.rejected,a),f&&n.addMatcher(l.settled,f),n.exposeCaseReducer(t,{fulfilled:i||ee,pending:c||ee,rejected:a||ee,settled:f||ee})}function ee(){}var sn=(e,t)=>{if(typeof e!="function")throw new Error(C(32))},xe="listenerMiddleware",on=e=>{let{type:t,actionCreator:r,matcher:n,predicate:s,effect:o}=e;if(t)s=A(t).match;else if(r)t=r.type,s=r.match;else if(n)s=n;else if(!s)throw new Error(C(21));return sn(o),{predicate:s,type:t,effect:o}},cn=Object.assign(e=>{const{type:t,predicate:r,effect:n}=on(e);return{id:Et(),effect:n,type:t,predicate:r,pending:new Set,unsubscribe:()=>{throw new Error(C(22))}}},{withTypes:()=>cn}),an=Object.assign(A(`${xe}/add`),{withTypes:()=>an});A(`${xe}/removeAll`);var un=Object.assign(A(`${xe}/remove`),{withTypes:()=>un});function C(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const fn=[],ln={tasks:fn,status:"idle",error:null},he=Vr("todos/fetchTodos",async()=>(await(await fetch("https://jsonplaceholder.typicode.com/todos?userId=1")).json()).map(n=>({id:`${n.id}`,title:n.title,state:n.completed?"TASK_ARCHIVED":"TASK_INBOX"}))),Ct=Tt({name:"taskbox",initialState:ln,reducers:{updateTaskState:(e,t)=>{const{id:r,newTaskState:n}=t.payload,s=e.tasks.findIndex(o=>Number(o.id)===Number(r));s>=0&&(e.tasks[s].state=n)}},extraReducers(e){e.addCase(he.pending,t=>{t.status="loading",t.error=null,t.tasks=[]}).addCase(he.fulfilled,(t,r)=>{t.status="succeeded",t.error=null,t.tasks=r.payload}).addCase(he.rejected,t=>{t.status="failed",t.error="Something went wrong",t.tasks=[]})}}),{updateTaskState:Ue}=Ct.actions,dn={taskbox:Ct.reducer},gn=kt({reducer:dn}),pn=e=>e.taskbox,yn=bt(pn,e=>[...e.tasks.filter(n=>n.state===N.TASK_PINNED),...e.tasks.filter(n=>n.state!==N.TASK_PINNED)].filter(n=>n.state===N.TASK_INBOX||n.state===N.TASK_PINNED));function hn(){const e=Oe(yn),{status:t}=Oe(i=>i.taskbox),r=rr(),n=i=>{r(Ue({id:i.id,newTaskState:N.TASK_PINNED}))},s=i=>{r(Ue({id:i.id,newTaskState:N.TASK_ARCHIVED}))},o=J("div",{className:"loading-item",children:[T("span",{className:"glow-checkbox"}),J("span",{className:"glow-text",children:[T("span",{children:"Loading"})," ",T("span",{children:"cool"})," ",T("span",{children:"state"})]})]});return t==="loading"?J("div",{className:"list-items","data-testid":"loading",children:[o,o,o,o,o,o]},"loading"):e.length===0?T("div",{className:"list-items","data-testid":"empty",children:J("div",{className:"wrapper-message",children:[T("span",{className:"icon-check"}),T("p",{className:"title-message",children:"You have no tasks"}),T("p",{className:"subtitle-message",children:"Sit back and relax"})]})},"empty"):T("div",{className:"list-items","data-testid":"success",children:e.map(i=>T(Ot,{task:i,onPinTask:c=>n(c),onArchiveTask:c=>s(c)},i.id))},"success")}const K={tasks:[{...L.args.task,id:1,title:"Task 1",state:N.TASK_PINNED},{...L.args.task,id:2,title:"Task 2"},{...L.args.task,id:3,title:"Task 3",state:N.TASK_PINNED},{...L.args.task,id:4,title:"Task 4"},{...L.args.task,id:5,title:"Task 5"},{...L.args.task,id:6,title:"Task 6"}],status:"idle",error:null},ue=({taskboxState:e,children:t})=>T(Zt,{store:kt({reducer:{taskbox:Tt({name:"taskbox",initialState:e,reducers:{updateTaskState:(r,n)=>{const{id:s,newTaskState:o}=n.payload,i=r.tasks.findIndex(c=>c.id===s);i>=0&&(r.tasks[i].state=o)}}}).reducer}}),children:t}),mn={component:hn,title:"TaskList",decorators:[e=>T("div",{style:{padding:"3rem"},children:e()})],tags:["autodocs"],excludeStories:/.*MockedState$/},U={decorators:[e=>T(ue,{taskboxState:K,children:e()})]},q={decorators:[e=>{const t=[...K.tasks.slice(0,5),{id:6,title:"Task 6 (pinned)",state:N.TASK_PINNED}];return T(ue,{taskboxState:{...K,tasks:t},children:e()})}]},V={decorators:[e=>T(ue,{taskboxState:{...K,status:"loading"},children:e()})]},H={decorators:[e=>T(ue,{taskboxState:{...K,tasks:[]},children:e()})]};var qe,Ve,He;U.parameters={...U.parameters,docs:{...(qe=U.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  decorators: [story => <Mockstore taskboxState={MockedState}>{story()}</Mockstore>]
}`,...(He=(Ve=U.parameters)==null?void 0:Ve.docs)==null?void 0:He.source}}};var Xe,Ge,Ye;q.parameters={...q.parameters,docs:{...(Xe=q.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  decorators: [story => {
    const pinnedtasks = [...MockedState.tasks.slice(0, 5), {
      id: 6,
      title: "Task 6 (pinned)",
      state: EnumTaskState.TASK_PINNED
    }];
    return <Mockstore taskboxState={{
      ...MockedState,
      tasks: pinnedtasks
    }}>
          {story()}
        </Mockstore>;
  }]
}`,...(Ye=(Ge=q.parameters)==null?void 0:Ge.docs)==null?void 0:Ye.source}}};var Qe,Je,Ze;V.parameters={...V.parameters,docs:{...(Qe=V.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  decorators: [story => <Mockstore taskboxState={{
    ...MockedState,
    status: "loading"
  }}>
        {story()}
      </Mockstore>]
}`,...(Ze=(Je=V.parameters)==null?void 0:Je.docs)==null?void 0:Ze.source}}};var et,tt,rt;H.parameters={...H.parameters,docs:{...(et=H.parameters)==null?void 0:et.docs,source:{originalSource:`{
  decorators: [story => <Mockstore taskboxState={{
    ...MockedState,
    tasks: []
  }}>
        {story()}
      </Mockstore>]
}`,...(rt=(tt=H.parameters)==null?void 0:tt.docs)==null?void 0:rt.source}}};const wn=["MockedState","Default","WithPinnedTasks","Loading","Empty"],kn=Object.freeze(Object.defineProperty({__proto__:null,Default:U,Empty:H,Loading:V,MockedState:K,WithPinnedTasks:q,__namedExportsOrder:wn,default:mn},Symbol.toStringTag,{value:"Module"}));export{K as M,Zt as P,hn as T,Oe as a,kn as b,he as f,gn as s,rr as u};
