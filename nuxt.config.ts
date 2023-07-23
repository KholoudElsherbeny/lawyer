// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    ssr: true,
    // ========== START:: APP CONFIGURATIONS ========== //
    app: {
        // Start:: Head Configurations //
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/static/logo.png' }
            ],
            style: [],
            script: [],
            noscript: []
        },
        // End:: Head Configurations //
    },
    css: [
        'primevue/resources/primevue.css',
        'primevue/resources/themes/tailwind-light/theme.css',
        "primeicons/primeicons.css"
    ],
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge',
        'nuxt-icons',
        '@nuxtjs/html-validator',

        '@vite-pwa/nuxt',
        'nuxt-swiper',
        [
            '@nuxtjs/i18n',
            {
                locales: [
                    {
                        name: 'English',
                        code: 'en',
                        iso: 'en-US',
                        file: 'en.json',
                        dir: 'ltr',
                    },
                    {
                        name: 'عربي ',
                        code: 'ar',
                        iso: 'ar-AR',
                        file: 'ar.json',
                        dir: 'rtl',
                    },
                ],
                lazy: true,
                langDir: 'locales/',
                defaultLocale: 'en',
                detectBrowserLanguage: {
                    useCookie: true,
                    cookieKey: 'lawyer_website_lang',
                    alwaysRedirect: true,
                    fallbackLocale: 'en'
                },
                vueI18nLoader: true,
            }
        ],
        [
            '@pinia/nuxt', {

                autoImports: [
                    // automatically imports `defineStore`
                    'defineStore', // import { defineStore } from 'pinia'
                    ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
                ],

            }
        ],
        [
            '@vee-validate/nuxt',
            {
                // disable or enable auto imports
                autoImports: true,
                // Use different names for components
                componentNames: {
                    Form: 'VeeForm',
                    Field: 'VeeField',
                    ErrorMessage: 'VeeErrorMessage',
                },
            },
        ],

    ],

    tailwindcss: {
        cssPath: '~/assets/style/tailwind.scss',

    },
    // ========== START:: NUXT APP PLUGINS CONFIGURATIONS ========== //
    plugins: [
        '~/plugins/main.ts',
        '~/plugins/primeVue.ts',
        '~/plugins/i18n.client.ts',
        '~/plugins/vue-toastification.client'

    ],
    // ========== END:: NUXT APP PLUGINS CONFIGURATIONS ========== //

    runtimeConfig: {
        public: {
            baseURL: "https://lawyer.phpv8.aait-d.com/api/",
        },
    },


    build: {
        transpile: ['primevue']
    },



    vite: {

        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "~/assets/style/main.scss";@import "~/assets/style/all.min.css";
                                    @import "~/assets/style/abstracts/_mixins.scss";
                                    @import "~/assets/style/component/_general.scss";
                                    @import "~/assets/style/abstracts/_variables.scss";`
                }
            }
        },
    },
    // ========== START:: DEVELOPMENT SERVER CONFIGURATIONS ========== //
    swiper: {
        // Swiper options
        //----------------------
        // prefix: 'Swiper',
        // styleLang: 'css',
        // modules: ['navigation', 'pagination'], // all modules are imported by default
    },
    dev: true,
    devServer: {
        https: false,
        host: "localhost",
        port: 3000,
        url: "http://localhost:3000"
    },
    // ========== END:: DEVELOPMENT SERVER CONFIGURATIONS ========== //
})
