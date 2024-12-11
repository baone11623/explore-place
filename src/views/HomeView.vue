<template>
  <main>
    <section class="relative h-screen">
      <BannerSlideshow />
      <div
        class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40"
      >
        <div class="text-center text-white">
          <h1 class="text-6xl font-bold mb-4" v-motion="titleAnimation">
            Khám Phá Đà Lạt
          </h1>
          <p class="text-xl" v-motion="subtitleAnimation">
            Thành phố ngàn hoa - Điểm đến của mọi tâm hồn
          </p>
        </div>
      </div>
    </section>

    <section class="container mx-auto py-16 px-4">
      <h2 class="text-4xl font-bold text-center mb-12">Khám phá điểm đến</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <CategoryCard
          v-for="category in categories"
          :key="category.id"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: category.id * 0.2 },
          }"
          v-bind="category"
        />
      </div>
    </section>

    <section
      class="py-16 bg-green-50"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1 }"
      :variants="{ visible: { transition: { stagger: 0.2 } } }"
    >
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-8">Về Đà Lạt</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="prose prose-lg">
            <p>
              Đà Lạt, thành phố của sương mù và hoa, nằm ở độ cao 1,500m trên
              cao nguyên Lâm Viên...
            </p>
          </div>
          <div class="relative h-96">
            <img
              src="/images/banner/dalat-3.png"
              alt="Đà Lạt từ trên cao"
              class="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useMotion } from "@vueuse/motion";
import BannerSlideshow from "@/components/home/BannerSlideshow.vue";
import CategoryCard from "@/components/home/CategoryCard.vue";

const categories = ref([
  {
    id: 1,
    title: "Nhà Hàng",
    description: "Khám phá ẩm thực độc đáo của Đà Lạt",
    icon: "restaurant",
    link: "/restaurants",
  },
  {
    id: 2,
    title: "Danh Lam Thắng Cảnh",
    description: "Những địa điểm không thể bỏ qua",
    icon: "landscape",
    link: "/attractions",
  },
  {
    id: 3,
    title: "Điểm Check-in",
    description: "Địa điểm sống ảo yêu thích",
    icon: "camera",
    link: "/checkin",
  },
]);

const titleAnimation = {
  initial: { opacity: 0, y: 50 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const subtitleAnimation = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
};

onMounted(() => {});
</script>
