<template>
  <header id="header" class="absolute left-0 w-full bg-transparent bg-secondary">
    <div class=" container mx-auto">
      <nav
        class="border-b border-primary py-5 flex items-center justify-between "
      >
        <div class="logo">
          <nuxt-link class="text-primary" :to="localePath('/')">
            <img src="~/assets/images/logo/logo.svg" alt="logo"
          /></nuxt-link>
        </div>

        <div class="list_menu flex items-center">
          <div class="auth flex items-center pe-4" v-if="profile">
            <div class="avatar">
              <img
                :src="profile.image"
                :alt="profile.full_name"
                width="50"
                height="50"
                class="rounded-full"
              />
            </div>
            <p class="ms-2 text-primary font-bold text-lg">
              {{ profile.full_name }}
            </p>
          </div>
          <div class="auth pe-4" v-else>
            <nuxt-link
              class="text-primary pe-4 text-sm md:text-lg"
              :to="localePath('/auth/register')"
              >{{ $t("BUTTONS.createAccount") }}</nuxt-link
            >
            <nuxt-link
              class="text-primary text-sm md:text-lg"
              :to="localePath('/auth/login-type')"
              >{{ $t("BUTTONS.login") }}</nuxt-link
            >
          </div>
          <div class="menu border-primary border-s ps-4">
            <button type="button">
              <img src="~/assets/images/icons/list.svg" alt="list" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useGlobalStore } from "~/stores/global";

const store = useGlobalStore();
const isLoggedIn = !!useCookie("session-token").value;

if (isLoggedIn) {
  store.fetchProfile();
}

const profile = computed(() => store.getProfile);
</script>

<style lang="scss"></style>
