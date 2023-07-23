import { configure, Form, Field, ErrorMessage } from 'vee-validate';
import { _ as __nuxt_component_2 } from './InputPhone-469dc3f9.mjs';
import { _ as __nuxt_component_4 } from './InputPassword-e59ba30e.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-28d4e889.mjs';
import { u as useI18n, a as useHead, d as useRouter, b as useRuntimeConfig } from '../server.mjs';
import { reactive, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { u as useCookie } from './cookie-83deb137.mjs';
import { u as useLocalePath } from './composables-a79e1cb2.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { useToast } from 'vue-toastification';
import * as yup from 'yup';
import './useAPILazyFetch-30348240.mjs';
import 'ohash';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@intlify/core-base';
import 'cookie-es';
import 'is-https';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'unstorage';
import 'unstorage/drivers/fs';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'ipx';
import '@intlify/bundle-utils';

const _sfc_main = {
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    const i18n = useI18n();
    useHead({
      title: i18n.t("NAV.newAccount")
    });
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
    const toast = useToast();
    const localePath = useLocalePath();
    const register_Form = reactive({
      name: null,
      email: null,
      phone: null,
      phone_code: null,
      password: null,
      confirmPassword: null
    });
    const phoneLimit = ref(null);
    function updateCode(code) {
      register_Form.phone_code = code.phone_code;
      phoneLimit.value = code.phone_number_limit;
    }
    const schema = yup.object({
      name: yup.string().required(),
      email: yup.string().email().required(),
      phone: yup.number().required(),
      password: yup.string().required(),
      confirmPassword: yup.string().required().oneOf([yup.ref("password")], i18n.t("labels.passwordDontMatch")).label(i18n.t("labels.confirmPasswordIsARequired"))
    });
    async function onSubmit() {
      const frmData = new FormData();
      frmData.append("full_name", register_Form.name);
      frmData.append("email", register_Form.email);
      frmData.append("password", register_Form.password);
      frmData.append("password_confirmation", register_Form.confirmPassword);
      frmData.append("phone", register_Form.phone);
      frmData.append("phone_code", register_Form.phone_code);
      const phoneToVerify = useCookie("phoneToVerify", {
        maxAge: 30 * 60
      });
      try {
        await $fetch(`${config.public.baseURL}client_web/register`, {
          method: "POST",
          body: frmData,
          headers: {
            Accept: "application/json",
            lang: i18n.locale.value,
            "Accept-Language": i18n.locale.value
          }
        });
        phoneToVerify.value = {
          phone: register_Form.phone,
          phone_code: register_Form.phone_code,
          type: "new"
        };
        router.push(localePath("/auth/verify"));
      } catch (err) {
        toast.error(err.response._data.message);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VeeForm = Form;
      const _component_VeeField = Field;
      const _component_VeeErrorMessage = ErrorMessage;
      const _component_input_phone = __nuxt_component_2;
      const _component_input_password = __nuxt_component_4;
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "auth_login" }, _attrs))}><form class="w-full md:max-w-xl md:mx-auto xl:mx-0"><h1 class="mb-4 xl:mb-8 w-full"><span class="text-4xl xl:text-5xl capitalize font-bold leading-9">${ssrInterpolate(_ctx.$t("HEADERS.gettingStarted"))}</span><span class="text-base text-text-dark mt-3 block lg:max-w-[70%]">${ssrInterpolate(_ctx.$t(
        "HEADERS.lookLikeYouAreNewToUsCreateAnAccountForACompleteExperience"
      ))}</span></h1><div class="register_form pb-11"><div>`);
      _push(ssrRenderComponent(_component_VeeForm, {
        as: "div",
        onSubmit,
        "validation-schema": unref(schema)
      }, {
        default: withCtx(({ meta }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VeeField, {
              name: "name",
              type: "text",
              modelValue: unref(register_Form).name,
              "onUpdate:modelValue": ($event) => unref(register_Form).name = $event
            }, {
              default: withCtx(({ meta: meta2, field }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="${ssrRenderClass([!meta2.valid && meta2.touched ? "error" : "", "input_wrapper"])}"${_scopeId2}><label for="name"${_scopeId2}>${ssrInterpolate(_ctx.$t("labels.name"))}</label><input${ssrRenderAttrs(mergeProps({
                    id: "name",
                    name: "name"
                  }, field, {
                    placeholder: _ctx.$t("labels.enterYourName")
                  }))}${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_VeeErrorMessage, {
                    class: "text-red-500 text-sm",
                    name: "name"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: ["input_wrapper", !meta2.valid && meta2.touched ? "error" : ""]
                    }, [
                      createVNode("label", { for: "name" }, toDisplayString(_ctx.$t("labels.name")), 1),
                      createVNode("input", mergeProps({
                        id: "name",
                        name: "name"
                      }, field, {
                        placeholder: _ctx.$t("labels.enterYourName")
                      }), null, 16, ["placeholder"]),
                      createVNode(_component_VeeErrorMessage, {
                        class: "text-red-500 text-sm",
                        name: "name"
                      })
                    ], 2)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VeeField, {
              name: "email",
              type: "email",
              modelValue: unref(register_Form).email,
              "onUpdate:modelValue": ($event) => unref(register_Form).email = $event
            }, {
              default: withCtx(({ meta: meta2, field }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="${ssrRenderClass([!meta2.valid && meta2.touched ? "error" : "", "input_wrapper"])}"${_scopeId2}><label for="email"${_scopeId2}>${ssrInterpolate(_ctx.$t("labels.email"))}</label><input${ssrRenderAttrs(mergeProps({
                    id: "email",
                    name: "email"
                  }, field, {
                    placeholder: _ctx.$t("labels.enterYourEmail")
                  }))}${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_VeeErrorMessage, {
                    class: "text-red-500 text-sm",
                    name: "email"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: ["input_wrapper", !meta2.valid && meta2.touched ? "error" : ""]
                    }, [
                      createVNode("label", { for: "email" }, toDisplayString(_ctx.$t("labels.email")), 1),
                      createVNode("input", mergeProps({
                        id: "email",
                        name: "email"
                      }, field, {
                        placeholder: _ctx.$t("labels.enterYourEmail")
                      }), null, 16, ["placeholder"]),
                      createVNode(_component_VeeErrorMessage, {
                        class: "text-red-500 text-sm",
                        name: "email"
                      })
                    ], 2)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<div class="mb-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_phone, {
              onCode_change: ($event) => updateCode($event),
              name: "phone",
              modelValue: unref(register_Form).phone,
              "onUpdate:modelValue": ($event) => unref(register_Form).phone = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_password, {
              name: "password",
              modelValue: unref(register_Form).password,
              "onUpdate:modelValue": ($event) => unref(register_Form).password = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_password, {
              placeholder: _ctx.$t("labels.enterTheConfirmationPassword"),
              name: "confirmPassword",
              modelValue: unref(register_Form).confirmPassword,
              "onUpdate:modelValue": ($event) => unref(register_Form).confirmPassword = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><button type="submit"${ssrIncludeBooleanAttr(!meta.valid) ? " disabled" : ""} class="base-btn w-full mt-11"${_scopeId}>${ssrInterpolate(_ctx.$t("BUTTONS.createNewAccount"))}</button></form>`);
          } else {
            return [
              createVNode("form", null, [
                createVNode(_component_VeeField, {
                  name: "name",
                  type: "text",
                  modelValue: unref(register_Form).name,
                  "onUpdate:modelValue": ($event) => unref(register_Form).name = $event
                }, {
                  default: withCtx(({ meta: meta2, field }) => [
                    createVNode("div", {
                      class: ["input_wrapper", !meta2.valid && meta2.touched ? "error" : ""]
                    }, [
                      createVNode("label", { for: "name" }, toDisplayString(_ctx.$t("labels.name")), 1),
                      createVNode("input", mergeProps({
                        id: "name",
                        name: "name"
                      }, field, {
                        placeholder: _ctx.$t("labels.enterYourName")
                      }), null, 16, ["placeholder"]),
                      createVNode(_component_VeeErrorMessage, {
                        class: "text-red-500 text-sm",
                        name: "name"
                      })
                    ], 2)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_VeeField, {
                  name: "email",
                  type: "email",
                  modelValue: unref(register_Form).email,
                  "onUpdate:modelValue": ($event) => unref(register_Form).email = $event
                }, {
                  default: withCtx(({ meta: meta2, field }) => [
                    createVNode("div", {
                      class: ["input_wrapper", !meta2.valid && meta2.touched ? "error" : ""]
                    }, [
                      createVNode("label", { for: "email" }, toDisplayString(_ctx.$t("labels.email")), 1),
                      createVNode("input", mergeProps({
                        id: "email",
                        name: "email"
                      }, field, {
                        placeholder: _ctx.$t("labels.enterYourEmail")
                      }), null, 16, ["placeholder"]),
                      createVNode(_component_VeeErrorMessage, {
                        class: "text-red-500 text-sm",
                        name: "email"
                      })
                    ], 2)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue"]),
                createVNode("div", { class: "mb-2" }, [
                  createVNode(_component_input_phone, {
                    onCode_change: ($event) => updateCode($event),
                    name: "phone",
                    modelValue: unref(register_Form).phone,
                    "onUpdate:modelValue": ($event) => unref(register_Form).phone = $event
                  }, null, 8, ["onCode_change", "modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "mb-2" }, [
                  createVNode(_component_input_password, {
                    name: "password",
                    modelValue: unref(register_Form).password,
                    "onUpdate:modelValue": ($event) => unref(register_Form).password = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "mb-2" }, [
                  createVNode(_component_input_password, {
                    placeholder: _ctx.$t("labels.enterTheConfirmationPassword"),
                    name: "confirmPassword",
                    modelValue: unref(register_Form).confirmPassword,
                    "onUpdate:modelValue": ($event) => unref(register_Form).confirmPassword = $event
                  }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("button", {
                  type: "submit",
                  disabled: !meta.valid,
                  class: "base-btn w-full mt-11"
                }, toDisplayString(_ctx.$t("BUTTONS.createNewAccount")), 9, ["disabled"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="mt-5 text-center text-secondary mb-0 font-sm">${ssrInterpolate(_ctx.$t("labels.haveAnAccount"))} `);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath)("/auth/login"),
        class: "text-primary ms-1 font-medium"
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
      _push(`</p></div></div></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register-5cdc5fa7.mjs.map
