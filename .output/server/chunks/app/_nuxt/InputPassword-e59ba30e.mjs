import { Field, ErrorMessage } from 'vee-validate';
import { withCtx, mergeProps, createVNode, toDisplayString, withModifiers, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {
  props: ["modelValue", "name", "label", "placeholder"],
  emits: ["update:modelValue"],
  data() {
    return {
      showPassword: false
    };
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VeeField = Field;
  const _component_VeeErrorMessage = ErrorMessage;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_VeeField, {
    modelValue: $options.value,
    "onUpdate:modelValue": ($event) => $options.value = $event,
    name: $props.name
  }, {
    default: withCtx(({ field, meta }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="${ssrRenderClass([{
          error: !meta.valid && meta.touched
        }, "input_wrapper"])}"${_scopeId}><label${ssrRenderAttr("for", $props.label)} class="${ssrRenderClass([$options.value ? "label_active" : "", "label"])}"${_scopeId}>${ssrInterpolate($props.label ? _ctx.$t(`labels.${$props.label}`) : _ctx.$t(`labels.${$props.name}`))}</label><div class="relative"${_scopeId}><input${ssrRenderAttrs(mergeProps(field, {
          autocomplete: "off",
          placeholder: $props.placeholder ? $props.placeholder : _ctx.$t("labels.enterYourPassword"),
          type: !$data.showPassword ? "password" : "text"
        }))}${_scopeId}><span class="${ssrRenderClass([$data.showPassword ? "fa-eye-slash" : "fa-eye", "far absolute top-1/2 end-3 -translate-y-1/2"])}"${_scopeId}></span></div></div>`);
        if (!meta.valid && meta.touched) {
          _push2(ssrRenderComponent(_component_VeeErrorMessage, {
            name: $props.name,
            as: "div",
            class: "text-red-500"
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode("div", {
            class: ["input_wrapper", {
              error: !meta.valid && meta.touched
            }]
          }, [
            createVNode("label", {
              for: $props.label,
              class: ["label", $options.value ? "label_active" : ""]
            }, toDisplayString($props.label ? _ctx.$t(`labels.${$props.label}`) : _ctx.$t(`labels.${$props.name}`)), 11, ["for"]),
            createVNode("div", { class: "relative" }, [
              createVNode("input", mergeProps(field, {
                autocomplete: "off",
                placeholder: $props.placeholder ? $props.placeholder : _ctx.$t("labels.enterYourPassword"),
                type: !$data.showPassword ? "password" : "text"
              }), null, 16, ["placeholder", "type"]),
              createVNode("span", {
                class: ["far absolute top-1/2 end-3 -translate-y-1/2", $data.showPassword ? "fa-eye-slash" : "fa-eye"],
                onClick: withModifiers(($event) => $data.showPassword = !$data.showPassword, ["stop"])
              }, null, 10, ["onClick"])
            ])
          ], 2),
          !meta.valid && meta.touched ? (openBlock(), createBlock(_component_VeeErrorMessage, {
            key: 0,
            name: $props.name,
            as: "div",
            class: "text-red-500"
          }, null, 8, ["name"])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/input/InputPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_4 as _ };
//# sourceMappingURL=InputPassword-e59ba30e.mjs.map
