import { e as useLocalePath$1, d as useRouter, f as useRoute, g as getComposer, h as useNuxtApp } from '../server.mjs';

function useLocalePath() {
  return useLocalePath$1({
    router: useRouter(),
    route: useRoute(),
    i18n: getComposer(useNuxtApp().$i18n)
  });
}

export { useLocalePath as u };
//# sourceMappingURL=composables-a79e1cb2.mjs.map
