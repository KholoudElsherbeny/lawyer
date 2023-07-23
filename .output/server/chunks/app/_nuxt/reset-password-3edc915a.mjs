import { _ as __nuxt_component_0 } from './nuxt-link-28d4e889.mjs';
import { configure, Form } from 'vee-validate';
import { _ as __nuxt_component_2 } from './InputPhone-469dc3f9.mjs';
import { d as useRouter, u as useI18n, a as useHead, b as useRuntimeConfig } from '../server.mjs';
import { reactive, ref, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useCookie } from './cookie-83deb137.mjs';
import { u as useLocalePath } from './composables-a79e1cb2.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import * as yup from 'yup';
import { useToast } from 'vue-toastification';
import 'ufo';
import './useAPILazyFetch-30348240.mjs';
import 'ohash';
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
  __name: "reset-password",
  __ssrInlineRender: true,
  setup(__props) {
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
    useHead({
      title: i18n.t("NAV.resetPassword")
    });
    const localePath = useLocalePath();
    const reset_form = reactive({
      phone: null,
      phone_code: null
    });
    const phoneLimit = ref(null);
    function updateCode(code) {
      reset_form.phone_code = code.phone_code;
      phoneLimit.value = code.phone_number_limit;
    }
    const schema = yup.object({
      phone: yup.number().required()
    });
    async function onSubmit() {
      const frmData = new FormData();
      frmData.append("phone", reset_form.phone);
      frmData.append("phone_code", reset_form.phone_code);
      const phoneToVerify = useCookie("phoneToVerify", {
        maxAge: 30 * 60
      });
      try {
        await $fetch(
          `${config.public.baseURL}${useCookie("user_type").value}_web/send_code`,
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
        phoneToVerify.value = {
          phone: reset_form.phone,
          phone_code: reset_form.phone_code,
          type: "reset"
        };
        router.push(localePath("/auth/verify"));
      } catch (err) {
        toast.error(err.response._data.message);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_VeeForm = Form;
      const _component_input_phone = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "auth_login" }, _attrs))}><form class="w-full md:max-w-xl mx-auto xl:mx-0">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath)("/auth/login"),
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
      _push(`<h1 class="mb-3"><span class="text-5xl capitalize font-bold leading-9 block">${ssrInterpolate(_ctx.$t("HEADERS.resetPassword"))}</span></h1><p class="max-w-[70%] inline-block mt-3 mb-4"><span class="text-base text-text-dark me-1">${ssrInterpolate(_ctx.$t("HEADERS.pleaseEnterYourPhoneNumberBelowToRecoveryYourPassword"))}</span></p><div class="reset_form mt-11">`);
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
              modelValue: unref(reset_form).phone,
              "onUpdate:modelValue": ($event) => unref(reset_form).phone = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><button type="submit"${ssrIncludeBooleanAttr(!meta.valid) ? " disabled" : ""} class="base-btn w-full mt-11"${_scopeId}>${ssrInterpolate(_ctx.$t("BUTTONS.send"))}</button></form>`);
          } else {
            return [
              createVNode("form", null, [
                createVNode("div", { class: "mb-2" }, [
                  createVNode(_component_input_phone, {
                    onCode_change: ($event) => updateCode($event),
                    name: "phone",
                    modelValue: unref(reset_form).phone,
                    "onUpdate:modelValue": ($event) => unref(reset_form).phone = $event
                  }, null, 8, ["onCode_change", "modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("button", {
                  type: "submit",
                  disabled: !meta.valid,
                  class: "base-btn w-full mt-11"
                }, toDisplayString(_ctx.$t("BUTTONS.send")), 9, ["disabled"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/reset-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=reset-password-3edc915a.mjs.map
