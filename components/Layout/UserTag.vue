<template>
  <div class="d-flex align-center">
    <div>
      <h3 class="text-capitalize">
        {{ name.toLowerCase() }}
      </h3>
      <p class="ma-0 text-right text-capitalize body-2 primary--text">
        {{ rol.toLowerCase() }}
      </p>
    </div>
    <v-img src="/user.svg" width="40" class="ml-3" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true
    },
    rol: {
      type: String,
      required: true
    }
  }
})
</script>
