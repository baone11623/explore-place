<template>
  <header class="bg-white shadow-sm fixed w-full top-0 z-50">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <router-link to="/" class="text-2xl font-bold text-primary">
          Khám Phá Đà Lạt
        </router-link>

        <div class="hidden md:flex space-x-6">
          <router-link
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="text-gray-600 hover:text-primary transition-colors relative"
            :class="{
              'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary':
                $route.path === item.path ||
                ($route.path === '/' && item.path === '/') ||
                ($route.path.startsWith(item.path) && item.path !== '/'),
            }"
          >
            {{ item.name }}
          </router-link>
        </div>

        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden">
          <i
            :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'"
            class="text-xl"
          ></i>
        </button>
      </div>

      <!-- Mobile menu -->
      <div v-show="isMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="block px-3 py-2 text-gray-600 hover:text-primary transition-colors border-l-4"
            :class="{
              'border-primary text-primary bg-primary/5':
                $route.path === item.path ||
                ($route.path === '/' && item.path === '/') ||
                ($route.path.startsWith(item.path) && item.path !== '/'),
              'border-transparent':
                $route.path !== item.path &&
                !($route.path === '/' && item.path === '/') &&
                !($route.path.startsWith(item.path) && item.path !== '/'),
            }"
            @click="isMenuOpen = false"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const menuItems = [
  { name: "Trang Chủ", path: "/" },
  { name: "Nhà Hàng", path: "/restaurants" },
  { name: "Danh Lam", path: "/attractions" },
  { name: "Check-in", path: "/checkin" },
  { name: "Hướng Dẫn", path: "/guide" },
];
</script>

<style scoped>
.router-link-active {
  position: relative;
}

/* Add transition for underline effect */
.after\:absolute::after {
  transition: transform 0.3s ease;
  transform-origin: left;
}

/* Optional: Add hover effect for non-active links */
.text-gray-600:hover::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: currentColor;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.text-gray-600:hover::after {
  transform: scaleX(1);
}
</style>
