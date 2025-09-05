import { ref } from "vue";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export const cart = ref<CartItem[]>([]);

export function addToCart(
  newItem: Omit<CartItem, "quantity">,
  quantity: number = 1
): void {
  const existing = cart.value.find((item) => item.id === newItem.id);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.value.push({ ...newItem, quantity });
  }
}

export function incrementItem(id: string): void {
  const existing = cart.value.find((item) => item.id === id);
  if (existing) existing.quantity += 1;
}

export function decrementItem(id: string): void {
  const existing = cart.value.find((item) => item.id === id);
  if (!existing) return;
  existing.quantity -= 1;
  if (existing.quantity <= 0) {
    removeItem(id);
  }
}

export function removeItem(id: string): void {
  const index = cart.value.findIndex((item) => item.id === id);
  if (index !== -1) cart.value.splice(index, 1);
}

export function clearCart(): void {
  cart.value.splice(0, cart.value.length);
}
