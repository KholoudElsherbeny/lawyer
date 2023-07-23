import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-28d4e889.mjs';
import { u as useI18n, a as useHead } from '../server.mjs';
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-be081001.mjs';
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
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@intlify/core-base';
import 'cookie-es';
import 'is-https';

const _imports_1 = "" + buildAssetsURL("language.8f4e8a2e.svg");
const _sfc_main = {
  __name: "authLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const i18n = useI18n();
    useHead({
      titleTemplate: `${i18n.t("appName")} | %s`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Lawyer auth App Desc Will Go Here"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "auth_layout min-h-[100vh] flex flex-wrap" }, _attrs))}><div class="w-full xl:w-1/2"><div class="container"><header class="xl:ps-11"><nav class="flex items-center justify-between py-8"><div class="logo">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: _ctx.localePath("/")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="logo image"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "logo image"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="language">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "flex items-center",
        to: _ctx.switchLocalePath(_ctx.$i18n.locale == "ar" ? "en" : "ar")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="me-2"${ssrRenderAttr("src", _imports_1)} alt="lang icon"${_scopeId}><span class="font-meduim text-lg text-primary"${_scopeId}>${ssrInterpolate(_ctx.$t(`locale.${_ctx.$i18n.locale}`))}</span>`);
          } else {
            return [
              createVNode("img", {
                class: "me-2",
                src: _imports_1,
                alt: "lang icon"
              }),
              createVNode("span", { class: "font-meduim text-lg text-primary" }, toDisplayString(_ctx.$t(`locale.${_ctx.$i18n.locale}`)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></nav></header><section class="pt-4 xl:ps-11 xl:pt-11">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</section></div></div><div class="hidden image_bg xl:flex w-1/2"></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/authLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=authLayout-d8a50bc0.mjs.map
