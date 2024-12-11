<template>
  <div
    class="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
  >
    <div
      class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
    >
      <i :class="getIconClass" class="text-xl text-primary"></i>
    </div>
    <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
    <p class="text-gray-600 mb-4">{{ description }}</p>
    <router-link
      :to="link"
      class="text-primary hover:text-primary/80 font-medium flex items-center"
    >
      Xem thêm
      <i class="fas fa-arrow-right ml-1"></i>
    </router-link>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const getIconClass = computed(() => {
  const iconMap = {
    restaurant: "fas fa-utensils",
    landscape: "fas fa-mountain",
    camera: "fas fa-camera",
  };
  return iconMap[props.icon] || props.icon;
});
</script>
