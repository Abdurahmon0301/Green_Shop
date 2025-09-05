<template>
  <div class="cart-page">
    <h1>Shopping Cart</h1>
    <div class="cart-items">
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <img :src="item.image" :alt="item.name" />
        <h3>{{ item.name }}</h3>
        <p>${{ item.price }}</p>
        <button @click="removeFromCart(item.id)">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "CartPage",
  computed: {
    ...mapState(["cart"]),
  },
  methods: {
    ...mapMutations(["removeFromCart"]),
  },
};
</script>
