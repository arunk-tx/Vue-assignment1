<template>
  <h1>Detail</h1>
    <v-app>
   
    <v-main class="mt-5 ma-10">
    <div v-if="job">
      <h1>{{ job.author_name }}</h1>
      <p>{{ job.description }}</p>
    </div>
    <div v-else>
      <p>Loading job details...</p>
    </div>
    </v-main>
    </v-app>
  </template>
  
  <script setup>
  import { ref, onMounted, defineProps } from 'vue';
  const job = ref(null)
  const props = defineProps(['id'])
  onMounted(() => {
    console.log(`the component is now mounted.`)
    fetch('http://localhost:3000/posts/' + props.id)
      .then(res => res.json())
      .then(data => job.value = data)
      .catch(err => console.log(err.message))
  })
  </script>
  
  <style>
  
  </style>