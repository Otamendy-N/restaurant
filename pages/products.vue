<template>
  <v-sheet max-width="1200" class="mx-auto mt-10" elevation="2">
    <v-data-table :items="items" :headers="headers" />
  </v-sheet>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    headers: [
      {
        text: '#ID',
        value: 'id'
      },
      {
        text: 'Nombre del Producto',
        value: 'name'
      },
      {
        text: 'Proveedor',
        value: 'supplier'
      },
      {
        text: 'Categoria',
        value: 'category'
      },
      {
        text: 'SubCategoria',
        value: 'subcategory'
      },
      {
        text: 'Cantidad por Unidad',
        value: 'unitQuantity'
      },
      {
        text: 'Unidades en Stock',
        value: 'stock'
      },
      {
        text: 'Precio por Unidad',
        value: 'price'
      }
    ],
    items: [
      {
        id: 1,
        name: 'Coca-Cola Zero',
        supplier: 'Coca Cola',
        category: 'Bebidas',
        subcategory: 'Gaseosas',
        unitQuantity: '1.5 litros',
        stock: '150 unidad/s',
        price: '50 000 Gs.'
      },
      {
        id: 2,
        name: 'Deterjente Liquido Solari 500ml',
        supplier: 'Copalsa SA',
        category: 'Limpieza',
        subcategory: 'Detergentes Liquidos',
        unitQuantity: '0.5 litros',
        stock: '30 unidad/s',
        price: '20 000 Gs.'
      }
    ]
  }),
  mounted () {
    this.$store.commit('LayoutStore/setPageTitle', 'Productos')
    this.$store.commit('LayoutStore/showAddBtn', true)
  }
})
</script>
