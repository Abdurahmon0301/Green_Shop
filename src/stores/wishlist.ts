import { defineStore } from "pinia";

export type WishItem = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export const useWishlistStore = defineStore("wishlist", {
  state: () => ({
    items: [] as WishItem[],
  }),
  getters: {
    count: (state) => state.items.length,
    has: (state) => (id: string) => state.items.some((i) => i.id === id),
  },
  actions: {
    add(item: WishItem) {
      if (!this.items.find((i) => i.id === item.id)) this.items.push(item);
    },
    remove(id: string) {
      const index = this.items.findIndex((i) => i.id === id);
      if (index !== -1) this.items.splice(index, 1);
    },
    toggle(item: WishItem) {
      const existing = this.items.find((i) => i.id === item.id);
      if (existing) this.remove(item.id);
      else this.add(item);
    },
    clear() {
      this.items.splice(0, this.items.length);
    },
  },
});
