<template>
  <main class="pt-20">
    <section class="bg-green-50 py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-center mb-8">Danh Lam Thắng Cảnh</h1>
        <p class="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Khám phá những địa điểm du lịch nổi tiếng và đẹp nhất tại Đà Lạt
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="attraction in attractions"
            :key="attraction.id"
            class="bg-white rounded-lg shadow-md overflow-hidden"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0 }"
          >
            <div class="relative h-64">
              <img
                :src="attraction.image"
                :alt="attraction.name"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-semibold mb-3">{{ attraction.name }}</h3>
              <p class="text-gray-600 mb-4">{{ attraction.description }}</p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">
                  <MapPinIcon class="w-4 h-4 inline mr-1" />
                  {{ attraction.location }}
                </span>
                <button
                  @click="showDetails(attraction)"
                  class="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
                >
                  Chi tiết
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <AttractionDetailModal
      :is-open="isModalOpen"
      :attraction="selectedAttraction"
      @close="closeModal"
    />
  </main>
</template>

<script setup>
import { computed, ref } from "vue";
import { useMainStore } from "@/store";
import AttractionDetailModal from "@/components/modals/AttractionDetailModal.vue";

const store = useMainStore();
const attractions = computed(() => store.attractions);
const isModalOpen = ref(false);
const selectedAttraction = ref(null);

const showDetails = (attraction) => {
  selectedAttraction.value = attraction;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>
