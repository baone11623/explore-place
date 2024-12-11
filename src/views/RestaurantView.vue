<template>
  <main class="pt-20">
    <section class="bg-green-50 py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-center mb-8">Nhà Hàng Nổi Bật</h1>
        <p class="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Khám phá những nhà hàng độc đáo với ẩm thực đặc trưng của Đà Lạt
        </p>

        <div class="flex flex-wrap gap-4 mb-8 justify-center">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="selectedCategory = category.id"
            class="px-4 py-2 rounded-full transition-colors"
            :class="
              selectedCategory === category.id
                ? 'bg-primary text-white'
                : 'bg-white text-gray-600 hover:bg-primary/10'
            "
          >
            {{ category.name }}
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="restaurant in filteredRestaurants"
            :key="restaurant.id"
            class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0 }"
          >
            <img
              :src="restaurant.image"
              :alt="restaurant.name"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">{{ restaurant.name }}</h3>
              <p class="text-gray-600 mb-4">{{ restaurant.description }}</p>
              <div class="flex items-center justify-between">
                <span class="text-primary font-medium">{{
                  restaurant.priceRange
                }}</span>
                <button
                  @click="showDetails(restaurant)"
                  class="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <RestaurantDetailModal
      :is-open="isModalOpen"
      :restaurant="selectedRestaurant"
      @close="closeModal"
    />
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useMainStore } from "@/store";
import RestaurantDetailModal from "@/components/modals/RestaurantDetailModal.vue";

const store = useMainStore();
const selectedCategory = ref("all");
const isModalOpen = ref(false);
const selectedRestaurant = ref(null);

const categories = [
  { id: "all", name: "Tất cả" },
  { id: "local", name: "Đặc sản" },
  { id: "asian", name: "Món Á" },
  { id: "western", name: "Món Âu" },
  { id: "vegetarian", name: "Chay" },
];

const filteredRestaurants = computed(() => {
  if (selectedCategory.value === "all") {
    return store.restaurants;
  }
  return store.restaurants.filter((r) => r.category === selectedCategory.value);
});

const showDetails = (restaurant) => {
  selectedRestaurant.value = restaurant;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

onMounted(() => {});
</script>
