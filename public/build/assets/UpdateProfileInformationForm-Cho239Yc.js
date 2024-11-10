import{Q as v,T as k,f as l,b as s,a as o,u as t,d as n,w as m,i as _,p as V,g as c,q as b,e as h,o as d,j as w}from"./app-Cgot3wEm.js";import{a as p,b as g,_ as y}from"./TextInput-DvskzcFd.js";import{_ as S}from"./PrimaryButton-yoC1cijW.js";const N={key:0},$={class:"text-sm mt-2 text-gray-800 dark:text-gray-200"},B={class:"mt-2 font-medium text-sm text-green-600 dark:text-green-400"},E={class:"flex items-center gap-4"},U={key:0,class:"text-sm text-gray-600 dark:text-gray-400"},I={__name:"UpdateProfileInformationForm",props:{mustVerifyEmail:Boolean,status:String},setup(x){const u=x,i=v().props.auth.user,a=k({name:i.name,email:i.email});return(f,e)=>(d(),l("section",null,[e[6]||(e[6]=s("header",null,[s("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"},"Profile Information"),s("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"}," Update your account's profile information and email address. ")],-1)),s("form",{onSubmit:e[2]||(e[2]=h(r=>t(a).patch(f.route("profile.update")),["prevent"])),class:"mt-6 space-y-6"},[s("div",null,[o(y,{for:"name",value:"Name"}),o(p,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:t(a).name,"onUpdate:modelValue":e[0]||(e[0]=r=>t(a).name=r),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),o(g,{class:"mt-2",message:t(a).errors.name},null,8,["message"])]),s("div",null,[o(y,{for:"email",value:"Email"}),o(p,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:t(a).email,"onUpdate:modelValue":e[1]||(e[1]=r=>t(a).email=r),required:"",autocomplete:"username"},null,8,["modelValue"]),o(g,{class:"mt-2",message:t(a).errors.email},null,8,["message"])]),u.mustVerifyEmail&&t(i).email_verified_at===null?(d(),l("div",N,[s("p",$,[e[4]||(e[4]=n(" Your email address is unverified. ")),o(t(w),{href:f.route("verification.send"),method:"post",as:"button",class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:m(()=>e[3]||(e[3]=[n(" Click here to re-send the verification email. ")])),_:1},8,["href"])]),_(s("div",B," A new verification link has been sent to your email address. ",512),[[V,u.status==="verification-link-sent"]])])):c("",!0),s("div",E,[o(S,{disabled:t(a).processing},{default:m(()=>e[5]||(e[5]=[n("Save")])),_:1},8,["disabled"]),o(b,{"enter-from-class":"opacity-0","leave-to-class":"opacity-0",class:"transition ease-in-out"},{default:m(()=>[t(a).recentlySuccessful?(d(),l("p",U,"Saved.")):c("",!0)]),_:1})])],32)]))}};export{I as default};
