<template>
  <div class="loader-container" :style="{ height: `${height}px` }">
    <v-progress-circular
      class="mt-16"
      color="primary"
      size="48"
      width="6"
      indeterminate
    />
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: [String, Number],
      default: 500
    }
  }
}
</script>

<style scoped lang="sass">
.loader-container
  display: flex
  justify-content: center
</style>
