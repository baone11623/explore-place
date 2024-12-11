<template>
  <main class="pt-20">
    <section class="bg-green-50 py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-center mb-8">Hướng Dẫn Du Lịch</h1>
        <p class="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Những thông tin hữu ích cho chuyến du lịch Đà Lạt của bạn
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            class="bg-white p-6 rounded-lg shadow-md"
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :enter="{ opacity: 1, x: 0 }"
          >
            <h2 class="text-2xl font-semibold mb-4">Thời điểm du lịch</h2>
            <ul class="space-y-3">
              <li v-for="(season, index) in seasons" :key="index">
                <h3 class="font-medium">{{ season.time }}</h3>
                <p class="text-gray-600">{{ season.description }}</p>
              </li>
            </ul>
          </div>

          <div
            class="bg-white p-6 rounded-lg shadow-md"
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :enter="{ opacity: 1, x: 0 }"
          >
            <h2 class="text-2xl font-semibold mb-4">Phương tiện di chuyển</h2>
            <ul class="space-y-3">
              <li v-for="transport in transportation" :key="transport.type">
                <h3 class="font-medium">{{ transport.type }}</h3>
                <p class="text-gray-600">{{ transport.info }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useMotion } from "@vueuse/motion";

const seasons = ref([
  {
    time: "Mùa khô (tháng 12 - tháng 3)",
    description: "Thời tiết mát mẻ, ít mưa, thích hợp tham quan và dã ngoại",
  },
  {
    time: "Mùa mưa (tháng 4 - tháng 11)",
    description: "Nhiều mưa vào buổi chiều, nên mang theo áo mưa và dù",
  },
]);

const transportation = ref([
  {
    type: "Máy bay",
    info: "Bay đến sân bay Liên Khương, sau đó đi taxi hoặc xe bus vào trung tâm",
  },
  {
    type: "Xe khách",
    info: "Có nhiều nhà xe chất lượng cao từ Sài Gòn và các tỉnh lân cận",
  },
  {
    type: "Di chuyển trong thành phố",
    info: "Có thể thuê xe máy, đi taxi hoặc grab để tham quan các điểm du lịch",
  },
]);
</script>
