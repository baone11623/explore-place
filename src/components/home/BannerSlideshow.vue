<!-- BannerSlideshow.vue -->
<template>
  <div class="relative w-full h-full overflow-hidden">
    <transition-group name="fade" tag="div" class="relative w-full h-full">
      <div
        v-for="(image, index) in images"
        :key="image.id"
        v-show="currentIndex === index"
        class="absolute inset-0"
      >
        <img
          :src="image.url"
          :alt="image.alt"
          class="w-full h-full object-cover"
        />
      </div>
    </transition-group>

    <!-- Navigation Buttons -->
    <div
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2"
    >
      <button
        v-for="(_, index) in images"
        :key="index"
        @click="setSlide(index)"
        class="w-3 h-3 rounded-full transition-all duration-300"
        :class="currentIndex === index ? 'bg-white' : 'bg-white/50'"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const images = ref([
  {
    id: 1,
    url: "/images/banner/dalat-1.png",
    alt: "Hồ Xuân Hương",
  },
  {
    id: 2,
    url: "/images/banner/dalat-2.png",
    alt: "Vườn hoa thành phố",
  },
  {
    id: 3,
    url: "/images/banner/dalat-3.png",
    alt: "Nhà thờ Con Gà",
  },
]);

const currentIndex = ref(0);
let slideInterval;

const setSlide = (index) => {
  currentIndex.value = index;
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

onMounted(() => {
  slideInterval = setInterval(nextSlide, 5000);
});

onUnmounted(() => {
  clearInterval(slideInterval);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
