<template>
  <div class="flex flex-col gap-10 md:gap-20 items-center w-full mt-8">
    <section
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
      data-aos="fade-up"
    >
      <RouterLink to="shop/Card">
        <div class="w-full cursor-pointer" data-aos="zoom-in">
          <div class="w-full h-auto overflow-hidden rounded-lg">
            <img
              class="transition-all duration-150 hover:scale-110 w-full object-cover"
              src="@/assets/Flower1.png"
              alt="Barberton Daisy"
            />
          </div>
          <p class="mt-2 text-center text-sm lg:text-base font-medium">
            Barberton Daisy
          </p>
          <p class="text-green-600 font-bold text-center text-sm lg:text-base">
            $119.00
          </p>
        </div>
      </RouterLink>
      <RouterLink to="shop/Card1">
        <div
          class="w-full cursor-pointer"
          data-aos="zoom-in"
          data-aos-delay="50"
        >
          <div class="w-full h-auto overflow-hidden rounded-lg">
            <img
              class="transition-all duration-150 hover:scale-110 w-full object-cover"
              src="@/assets/Flower2.png"
              alt="Angel Wing Begonia"
            />
          </div>
          <p class="mt-2 text-center text-sm lg:text-base font-medium">
            Angel Wing Begonia
          </p>
          <p class="text-green-600 font-bold text-center text-sm lg:text-base">
            $169.00
          </p>
        </div>
      </RouterLink>
      <RouterLink to="shop/Card2">
        <div
          class="w-full cursor-pointer"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div class="w-full h-auto overflow-hidden rounded-lg">
            <img
              class="transition-all duration-150 hover:scale-110 w-full object-cover"
              src="@/assets/Flower3.png"
              alt="African Violet"
            />
          </div>
          <p class="mt-2 text-center text-sm lg:text-base font-medium">
            African Violet
          </p>
          <p class="text-green-600 font-bold text-center text-sm lg:text-base">
            $199.00
          </p>
        </div>
      </RouterLink>
      <RouterLink to="shop/Card3">
        <div
          class="w-full cursor-pointer"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <div class="w-full h-auto overflow-hidden rounded-lg">
            <img
              class="transition-all duration-150 hover:scale-110 w-full object-cover"
              src="@/assets/Flower4.png"
              alt="Beach Spider Lily"
            />
          </div>
          <p class="mt-2 text-center text-sm lg:text-base font-medium">
            Beach Spider Lily
          </p>
          <p class="text-green-600 font-bold text-center text-sm lg:text-base">
            $129.00
          </p>
        </div>
      </RouterLink>
    </section>
  </div>
</template>
<script setup>
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
</script>
