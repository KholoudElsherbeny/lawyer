import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { Form } from 'vee-validate';
import { _ as _imports_1, a as __nuxt_component_1 } from './success-74916591.mjs';
import { u as useI18n, d as useRouter, a as useHead, b as useRuntimeConfig } from '../server.mjs';
import { ref, reactive, mergeProps, unref, withCtx, isRef, createVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useCookie } from './cookie-83deb137.mjs';
import { u as useLocalePath } from './composables-a79e1cb2.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderTeleport } from 'vue/server-renderer';
import VOtpInput from 'vue3-otp-input';
import { useToast } from 'vue-toastification';
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

const _imports_0 = "" + buildAssetsURL("icon_edit.d79809a9.svg");
const _sfc_main = {
  __name: "verify",
  __ssrInlineRender: true,
  emits: ["change-step"],
  setup(__props, { emit }) {
    const i18n = useI18n();
    const config = /* @__PURE__ */ useRuntimeConfig();
    const verify_code = ref("");
    const router = useRouter();
    const localePath = useLocalePath();
    const phoneNumber = useCookie("phoneToVerify");
    const toast = useToast();
    const validation = reactive({
      valid: false,
      touched: false
    });
    function handleOnComplete(event) {
      validation.touched = false;
      validation.valid = true;
      verify_code.value = event;
    }
    function handleOnChange() {
      validation.touched = true;
      validation.valid = false;
    }
    const seconds = ref(59);
    const minutes = ref(0);
    function countDown() {
      let secondsInterval = setInterval(() => {
        seconds.value--;
        if (seconds.value <= 0) {
          clearTimeout(secondsInterval);
          if (minutes.value == 0)
            return;
        }
      }, 1e3);
    }
    countDown();
    const loggedInSuccess = ref(false);
    const message = ref(null);
    async function onSubmit() {
      const frmData = new FormData();
      frmData.append("code", verify_code.value);
      frmData.append("phone", phoneNumber.value.phone);
      frmData.append("phone_code", phoneNumber.value.phone_code);
      let url = "";
      if (phoneNumber.value.type == "new") {
        url = "verify_Phone";
      } else if (phoneNumber.value.type == "reset") {
        url = "check_code";
      }
      try {
        const res = await $fetch(`${config.public.baseURL}client_web/${url}`, {
          method: "POST",
          body: frmData
        });
        if (phoneNumber.value.type == "new") {
          message.value = res.message;
          loggedInSuccess.value = true;
          setTimeout(() => {
            loggedInSuccess.value = false;
            message.value = "";
          }, 3e3);
          phoneNumber.value = null;
          useCookie("session-token").value = res.data.token;
          router.push(localePath(`/`));
        } else {
          router.push(localePath(`/auth/change-password`));
          useCookie("verify_code", {
            maxAge: 30 * 60
          }).value = verify_code.value;
        }
      } catch (err) {
        toast.error(err.response._data.message);
      }
      validation.touched = false;
      validation.valid = true;
    }
    useHead({
      title: i18n.t("NAV.login")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VeeForm = Form;
      const _component_general_notify = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "auth_login" }, _attrs))}><form class="w-full md:max-w-xl mx-auto xl:mx-0"><h1 class="mb-3"><span class="text-5xl capitalize font-bold leading-9 block">${ssrInterpolate(_ctx.$t("HEADERS.verificationCode"))}</span></h1><p class="max-w-[60%] inline-block mt-3 mb-4"><span class="text-base text-text-dark me-1">${ssrInterpolate(_ctx.$t("HEADERS.enterTheVerification"))}</span>`);
      if (unref(phoneNumber)) {
        _push(`<span class="font-bold text-secondary">${ssrInterpolate("+" + unref(phoneNumber).phone_code + " " + unref(phoneNumber).phone)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p><h3 class="flex items-center font-medium text-primary mb-8"><img${ssrRenderAttr("src", _imports_0)} alt="edit icon" class="me-2"><span>${ssrInterpolate(_ctx.$t("HEADERS.editPhoneNumber"))}</span></h3><div class="register_form"><div>`);
      _push(ssrRenderComponent(_component_VeeForm, {
        as: "div",
        onSubmit
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}><div class="${ssrRenderClass([!unref(validation).valid && unref(validation).touched ? "error" : "", "input_wrapper otp_inputs justify-between max-w-[80%] mx-auto"])}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(VOtpInput), {
              ref: "otpInput",
              "input-classes": "otp-input",
              separator: " ",
              modelValue: unref(verify_code),
              "onUpdate:modelValue": ($event) => isRef(verify_code) ? verify_code.value = $event : null,
              "num-inputs": 4,
              "should-auto-focus": true,
              "input-type": "letter-numeric",
              onOnChange: handleOnChange,
              onOnComplete: handleOnComplete
            }, null, _parent2, _scopeId));
            _push2(`<p class="text-red-500 text-sm mb-0"${_scopeId}></p></div><button type="submit"${ssrIncludeBooleanAttr(!unref(validation).valid) ? " disabled" : ""} class="base-btn w-full mt-11"${_scopeId}>${ssrInterpolate(_ctx.$t("BUTTONS.send"))}</button></form><div class="flex justify-around items-center mt-9"${_scopeId}><div class="flex items-center"${_scopeId}><p class="mb-0 me-1"${_scopeId}>${ssrInterpolate(_ctx.$t("HEADERS.ifYouDontReceiveCode"))}</p><button${ssrIncludeBooleanAttr(unref(seconds) != 0 || unref(minutes) != 0) ? " disabled" : ""} class="text-primary font-medium"${_scopeId}>${ssrInterpolate(_ctx.$t("BUTTONS.resend"))}</button></div><span class="text-primary font-medium"${_scopeId}><bdi${_scopeId}>00:${ssrInterpolate(unref(seconds) < 10 ? "0" : "")}${ssrInterpolate(unref(seconds))}</bdi></span></div>`);
          } else {
            return [
              createVNode("form", null, [
                createVNode("div", {
                  class: ["input_wrapper otp_inputs justify-between max-w-[80%] mx-auto", !unref(validation).valid && unref(validation).touched ? "error" : ""]
                }, [
                  createVNode(unref(VOtpInput), {
                    ref: "otpInput",
                    "input-classes": "otp-input",
                    separator: " ",
                    modelValue: unref(verify_code),
                    "onUpdate:modelValue": ($event) => isRef(verify_code) ? verify_code.value = $event : null,
                    "num-inputs": 4,
                    "should-auto-focus": true,
                    "input-type": "letter-numeric",
                    onOnChange: handleOnChange,
                    onOnComplete: handleOnComplete
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("p", { class: "text-red-500 text-sm mb-0" })
                ], 2),
                createVNode("button", {
                  type: "submit",
                  disabled: !unref(validation).valid,
                  class: "base-btn w-full mt-11"
                }, toDisplayString(_ctx.$t("BUTTONS.send")), 9, ["disabled"])
              ]),
              createVNode("div", { class: "flex justify-around items-center mt-9" }, [
                createVNode("div", { class: "flex items-center" }, [
                  createVNode("p", { class: "mb-0 me-1" }, toDisplayString(_ctx.$t("HEADERS.ifYouDontReceiveCode")), 1),
                  createVNode("button", {
                    disabled: unref(seconds) != 0 || unref(minutes) != 0,
                    class: "text-primary font-medium"
                  }, toDisplayString(_ctx.$t("BUTTONS.resend")), 9, ["disabled"])
                ]),
                createVNode("span", { class: "text-primary font-medium" }, [
                  createVNode("bdi", null, "00:" + toDisplayString(unref(seconds) < 10 ? "0" : "") + toDisplayString(unref(seconds)), 1)
                ])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/verify.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=verify-866cd356.mjs.map
