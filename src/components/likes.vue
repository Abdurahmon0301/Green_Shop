<script setup>
import { useWishlistStore } from "@/stores/wishlist";
import { useCartStore } from "@/stores/cart";
const wishlist = useWishlistStore();
const cart = useCartStore();
import { Button } from "@/components/ui/button";
</script>
<template>
  <section class="container mx-auto p-4 md:p-6 lg:p-8">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-xl md:text-2xl font-semibold">Your Likes</h2>
      <RouterLink to="/shop" class="text-green-700">Back to Shop</RouterLink>
    </div>
    <div v-if="!wishlist.items.length" class="text-gray-500">
      No liked products yet.
    </div>
    <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div
        v-for="item in wishlist.items"
        :key="item.id"
        class="border rounded-md p-3 flex flex-col gap-3"
      >
        <img
          :src="item.image"
          :alt="item.name"
          class="w-full h-40 object-cover rounded"
        />
        <div class="flex flex-col gap-1">
          <p class="font-medium">{{ item.name }}</p>
          <p class="text-green-600 font-semibold">
            ${{ item.price.toFixed(2) }}
          </p>
        </div>
        <div class="mt-auto flex items-center gap-2">
          <Button
            class="flex-1"
            @click="
              cart.add(
                {
                  id: item.id,
                  name: item.name,
                  price: item.price,
                  image: item.image,
                },
                1
              )
            "
            >Add to Cart</Button
          >
          <Button variant="outline" @click="wishlist.remove(item.id)"
            >Remove</Button
          >
        </div>
      </div>
    </div>
  </section>
</template>
