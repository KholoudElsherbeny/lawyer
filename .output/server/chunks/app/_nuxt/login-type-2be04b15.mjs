import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { _ as __nuxt_component_0$1 } from './nuxt-link-28d4e889.mjs';
import { mergeProps, useSSRContext, ref, unref, withCtx, isRef, createVNode, toDisplayString, createTextVNode } from 'vue';
import { u as useCookie } from './cookie-83deb137.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import * as yup from 'yup';
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
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@intlify/core-base';
import 'is-https';

const _imports_0 = "" + buildAssetsURL("client_icon.e478763c.svg");
const _imports_1 = "" + buildAssetsURL("lawyer_icon.11ed89e3.svg");
const _sfc_main$1 = {
  __name: "AuthSelectType",
  __ssrInlineRender: true,
  setup(__props) {
    const user_type = ref(null);
    const schema = yup.object({
      auth_type: yup.string().required()
    });
    function selectUserType(type) {
      const userType = useCookie("user_type");
      userType.value = type;
    }
    function onSubmit(values) {
      const userType = useCookie("user_type");
      userType.value = values.auth_type;
      console.log(userType.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VeeForm = Form;
      const _component_VeeField = Field;
      const _component_VeeErrorMessage = ErrorMessage;
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_VeeForm, {
        as: "div",
        onSubmit,
        "validation-schema": unref(schema)
      }, {
        default: withCtx(({ meta }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}><div class="${ssrRenderClass([!meta.valid && meta.touched ? "error" : "", "input_wrapper_types mb-20 md:max-w-[90%] mx-auto"])}"${_scopeId}><h5 class="text-sm text-text-dark mb-2"${_scopeId}>${ssrInterpolate(_ctx.$t("labels.choose"))}</h5><div class="flex flex-wrap justify-around"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VeeField, {
              name: "auth_type",
              type: "radio",
              value: "client",
              modelValue: unref(user_type),
              "onUpdate:modelValue": ($event) => isRef(user_type) ? user_type.value = $event : null
            }, {
              default: withCtx(({ field }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between flex-wrap"${_scopeId2}><div class="label"${_scopeId2}><label for="client_type" class="${ssrRenderClass([{ checked: field.checked }, "cursor-pointer"])}"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} alt="client_icon"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(_ctx.$t("labels.client"))}</span></label><input${ssrRenderAttrs(mergeProps({ id: "client_type" }, field, { type: "radio" }))}${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between flex-wrap" }, [
                      createVNode("div", { class: "label" }, [
                        createVNode("label", {
                          for: "client_type",
                          class: ["cursor-pointer", { checked: field.checked }]
                        }, [
                          createVNode("img", {
                            src: _imports_0,
                            alt: "client_icon"
                          }),
                          createVNode("span", null, toDisplayString(_ctx.$t("labels.client")), 1)
                        ], 2),
                        createVNode("input", mergeProps({
                          onChange: ($event) => selectUserType("client"),
                          id: "client_type"
                        }, field, { type: "radio" }), null, 16, ["onChange"])
                      ])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VeeField, {
              name: "auth_type",
              type: "radio",
              value: "lawyer",
              modelValue: unref(user_type),
              "onUpdate:modelValue": ($event) => isRef(user_type) ? user_type.value = $event : null
            }, {
              default: withCtx(({ field }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between flex-wrap"${_scopeId2}><div class="label"${_scopeId2}><label for="lawyer_type" class="${ssrRenderClass([{ checked: field.checked }, "cursor-pointer"])}"${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} alt="lawyer_icon"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(_ctx.$t("labels.lawyer"))}</span></label><input${ssrRenderAttrs(mergeProps({ id: "lawyer_type" }, field, {
                    class: "checked",
                    type: "radio"
                  }))}${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between flex-wrap" }, [
                      createVNode("div", { class: "label" }, [
                        createVNode("label", {
                          for: "lawyer_type",
                          class: ["cursor-pointer", { checked: field.checked }]
                        }, [
                          createVNode("img", {
                            src: _imports_1,
                            alt: "lawyer_icon"
                          }),
                          createVNode("span", null, toDisplayString(_ctx.$t("labels.lawyer")), 1)
                        ], 2),
                        createVNode("input", mergeProps({
                          onChange: ($event) => selectUserType("lawyer"),
                          id: "lawyer_type"
                        }, field, {
                          class: "checked",
                          type: "radio"
                        }), null, 16, ["onChange"])
                      ])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_VeeErrorMessage, {
              class: "text-red-500 text-sm",
              name: "auth_type"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_nuxt_link, {
              to: _ctx.localePath("/auth/login"),
              disabled: !meta.valid,
              class: "base-btn w-full"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("BUTTONS.next"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("BUTTONS.next")), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</form>`);
          } else {
            return [
              createVNode("form", null, [
                createVNode("div", {
                  class: ["input_wrapper_types mb-20 md:max-w-[90%] mx-auto", !meta.valid && meta.touched ? "error" : ""]
                }, [
                  createVNode("h5", { class: "text-sm text-text-dark mb-2" }, toDisplayString(_ctx.$t("labels.choose")), 1),
                  createVNode("div", { class: "flex flex-wrap justify-around" }, [
                    createVNode(_component_VeeField, {
                      name: "auth_type",
                      type: "radio",
                      value: "client",
                      modelValue: unref(user_type),
                      "onUpdate:modelValue": ($event) => isRef(user_type) ? user_type.value = $event : null
                    }, {
                      default: withCtx(({ field }) => [
                        createVNode("div", { class: "flex items-center justify-between flex-wrap" }, [
                          createVNode("div", { class: "label" }, [
                            createVNode("label", {
                              for: "client_type",
                              class: ["cursor-pointer", { checked: field.checked }]
                            }, [
                              createVNode("img", {
                                src: _imports_0,
                                alt: "client_icon"
                              }),
                              createVNode("span", null, toDisplayString(_ctx.$t("labels.client")), 1)
                            ], 2),
                            createVNode("input", mergeProps({
                              onChange: ($event) => selectUserType("client"),
                              id: "client_type"
                            }, field, { type: "radio" }), null, 16, ["onChange"])
                          ])
                        ])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_VeeField, {
                      name: "auth_type",
                      type: "radio",
                      value: "lawyer",
                      modelValue: unref(user_type),
                      "onUpdate:modelValue": ($event) => isRef(user_type) ? user_type.value = $event : null
                    }, {
                      default: withCtx(({ field }) => [
                        createVNode("div", { class: "flex items-center justify-between flex-wrap" }, [
                          createVNode("div", { class: "label" }, [
                            createVNode("label", {
                              for: "lawyer_type",
                              class: ["cursor-pointer", { checked: field.checked }]
                            }, [
                              createVNode("img", {
                                src: _imports_1,
                                alt: "lawyer_icon"
                              }),
                              createVNode("span", null, toDisplayString(_ctx.$t("labels.lawyer")), 1)
                            ], 2),
                            createVNode("input", mergeProps({
                              onChange: ($event) => selectUserType("lawyer"),
                              id: "lawyer_type"
                            }, field, {
                              class: "checked",
                              type: "radio"
                            }), null, 16, ["onChange"])
                          ])
                        ])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode(_component_VeeErrorMessage, {
                    class: "text-red-500 text-sm",
                    name: "auth_type"
                  })
                ], 2),
                createVNode(_component_nuxt_link, {
                  to: _ctx.localePath("/auth/login"),
                  disabled: !meta.valid,
                  class: "base-btn w-full"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("BUTTONS.next")), 1)
                  ]),
                  _: 2
                }, 1032, ["to", "disabled"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(user_type) == "client") {
        _push(`<p class="mt-5 text-center text-secondary mb-0 font-sm font-medium">${ssrInterpolate(_ctx.$t("labels.dontHaveAnAccount"))} `);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: _ctx.localePath("/auth/register"),
          class: "text-primary ms-1"
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
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/auth/AuthSelectType.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {
  __name: "login-type",
  __ssrInlineRender: true,
  setup(__props) {
    const i18n = useI18n();
    useHead({
      title: i18n.t("NAV.login")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_auth_select_type = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "auth_login pt-11 xl:pt-0" }, _attrs))}><form class="w-full md:max-w-xl mx-auto xl:mx-0"><h1 class="text-4xl md:text-5xl capitalize font-bold mb-11"><span class="text-4xl leading-9">${ssrInterpolate(_ctx.$t("HEADERS.hello"))}</span><br> ${ssrInterpolate(_ctx.$t("HEADERS.welcomeBack"))}</h1><div class="login_type">`);
      _push(ssrRenderComponent(_component_auth_select_type, null, null, _parent));
      _push(`</div></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login-type.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-type-2be04b15.mjs.map
