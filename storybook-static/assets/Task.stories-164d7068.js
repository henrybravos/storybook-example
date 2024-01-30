import{r as b}from"./index-76fb7be0.js";var v={exports:{}},d={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O=b,D=Symbol.for("react.element"),g=Symbol.for("react.fragment"),K=Object.prototype.hasOwnProperty,P=O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R={key:!0,ref:!0,__self:!0,__source:!0};function E(e,a,l){var t,s={},r=null,m=null;l!==void 0&&(r=""+l),a.key!==void 0&&(r=""+a.key),a.ref!==void 0&&(m=a.ref);for(t in a)K.call(a,t)&&!R.hasOwnProperty(t)&&(s[t]=a[t]);if(e&&e.defaultProps)for(t in a=e.defaultProps,a)s[t]===void 0&&(s[t]=a[t]);return{$$typeof:D,type:e,key:r,ref:m,props:s,_owner:P.current}}d.Fragment=g;d.jsx=E;d.jsxs=E;v.exports=d;var x=v.exports;const n=x.jsx,T=x.jsxs;var p=(e=>(e.TASK_INBOX="TASK_INBOX",e.TASK_PINNED="TASK_PINNED",e.TASK_ARCHIVED="TASK_ARCHIVED",e))(p||{});const u=({task:e,onArchiveTask:a,onPinTask:l})=>{const{state:t,id:s,title:r}=e;return T("div",{className:`list-item ${t}`,children:[T("label",{htmlFor:"checked","aria-label":`archiveTask-${s}`,className:"checkbox",children:[n("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${s}`,checked:t==="TASK_PINNED"}),n("span",{className:"checkbox-custom",onClick:()=>a(e)})]}),n("label",{htmlFor:"title","aria-label":r,className:"title",children:n("input",{type:"text",value:r,readOnly:!0,name:"title",placeholder:"Input title"})}),t!=="TASK_ARCHIVED"&&n("button",{className:"pin-button",onClick:()=>l(e),id:`pinTask-${s}`,"aria-label":`pinTask-${s}`,children:n("span",{className:"icon-star"})},`pinTask-${s}`)]})};try{u.displayName="Task",u.__docgenInfo={description:"",displayName:"Task",props:{task:{defaultValue:null,description:"",name:"task",required:!0,type:{name:"ITask"}},onArchiveTask:{defaultValue:null,description:"",name:"onArchiveTask",required:!0,type:{name:"(id: ITask) => void"}},onPinTask:{defaultValue:null,description:"",name:"onPinTask",required:!0,type:{name:"(id: ITask) => void"}}}}}catch{}const j={component:u,title:"Task"},o={args:{task:{id:1,title:"Test Task",state:p.TASK_INBOX}}},i={args:{task:{id:1,title:"Test Task",state:p.TASK_PINNED}}},c={args:{task:{id:1,title:"Test Task",state:p.TASK_ARCHIVED}}};var _,k,f;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    task: {
      id: 1,
      title: "Test Task",
      state: EnumTaskState.TASK_INBOX
    }
  }
}`,...(f=(k=o.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var N,S,A;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    task: {
      id: 1,
      title: "Test Task",
      state: EnumTaskState.TASK_PINNED
    }
  }
}`,...(A=(S=i.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var h,y,I;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    task: {
      id: 1,
      title: "Test Task",
      state: EnumTaskState.TASK_ARCHIVED
    }
  }
}`,...(I=(y=c.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};const C=["Default","Pinned","Archived"],$=Object.freeze(Object.defineProperty({__proto__:null,Archived:c,Default:o,Pinned:i,__namedExportsOrder:C,default:j},Symbol.toStringTag,{value:"Module"}));export{o as D,p as E,u as T,n as a,$ as b,T as j};
