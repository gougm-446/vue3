import{_ as u,a as s,o as d,c,h as t,b as o,i as r}from"./index.4c157a9a.js";const p={name:"",setup(){return{}}},_=t("div",{class:"title"},"Ant design \u7EC4\u4EF6\uFF1A",-1),h={id:"father"},x={class:"box",style:{"text-align":"left"}},v=t("h1",null,"Input \u8F93\u5165\u6846",-1),f={class:"box",style:{"text-align":"left"}},F=t("h1",null,"textarea \u8F93\u5165\u6846",-1),m=r('<div class="title">\u539F\u751F \u7EC4\u4EF6\uFF1A</div><div id="father"><div class="box" style="text-align:left;"><h1>Input \u8F93\u5165\u6846</h1><input type="text"></div><div class="box" style="text-align:left;"><h1>textarea \u8F93\u5165\u6846</h1><textarea id="tex" cols="30"></textarea></div></div>',2);function g(e,a,y,b,E,V){const n=s("a-input"),i=s("a-textarea");return d(),c("div",null,[_,t("div",h,[t("div",x,[v,o(n,{style:{width:"250px"},value:e.inputValue,"onUpdate:value":a[0]||(a[0]=l=>e.inputValue=l),placeholder:"Basic usage"},null,8,["value"])]),t("div",f,[F,o(i,{style:{width:"250px"},placeholder:"Autosize height based on content lines","auto-size":""})])]),m])}var B=u(p,[["render",g]]);export{B as default};
