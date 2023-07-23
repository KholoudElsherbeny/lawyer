export default defineNuxtRouteMiddleware((to, from) => {
  if (!!useCookie('session-token').value) {
    return navigateTo("/");
  } else {
    if (!!!useCookie('phoneToVerify').value) {
      return navigateTo("/auth/login");
    }
  }

})