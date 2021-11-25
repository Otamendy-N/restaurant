<template>
  <v-sheet max-width="1200" class="mx-auto mt-10">
    <v-list elevation="0">
      <v-list-item v-for="(item, i) in items" :key="i" class="elevation-3 my-5 rounded-lg py-2">
        <v-list-item-title>
          Nombre: <br> <b> {{ item.name }} </b>
        </v-list-item-title>
        <v-list-item-subtitle>
          Descripcion: <br> <b> {{ item.description }} </b>
        </v-list-item-subtitle>
        <v-list-item-action>
          <v-icon>mdi-pen</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-sheet>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    items: [
      {
        name: 'Bebidas',
        description: 'Sin descripcion.'
      },
      {
        name: 'Limpieza',
        description: 'Categoria sobre productos de limpieza.'
      }
    ]
  }),
  mounted () {
    this.$store.commit('LayoutStore/setPageTitle', 'Categorias')
    this.$store.commit('LayoutStore/showAddBtn', true)
  }
})
</script>
