<template>
  <v-app>
    <side-bar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import SideBar from "./components/SideBar";
</script>
