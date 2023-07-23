globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-28d4e889.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, unref, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './GeneralBaseSection-2f6a084d.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, A11y } from 'swiper';
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

const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "home_slider pt-44 pb-24 min-h-[85vh] flex items-center" }, _attrs))}><div class="container mx-auto"><div class="w-full md:w-1/2"><h1 class="title text-white text-2xl xl:text-7xl md:text-3xl"> Expert <span class="text-primary">Advisory legal </span> Service </h1><p class="desc text-white text-xl mt-4"> The firm was established in 1990 in Kolkata, India as an Intellectual Property Law Firm. </p><div class="actions mt-11">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "base-btn",
    to: _ctx.localePath("/")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("NAV.contactUs"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("NAV.contactUs")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "base-link",
    to: _ctx.localePath("/")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("BUTTONS.seeMore"))} <i class="${ssrRenderClass([
          _ctx.$i18n.locale == "en" ? " pi-arrow-up-right" : " pi-arrow-up-left",
          "pi"
        ])}"${_scopeId}></i>`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("BUTTONS.seeMore")) + " ", 1),
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
  _push(`</div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeSlider.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-20" }, _attrs))}><div class="inner_items flex flex-wrap items-center justify-center md:justify-between"><!--[-->`);
  ssrRenderList(4, (n) => {
    _push(`<div class="item w-52 h-52 mb-14 rounded-full border-2 border-dashed me-8 md:me-0 border-primary flex justify-center items-center flex-col"><h3 class="count mb-5 text-4xl font-bold">+500</h3><p class="text-text-dark text-xl">Happy Clients</p></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeStats.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "" + buildAssetsURL("icno2.e51f06c1.svg");
const _sfc_main$2 = {
  __name: "HomeSolutions",
  __ssrInlineRender: true,
  setup(__props) {
    const breakpoints = {
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "solution_section_swiper" }, _attrs))}><h2 class="title mb-20 md:w-6/12 font-medium"><span>Law Solutions</span> to solve your problems </h2>`);
      _push(ssrRenderComponent(_component_Swiper, {
        modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay), unref(Navigation), unref(A11y)],
        "slides-per-view": 1,
        "space-between": 30,
        breakpoints,
        navigation: "",
        loop: true,
        autoplay: {
          delay: 8e3,
          disableOnInteraction: true
        },
        ref: "swiper"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(10, (slide) => {
              _push2(ssrRenderComponent(_component_SwiperSlide, { key: slide }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="solution_card rounded-2xl bg-[#F5FBFF] p-8"${_scopeId2}><div class="icon mb-20"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} alt="icon"${_scopeId2}></div><div class="card_content"${_scopeId2}><h3 class="text-secondary text-xl font-bold capitalize mb-2"${_scopeId2}> criminal </h3><p class="text-[#697E95] w-9/12"${_scopeId2}>benefits beyond legal support</p></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "solution_card rounded-2xl bg-[#F5FBFF] p-8" }, [
                        createVNode("div", { class: "icon mb-20" }, [
                          createVNode("img", {
                            src: _imports_0,
                            alt: "icon"
                          })
                        ]),
                        createVNode("div", { class: "card_content" }, [
                          createVNode("h3", { class: "text-secondary text-xl font-bold capitalize mb-2" }, " criminal "),
                          createVNode("p", { class: "text-[#697E95] w-9/12" }, "benefits beyond legal support")
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(10, (slide) => {
                return createVNode(_component_SwiperSlide, { key: slide }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "solution_card rounded-2xl bg-[#F5FBFF] p-8" }, [
                      createVNode("div", { class: "icon mb-20" }, [
                        createVNode("img", {
                          src: _imports_0,
                          alt: "icon"
                        })
                      ]),
                      createVNode("div", { class: "card_content" }, [
                        createVNode("h3", { class: "text-secondary text-xl font-bold capitalize mb-2" }, " criminal "),
                        createVNode("p", { class: "text-[#697E95] w-9/12" }, "benefits beyond legal support")
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeSolutions.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "HomeContent",
  __ssrInlineRender: true,
  setup(__props) {
    const service = {
      id: 1,
      image: new URL(`~/assets/dammyImages/service1.png`, globalThis._importMeta_.url).href,
      title: "<h2><span>Law Solutions</span> to solve your problems</h2>",
      description: "<p class='mb-5'>The firm was established in 1990 in Kolkata, India as an Intellectual Property Law Firm.</p> <p>Our exposure to the complexities in ambit of Intellectual Property Law gave us the impetus and spiration to diversify into other streams.</p>"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GeneralBaseSection = __nuxt_component_0$1;
      const _component_home_stats = __nuxt_component_1$1;
      const _component_home_solutions = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home_body rounded-[2rem] -translate-y-8 bg-white" }, _attrs))}><div class="container mx-auto"><div class="home_content py-11">`);
      _push(ssrRenderComponent(_component_GeneralBaseSection, {
        "section-data": service,
        button: _ctx.$t("BUTTONS.readMore"),
        route: "/"
      }, null, _parent));
      _push(ssrRenderComponent(_component_home_stats, null, null, _parent));
      _push(ssrRenderComponent(_component_home_solutions, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_home_slider = __nuxt_component_0;
  const _component_home_content = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "home_wrapper" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_home_slider, null, null, _parent));
  _push(ssrRenderComponent(_component_home_content, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-f92a3f8b.mjs.map
