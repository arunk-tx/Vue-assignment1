<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="500px">
      <template v-slot:activator="{ props }">
        <v-btn color="red" v-bind="props" class="ma-5">
          Delete
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5">
          Delete?
        </v-card-title>
        <v-card-text>Do you want to delete</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green-darken-1" variant="text" @click="dialog = false">
            Cancel
          </v-btn>
          <v-btn color="green-darken-1" variant="text" @click="deleteConfirm">
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script setup>
import { ref, defineEmits } from "vue"
const dialog = ref(false)
const emit = defineEmits(['deleteClicked'])

const deleteConfirm = () => {
  console.log("clicked delete")
  dialog.value = false
  emit('deleteClicked')
  //console.log("emits", emits)
}
</script>