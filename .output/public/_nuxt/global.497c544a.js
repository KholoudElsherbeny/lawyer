import{u as o}from"./cookie.4132d486.js";import{k as s}from"./entry.7aaca005.js";import{u as a}from"./useAPILazyFetch.94301d64.js";import{w as i}from"./swiper-vue.6e12f478.js";const c=s("global",{state:()=>({profile:null,mainSettings:null}),getters:{getProfile:e=>e.profile,getSettings:e=>e.mainSettings},actions:{async getMainServices(){const{data:e}=await a("/get-main-services",{method:"GET"});i(e,t=>{this.mainServices=t.data})},async fetchProfile(){{const{data:e}=await a(`/${o("user_type").value}_web/profile`,{method:"GET"});i(e,t=>{this.profile=t.data})}}}});export{c as u};