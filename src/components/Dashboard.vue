<script setup>
import { Switch } from "@/components/ui/switch";
import { ref } from "vue";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Cards from "@/components/Cards.vue";
import End from "@/components/End.vue";
const isDark = ref(false);
const modelValue = ref([0, 500]);
</script>
<template>
  <section
    :class="{ dark: isDark }"
    class="container mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden overflow-y-auto no-scrollbar"
  >
    <section
      class="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0 py-8 lg:py-16"
      data-aos="fade-up"
    >
      <div
        class="flex flex-col gap-4 sm:gap-6 text-center lg:text-left"
        data-aos="fade-right"
      >
        <div><p class="text-lg sm:text-xl">Welcome to green shop</p></div>
        <div>
          <p class="text-3xl sm:text-5xl lg:text-8xl font-black leading-tight">
            LET'S MAKE A BETTER
            <span class="text-green-600">PLANET</span>
          </p>
        </div>
        <div>
          <p
            class="text-sm sm:text-lg text-gray-500 max-w-full lg:w-3/4 mx-auto lg:mx-0"
          >
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </p>
        </div>
        <Button class="w-32 sm:w-40 h-10 mt-6 lg:mt-10 mx-auto lg:mx-0"
          >Shop Now</Button
        >
      </div>
      <div class="w-full lg:w-auto flex justify-center" data-aos="zoom-in">
        <img src="../assets/Flower0.png" alt="" class="max-w-full h-auto" />
      </div>
    </section>
    <div class="flex flex-col xl:flex-row gap-8 xl:gap-15">
      <section
        class="w-full xl:min-w-[310px] xl:w-auto flex flex-col gap-6 lg:gap-10 px-0 xl:px-6"
        data-aos="fade-up"
      >
        <div class="space-y-6 lg:space-y-8">
          <div class="flex flex-col gap-3 sm:gap-4">
            <p class="text-lg font-bold">Categories</p>
            <div class="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-1 gap-2">
              <p
                class="pl-2 xl:pl-4 hover:text-green-600 cursor-pointer transition-all duration-150 flex justify-between text-sm sm:text-base"
                data-aos="fade-right"
              >
                House Plants<span class="hidden sm:inline">(33)</span>
              </p>
              <p
                class="pl-2 xl:pl-4 hover:text-green-600 cursor-pointer transition-all duration-150 flex justify-between text-sm sm:text-base"
                data-aos="fade-right"
                data-aos-delay="50"
              >
                Potter Plants<span class="hidden sm:inline">(12)</span>
              </p>
              <p
                class="pl-2 xl:pl-4 hover:text-green-600 cursor-pointer transition-all duration-150 flex justify-between text-sm sm:text-base"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                Seeds<span class="hidden sm:inline">(65)</span>
              </p>
              <p
                class="pl-2 xl:pl-4 hover:text-green-600 cursor-pointer transition-all duration-150 flex justify-between text-sm sm:text-base"
                data-aos="fade-right"
                data-aos-delay="150"
              >
                Small Plants<span class="hidden sm:inline">(39)</span>
              </p>
              <p
                class="pl-2 xl:pl-4 hover:text-green-600 cursor-pointer transition-all duration-150 flex justify-between text-sm sm:text-base"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                Big Plants<span class="hidden sm:inline">(23)</span>
              </p>
              <p
                class="pl-2 xl:pl-4 hover:text-green-600 cursor-pointer transition-all duration-150 flex justify-between text-sm sm:text-base"
                data-aos="fade-right"
                data-aos-delay="250"
              >
                Succulents<span class="hidden sm:inline">(17)</span>
              </p>
              <p
                class="pl-2 xl:pl-4 hover:text-green-600 cursor-pointer transition-all duration-150 flex justify-between text-sm sm:text-base"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                Trerrariums<span class="hidden sm:inline">(19)</span>
              </p>
              <p
                class="pl-2 xl:pl-4 hover:text-green-600 cursor-pointer transition-all duration-150 flex justify-between text-sm sm:text-base"
                data-aos="fade-right"
                data-aos-delay="350"
              >
                Gardening<span class="hidden sm:inline">(13)</span>
              </p>
              <p
                class="pl-2 xl:pl-4 hover:text-green-600 cursor-pointer transition-all duration-150 flex justify-between text-sm sm:text-base"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                Accessories<span class="hidden sm:inline">(18)</span>
              </p>
            </div>
          </div>
          <div class="flex flex-col gap-3 sm:gap-4" data-aos="fade-up">
            <p class="text-xl sm:text-2xl font-bold">Price Range</p>
            <div class="cursor-pointer px-2">
              <Slider
                v-model="modelValue"
                :max="2000"
                :step="1"
                :class="cn('w-full', $attrs.class ?? '')"
              />
            </div>
            <div
              class="flex gap-1 text-green-600 items-center font-bold text-sm sm:text-base"
            >
              <p>
                <span class="text-black font-normal">Price:</span> ${{
                  modelValue[0]
                }}
              </p>
              <p>-</p>
              <p>${{ modelValue[1] }}</p>
            </div>
            <Button class="w-full sm:w-1/3 xl:w-1/3 font-bold cursor-pointer"
              >Filter</Button
            >
          </div>
          <div class="flex flex-col gap-3 sm:gap-4" data-aos="fade-up">
            <p class="text-lg font-bold">Size</p>
            <div class="grid grid-cols-3 xl:grid-cols-1 gap-1">
              <p
                class="pl-2 xl:pl-4 hover:text-green-600 cursor-pointer transition-all duration-150 flex justify-between text-sm sm:text-base"
                data-aos="fade-right"
              >
                Small<span class="hidden sm:inline">(119)</span>
              </p>
              <p
                class="pl-2 xl:pl-4 hover:text-green-600 cursor-pointer transition-all duration-150 flex justify-between text-sm sm:text-base"
                data-aos="fade-right"
                data-aos-delay="50"
              >
                Medium<span class="hidden sm:inline">(86)</span>
              </p>
              <p
                class="pl-2 xl:pl-4 hover:text-green-600 cursor-pointer transition-all duration-150 flex justify-between text-sm sm:text-base"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                Large<span class="hidden sm:inline">(78)</span>
              </p>
            </div>
            <div class="mt-4 hidden xl:block" data-aos="zoom-in">
              <img
                src="../assets/sale.png"
                alt=""
                class="w-full max-w-[280px]"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="w-full" data-aos="fade-up">
        <Cards />
      </section>
    </div>
    <section
      class="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 mt-16 lg:mt-30"
      data-aos="fade-up"
    >
      <div
        class="flex flex-col sm:flex-row items-center justify-between w-full lg:min-w-[586px] gap-6 sm:gap-4"
      >
        <div
          class="w-full sm:max-w-[384px] max-h-[384px] overflow-hidden order-2 sm:order-1"
          data-aos="zoom-in"
        >
          <img
            class="w-full h-auto max-h-96 transition-all duration-150 hover:scale-105"
            src="../assets/Flower5.png"
            alt=""
          />
        </div>
        <div
          class="flex flex-col gap-4 sm:gap-7 items-center sm:items-end text-center sm:text-right order-1 sm:order-2"
          data-aos="fade-left"
        >
          <p class="text-xl sm:text-3xl font-bold max-w-full sm:max-w-60">
            Summer cactus & succulents
          </p>
          <p class="text-gray-500 max-w-full sm:max-w-96 text-sm sm:text-base">
            We are an online plant shop offering a wide range of cheap and
            trendy plants
          </p>
          <Button class="w-full sm:w-auto">Find more ⟶</Button>
        </div>
      </div>
      <div
        class="flex flex-col sm:flex-row items-center justify-between w-full lg:min-w-[586px] gap-6 sm:gap-4"
      >
        <div
          class="w-full sm:max-w-[384px] max-h-[384px] overflow-hidden order-2 sm:order-1"
          data-aos="zoom-in"
        >
          <img
            class="w-full h-auto max-h-96 transition-all duration-150 hover:scale-105"
            src="../assets/Flower3.png"
            alt=""
          />
        </div>
        <div
          class="flex flex-col gap-4 sm:gap-7 items-center sm:items-end text-center sm:text-right order-1 sm:order-2"
          data-aos="fade-left"
        >
          <p class="text-xl sm:text-3xl font-bold max-w-full sm:max-w-60">
            Styling Trends & much more
          </p>
          <p class="text-gray-500 max-w-full sm:max-w-96 text-sm sm:text-base">
            We are an online plant shop offering a wide range of cheap and
            trendy plants
          </p>
          <Button class="w-full sm:w-auto">Find more ⟶</Button>
        </div>
      </div>
    </section>
    <section class="mt-12 lg:mt-20" data-aos="fade-up">
      <div class="flex flex-col gap-8 lg:gap-10 items-center">
        <div class="flex flex-col items-center gap-4 lg:gap-6 text-center">
          <p class="text-xl sm:text-2xl font-bold">Our Blog Posts</p>
          <p class="text-gray-400 text-sm sm:text-base max-w-2xl">
            We are an online plant shop offering a wide range of cheap and
            trendy plants
          </p>
        </div>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-x-10 justify-center items-start"
        >
          <div class="flex flex-col gap-2 max-w-sm mx-auto" data-aos="fade-up">
            <div class="w-full max-w-[340px] overflow-hidden mx-auto">
              <img
                class="w-full h-auto transition-all duration-150 hover:scale-110"
                src="../assets/image1.png"
                alt=""
              />
            </div>
            <p class="text-green-600 font-normal text-xs sm:text-sm">
              September 12 I Read in 6 minutes
            </p>
            <p class="text-lg sm:text-2xl font-semibold max-w-60">
              Cactus & Succulent Care Tips
            </p>
            <p class="text-gray-400 text-sm sm:text-base max-w-70">
              Cacti are succulents are easy care plants for any home or patio.
            </p>
            <Button variant="ghost" class="w-full sm:w-auto"
              >Read more ⟶</Button
            >
          </div>
          <div
            class="flex flex-col gap-2 max-w-sm mx-auto"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <div class="w-full max-w-[340px] overflow-hidden mx-auto">
              <img
                class="w-full h-auto transition-all duration-150 hover:scale-110"
                src="../assets/image2.png"
                alt=""
              />
            </div>
            <p class="text-green-600 font-normal text-xs sm:text-sm">
              September 13 I Read in 2 minutes
            </p>
            <p class="text-lg sm:text-2xl font-semibold max-w-60">
              Top 10 Succulents for Your Home
            </p>
            <p class="text-gray-400 text-sm sm:text-base max-w-70">
              Best in hanging baskets. Prefers medium to high light.
            </p>
            <Button variant="ghost" class="w-full sm:w-auto"
              >Read more ⟶</Button
            >
          </div>
          <div
            class="flex flex-col gap-2 max-w-sm mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="w-full max-w-[340px] overflow-hidden mx-auto">
              <img
                class="w-full h-auto transition-all duration-150 hover:scale-110"
                src="../assets/image3.png"
                alt=""
              />
            </div>
            <p class="text-green-600 font-normal text-xs sm:text-sm">
              September 15 I Read in 3 minutes
            </p>
            <p class="text-lg sm:text-2xl font-semibold max-w-60">
              Cacti & Succulent Care Tips
            </p>
            <p class="text-gray-400 text-sm sm:text-base max-w-70">
              Cacti and succulents thrive in containers and because most are...
            </p>
            <Button variant="ghost" class="w-full sm:w-auto"
              >Read more ⟶</Button
            >
          </div>
          <div
            class="flex flex-col gap-2 max-w-sm mx-auto"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div class="w-full max-w-[340px] overflow-hidden mx-auto">
              <img
                class="w-full h-auto transition-all duration-150 hover:scale-110"
                src="../assets/image4.png"
                alt=""
              />
            </div>
            <p class="text-green-600 font-normal text-xs sm:text-sm">
              September 15 I Read in 2 minutes
            </p>
            <p class="text-lg sm:text-2xl font-semibold max-w-60">
              Best Houseplants Room by Room
            </p>
            <p class="text-gray-400 text-sm sm:text-base max-w-70">
              The benefits of houseplants are endless. In addition to...
            </p>
            <Button variant="ghost" class="w-full sm:w-auto"
              >Read more ⟶</Button
            >
          </div>
        </div>
      </div>
    </section>
  </section>
  <section class="px-4 sm:px-8 lg:px-50 overflow-x-hidden no-scrollbar">
    <End></End>
  </section>
</template>
<style scoped>
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
