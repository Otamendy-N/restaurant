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
      },
      {
        id: 3,
        name: 'Harina de Trigo 0000',
        supplier: 'Hildebran',
        category: 'Cereales',
        subcategory: 'Gluten',
        unitQuantity: '3.5 kilos',
        stock: '20 unidad/s',
        price: '15 000 Gs.'
      },
      {
        id: 4,
        name: 'Sopa Paraguaya 1kg',
        supplier: 'Granopar',
        category: 'Productos congelados',
        subcategory: 'Listos para hornear',
        unitQuantity: '2.5 kilos',
        stock: '10 unidad/s',
        price: '22 000 Gs.'
      },
      {
        id: 5,
        name: 'Pan',
        supplier: 'Bimbo',
        category: 'Panificados',
        subcategory: 'Integral',
        unitQuantity: '1.2 kilos',
        stock: '15 unidad/s',
        price: '18 000 Gs.'
      },
      {
        id: 6,
        name: 'Chorizo ',
        supplier: 'Chortizer',
        category: 'Embutidos',
        subcategory: 'Chorizo picante',
        unitQuantity: '4.0 kilos',
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
