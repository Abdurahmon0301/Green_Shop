<template>
  <div class="likes-page">
    <h1>Favorite Items</h1>
    <div class="liked-items">
      <div v-for="item in likes" :key="item.id" class="liked-item">
        <img :src="item.image" :alt="item.name" />
        <h3>{{ item.name }}</h3>
        <p>${{ item.price }}</p>
        <button @click="toggleLike(item)">Unlike</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "LikesPage",
  computed: {
    ...mapState(["likes"]),
  },
  methods: {
    ...mapMutations(["toggleLike"]),
  },
};
</script>
