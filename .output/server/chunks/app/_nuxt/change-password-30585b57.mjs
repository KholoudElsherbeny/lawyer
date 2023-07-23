import { configure, Form } from 'vee-validate';
import { _ as __nuxt_component_4 } from './InputPassword-e59ba30e.mjs';
import { _ as _imports_1, a as __nuxt_component_1 } from './success-74916591.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-28d4e889.mjs';
import { u as useI18n, a as useHead, b as useRuntimeConfig } from '../server.mjs';
import { reactive, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { u as useCookie } from './cookie-83deb137.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderTeleport, ssrRenderAttr } from 'vue/server-renderer';
import * as yup from 'yup';
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

const _sfc_main = {
  __name: "change-password",
  __ssrInlineRender: true,
  setup(__props) {
    const i18n = useI18n();
    useHead({
      title: i18n.t("NAV.changePassword")
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
    const config = /* @__PURE__ */ useRuntimeConfig();
    const change_form = reactive({
      newPassword: null,
      confirmNewPassword: null
    });
    const schema = yup.object({
      newPassword: yup.string().required(),
      confirmNewPassword: yup.string().required().oneOf([yup.ref("newPassword")], i18n.t("labels.passwordDontMatch")).label(i18n.t("labels.confirmPasswordIsARequired"))
    });
    const loggedInSuccess = ref(false);
    async function onSubmit() {
      const dataVerify = useCookie("phoneToVerify");
      const frmData = new FormData();
      frmData.append("password", change_form.newPassword);
      frmData.append("password_confirmation", change_form.confirmNewPassword);
      frmData.append("phone", dataVerify.value.phone);
      frmData.append("phone_code", dataVerify.value.phone_code);
      frmData.append("code", useCookie("verify_code").value);
      const phoneToVerify = useCookie("phoneToVerify");
      try {
        await $fetch(
          `${config.public.baseURL}${useCookie("user_type").value}_web/reset_password`,
          {
            method: "POST",
            body: frmData,
            headers: {
              Accept: "application/json",
              lang: i18n.locale.value,
              "Accept-Language": i18n.locale.value
            }
          }
        );
        phoneToVerify.value = null;
        loggedInSuccess.value = true;
        useCookie("verify_code").value = null;
      } catch (err) {
        toast.error(err.response._data.message);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VeeForm = Form;
      const _component_input_password = __nuxt_component_4;
      const _component_general_notify = __nuxt_component_1;
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "auth_login" }, _attrs))}><form class="w-full md:max-w-xl mx-auto xl:mx-0"><h1 class="mb-8 w-full"><span class="text-5xl capitalize font-bold leading-9">${ssrInterpolate(_ctx.$t("HEADERS.changePassword"))}</span></h1><div class="change_form"><div>`);
      _push(ssrRenderComponent(_component_VeeForm, {
        as: "div",
        onSubmit,
        "validation-schema": unref(schema)
      }, {
        default: withCtx(({ meta }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}><div class="mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_password, {
              name: "newPassword",
              modelValue: unref(change_form).newPassword,
              "onUpdate:modelValue": ($event) => unref(change_form).newPassword = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_password, {
              placeholder: _ctx.$t("labels.enterTheConfirmationPassword"),
              name: "confirmNewPassword",
              modelValue: unref(change_form).confirmNewPassword,
              "onUpdate:modelValue": ($event) => unref(change_form).confirmNewPassword = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><button type="submit"${ssrIncludeBooleanAttr(!meta.valid) ? " disabled" : ""} class="base-btn w-full mt-11"${_scopeId}>${ssrInterpolate(_ctx.$t("BUTTONS.change"))}</button></form>`);
          } else {
            return [
              createVNode("form", null, [
                createVNode("div", { class: "mb-4" }, [
                  createVNode(_component_input_password, {
                    name: "newPassword",
                    modelValue: unref(change_form).newPassword,
                    "onUpdate:modelValue": ($event) => unref(change_form).newPassword = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "mb-2" }, [
                  createVNode(_component_input_password, {
                    placeholder: _ctx.$t("labels.enterTheConfirmationPassword"),
                    name: "confirmNewPassword",
                    modelValue: unref(change_form).confirmNewPassword,
                    "onUpdate:modelValue": ($event) => unref(change_form).confirmNewPassword = $event
                  }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("button", {
                  type: "submit",
                  disabled: !meta.valid,
                  class: "base-btn w-full mt-11"
                }, toDisplayString(_ctx.$t("BUTTONS.change")), 9, ["disabled"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></form>`);
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(_component_general_notify, {
          style: unref(loggedInSuccess) ? null : { display: "none" }
        }, {
          default: withCtx((_, _push3, _parent2, _scopeId) => {
            if (_push3) {
              _push3(`<img class="icon"${ssrRenderAttr("src", _imports_1)} alt="success icon"${_scopeId}><h4${_scopeId}>${ssrInterpolate(_ctx.$t("HEADERS.passwordChangeSuccessfully"))}</h4><p${_scopeId}>${ssrInterpolate(_ctx.$t(
                "HEADERS.getHelpToWriteAwillMakeAPowerOfAttorneyPrepareAhealthcare"
              ))}</p>`);
              _push3(ssrRenderComponent(_component_nuxt_link, {
                onClick: ($event) => loggedInSuccess.value = false,
                to: _ctx.localePath("/auth/login"),
                class: "base-btn w-full mt-8"
              }, {
                default: withCtx((_2, _push4, _parent3, _scopeId2) => {
                  if (_push4) {
                    _push4(`${ssrInterpolate(_ctx.$t("BUTTONS.login"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("BUTTONS.login")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode("img", {
                  class: "icon",
                  src: _imports_1,
                  alt: "success icon"
                }),
                createVNode("h4", null, toDisplayString(_ctx.$t("HEADERS.passwordChangeSuccessfully")), 1),
                createVNode("p", null, toDisplayString(_ctx.$t(
                  "HEADERS.getHelpToWriteAwillMakeAPowerOfAttorneyPrepareAhealthcare"
                )), 1),
                createVNode(_component_nuxt_link, {
                  onClick: ($event) => loggedInSuccess.value = false,
                  to: _ctx.localePath("/auth/login"),
                  class: "base-btn w-full mt-8"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("BUTTONS.login")), 1)
                  ]),
                  _: 1
                }, 8, ["onClick", "to"])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/change-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=change-password-30585b57.mjs.map
