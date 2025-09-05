<template>
  <div
    class="card flex flex-col p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
  >
    <div class="w-full h-48 overflow-hidden rounded-md mb-4">
      <img
        :src="item.image"
        :alt="item.name"
        class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
      />
    </div>

    <div class="flex-grow text-center">
      <h3 class="text-lg font-bold text-gray-800 truncate">{{ item.name }}</h3>
      <p class="text-green-600 font-semibold mt-1">${{ item.price }}</p>
    </div>

    <div class="flex justify-between items-center mt-4 gap-2">
      <button
        @click="handleLike"
        :class="[
          'flex-1 py-2 px-4 rounded-full transition-colors duration-300',
          isItemLiked
            ? 'bg-red-500 text-white'
            : 'bg-gray-200 text-gray-600 hover:bg-red-200 hover:text-red-600',
        ]"
      >
        <span v-if="isItemLiked">❤️</span>
        <span v-else>🤍</span>
      </button>

      <button
        @click="handleAddToCart"
        :class="[
          'flex-1 py-2 px-4 rounded-full transition-colors duration-300',
          isItemInCart
            ? 'bg-green-600 text-white'
            : 'bg-gray-200 text-gray-600 hover:bg-green-200 hover:text-green-600',
        ]"
      >
        <span v-if="isItemInCart">🛒 Added</span>
        <span v-else>🛒 Add</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Card",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["isLiked", "isInCart"]),
    isItemLiked() {
      return this.isLiked(this.item.id);
    },
    isItemInCart() {
      return this.isInCart(this.item.id);
    },
  },
  methods: {
    ...mapMutations(["toggleLike", "addToCart"]),
    handleLike() {
      this.toggleLike(this.item);
    },
    handleAddToCart() {
      this.addToCart(this.item);
    },
  },
};
</script>
