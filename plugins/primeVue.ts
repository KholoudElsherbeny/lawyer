import PrimeVue from "primevue/config";
import ToastService from 'primevue/toastservice';
// Importing PrimeVue Components
import Button from "primevue/button";
import Paginator from "primevue/paginator";
import InputText from "primevue/inputtext";
import Toast from 'primevue/toast';
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.use(ToastService, { ripple: true });

  // Register PrimeVue Components
  nuxtApp.vueApp.component('toast', Toast);
  nuxtApp.vueApp.component('pv-button', Button);
  nuxtApp.vueApp.component('Paginator', Paginator);
  nuxtApp.vueApp.component('InputText', InputText);
});
