<script setup lang="ts">
import Banner from "@/components/banner.vue";
import End from "@/components/End.vue";
import { useCartStore } from "@/stores/cart";
import { ref, computed } from "vue";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RouterLink } from "vue-router";

const coupon = ref("");
const discount = ref(0);
const shipping = ref(16);

const cart = useCartStore();

const currency = (n: number | undefined | null) => {
  if (n == null || isNaN(Number(n))) {
    return "$0.00";
  }
  return `$${Number(n).toFixed(2)}`;
};

const subtotal = computed(() => cart.subtotal);

const total = computed(() =>
  Math.max(subtotal.value - discount.value + shipping.value, 0)
);

function applyCoupon() {
  if (coupon.value.toLowerCase() === "sale10") {
    discount.value = subtotal.value * 0.1;
  } else if (coupon.value.toLowerCase() === "free") {
    discount.value = subtotal.value;
  } else {
    discount.value = 0;
  }
}
</script>

<template>
  <section class="container mx-auto p-4 md:p-6 lg:p-8">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div
        class="lg:col-span-2 bg-white dark:bg-gray-900 border rounded-md overflow-hidden"
      >
        <div
          class="hidden sm:grid grid-cols-12 px-4 py-3 text-xs sm:text-sm font-semibold text-gray-500"
        >
          <div class="col-span-6">Products</div>
          <div class="col-span-2">Price</div>
          <div class="col-span-2">Quantity</div>
          <div class="col-span-2">Total</div>
        </div>

        <div class="divide-y">
          <div
            v-for="item in cart.items"
            :key="item.id"
            class="grid grid-cols-12 items-center px-3 sm:px-4 py-4 gap-3"
          >
            <div class="col-span-12 sm:col-span-6 flex items-center gap-3">
              <img
                :src="item.image"
                :alt="item.name"
                class="w-16 h-16 sm:w-14 sm:h-14 rounded object-cover"
              />
              <div>
                <p class="font-medium text-sm sm:text-base">{{ item.name }}</p>
                <p class="text-[10px] sm:text-xs text-gray-500">
                  SKU: 1995751877966
                </p>
              </div>
            </div>
            <div
              class="col-span-6 sm:col-span-2 text-gray-700 text-sm sm:text-base"
            >
              {{ currency(item.price) }}
            </div>
            <div class="col-span-6 sm:col-span-2">
              <div class="flex items-center gap-2 w-full">
                <button
                  class="px-2 py-2 min-w-8 h-8 cursor-pointer rounded-full bg-green-600 text-white flex items-center justify-center"
                  @click="cart.decrement(item.id)"
                >
                  -
                </button>
                <span class="w-8 text-center text-sm sm:text-base">{{
                  item.quantity
                }}</span>
                <button
                  class="px-2 py-2 min-w-8 h-8 cursor-pointer rounded-full bg-green-600 text-white flex items-center justify-center"
                  @click="cart.increment(item.id)"
                >
                  +
                </button>
                <button
                  class="ml-2 text-gray-500 cursor-pointer px-2 py-1 hover:bg-red-500 hover:text-white border rounded-md border-red-500 transition-all duration-150 text-xs sm:text-sm"
                  @click="cart.remove(item.id)"
                >
                  Remove
                </button>
              </div>
            </div>
            <div
              class="col-span-12 sm:col-span-2 font-semibold text-green-600 text-sm sm:text-base"
            >
              {{ currency(item.price * item.quantity) }}
            </div>
          </div>
          <div
            v-if="cart.items.length === 0"
            class="px-4 py-8 text-center text-gray-500"
          >
            Cart is empty.
          </div>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-900 border rounded-md p-4 h-fit">
        <p class="font-semibold mb-3">Cart Totals</p>
        <div
          class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mb-4"
        >
          <Input
            v-model="coupon"
            placeholder="Enter coupon code here..."
            class="flex-1"
          />
          <Button class="min-w-20" @click="applyCoupon">Apply</Button>
        </div>
        <div class="flex items-center justify-between py-2 text-sm">
          <span class="text-gray-500">Subtotal</span>
          <span>{{ currency(subtotal) }}</span>
        </div>
        <div class="flex items-center justify-between py-2 text-sm">
          <span class="text-gray-500">Coupon Discount</span>
          <span class="text-red-600">
            {{ discount ? "-" + currency(discount) : "(-) $0.00" }}
          </span>
        </div>
        <div class="flex items-center justify-between py-2 text-sm">
          <span class="text-gray-500">Shipping</span>
          <span>{{ currency(shipping) }}</span>
        </div>
        <div
          class="flex items-center justify-between py-3 border-t mt-2 font-semibold"
        >
          <span>Total</span>
          <span class="text-green-600">{{ currency(total) }}</span>
        </div>
        <Button class="w-full h-11 mt-3">Proceed To Checkout</Button>
        <RouterLink
          to="/shop"
          class="block text-center text-sm text-green-700 mt-3"
        >
          Continue Shopping
        </RouterLink>
      </div>
    </div>
  </section>

  <section>
    <Banner />
  </section>
  <section>
    <End />
  </section>
</template>
