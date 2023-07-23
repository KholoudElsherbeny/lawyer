import { Field, ErrorMessage } from 'vee-validate';
import { useSSRContext, computed, ref, withAsyncContext, watch, unref, isRef, withCtx, mergeProps, createVNode, withModifiers, toDisplayString, openBlock, createBlock, createTextVNode, Fragment, renderList, createCommentVNode } from 'vue';
import { u as useAPILazyFetch } from './useAPILazyFetch-30348240.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';

const _sfc_main = {
  __name: "InputPhone",
  __ssrInlineRender: true,
  props: ["modelValue", "name", "label"],
  emits: ["code_change", "update:modelValue"],
  async setup(__props, { emit }) {
    let __temp, __restore;
    const props = __props;
    const value = computed({
      get() {
        return props.modelValue;
      },
      set(newValue) {
        emit("update:modelValue", newValue);
      }
    });
    const countries = ref(null);
    const { data: res } = ([__temp, __restore] = withAsyncContext(() => useAPILazyFetch("general/countries", {
      method: "GET"
    })), __temp = await __temp, __restore(), __temp);
    watch(res, (res2) => {
      if (res2) {
        countries.value = res2.data;
        country.value = res2.data[0];
        emit("code_change", country.value);
      }
    });
    const country = ref(null);
    const show = ref(false);
    function selcetedCode(item) {
      country.value = item;
      emit("code_change", item);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VeeField = Field;
      const _component_VeeErrorMessage = ErrorMessage;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_VeeField, {
        name: __props.name,
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null
      }, {
        default: withCtx(({ field, meta }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([{
              error: !meta.valid && meta.touched
            }, "phone_wrapper"])}"${_scopeId}><label for="phone_nubmer" class="label"${_scopeId}>${ssrInterpolate(_ctx.$t("labels.phoneNubmer"))}</label><div class="phone_wrapper_content relative flex items-center"${_scopeId}>`);
            if (unref(country)) {
              _push2(`<div class="me-2 static cursor-pointer"${_scopeId}><p class="flex items-center font-medium"${_scopeId}><img class="me-1"${ssrRenderAttr("src", unref(country).image)} alt="flag" width="25" height="22"${_scopeId}> +${ssrInterpolate(unref(country).phone_code)}</p><div id="dropdown_menu" class="${ssrRenderClass([{ active: unref(show) }, "dropdown_menu z-30"])}"${_scopeId}><!--[-->`);
              ssrRenderList(unref(countries), (item) => {
                _push2(`<div${_scopeId}><ul class=""${_scopeId}><li class="flex items-center ps-3 pe-1 py-3 cursor-pointer mx-1 border-b border-gray-200 hover:bg-gray-200"${_scopeId}><img class="me-1"${ssrRenderAttr("src", unref(country).image)} alt="flag" width="25" height="20"${_scopeId}><span class="text-sm"${_scopeId}> +${ssrInterpolate(item.phone_code)}</span></li></ul></div>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="phone_input flex-1 border-s border-text-dark ps-2"${_scopeId}><input${ssrRenderAttrs(mergeProps({ class: "appearance-none" }, field, {
              id: "phone_nubmer",
              type: "number",
              autocomplete: "off",
              placeholder: _ctx.$t("labels.enterYourPhoneNumber")
            }))}${_scopeId}></div></div></div>`);
            if (!meta.valid && meta.touched) {
              _push2(ssrRenderComponent(_component_VeeErrorMessage, {
                name: __props.name,
                as: "div",
                style: { "color": "red" },
                class: "help is-danger"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                class: ["phone_wrapper", {
                  error: !meta.valid && meta.touched
                }],
                onClick: withModifiers(() => {
                }, ["stop"])
              }, [
                createVNode("label", {
                  for: "phone_nubmer",
                  class: "label"
                }, toDisplayString(_ctx.$t("labels.phoneNubmer")), 1),
                createVNode("div", { class: "phone_wrapper_content relative flex items-center" }, [
                  unref(country) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "me-2 static cursor-pointer",
                    onClick: ($event) => show.value = !unref(show)
                  }, [
                    createVNode("p", { class: "flex items-center font-medium" }, [
                      (openBlock(), createBlock("img", {
                        class: "me-1",
                        key: unref(country).id,
                        src: unref(country).image,
                        alt: "flag",
                        width: "25",
                        height: "22"
                      }, null, 8, ["src"])),
                      createTextVNode(" +" + toDisplayString(unref(country).phone_code), 1)
                    ]),
                    createVNode("div", {
                      id: "dropdown_menu",
                      class: ["dropdown_menu z-30", { active: unref(show) }]
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(countries), (item) => {
                        return openBlock(), createBlock("div", {
                          key: item.id
                        }, [
                          createVNode("ul", { class: "" }, [
                            createVNode("li", {
                              onClick: ($event) => selcetedCode(item),
                              class: "flex items-center ps-3 pe-1 py-3 cursor-pointer mx-1 border-b border-gray-200 hover:bg-gray-200"
                            }, [
                              createVNode("img", {
                                class: "me-1",
                                src: unref(country).image,
                                alt: "flag",
                                width: "25",
                                height: "20"
                              }, null, 8, ["src"]),
                              createVNode("span", { class: "text-sm" }, " +" + toDisplayString(item.phone_code), 1)
                            ], 8, ["onClick"])
                          ])
                        ]);
                      }), 128))
                    ], 2)
                  ], 8, ["onClick"])) : createCommentVNode("", true),
                  createVNode("div", { class: "phone_input flex-1 border-s border-text-dark ps-2" }, [
                    createVNode("input", mergeProps({ class: "appearance-none" }, field, {
                      onClick: withModifiers(($event) => show.value = false, ["stop"]),
                      id: "phone_nubmer",
                      type: "number",
                      autocomplete: "off",
                      placeholder: _ctx.$t("labels.enterYourPhoneNumber")
                    }), null, 16, ["onClick", "placeholder"])
                  ])
                ])
              ], 10, ["onClick"]),
              !meta.valid && meta.touched ? (openBlock(), createBlock(_component_VeeErrorMessage, {
                key: 0,
                name: __props.name,
                as: "div",
                style: { "color": "red" },
                class: "help is-danger"
              }, null, 8, ["name"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/input/InputPhone.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main;

export { __nuxt_component_2 as _ };
//# sourceMappingURL=InputPhone-469dc3f9.mjs.map
