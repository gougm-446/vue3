import{_ as h,g as m,a as p,o as C,c as v,h as t,b as u,w as i,j as f,m as a,e as l}from"./index.db2dae0d.js";const g={name:"",setup(){const _=()=>{a.success("This is a success message")},o=()=>{a.error("This is an error message")},d=()=>{a.warning("This is a warning message")},s=m(""),r=m("");return{success:_,error:o,warning:d,testConfirm:()=>{confirm("\u8FD9\u662F\u4E00\u4E2A\u786E\u8BA4\u5F39\u6846")==!0?s.value="\u786E\u8BA4":s.value="\u53D6\u6D88"},prompt,testprompt:()=>{let e=prompt("\u8BF7\u968F\u610F\u8F93\u5165");e&&(r.value=e)},confirmText:s,promptText:r}}},E=t("div",{class:"title"},"Ant design \u7EC4\u4EF6\uFF1A",-1),A={id:"father"},x={class:"box"},k=t("h1",null,"Message \u5168\u5C40\u63D0\u793A",-1),b=l("Success"),B=l("Error"),T=l("Warning"),w=t("div",{class:"title"},"\u539F\u751F\u7EC4\u4EF6\uFF1A",-1),D={id:"father"},y={class:"box"},N=t("h1",null,"Message \u5168\u5C40\u63D0\u793A",-1),V={style:{display:"flex"}},M=t("div",null,[t("button",{onclick:"alert('\u6211\u5F39\u51FA\u4E86')"},"alert\u6846\u6309\u94AE")],-1),S={style:{margin:"0 12px"}};function j(_,o,d,s,r,F){const n=p("a-button"),e=p("a-space");return C(),v("div",null,[E,t("div",A,[t("div",x,[k,t("div",null,[u(e,null,{default:i(()=>[u(n,{onClick:s.success},{default:i(()=>[b]),_:1},8,["onClick"]),u(n,{onClick:s.error},{default:i(()=>[B]),_:1},8,["onClick"]),u(n,{onClick:s.warning},{default:i(()=>[T]),_:1},8,["onClick"])]),_:1})])])]),w,t("div",D,[t("div",y,[N,t("div",V,[M,t("div",S,[t("button",{onClick:o[0]||(o[0]=(...c)=>s.testConfirm&&s.testConfirm(...c))},"confirm\u6846\u6309\u94AE"),t("p",null,"\u6211\u70B9\u51FB\u4E86\uFF1A"+f(s.confirmText),1)]),t("div",null,[t("button",{onClick:o[1]||(o[1]=(...c)=>s.testprompt&&s.testprompt(...c))},"prompt\u6846\u6309\u94AE"),t("p",null,"\u6211\u8F93\u5165\u4E86\uFF1A"+f(s.promptText),1)])])])])])}var q=h(g,[["render",j]]);export{q as default};
