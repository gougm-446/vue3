import{_ as f,d as F,r as h,a as t,o as b,c as v,b as o,w as n,h as S,e as i}from"./index.c2bb4dac.js";const w=F({setup(){return{formState:h({username:"",password:"",remember:!0}),onFinish:r=>{console.log("Success:",r)},onFinishFailed:r=>{console.log("Failed:",r)}}}}),k={id:"form"},y=S("h1",null,"Form \u8868\u5355",-1),g=i("Remember me"),U=i("Submit");function $(e,a,u,r,B,C){const l=t("a-input"),m=t("a-form-item"),d=t("a-input-password"),p=t("a-checkbox"),_=t("a-button"),c=t("a-form");return b(),v("div",k,[y,o(c,{model:e.formState,name:"basic",autocomplete:"off",onFinish:e.onFinish,onFinishFailed:e.onFinishFailed},{default:n(()=>[o(m,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}]},{default:n(()=>[o(l,{value:e.formState.username,"onUpdate:value":a[0]||(a[0]=s=>e.formState.username=s)},null,8,["value"])]),_:1}),o(m,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},{default:n(()=>[o(d,{value:e.formState.password,"onUpdate:value":a[1]||(a[1]=s=>e.formState.password=s)},null,8,["value"])]),_:1}),o(m,{name:"remember"},{default:n(()=>[o(p,{checked:e.formState.remember,"onUpdate:checked":a[2]||(a[2]=s=>e.formState.remember=s)},{default:n(()=>[g]),_:1},8,["checked"])]),_:1}),o(m,null,{default:n(()=>[o(_,{type:"primary","html-type":"submit"},{default:n(()=>[U]),_:1})]),_:1})]),_:1},8,["model","onFinish","onFinishFailed"])])}var P=f(w,[["render",$]]);export{P as default};
