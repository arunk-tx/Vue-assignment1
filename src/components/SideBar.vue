<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <v-list-item prepend-avatar="https://tx-resources.s3.us-east-2.amazonaws.com/sm-profile.png" :title="user"
        subtitle=""></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-home" title="Home" value="home" :to="{ name: 'HomePage' }"></v-list-item>
      <v-list-item prepend-icon="mdi-post" title="Posts" value="posts" :to="{ name: 'PostViews' }"></v-list-item>
      <v-list-item prepend-icon="mdi-lock" title="Test" value="test" :to="{ name: 'TestView' }"></v-list-item>
      <v-list-item prepend-icon="mdi-logout" title="Logout" value="logout" @click="logoutClick"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { useStore } from "vuex";
//import { computed } from "vue";
//import { useRouter } from 'vue-router'
//const router = useRouter()
const store = useStore();

//const user = computed(() => store.state.email);
const user = store.getters.getEmail;
function logoutClick() {
  console.log("logout!!");
  //localStorage.removeItem("email");
}
</script>