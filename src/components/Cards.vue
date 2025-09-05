<script setup>
import End from "./End.vue";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
</script>

<template>
  <div
    class="container mx-auto flex flex-col items-center px-4"
    v-if="$route.path === '/shop' || $route.path === '/Dashboard'"
    data-aos="fade-up"
  >
    <section
      class="flex flex-col md:flex-row items-start md:items-center justify-between w-full mt-4 md:mt-8"
      data-aos="fade-up"
    >
      <div class="flex flex-col md:flex-row gap-2 md:gap-8 mb-4 md:mb-0">
        <p class="font-bold">All Plants</p>
        <p class="text-gray-600">New Arrivals</p>
        <p class="text-gray-600">Sale</p>
      </div>

      <div>
        <p class="flex gap-2 md:gap-3 items-center text-sm md:text-base">
          Sort by:
          <Select>
            <SelectTrigger class="w-[150px] md:w-[200px] border-0 shadow-none">
              <SelectValue placeholder="Default sorting" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Default sorting">Default sorting</SelectItem>
                <SelectItem value="By price">By price</SelectItem>
                <SelectItem value="By size">By size</SelectItem>
                <SelectItem value="Sale">Sale</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </p>
      </div>
    </section>

    <div class="flex flex-col gap-10 md:gap-20 items-center w-full mt-8">
      <section
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
        data-aos="fade-up"
      >
        <RouterLink to="/shop/Card">
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
            <p
              class="text-green-600 font-bold text-center text-sm lg:text-base"
            >
              $119.00
            </p>
          </div>
        </RouterLink>
        <RouterLink to="/shop/Card1">
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
            <p
              class="text-green-600 font-bold text-center text-sm lg:text-base"
            >
              $169.00
            </p>
          </div>
        </RouterLink>
        <RouterLink to="/shop/Card2">
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
            <p
              class="text-green-600 font-bold text-center text-sm lg:text-base"
            >
              $199.00
            </p>
          </div>
        </RouterLink>
        <RouterLink to="/shop/Card3">
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
            <p
              class="text-green-600 font-bold text-center text-sm lg:text-base"
            >
              $129.00
            </p>
          </div>
        </RouterLink>
        <RouterLink to="/shop/Card4">
          <div
            class="w-full cursor-pointer"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div class="w-full h-auto overflow-hidden rounded-lg">
              <img
                class="transition-all duration-150 hover:scale-110 w-full object-cover"
                src="@/assets/Flower5.png"
                alt="Blushing Bromeliad"
              />
            </div>
            <p class="mt-2 text-center text-sm lg:text-base font-medium">
              Blushing Bromeliad
            </p>
            <p
              class="text-green-600 font-bold text-center text-sm lg:text-base"
            >
              $139.00
            </p>
          </div>
        </RouterLink>
        <RouterLink to="/shop/Card5">
          <div
            class="w-full cursor-pointer"
            data-aos="zoom-in"
            data-aos-delay="250"
          >
            <div class="w-full h-auto overflow-hidden rounded-lg">
              <img
                class="transition-all duration-150 hover:scale-110 w-full object-cover"
                src="@/assets/Flower6.png"
                alt="Aluminum Plant"
              />
            </div>
            <p class="mt-2 text-center text-sm lg:text-base font-medium">
              Aluminum Plant
            </p>
            <p
              class="text-green-600 font-bold text-center text-sm lg:text-base"
            >
              $179.00
            </p>
          </div>
        </RouterLink>
        <RouterLink to="/shop/Card6">
          <div
            class="w-full cursor-pointer"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div class="w-full h-auto overflow-hidden rounded-lg">
              <img
                class="transition-all duration-150 hover:scale-110 w-full object-cover"
                src="@/assets/Flower7.png"
                alt="Bird's Nest Fern"
              />
            </div>
            <p class="mt-2 text-center text-sm lg:text-base font-medium">
              Bird's Nest Fern
            </p>
            <p
              class="text-green-600 font-bold text-center text-sm lg:text-base"
            >
              $99.00
            </p>
          </div>
        </RouterLink>
        <RouterLink to="/shop/Card7">
          <div
            class="w-full cursor-pointer"
            data-aos="zoom-in"
            data-aos-delay="350"
          >
            <div class="w-full h-auto overflow-hidden rounded-lg">
              <img
                class="transition-all duration-150 hover:scale-110 w-full object-cover"
                src="@/assets/Flower8.png"
                alt="Broadleaf Lady Palm"
              />
            </div>
            <p class="mt-2 text-center text-sm lg:text-base font-medium">
              Broadleaf Lady Palm
            </p>
            <p
              class="text-green-600 font-bold text-center text-sm lg:text-base"
            >
              $59.00
            </p>
          </div>
        </RouterLink>
        <RouterLink to="/shop/Card8">
          <div
            class="w-full cursor-pointer"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div class="w-full h-auto overflow-hidden rounded-lg">
              <img
                class="transition-all duration-150 hover:scale-110 w-full object-cover"
                src="@/assets/Flower9.png"
                alt="Chinese Evergreen"
              />
            </div>
            <p class="mt-2 text-center text-sm lg:text-base font-medium">
              Chinese Evergreen
            </p>
            <p
              class="text-green-600 font-bold text-center text-sm lg:text-base"
            >
              $39.00
            </p>
          </div>
        </RouterLink>
      </section>

      <div class="w-full flex justify-center" data-aos="fade-up">
        <Pagination
          v-slot="{ page }"
          :items-per-page="10"
          :total="40"
          :default-page="1"
        >
          <PaginationContent v-slot="{ items }">
            <PaginationPrevious />
            <template v-for="(item, index) in items" :key="index">
              <PaginationItem
                v-if="item.type === 'page'"
                :value="item.value"
                :is-active="item.value === page"
              >
                {{ item.value }}
              </PaginationItem>
            </template>
            <PaginationEllipsis :index="4" />
            <PaginationNext />
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  </div>
  <router-view v-else />
  <section
    v-if="$route.path === '/shop'"
    class="container mx-auto mt-16 md:mt-24"
    data-aos="fade-up"
  >
    <End></End>
  </section>
</template>
