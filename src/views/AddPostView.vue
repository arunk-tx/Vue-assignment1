<script setup>
import axios from "axios";
import { reactive } from "vue";
import { useRouter } from "vue-router";
let newPost = reactive({
    author_name: "",
  author_avatar: "",
  description: "",
  asset_type: "",
  thumbnail_url: "",
  created_at: "",
  updated_at: "",
  image_url: "",
});
const router = useRouter();
const addNewPost = () => {
  axios.post("http://localhost:3000/posts", newPost).then(() => {
    router.push("/view-posts");
  });
};
</script>
 
<template>
    <v-card class=""
    max-width="100%">
  <div class="container mt-4 w-50">
    <form @submit.prevent="addNewPost" width="100%">
      <legend>Add New Post</legend>
      <div class="mb-3">
        <v-text-field
      v-model="newPost.author_name"
      
      label="author Name"
    ></v-text-field>
        
      </div>
      <div class="mb-3">
        <v-text-field
      v-model="newPost.author_avatar"
      
      label="author avatar"
    ></v-text-field>
        
      </div>
      <div class="mb-3">
        <v-text-field
      v-model="newPost.description"
      
      label="Description"
    ></v-text-field>
        
      </div>
      <v-btn type="submit" class="btn ma-auto" color="primary">Add</v-btn>
    </form>
  </div>
</v-card>
</template>