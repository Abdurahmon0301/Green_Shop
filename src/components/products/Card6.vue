<script setup>
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Minus, Plus, ShoppingCart, Heart } from "lucide-vue-next";
import End from "@/components/End.vue";

const selec = ref("page1");
const selectPage = (page) => {
  selec.value = page;
};

const select = ref(1);
const selectImg = (id) => {
  select.value = id;
};

const liked = ref(false);
const toggleLike = () => {
  liked.value = !liked.value;
};

const selected = ref(null);
const selectBtn = (btn) => {
  selected.value = btn;
};

const qty = ref(1);
function increase() {
  qty.value++;
}
function decrease() {
  if (qty.value > 1) qty.value--;
}
</script>

<template>
  <section class="container mx-auto p-4 md:p-6 lg:p-8" data-aos="fade-up">
    <section class="my-4" data-aos="fade-down">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <RouterLink to="/">
              <BreadcrumbLink> Home </BreadcrumbLink>
            </RouterLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <RouterLink to="/shop">
              <BreadcrumbLink>Shop</BreadcrumbLink>
            </RouterLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage class="cursor-pointer">Card</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </section>

    <section
      class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-8"
      data-aos="fade-up"
    >
      <div
        class="flex flex-col md:flex-row gap-4 items-center"
        data-aos="zoom-in"
      >
        <div
          class="flex flex-row md:flex-col gap-4 w-full md:w-24 justify-center"
        >
          <img
            v-for="n in 4"
            :key="n"
            src="@/assets/Flower7.png"
            @click="selectImg(n)"
            :class="[
              'border rounded-lg cursor-pointer hover:scale-105 transition w-20 h-20 md:w-full md:h-auto',
              select === n ? 'border-green-600' : 'border-gray-200',
            ]"
          />
        </div>
        <Card class="flex-1 w-full md:w-auto flex items-center justify-center">
          <CardContent class="p-6">
            <img
              src="@/assets/Flower7.png"
              alt="Product"
              class="rounded-xl w-full max-h-96 object-contain"
            />
          </CardContent>
        </Card>
      </div>

      <div class="flex flex-col gap-4" data-aos="fade-left">
        <h2 class="text-2xl lg:text-3xl font-semibold">Barberton Daisy</h2>
        <p class="text-green-600 text-xl lg:text-2xl font-bold">$119.00</p>
        <div class="flex items-center gap-2">
          <span class="text-yellow-400">★★★★☆</span>
          <p class="text-sm text-gray-500">19 Customer Review</p>
        </div>
        <p class="text-gray-600 max-w-full lg:max-w-96">
          The ceramic cylinder planters come with a wooden stand to help elevate
          your plants off the ground. The ceramic cylinder planters come with a
          wooden stand to help elevate your plants off the ground.
        </p>

        <div class="flex flex-wrap gap-2 mt-2">
          <Button
            variant="outline"
            @click="selectBtn('btn1')"
            :class="[
              'rounded-full h-8 w-8 md:h-10 md:w-10 text-sm',
              selected === 'btn1'
                ? 'text-green-600 border-green-600 hover:text-green-600'
                : 'text-black',
            ]"
            >S</Button
          >
          <Button
            variant="outline"
            @click="selectBtn('btn2')"
            :class="[
              'rounded-full h-8 w-8 md:h-10 md:w-10 text-sm',
              selected === 'btn2'
                ? 'text-green-600 border-green-600 hover:text-green-600'
                : 'text-black',
            ]"
            >M</Button
          >
          <Button
            variant="outline"
            @click="selectBtn('btn3')"
            :class="[
              'rounded-full h-8 w-8 md:h-10 md:w-10 text-sm',
              selected === 'btn3'
                ? 'text-green-600 border-green-600 hover:text-green-600'
                : 'text-black',
            ]"
            >L</Button
          >
          <Button
            variant="outline"
            @click="selectBtn('btn4')"
            :class="[
              'rounded-full h-8 w-8 md:h-10 md:w-10 text-sm',
              selected === 'btn4'
                ? 'text-green-600 border-green-600 hover:text-green-600'
                : 'text-black',
            ]"
            >XL</Button
          >
        </div>

        <div class="flex flex-wrap items-center gap-4 mt-4">
          <div class="flex items-center border rounded-lg">
            <button @click="decrease" class="p-2">
              <Minus class="w-4 h-4" />
            </button>
            <Input
              type="number"
              v-model="qty"
              class="w-16 text-center border-0 focus:ring-0"
            />
            <button @click="increase" class="p-2">
              <Plus class="w-4 h-4" />
            </button>
          </div>
          <Button class="bg-green-600 hover:bg-green-700 text-white">
            BUY NOW
          </Button>
          <Button variant="outline" class="flex gap-2">
            <ShoppingCart class="w-4 h-4" /> ADD TO CART
          </Button>
          <Button
            @click="toggleLike"
            variant="outline"
            class="rounded-full transition-colors"
            :class="liked ? 'text-red-500' : 'text-gray-500'"
          >
            <Heart
              class="w-4 h-4"
              :class="liked ? 'fill-red-500' : 'fill-transparent'"
            />
          </Button>
        </div>

        <div class="text-sm text-gray-500 space-y-1 mt-4">
          <p><span class="font-medium">SKU:</span> 1995751877966</p>
          <p><span class="font-medium">Categories:</span> Potter Plants</p>
          <p><span class="font-medium">Tags:</span> Home, Garden, Plants</p>
        </div>

        <div class="flex gap-4 mt-3 items-center">
          <span class="text-gray-500">Share this products:</span>
          <div class="flex gap-3 text-gray-600 cursor-pointer">
            <img
              src="@/assets/facebook.svg"
              alt="Facebook"
              class="w-6 h-6"
            /><img
              src="@/assets/instagram.svg"
              alt="Instagram"
              class="w-6 h-6"
            /><img
              src="@/assets/twitter.svg"
              alt="Twitter"
              class="w-6 h-6"
            /><img src="@/assets/linkedin.svg" alt="LinkedIn" class="w-6 h-6" />
          </div>
        </div>
      </div>
    </section>

    <section class="w-full mt-16 md:mt-20" data-aos="fade-up">
      <div class="flex flex-col gap-y-10">
        <div class="flex gap-5 md:gap-10 border-b border-gray-200 pb-2">
          <button
            @click="selectPage('page1')"
            :class="[
              'text-sm md:text-xl font-bold text-black cursor-pointer pb-2 md:pb-4 transition-colors duration-200 whitespace-nowrap',
              selec === 'page1'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-black hover:text-gray-700',
            ]"
          >
            Product Description
          </button>
          <button
            @click="selectPage('page2')"
            :class="[
              'text-sm md:text-xl font-bold text-black cursor-pointer pb-2 md:pb-4 transition-colors duration-200 whitespace-nowrap',
              selec === 'page2'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-black hover:text-gray-700',
            ]"
          >
            Reviews (19)
          </button>
        </div>

        <div
          v-if="selec === 'page1'"
          class="flex flex-col gap-y-6 md:gap-y-8 text-sm md:text-base"
        >
          <p class="text-gray-600">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            fringilla augue nec est tristique auctor. Donec non est at libero
            vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
            Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
            Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat
            sem, quis fermentum turpis eros eget velit. Donec ac tempus ante.
            Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis
            vulputate, sapien libero hendrerit est, sed commodo augue nisi non
            neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in
            accumsan elit odio quis mi. Cras neque metus, consequat et blandit
            et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet
            ligula euismod eget. The ceramic cylinder planters come with a
            wooden stand to help elevate your plants off the ground.
          </p>
          <div>
            <p class="font-bold mb-1">Living Room:</p>
            <p class="text-gray-600">
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <p class="font-bold mb-1">Dinning Room:</p>
            <p class="text-gray-600">
              The benefits of houseplants are endless. In addition to cleaning
              the air of harmful toxins, they can help to improve your mood,
              reduce stress and provide you with better sleep. Fill every room
              of your home with houseplants and their restorative qualities will
              improve your life.
            </p>
          </div>
          <div>
            <p class="font-bold mb-1">Office:</p>
            <p class="text-gray-600">
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div v-if="selec === 'page2'" class="text-center">
          <p class="text-gray-600">There are no reviews yet.</p>
        </div>
      </div>
    </section>

    <p
      class="text-xl md:text-2xl font-bold text-green-600 my-16 md:my-20"
      data-aos="fade-up"
    >
      Related Products
    </p>
    <section
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
      data-aos="fade-up"
    >
      <div class="cursor-pointer" data-aos="zoom-in">
        <div class="w-full overflow-hidden rounded-lg">
          <img
            class="transition-all duration-150 hover:scale-110 w-full object-cover"
            src="@/assets/Flower2.png"
            alt=""
          />
        </div>
        <p class="mt-2 text-sm md:text-base">Angel Wing Begonia</p>
        <p class="text-green-600 font-bold text-sm md:text-base">$169.00</p>
      </div>
      <div class="cursor-pointer" data-aos="zoom-in">
        <div class="w-full overflow-hidden rounded-lg">
          <img
            class="transition-all duration-150 hover:scale-110 w-full object-cover"
            src="@/assets/Flower3.png"
            alt=""
          />
        </div>
        <p class="mt-2 text-sm md:text-base">African Violet</p>
        <p class="text-green-600 font-bold text-sm md:text-base">$199.00</p>
      </div>
      <div class="cursor-pointer" data-aos="zoom-in">
        <div class="w-full overflow-hidden rounded-lg">
          <img
            class="transition-all duration-150 hover:scale-110 w-full object-cover"
            src="@/assets/Flower4.png"
            alt=""
          />
        </div>
        <p class="mt-2 text-sm md:text-base">Beach Spider Lily</p>
        <p class="text-green-600 font-bold text-sm md:text-base">$129.00</p>
      </div>
      <div class="cursor-pointer" data-aos="zoom-in">
        <div class="w-full overflow-hidden rounded-lg">
          <img
            class="transition-all duration-150 hover:scale-110 w-full object-cover"
            src="@/assets/Flower5.png"
            alt=""
          />
        </div>
        <p class="mt-2 text-sm md:text-base">Blushing Bromeliad</p>
        <p class="text-green-600 font-bold text-sm md:text-base">$139.00</p>
      </div>
      <div class="cursor-pointer" data-aos="zoom-in">
        <div class="w-full overflow-hidden rounded-lg">
          <img
            class="transition-all duration-150 hover:scale-110 w-full object-cover"
            src="@/assets/Flower6.png"
            alt=""
          />
        </div>
        <p class="mt-2 text-sm md:text-base">Aluminum Plant</p>
        <p class="text-green-600 font-bold text-sm md:text-base">$179.00</p>
      </div>
    </section>

    <section data-aos="fade-up"><End></End></section>
  </section>
</template>
