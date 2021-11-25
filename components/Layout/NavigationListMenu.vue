<template>
  <div>
    <v-list-item-group>
      <v-list-item
        v-for="(item, x) in items"
        :key="x"
        :to="item.path"
        class="d-flex align-center mt-0"
        active-class="primary white--text"
      >
        <v-list-item-icon>
          <v-icon color="secondary">
            {{ item.icon }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-title>
          {{ item.name }}
        </v-list-item-title>
      </v-list-item>
      <v-list-item
        class="d-flex align-center"
        active-class="primary white--text"
        to="/login"
        @click="logout"
      >
        <v-list-item-icon>
          <v-icon color="secondary">
            mdi-exit-to-app
          </v-icon>
        </v-list-item-icon>
        <v-list-item-title>
          Cerrar Sesion
        </v-list-item-title>
      </v-list-item>
    </v-list-item-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    logout () {
      // await this.$auth.signoutRedirect()
      // eslint-disable-next-line no-console
      console.log('Logout')
    }
  }
})
</script>
