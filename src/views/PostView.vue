<template>
  <div class="ui cards" style="margin: 10px">
    <div class="ui icon input" style="width: 100%">
      <input type="text" placeholder="Search..." v-model="searchQuery" />
      <i class="search icon"></i>
    </div>
    
    <div
      class="card ui fluid"
      v-for="post in searchedPosts"
      :key="post.id"
      style="margin: 0"
    >
      <div class="content">
        <img class="right floated mini ui image"  />
        <div class="header">{{ post.id }}</div>
        <div class="meta">
         {{ post.author_name }} Kg 
          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const searchQuery = ref("");

store.dispatch("getPosts");
const searchedPosts = computed(() => {
    return posts.value.filter((post) => {
    return (
        post.author_name
        .toLowerCase()
        .indexOf(searchQuery.value.toLowerCase()) != -1
    );
    });
});

const posts = computed(() => {
    return store.getters.getPosts;
});
</script>