import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),
  getters: {
    cartItemsCount: (state) => state.items.length,
  },
  actions: {
    addToCart(item) {
      this.items.push(item);
    },
    removeFromCart(itemId) {
      const index = this.items.findIndex((item) => item.id === itemId);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    },
  },
});
