<template>
  <v-card
    class="ma-10"
    max-width="90%"
  >
  <h2 style="text-align: center;">Details</h2>
    <v-card-actions>
      <v-list-item class="w-100">
        <template v-slot:prepend>
          <v-avatar
            color="grey-darken-3"
            :image="post.author_avatar"
            size="100"
          ></v-avatar>
        </template>
        <v-list-item-title>{{ post.author_name }}</v-list-item-title>
        <v-list-item-subtitle>{{ post.created_at }}</v-list-item-subtitle>
      </v-list-item>
    </v-card-actions>
    <v-card-text>
      {{ post.description }}
    </v-card-text>
    <v-card-text>
      Asset type: {{post.asset_type}}
    </v-card-text>
    <v-card-text>
      Updated at {{post.updated_at}}
    </v-card-text>
    <v-img
      v-if="post.image_url"
      :src="post.image_url"
      height="200px"
      cover
    ></v-img>
  </v-card>
</template>
  <script setup>
import { defineProps } from "vue";
defineProps(["post"]);
</script>
  <style scoped>
.v-list-item-subtitle {
  font-size: 12px;
}
.v-card {
  border-radius: 12px;
}
</style>
  