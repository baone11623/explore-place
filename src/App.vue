<template>
  <div class="min-h-screen bg-gradient-to-b from-green-50 to-white">
    <TheHeader />
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <TheFooter />
  </div>
</template>

<script setup>
import { provide } from "vue";
import gsap from "gsap";
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";

provide("gsap", gsap);
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
