<script setup>
import { Button } from "@/components/ui/button";
import { ref, computed } from "vue";
import { Switch } from "@/components/ui/switch";
import { useWishlistStore } from "@/stores/wishlist";
import { useCartStore } from "@/stores/cart";

const isDark = ref(false);
const toggleTheme = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const showMobileMenu = ref(false);

const wishlistStore = useWishlistStore();
const cartStore = useCartStore();

const wishlistCount = computed(() => wishlistStore.count);
const cartCount = computed(() => cartStore.count);
</script>

<template>
  <header
    class="flex items-center justify-between px-4 md:px-6 lg:px-12 py-6"
    data-aos="fade-down"
  >
    <div>
      <img
        class="max-w-[120px] md:max-w-40 lg:max-w-60"
        src="../assets/logo.png"
        alt="Logo"
      />
    </div>

    <nav class="hidden md:flex gap-8 text-lg font-medium">
      <RouterLink to="/Dashboard">
        <div class="cursor-pointer nav-button">Home</div>
      </RouterLink>
      <RouterLink to="/shop">
        <div class="cursor-pointer nav-button">Shop</div>
      </RouterLink>
      <div class="cursor-pointer nav-button">Plant Care</div>
      <div class="cursor-pointer nav-button">Blogs</div>
    </nav>

    <div class="flex items-center gap-4 md:gap-6">
      <div class="flex items-center gap-2">
        <p class="hidden md:block">Dark mode:</p>
        <Switch
          :model-value="isDark"
          @update:model-value="toggleTheme"
        ></Switch>
      </div>

      <RouterLink to="/likes" class="relative flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"
          />
        </svg>
        <span
          v-if="wishlistCount"
          class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1 min-w-5 text-center"
        >
          {{ wishlistCount }}
        </span>
      </RouterLink>

      <div class="relative">
        <RouterLink to="/cart" class="cart-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 48 48"
          >
            <g fill="none">
              <path d="M39 32H13L8 12h36z" />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M3 6h3.5L8 12m0 0l5 20h26l5-20z"
              />
              <circle
                cx="13"
                cy="39"
                r="3"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
              />
              <circle
                cx="39"
                cy="39"
                r="3"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
              />
            </g>
          </svg>
          <span
            v-if="cartCount > 0"
            class="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-1 min-w-5 text-center"
          >
            {{ cartCount }}
          </span>
        </RouterLink>
      </div>

      <Button class="cursor-pointer hidden md:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 21v-2h7V5h-7V3h7q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm-2-4l-1.375-1.45l2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5z"
            stroke-width="0.5"
            stroke="currentColor"
          />
        </svg>
        Login
      </Button>

      <div
        class="cursor-pointer md:hidden"
        @click="showMobileMenu = !showMobileMenu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
        </svg>
      </div>
    </div>
  </header>

  <nav
    :class="{ block: showMobileMenu, hidden: !showMobileMenu }"
    class="md:hidden w-full bg-white dark:bg-gray-800 fixed top-[88px] left-0 right-0 z-[9999] shadow-md p-4"
  >
    <div class="flex flex-col items-center gap-4 text-lg font-medium">
      <RouterLink to="/Dashboard" @click="showMobileMenu = false">
        <div class="cursor-pointer nav-button">Home</div>
      </RouterLink>
      <RouterLink to="/shop" @click="showMobileMenu = false">
        <div class="cursor-pointer nav-button">Shop</div>
      </RouterLink>
      <div class="cursor-pointer nav-button" @click="showMobileMenu = false">
        Plant Care
      </div>
      <div class="cursor-pointer nav-button" @click="showMobileMenu = false">
        Blogs
      </div>
      <Button class="cursor-pointer w-full mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 21v-2h7V5h-7V3h7q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm-2-4l-1.375-1.45l2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5z"
            stroke-width="0.5"
            stroke="currentColor"
          />
        </svg>
        Login
      </Button>
    </div>
  </nav>
</template>

<style scoped>
.nav-button {
  color: #374151;
  font-weight: 500;
  position: relative;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-duration: 300ms;
}
.dark .nav-button {
  color: #d1d5db; /* Dark mode color for links */
}
.nav-button::before {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 3px;
  background-color: rgb(0, 166, 62);
  transition: width 0.3s ease;
}
.nav-button:hover::before {
  width: 100%;
}
.cart-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #46a358;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart-icon {
  position: relative;
  display: inline-block;
}
</style>
