import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-28d4e889.mjs';
import { useSSRContext, computed, mergeProps, withCtx, createVNode, unref, createTextVNode, toDisplayString, ref, reactive } from 'vue';
import { u as useCookie } from './cookie-83deb137.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0$1 } from './logo-be081001.mjs';
import { u as useGlobalStore } from './global-6d3c1b18.mjs';
import { u as useI18n, a as useHead } from '../server.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'unstorage/drivers/fs';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'ipx';
import '@intlify/bundle-utils';
import 'cookie-es';
import './useAPILazyFetch-30348240.mjs';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@intlify/core-base';
import 'is-https';

const _imports_1$1 = "" + buildAssetsURL("list.9f2984ab.svg");
const _sfc_main$2 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useGlobalStore();
    const isLoggedIn = !!useCookie("session-token").value;
    if (isLoggedIn) {
      store.fetchProfile();
    }
    const profile = computed(() => store.getProfile);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({
        id: "header",
        class: "fixed left-0 w-full bg-transparent"
      }, _attrs))}><div class="container mx-auto"><nav class="border-b border-primary py-5 flex items-center justify-between"><div class="logo">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "text-primary",
        to: _ctx.localePath("/")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="logo"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$1,
                alt: "logo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="list_menu flex items-center">`);
      if (unref(profile)) {
        _push(`<div class="auth flex items-center pe-4"><div class="avatar"><img${ssrRenderAttr("src", unref(profile).image)}${ssrRenderAttr("alt", unref(profile).full_name)} width="50" height="50" class="rounded-full"></div><p class="ms-2 text-primary font-bold text-lg">${ssrInterpolate(unref(profile).full_name)}</p></div>`);
      } else {
        _push(`<div class="auth pe-4">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "text-primary pe-4 text-sm md:text-lg",
          to: _ctx.localePath("/auth/register")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("BUTTONS.createAccount"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("BUTTONS.createAccount")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "text-primary text-sm md:text-lg",
          to: _ctx.localePath("/auth/login-type")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("BUTTONS.login"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("BUTTONS.login")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`<div class="menu border-primary border-s ps-4"><button type="button"><img${ssrRenderAttr("src", _imports_1$1)} alt="list"></button></div></div></nav></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$2;
const _imports_0 = "" + buildAssetsURL("logo_footer.e77ffc77.svg");
const _imports_1 = "" + buildAssetsURL("phone.6b0d38de.svg");
const _imports_2 = "" + buildAssetsURL("email.337477e9.svg");
const _imports_3 = "" + buildAssetsURL("location.9bd14401.svg");
const _imports_4 = "" + buildAssetsURL("work.a225e861.svg");
const _imports_5 = "" + buildAssetsURL("google_play.dc96bcc7.svg");
const _imports_6 = "" + buildAssetsURL("app_store.d8755625.svg");
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  props: {
    mainSettings: { required: true }
  },
  setup(__props) {
    ref(false);
    reactive({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
    const year = computed(() => (/* @__PURE__ */ new Date()).getFullYear());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({
        id: "footer",
        class: "bg-secondary pt-11"
      }, _attrs))}><div class="container mx-auto"><div class="flex flex-wrap"><div class="logo_side pb-11 md:pb-0 md:pe-11 md:ps-14 w-full md:w-fit"><div class="logo flex justify-center md:justify-normal">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "text-primary",
        to: _ctx.localePath("/")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="logo"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "logo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="content_side flex-1 border-t pt-3 md:pt-0 md:border-t-0 md:border-s border-third"><div class="top border-b border-third md:ps-8"><div class="flex flex-wrap"><div class="links w-full mb-3 md:mb-0 md:w-6/12 lg:w-3/12"><ul><li>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: _ctx.localePath("/")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("NAV.home"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("NAV.home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: _ctx.localePath("/about-us")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("NAV.aboutUs"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("NAV.aboutUs")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: _ctx.localePath("/services")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("NAV.services"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("NAV.services")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/faq" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("NAV.blogs"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("NAV.blogs")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="contact_info w-full mb-3 md:mb-0 md:w-6/12 lg:w-5/12"><div class="inner_item"><div class="item"><div class="icon"><img${ssrRenderAttr("src", _imports_1)} alt="phone_icon"></div><div class="content"><h3 class="title">${ssrInterpolate(_ctx.$t("HEADERS.phoneNumber"))}</h3><div class="desc"><a href="tel:1010101010" aria-label="phone-number">1010101010</a></div></div></div><div class="item"><div class="icon"><img${ssrRenderAttr("src", _imports_2)} alt="phone_icon"></div><div class="content"><h3 class="title">${ssrInterpolate(_ctx.$t("HEADERS.emailAddress"))}</h3><div class="desc"><a href="tel:1010101010" aria-label="phone-number">1010101010</a></div></div></div><div class="item"><div class="icon"><img${ssrRenderAttr("src", _imports_3)} alt="phone_icon"></div><div class="content"><h3 class="title">${ssrInterpolate(_ctx.$t("HEADERS.address"))}</h3><div class="desc"><a href="tel:1010101010" aria-label="phone-number">1010101010</a></div></div></div><div class="item"><div class="icon"><img${ssrRenderAttr("src", _imports_4)} alt="phone_icon"></div><div class="content"><h3 class="title">${ssrInterpolate(_ctx.$t("HEADERS.worktime"))}</h3><div class="desc"><p> Days : Sunday - Thursday </p><p> Time : 09:00 AM - 05:00 PM </p></div></div></div></div></div><div class="download_section w-full my-3 lg:my-0 lg:w-4/12"><h4 class="text-text-dark text-base mb-2">${ssrInterpolate(_ctx.$t("HEADERS.downloadApplication"))}: </h4><div class="actions"><a href="/"><img${ssrRenderAttr("src", _imports_5)} alt="google_play_icon"></a><a href="/"><img${ssrRenderAttr("src", _imports_6)} alt="app_store_icon"></a></div></div></div><div class="social_links flex items-center justify-between flex-wrap"><ul class="list-unstyled social"><li><a href="/" aria-label="facebook"><i class="pi pi-facebook"></i></a></li><li><a href="/" aria-label="twitter"><i class="pi pi-twitter"></i></a></li><li><a href="/" aria-label="linked in"><i class="pi pi-linkedin"></i></a></li></ul><ul class="list-unstyled"><li>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: _ctx.localePath("/contact-us")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("NAV.contactUs"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("NAV.contactUs")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: _ctx.localePath("/terms")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("NAV.termsOfUse"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("NAV.termsOfUse")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div><p class="copyrights py-2 text-center text-text-dark">${ssrInterpolate(_ctx.$t("copyrights"))} <bdi>${ssrInterpolate(unref(year))} \xA9Lawyer \u2022 Designed by <a href="https://alalmiyalhura.com" target="_blank">Alalamyia</a></bdi></p></div></div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const i18n = useI18n();
    useHead({
      titleTemplate: `${i18n.t("appName")} | %s`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Lawyer App Desc Will Go Here"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      const _component_Footer = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<div class="app_wrapper bg-secondary" id="app_wrapper">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-638b2a21.mjs.map
