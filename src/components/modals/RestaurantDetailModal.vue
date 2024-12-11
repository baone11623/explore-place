<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-50">
      <TransitionChild
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4">
          <TransitionChild
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all"
            >
              <div v-if="restaurant">
                <div class="relative h-64 -mx-6 -mt-6 mb-6">
                  <img
                    :src="restaurant.image"
                    :alt="restaurant.name"
                    class="w-full h-full object-cover"
                  />
                </div>

                <div class="flex justify-between items-start mb-4">
                  <div>
                    <DialogTitle as="h3" class="text-2xl font-semibold">
                      {{ restaurant.name }}
                    </DialogTitle>
                    <p class="text-primary font-medium mt-1">
                      {{ restaurant.priceRange }}
                    </p>
                  </div>
                  <button
                    @click="closeModal"
                    class="text-gray-500 hover:text-gray-700"
                  >
                    <i class="fas fa-times text-xl"></i>
                  </button>
                </div>

                <div class="space-y-4">
                  <p class="text-gray-600">{{ restaurant.description }}</p>

                  <div class="border-t pt-4">
                    <h4 class="font-medium mb-2">Thông tin liên hệ:</h4>
                    <p class="flex items-center text-gray-600">
                      <i class="fas fa-map-marker-alt w-5"></i>
                      {{ restaurant.address }}
                    </p>
                    <p class="flex items-center text-gray-600 mt-1">
                      <i class="fas fa-phone w-5"></i>
                      {{ restaurant.phone }}
                    </p>
                  </div>
                </div>

                <div class="mt-6 flex justify-end">
                  <button
                    class="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
                    @click="closeModal"
                  >
                    Đóng
                  </button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

defineProps({
  isOpen: Boolean,
  restaurant: Object,
});

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};
</script>
