import { i as defineNuxtRouteMiddleware, n as navigateTo } from '../server.mjs';
import { u as useCookie } from './cookie-83deb137.mjs';
import 'vue';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ufo';
import '@intlify/core-base';
import 'cookie-es';
import 'is-https';
import 'defu';
import 'vue/server-renderer';
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

const guest = /* @__PURE__ */ defineNuxtRouteMiddleware((to, from) => {
  if (!!useCookie("session-token").value) {
    return navigateTo("/");
  }
});

export { guest as default };
//# sourceMappingURL=guest-65289c34.mjs.map
