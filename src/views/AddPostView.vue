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
    <v-card class="container ma-10 text-center "
    width="80%"
    >
  <div class="container mt-4">
    <form @submit.prevent="addNewPost" width="100%">
      <h2>Add New Post</h2>
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
      <v-btn type="submit" class="btn ma-10" color="primary">Add</v-btn>
    </form>
  </div>
</v-card>
</template>