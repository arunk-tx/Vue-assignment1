<template>
  <PostDetail :post="post" />
</template>
  
<script setup>
import { computed, defineProps, ref } from "vue";
import PostDetail from "../components/PostDetail";
import { postapi } from "@/api/api";

const props = defineProps(["id"]);
const resp = ref(null);
const fetch = async () => {
  const data = await postapi.getPostsById(props.id);
  resp.value = data.data;
  console.log("fetch resp", resp.value)
};

if (resp.value == null) fetch();
const post = computed(() => {
  return resp.value;
});
console.log("hloooo");
</script>
  
<style>
</style>