import{_ as $}from"./nuxt-link.d9db1e92.js";import{_ as k}from"./InputPhone.4aa3b671.js";import{c as T,F as V}from"./vee-validate.esm.a5d21a4f.js";import{c as S,u as B,d as C,a as N,b as O}from"./entry.7aaca005.js";import{r as P,a as A,J as E,K as R,L as o,H as c,Z as p,Q as U,X as D,U as s,u as n,a5 as L}from"./swiper-vue.6e12f478.js";import{u as d}from"./cookie.4132d486.js";import{u as F}from"./composables.61e7926a.js";import{c as H,d as z}from"./index.esm.83261b9e.js";import"./useAPILazyFetch.94301d64.js";const I={class:"auth_login"},M={class:"mb-3"},Y={class:"text-5xl capitalize font-bold leading-9 block"},j={class:"max-w-[70%] inline-block mt-3 mb-4"},q={class:"text-base text-text-dark me-1"},J={class:"reset_form mt-11"},K={class:"mb-2"},Q=["disabled"],re={__name:"reset-password",setup(X){T({validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0});const u=S(),_=O(),r=B(),h=C();N({title:r.t("NAV.resetPassword")});const m=F(),a=P({phone:null,phone_code:null}),f=A(null);function b(e){a.phone_code=e.phone_code,f.value=e.phone_number_limit}const v=H({phone:z().required()});async function x(){const e=new FormData;e.append("phone",a.phone),e.append("phone_code",a.phone_code);const t=d("phoneToVerify",{maxAge:30*60});try{await $fetch(`${_.public.baseURL}${d("user_type").value}_web/send_code`,{method:"POST",body:e,headers:{Accept:"application/json",lang:r.locale.value,"Accept-Language":r.locale.value}}),t.value={phone:a.phone,phone_code:a.phone_code,type:"reset"},u.push(m("/auth/verify"))}catch(l){h.error(l.response._data.message)}}return(e,t)=>{const l=$,g=k,w=V;return E(),R("div",I,[o("form",{onSubmit:t[2]||(t[2]=L(()=>{},["prevent"])),class:"w-full md:max-w-xl mx-auto xl:mx-0"},[c(l,{to:n(m)("/auth/login"),class:"text-lg text-text-dark mb-5 block font-medium"},{default:p(()=>[o("i",{class:U(["pi text-base me-1",e.$i18n.locale=="ar"?"pi-arrow-right":"pi-arrow-left"])},null,2),D(" "+s(e.$t("BUTTONS.back")),1)]),_:1},8,["to"]),o("h1",M,[o("span",Y,s(e.$t("HEADERS.resetPassword")),1)]),o("p",j,[o("span",q,s(e.$t("HEADERS.pleaseEnterYourPhoneNumberBelowToRecoveryYourPassword")),1)]),o("div",J,[c(w,{as:"div",onSubmit:x,"validation-schema":n(v)},{default:p(({meta:y})=>[o("form",null,[o("div",K,[c(g,{onCode_change:t[0]||(t[0]=i=>b(i)),name:"phone",modelValue:n(a).phone,"onUpdate:modelValue":t[1]||(t[1]=i=>n(a).phone=i)},null,8,["modelValue"])]),o("button",{type:"submit",disabled:!y.valid,class:"base-btn w-full mt-11"},s(e.$t("BUTTONS.send")),9,Q)])]),_:1},8,["validation-schema"])])],32)])}}};export{re as default};
