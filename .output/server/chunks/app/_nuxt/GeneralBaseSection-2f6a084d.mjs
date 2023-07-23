import { _ as __nuxt_component_0$1 } from './nuxt-link-28d4e889.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';

const _sfc_main = {
  __name: "GeneralBaseSection",
  __ssrInlineRender: true,
  props: {
    sectionData: { required: true },
    button: { required: false },
    route: { required: false },
    index: { required: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_buttion = resolveComponent("buttion");
      const _component_nuxt_link = __nuxt_component_0$1;
      if (__props.sectionData) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "base_section_wrapper" }, _attrs))}><div class="container mx-auto"><div class="flex flex-wrap justify-center">`);
        if (__props.sectionData.image) {
          _push(`<div class="image_wrapper mb-8 md:mb-0 md:w-1/2"><figure><img${ssrRenderAttr("src", __props.sectionData.image)} class="h-auto rounded-lg" alt="image"></figure></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="text_section_wrapper ps-4 md:w-1/2">`);
        if (__props.sectionData.icon) {
          _push(`<div class="icon_wrapper"><img${ssrRenderAttr("src", __props.sectionData.icon)} width="20" height="20" alt="icon"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="main_title mb-3">${__props.sectionData.title}</div><div class="main_description">${__props.sectionData.description}</div>`);
        if (__props.sectionData.button) {
          _push(ssrRenderComponent(_component_buttion, { class: "base-btn" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(__props.button)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(__props.button), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (__props.route) {
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: _ctx.localePath(__props.route),
            class: "base-link mt-8"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("BUTTONS.readMore"))} <i class="${ssrRenderClass([
                  _ctx.$i18n.locale == "en" ? " pi-arrow-up-right" : " pi-arrow-up-left",
                  "pi"
                ])}"${_scopeId}></i>`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("BUTTONS.readMore")) + " ", 1),
                  createVNode("i", {
                    class: [
                      "pi",
                      _ctx.$i18n.locale == "en" ? " pi-arrow-up-right" : " pi-arrow-up-left"
                    ]
                  }, null, 2)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/general/GeneralBaseSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _ };
//# sourceMappingURL=GeneralBaseSection-2f6a084d.mjs.map
