var v=Object.defineProperty;var r=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var y=(o,s,_)=>s in o?v(o,s,{enumerable:!0,configurable:!0,writable:!0,value:_}):o[s]=_,f=(o,s)=>{for(var _ in s||(s={}))K.call(s,_)&&y(o,_,s[_]);if(r)for(var _ of r(s))O.call(s,_)&&y(o,_,s[_]);return o};import{d as m,r as A,t as C,_ as E,a,o as k,c as h,b as t,w as e,e as n}from"./index.c2bb4dac.js";const F=m({setup(){const o=A({collapsed:!1,selectedKeys:["1"],openKeys:["sub1"],preOpenKeys:["sub1"]});return f({},C(o))}}),$={style:{width:"15%"}},w=n("\u57FA\u7840\u63A7\u4EF6"),x=n("\u57FA\u7840\u8868\u5355"),U=n("\u57FA\u7840\u4E0A\u4F20"),g=n("\u57FA\u7840\u8868\u683C"),B=n("\u4E00\u7EA7\u83DC\u5355"),D=n("Option 5"),M=n("Option 6"),N=n("Option 7"),T=n("Option 8"),V=n("\u4E8C\u7EA7\u83DC\u5355"),R=n("Option 9"),S=n("Option 10"),j=n("Option 11"),q=n("Option 12");function z(o,s,_,c,p,I){const d=a("router-link"),u=a("a-menu-item"),l=a("a-sub-menu"),b=a("a-menu");return k(),h("div",$,[t(b,{openKeys:o.openKeys,"onUpdate:openKeys":s[0]||(s[0]=i=>o.openKeys=i),selectedKeys:o.selectedKeys,"onUpdate:selectedKeys":s[1]||(s[1]=i=>o.selectedKeys=i),mode:"inline",theme:"dark","inline-collapsed":o.collapsed,class:"menu"},{default:e(()=>[t(u,{key:"1"},{default:e(()=>[t(d,{to:"/baseComponents"},{default:e(()=>[w]),_:1})]),_:1}),t(u,{key:"2"},{default:e(()=>[t(d,{to:"/baseForm"},{default:e(()=>[x]),_:1})]),_:1}),t(u,{key:"3"},{default:e(()=>[t(d,{to:"/baseUpload"},{default:e(()=>[U]),_:1})]),_:1}),t(u,{key:"4"},{default:e(()=>[t(d,{to:"/baseTable"},{default:e(()=>[g]),_:1})]),_:1}),t(l,{key:"sub1"},{icon:e(()=>[]),title:e(()=>[B]),default:e(()=>[t(u,{key:"5"},{default:e(()=>[D]),_:1}),t(u,{key:"6"},{default:e(()=>[M]),_:1}),t(u,{key:"7"},{default:e(()=>[N]),_:1}),t(u,{key:"8"},{default:e(()=>[T]),_:1})]),_:1}),t(l,{key:"sub2"},{icon:e(()=>[]),title:e(()=>[V]),default:e(()=>[t(u,{key:"9"},{default:e(()=>[R]),_:1}),t(u,{key:"10"},{default:e(()=>[S]),_:1}),t(l,{key:"sub3",title:"Submenu"},{default:e(()=>[t(u,{key:"11"},{default:e(()=>[j]),_:1}),t(u,{key:"12"},{default:e(()=>[q]),_:1})]),_:1})]),_:1})]),_:1},8,["openKeys","selectedKeys","inline-collapsed"])])}var G=E(F,[["render",z]]);const H={id:"layout"},P=m({setup(o){return(s,_)=>{const c=a("router-view"),p=a("a-card");return k(),h("div",H,[t(G),t(p,{id:"content"},{default:e(()=>[t(c)]),_:1})])}}});export{P as default};
