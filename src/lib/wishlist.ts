import { ref } from "vue";

export type WishItem = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export const wishlist = ref<WishItem[]>([]);

export function addToWishlist(item: WishItem): void {
  if (!wishlist.value.find((w) => w.id === item.id)) wishlist.value.push(item);
}

export function removeFromWishlist(id: string): void {
  const index = wishlist.value.findIndex((w) => w.id === id);
  if (index !== -1) wishlist.value.splice(index, 1);
}

export function toggleWishlist(item: WishItem): void {
  const existing = wishlist.value.find((w) => w.id === item.id);
  if (existing) {
    removeFromWishlist(item.id);
  } else {
    addToWishlist(item);
  }
}
