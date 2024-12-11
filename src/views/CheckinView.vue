<template>
  <main class="pt-20">
    <section class="bg-green-50 py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-center mb-8">
          Điểm Check-in Nổi Bật
        </h1>
        <p class="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Khám phá những địa điểm check-in tuyệt đẹp và độc đáo tại Đà Lạt
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="spot in checkinSpots"
            :key="spot.id"
            class="relative group overflow-hidden rounded-lg"
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :enter="{ opacity: 1, scale: 1 }"
            @click="showDetails(spot)"
          >
            <img
              :src="spot.image"
              :alt="spot.name"
              class="w-full h-72 object-cover transition-transform group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6"
            >
              <div class="text-white">
                <h3 class="text-xl font-semibold mb-2">{{ spot.name }}</h3>
                <p class="text-sm opacity-90">{{ spot.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CheckinDetailModal
      :is-open="isModalOpen"
      :spot="selectedSpot"
      @close="closeModal"
    />
  </main>
</template>

<script setup>
import { computed, ref } from "vue";
import { useMainStore } from "@/store";
import CheckinDetailModal from "@/components/modals/CheckinDetailModal.vue";

const store = useMainStore();
const checkinSpots = computed(() => store.checkinSpots);
const isModalOpen = ref(false);
const selectedSpot = ref(null);

const showDetails = (spot) => {
  selectedSpot.value = spot;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>
