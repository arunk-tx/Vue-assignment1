<template>
  <v-app style="background-color: #eeeeee">
    <v-container>
      <v-row class="d-flex justify-space-between ml-0 mr-0">
        <v-card-text>
          <v-text-field
            density="compact"
            variant="solo"
            label="Search by author"
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
            v-model="searchQuery"
          ></v-text-field>
        </v-card-text>
        <div class="mt-3 mr-3">
          <v-btn class="mx-2" :to="{ name: 'AddPost' }" :rounded="0" color="primary">
            Add Post
          </v-btn>
          <v-btn v-if="toggler" @click="sortd" :rounded="0" color="primary">
            sort A-Z
          </v-btn>
          <v-btn v-else @click="sortd" :rounded="0" color="primary">
            sort Z-A
          </v-btn>
        </div>
      </v-row>
      <v-row>
        <PostList :posts="searchedPosts" />
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import PostList from "../components/PostList";
const store = useStore();
const searchQuery = ref("");

const toggler = ref(true);
store.dispatch("getPosts");
const searchedPosts = computed(() => {
  return posts.value.filter((post) => {
    return (
      post.author_name.toLowerCase().indexOf(searchQuery.value.toLowerCase()) !=
      -1
    );
  });
});

const posts = computed(() => {
  console.log("posts data", posts);
  return store.getters.getPosts;
});
function sortd() {
  toggler.value = !toggler.value;
  //console.log("enter", posts)
  const sorted = posts.value.sort((a, b) => {
    return a.author_name.localeCompare(b.author_name);
  });
  if (toggler.value) {
    sorted.reverse();
  }
  //console.log("sorted", sorted)
  return sorted;
}
</script>
<style scoped>
.v-text-field {
  width: 300px;
}
</style>