// src/components/layout/TheFooter.vue
<template>
  <footer class="bg-gray-800 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">Khám Phá Đà Lạt</h3>
          <p class="text-gray-400">
            Khám phá vẻ đẹp và văn hóa độc đáo của thành phố ngàn hoa
          </p>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">Liên Kết</h4>
          <ul class="space-y-2">
            <li v-for="item in menuItems" :key="item.path">
              <router-link
                :to="item.path"
                class="text-gray-400 hover:text-white transition-colors"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">Liên Hệ</h4>
          <ul class="space-y-2 text-gray-400">
            <li>Email: info@khamphadalat.vn</li>
            <li>Phone: (084) 123-456-789</li>
            <li>Address: Đà Lạt, Lâm Đồng</li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">Theo Dõi</h4>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="fab fa-youtube text-xl"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
        <p>&copy; 2024 Khám Phá Đà Lạt. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const menuItems = [
  { name: "Trang Chủ", path: "/" },
  { name: "Nhà Hàng", path: "/restaurants" },
  { name: "Danh Lam", path: "/attractions" },
  { name: "Check-in", path: "/checkin" },
  { name: "Hướng Dẫn", path: "/guide" },
];
</script>
