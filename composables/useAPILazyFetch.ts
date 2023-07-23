
import { useLazyFetch } from "#app"
type useLazyFetchType = typeof useLazyFetch
// import { useI18n } from "@nuxtjs/i18n/dist/runtime/composables"
// wrap useFetch with configuration needed to talk to our API
export const useAPILazyFetch: useLazyFetchType = (path, options = {}) => {


    const config = useRuntimeConfig()
    if (process.client) {
        const i18n = useI18n()
        options.baseURL = config.public.baseURL
        options.headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            lang: i18n.locale.value,
            'Accept-Language': i18n.locale.value,
        }
        const token = useCookie("session-token").value;
        if (token) {
            options.headers['Authorization'] = `Bearer ${token}`
        }
    }

    // modify options as needed

    return useLazyFetch(path, options)



}