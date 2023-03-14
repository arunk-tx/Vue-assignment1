<template>
  <v-col cols="12" id="page">
    <div class="pre">
      <v-row>
        <v-col v-for="post in posts" :key="post.id" cols="12" sm="4">
            <SinglePost :post="post" />
        </v-col>
      </v-row>
    </div>
  </v-col>
</template>
<script setup>
import { defineProps } from "vue";
import SinglePost from "./SinglePost.vue";
const props = defineProps(["posts"]);
console.log("props from  list", props.posts);
</script>
