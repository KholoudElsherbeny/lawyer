import { watch } from 'vue';
import { k as defineStore } from '../server.mjs';
import { u as useAPILazyFetch } from './useAPILazyFetch-30348240.mjs';

const useGlobalStore = defineStore("global", {
  state: () => ({
    profile: null,
    mainSettings: null
  }),
  getters: {
    getProfile: (state) => state.profile,
    getSettings: (state) => state.mainSettings
  },
  actions: {
    async getMainServices() {
      const { data } = await useAPILazyFetch("/get-main-services", {
        method: "GET"
      });
      watch(data, (data2) => {
        this.mainServices = data2.data;
      });
    },
    async fetchProfile() {
    }
  }
});

export { useGlobalStore as u };
//# sourceMappingURL=global-6d3c1b18.mjs.map
