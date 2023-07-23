export const useGlobalStore = defineStore('global', {
  state: () => ({
    profile: null,
    mainSettings: null,
  }),

  getters: {
    getProfile: (state) => state.profile,
    getSettings: (state) => state.mainSettings,
  },
  actions: {

    async getMainServices() {
      const { data } = await useAPILazyFetch('/get-main-services', {
        method: 'GET',
      })
      watch(data, (data) => {
        this.mainServices = data.data
      })
    },
    async fetchProfile() {
      if (process.client) {

        const { data } = await useAPILazyFetch(`/${useCookie('user_type').value}_web/profile`, {
          method: 'GET',
        })
        watch(data, (data) => {
          this.profile = data.data
        })
      }

    },
  },
})
