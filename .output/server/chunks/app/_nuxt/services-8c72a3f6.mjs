globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { _ as __nuxt_component_0 } from './GeneralBaseSection-2f6a084d.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import './nuxt-link-28d4e889.mjs';
import 'ufo';
import '../server.mjs';
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
import 'ohash';
import 'unstorage';
import 'unstorage/drivers/fs';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'ipx';
import '@intlify/bundle-utils';

const _sfc_main = {
  __name: "services",
  __ssrInlineRender: true,
  setup(__props) {
    const services = [
      {
        id: 1,
        image: new URL(`@/assets/dammyImages/service1.png`, globalThis._importMeta_.url).href,
        icon: new URL(`@/assets/dammyImages/icon1.png`, globalThis._importMeta_.url).href,
        title: "<h2><span>criminal</span> Consultation</h2>",
        description: "<p>The firm was established in 1990 in Kolkata, India as an Intellectual Property Law Firm.</p> <p>Our exposure to the complexities in ambit of Intellectual Property Law gave us the impetus and spiration to diversify into other streams.</p>"
      },
      {
        id: 2,
        image: new URL(`@/assets/dammyImages/service2.png`, globalThis._importMeta_.url).href,
        icon: new URL(`@/assets/dammyImages/icon2.png`, globalThis._importMeta_.url).href,
        title: "<h2><span>criminal</span> Consultation</h2>",
        description: "<p>The firm was established in 1990 in Kolkata, India as an Intellectual Property Law Firm.</p> <p>Our exposure to the complexities in ambit of Intellectual Property Law gave us the impetus and spiration to diversify into other streams.</p>"
      },
      {
        id: 3,
        image: new URL(`@/assets/dammyImages/service3.png`, globalThis._importMeta_.url).href,
        icon: new URL(`@/assets/dammyImages/icon1.png`, globalThis._importMeta_.url).href,
        title: "<h2><span>criminal</span> Consultation</h2>",
        description: "<p>The firm was established in 1990 in Kolkata, India as an Intellectual Property Law Firm.</p> <p>Our exposure to the complexities in ambit of Intellectual Property Law gave us the impetus and spiration to diversify into other streams.</p>"
      },
      {
        id: 4,
        image: new URL(`@/assets/dammyImages/service4.png`, globalThis._importMeta_.url).href,
        icon: new URL(`@/assets/dammyImages/icon2.png`, globalThis._importMeta_.url).href,
        title: "<p><span>criminal</span> Consultation</p>",
        description: "<p>The firm was established in 1990 in Kolkata, India as an Intellectual Property Law Firm.</p> <p>Our exposure to the complexities in ambit of Intellectual Property Law gave us the impetus and spiration to diversify into other streams.</p>"
      },
      {
        id: 5,
        image: new URL(`@/assets/dammyImages/service5.png`, globalThis._importMeta_.url).href,
        icon: "@/assets/dammyImages/icon1.png",
        title: "<h2><span>criminal</span> Consultation</h2>",
        description: "<p>The firm was established in 1990 in Kolkata, India as an Intellectual Property Law Firm.</p> <p>Our exposure to the complexities in ambit of Intellectual Property Law gave us the impetus and spiration to diversify into other streams.</p>"
      },
      {
        id: 6,
        image: new URL(`@/assets/dammyImages/service1.png`, globalThis._importMeta_.url).href,
        icon: new URL(`@/assets/dammyImages/icon2.png`, globalThis._importMeta_.url).href,
        title: "<h2><span>criminal</span> Consultation</h2>",
        description: "<p>The firm was established in 1990 in Kolkata, India as an Intellectual Property Law Firm.</p> <p>Our exposure to the complexities in ambit of Intellectual Property Law gave us the impetus and spiration to diversify into other streams.</p>"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GeneralBaseSection = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(services, (service, index) => {
        _push(ssrRenderComponent(_component_GeneralBaseSection, {
          key: service.id,
          "section-data": service,
          index,
          button: _ctx.$t("BUTTONS.readMore"),
          route: _ctx.$t("BUTTONS.readMore")
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=services-8c72a3f6.mjs.map
