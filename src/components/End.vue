<script setup>
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
</script>

<template>
  <footer class="container mx-auto px-4 mt-16 md:mt-24">
    <section
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 items-start justify-items-center text-center md:text-left"
    >
      <div class="flex flex-col gap-4 items-center md:items-start">
        <h4 class="font-bold text-lg md:text-xl">Garden Care</h4>
        <p class="text-gray-500 max-w-sm">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>

      <div class="flex flex-col gap-4 items-center md:items-start">
        <h4 class="font-bold text-lg md:text-xl">Plant Renovation</h4>
        <p class="text-gray-500 max-w-sm">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>

      <div class="flex flex-col gap-4 items-center md:items-start">
        <h4 class="font-bold text-lg md:text-xl">Watering Graden</h4>
        <p class="text-gray-500 max-w-sm">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>

      <div class="flex flex-col gap-4 items-center md:items-start">
        <h4 class="font-bold text-lg md:text-xl">
          Would you like to join newsletters?
        </h4>
        <div
          class="flex w-full max-w-md items-center gap-2 justify-center md:justify-start"
        >
          <Input id="email" type="email" placeholder="Email" class="flex-1" />
          <Button type="submit">Subscribe</Button>
        </div>
        <p class="text-gray-500 text-sm">
          We usually post offers and challenges in newsletter. We’re your online
          houseplant destination. We offer a wide range of houseplants and
          accessories shipped directly from our (green)house to yours!
        </p>
      </div>
    </section>

    <hr class="my-8 md:my-12 border-t border-gray-200" />

    <section
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center"
    >
      <div class="order-first md:order-none">
        <img
          src="../assets/logo.png"
          alt="Greenshop Logo"
          class="max-w-[150px]"
        />
      </div>
      <div
        class="flex gap-2 items-center cursor-pointer text-center md:text-left"
      >
        <img class="w-8 h-8" src="../assets/location.svg" alt="Location Icon" />
        <p class="max-w-xs text-sm">
          70 West Buckingham Ave. Farmingdale, NY 11735
        </p>
      </div>
      <div
        class="flex gap-2 items-center cursor-pointer text-center md:text-left"
      >
        <img class="w-8 h-8" src="../assets/mail.svg" alt="Mail Icon" />
        <p class="text-sm">contact@greenshop.com</p>
      </div>
      <div
        class="flex gap-2 items-center cursor-pointer text-center md:text-left"
      >
        <img class="w-8 h-8" src="../assets/phone.svg" alt="Phone Icon" />
        <p class="text-sm">+88 01911 717 490</p>
      </div>
    </section>

    <hr class="my-8 md:my-12 border-t border-gray-200" />

    <section
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 justify-items-center text-center md:text-left"
    >
      <div class="flex flex-col gap-3 items-center md:items-start">
        <h4 class="font-bold text-lg md:text-xl">My Account</h4>
        <a href="#" class="text-gray-500 hover:text-green-600 transition"
          >My Account</a
        >
        <a href="#" class="text-gray-500 hover:text-green-600 transition"
          >Our stores</a
        >
        <a href="#" class="text-gray-500 hover:text-green-600 transition"
          >Contact us</a
        >
        <a href="#" class="text-gray-500 hover:text-green-600 transition"
          >Career</a
        >
        <a href="#" class="text-gray-500 hover:text-green-600 transition"
          >Specials</a
        >
      </div>

      <div class="flex flex-col gap-3 items-center md:items-start">
        <h4 class="font-bold text-lg md:text-xl">Help & Guide</h4>
        <a href="#" class="text-gray-500 hover:text-green-600 transition"
          >Help Center</a
        >
        <a href="#" class="text-gray-500 hover:text-green-600 transition"
          >How to Buy</a
        >
        <a href="#" class="text-gray-500 hover:text-green-600 transition"
          >Shipping & Delivery</a
        >
        <a href="#" class="text-gray-500 hover:text-green-600 transition"
          >Product Policy</a
        >
        <a href="#" class="text-gray-500 hover:text-green-600 transition"
          >How to Return</a
        >
      </div>

      <div class="flex flex-col gap-3 items-center md:items-start">
        <h4 class="font-bold text-lg md:text-xl">Categories</h4>
        <a href="#" class="text-gray-500 hover:text-green-600 transition"
          >House Plants</a
        >
        <a href="#" class="text-gray-500 hover:text-green-600 transition"
          >Potter Plants</a
        >
        <a href="#" class="text-gray-500 hover:text-green-600 transition"
          >Seeds</a
        >
        <a href="#" class="text-gray-500 hover:text-green-600 transition"
          >Small Plants</a
        >
        <a href="#" class="text-gray-500 hover:text-green-600 transition"
          >Accessories</a
        >
      </div>

      <div class="flex flex-col gap-4 items-center md:items-start">
        <div>
          <h4 class="font-bold text-lg md:text-xl">Social Media</h4>
          <div class="flex gap-4 mt-2 justify-center md:justify-start">
            <a href="#"
              ><img src="../assets/facebook.svg" alt="Facebook" class="w-8 h-8"
            /></a>
            <a href="#"
              ><img
                src="../assets/instagram.svg"
                alt="Instagram"
                class="w-8 h-8"
            /></a>
            <a href="#"
              ><img src="../assets/twitter.svg" alt="Twitter" class="w-8 h-8"
            /></a>
            <a href="#"
              ><img src="../assets/youtube.svg" alt="Youtube" class="w-8 h-8"
            /></a>
          </div>
        </div>
        <div>
          <h4 class="font-bold text-lg md:text-xl">We accept</h4>
          <div class="flex gap-4 mt-2 justify-center md:justify-start">
            <img src="../assets/paypal.svg" alt="Paypal" class="h-6" /><img
              src="../assets/mastercard.svg"
              alt="Mastercard"
              class="h-6"
            /><img src="../assets/visa.svg" alt="Visa" class="h-6" />
          </div>
        </div>
      </div>
    </section>

    <p class="text-center text-gray-500 text-sm mt-8 md:mt-12 mb-4">
      © 2025 GreenShop. All Rights Reserved.
    </p>
  </footer>
</template>
