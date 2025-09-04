<script setup>
import { Button } from "@/components/ui/button";
import { ref } from "vue";
import { Switch } from "@/components/ui/switch";
import { useRouter } from "vue-router";
const router = useRouter();
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

      <div class="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
            stroke-width="0.5"
            stroke="currentColor"
          />
        </svg>
      </div>

      <div class="cursor-pointer" @click="router.push('/cart')">
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
</style>
