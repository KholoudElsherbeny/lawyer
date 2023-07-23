import { _ as __nuxt_component_0 } from './nuxt-link-28d4e889.mjs';
import { configure, Form } from 'vee-validate';
import { _ as __nuxt_component_2 } from './InputPhone-469dc3f9.mjs';
import { _ as __nuxt_component_4 } from './InputPassword-e59ba30e.mjs';
import { _ as _imports_1, a as __nuxt_component_1$1 } from './success-74916591.mjs';
import { u as useI18n, a as useHead, d as useRouter, b as useRuntimeConfig } from '../server.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext, ref, reactive, unref } from 'vue';
import { u as useCookie } from './cookie-83deb137.mjs';
import { u as useLocalePath } from './composables-a79e1cb2.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderTeleport, ssrRenderAttr } from 'vue/server-renderer';
import { useToast } from 'vue-toastification';
import * as yup from 'yup';
import { u as useGlobalStore } from './global-6d3c1b18.mjs';
import 'ufo';
import './useAPILazyFetch-30348240.mjs';
import 'ohash';
import '../../handlers/renderer.mjs';
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

const _sfc_main$1 = {
  __name: "AuthLogin",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useGlobalStore();
    configure({
      validateOnBlur: true,
      // controls if `blur` events should trigger validation with `handleChange` handler
      validateOnChange: true,
      // controls if `change` events should trigger validation with `handleChange` handler
      validateOnInput: false,
      // controls if `input` events should trigger validation with `handleChange` handler
      validateOnModelUpdate: true
      // controls if `update:modelValue` events should trigger validation with `handleChange` handler
    });
    const router = useRouter();
    const config = /* @__PURE__ */ useRuntimeConfig();
    const i18n = useI18n();
    const toast = useToast();
    const loggedInSuccess = ref(false);
    const localePath = useLocalePath();
    const login_Form = reactive({
      phone: null,
      phone_code: null,
      password: null
    });
    const phoneLimit = ref(null);
    function updateCode(code) {
      login_Form.phone_code = code.phone_code;
      phoneLimit.value = code.phone_number_limit;
    }
    const schema = yup.object({
      phone: yup.number().required(),
      password: yup.string().required()
    });
    async function onSubmit() {
      const frmData = new FormData();
      frmData.append("password", login_Form.password);
      frmData.append("phone", login_Form.phone);
      frmData.append("phone_code", login_Form.phone_code);
      const phoneToVerify = useCookie("phoneToVerify", {
        maxAge: 30 * 60
      });
      try {
        const data = await $fetch(`${config.public.baseURL}client_web/login`, {
          method: "POST",
          body: frmData,
          headers: {
            Accept: "application/json",
            lang: i18n.locale.value,
            "Accept-Language": i18n.locale.value
          }
        });
        if (!data.data.is_active) {
          toast.info(data.message);
          phoneToVerify.value = {
            phone: login_Form.phone,
            phone_code: login_Form.phone_code,
            type: "new"
          };
          router.push(localePath("/auth/verify"));
        } else {
          useCookie("session-token").value = data.data.token;
          store.fetchProfile();
          router.push(localePath("/"));
        }
      } catch (err) {
        toast.error(err.response._data.message);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VeeForm = Form;
      const _component_input_phone = __nuxt_component_2;
      const _component_input_password = __nuxt_component_4;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_general_notify = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "login_form" }, _attrs))}><div class="xl:max-w-2xl">`);
      _push(ssrRenderComponent(_component_VeeForm, {
        as: "div",
        onSubmit,
        "validation-schema": unref(schema)
      }, {
        default: withCtx(({ meta }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}><div class="mb-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_phone, {
              onCode_change: ($event) => updateCode($event),
              name: "phone",
              modelValue: unref(login_Form).phone,
              "onUpdate:modelValue": ($event) => unref(login_Form).phone = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_password, {
              name: "password",
              modelValue: unref(login_Form).password,
              "onUpdate:modelValue": ($event) => unref(login_Form).password = $event
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_nuxt_link, {
              to: unref(localePath)("/auth/reset-password"),
              class: "mt-3 text-end block pe-2 text-primary mb-0 font-medium"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("labels.forgetYourPassword"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("labels.forgetYourPassword")), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<button type="submit"${ssrIncludeBooleanAttr(!meta.valid) ? " disabled" : ""} class="base-btn w-full mt-11"${_scopeId}>${ssrInterpolate(_ctx.$t("BUTTONS.login"))}</button></form>`);
          } else {
            return [
              createVNode("form", null, [
                createVNode("div", { class: "mb-2" }, [
                  createVNode(_component_input_phone, {
                    onCode_change: ($event) => updateCode($event),
                    name: "phone",
                    modelValue: unref(login_Form).phone,
                    "onUpdate:modelValue": ($event) => unref(login_Form).phone = $event
                  }, null, 8, ["onCode_change", "modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "mb-2" }, [
                  createVNode(_component_input_password, {
                    name: "password",
                    modelValue: unref(login_Form).password,
                    "onUpdate:modelValue": ($event) => unref(login_Form).password = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode(_component_nuxt_link, {
                  to: unref(localePath)("/auth/reset-password"),
                  class: "mt-3 text-end block pe-2 text-primary mb-0 font-medium"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("labels.forgetYourPassword")), 1)
                  ]),
                  _: 1
                }, 8, ["to"]),
                createVNode("button", {
                  type: "submit",
                  disabled: !meta.valid,
                  class: "base-btn w-full mt-11"
                }, toDisplayString(_ctx.$t("BUTTONS.login")), 9, ["disabled"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="mt-5 text-center text-secondary mb-0 font-sm">${ssrInterpolate(_ctx.$t("labels.dontHaveAnAccount"))} `);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath)("/auth/register"),
        class: "text-primary ms-1 font-medium"
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
      _push(`</p></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(_component_general_notify, {
          style: unref(loggedInSuccess) ? null : { display: "none" }
        }, {
          default: withCtx((_, _push3, _parent2, _scopeId) => {
            if (_push3) {
              _push3(`<img class="icon"${ssrRenderAttr("src", _imports_1)} alt="success icon"${_scopeId}><h4${_scopeId}>${ssrInterpolate(_ctx.$t("HEADERS.loggedInSuccessfully"))}</h4>`);
            } else {
              return [
                createVNode("img", {
                  class: "icon",
                  src: _imports_1,
                  alt: "success icon"
                }),
                createVNode("h4", null, toDisplayString(_ctx.$t("HEADERS.loggedInSuccessfully")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      }, "body", false, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/auth/AuthLogin.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const i18n = useI18n();
    useHead({
      title: i18n.t("NAV.login")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_auth_login = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "auth_login" }, _attrs))}><form class="w-full md:max-w-xl mx-auto xl:mx-0">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: _ctx.localePath("/auth/login-type"),
        class: "text-lg text-text-dark mb-5 block font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="${ssrRenderClass([_ctx.$i18n.locale == "ar" ? "pi-arrow-right" : "pi-arrow-left", "pi text-base me-1"])}"${_scopeId}></i> ${ssrInterpolate(_ctx.$t("BUTTONS.back"))}`);
          } else {
            return [
              createVNode("i", {
                class: ["pi text-base me-1", _ctx.$i18n.locale == "ar" ? "pi-arrow-right" : "pi-arrow-left"]
              }, null, 2),
              createTextVNode(" " + toDisplayString(_ctx.$t("BUTTONS.back")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="text-4xl md:text-5xl capitalize font-bold mb-11"><span class="text-4xl leading-9">${ssrInterpolate(_ctx.$t("HEADERS.hello"))}</span><br> ${ssrInterpolate(_ctx.$t("HEADERS.welcomeBack"))}</h1><div class="login_type">`);
      _push(ssrRenderComponent(_component_auth_login, null, null, _parent));
      _push(`</div></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-04a6f30d.mjs.map
