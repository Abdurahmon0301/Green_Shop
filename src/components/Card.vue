<template>
  <div class="card">
    <img :src="item.image" :alt="item.name" />
    <h3>{{ item.name }}</h3>
    <p>${{ item.price }}</p>
    <button @click="handleLike" :class="{ active: isItemLiked }">
      <i class="heart-icon"></i>
    </button>
    <button @click="handleAddToCart" :class="{ active: isItemInCart }">
      <i class="cart-icon"></i>
    </button>
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
