import{_ as r,d as p,g as _,a,o as c,c as f,b as s,w as l,e as g}from"./index.0eed77e8.js";const h=p({setup(){return{fileList:_([{uid:"1",name:"xxx.png",status:"done",response:"Server Error 500",url:"http://www.baidu.com/xxx.png"},{uid:"2",name:"yyy.png",status:"done",url:"http://www.baidu.com/yyy.png"}]),handleChange:({file:t,fileList:n})=>{console.log(t),t.status!=="uploading"&&console.log(t,n)}}}}),m={id:"box"},x=g(" \u70B9\u51FB\u4E0A\u4F20 ");function b(e,o,t,n,w,y){const i=a("a-button"),d=a("a-upload");return c(),f("div",m,[s(d,{"file-list":e.fileList,"onUpdate:file-list":o[0]||(o[0]=u=>e.fileList=u),onChange:e.handleChange},{default:l(()=>[s(i,null,{default:l(()=>[x]),_:1})]),_:1},8,["file-list","onChange"])])}var v=r(h,[["render",b]]);export{v as default};
