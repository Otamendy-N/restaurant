<template>
  <v-btn v-if="showAddBtn" icon class="white ml-auto mr-1" nuxt :to="to">
    <v-icon color="primary">
      mdi-plus
    </v-icon>
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AddBtn',
  props: {
    showAddBtn: {
      type: Boolean,
      required: true
    },
    to: {
      type: String,
      required: true
    }
  }
})
</script>
