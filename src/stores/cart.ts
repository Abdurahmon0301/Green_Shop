import { defineStore } from "pinia";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as CartItem[],
  }),

  getters: {
    count: (state) => state.items.length, // Number of unique items
    subtotal: (state) =>
      state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    totalCount: (state) =>
      state.items.reduce((sum, item) => sum + item.quantity, 0), // Total quantity
  },

  actions: {
    add(item: Omit<CartItem, "quantity">) {
      const existing = this.items.find((i) => i.id === item.id);
      if (existing) {
        existing.quantity++;
      } else {
        this.items.push({ ...item, quantity: 1 });
      }
    },
    increment(id: string) {
      const item = this.items.find((i) => i.id === id);
      if (item) item.quantity++;
    },
    decrement(id: string) {
      const item = this.items.find((i) => i.id === id);
      if (item && item.quantity > 1) {
        item.quantity--;
      } else {
        this.remove(id);
      }
    },
    remove(id: string) {
      this.items = this.items.filter((i) => i.id !== id);
    },
    clear() {
      this.items = [];
    },
  },
});
