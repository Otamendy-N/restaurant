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
        text: 'Nombre de la Empresa',
        value: 'name'
      },
      {
        text: 'Encargado',
        value: 'manager'
      },
      {
        text: 'Direccion',
        value: 'address'
      },
      {
        text: 'Numero de Telefono',
        value: 'phoneNumber'
      },
      {
        text: 'Email',
        value: 'email'
      },
      {
        text: 'Pais',
        value: 'country'
      }
    ],
    items: [
      {
        id: 1,
        name: 'Copalsa SA',
        manager: 'Pedro Isfran',
        address: 'Ruta 1 KM 16',
        phoneNumber: '+ 099 432 5349',
        email: 'contacto@copalsa.com',
        country: 'Argentina'
      },
      {
        id: 2,
        name: 'Los Colonos SA',
        manager: 'Jorge Luis',
        address: 'Avd Francia N 54',
        phoneNumber: '+ 099 345 5379',
        email: 'contacto@colonos.com',
        country: 'Bolivia'
      },
      {
        id: 3,
        name: 'Hiberland',
        manager: 'Balto Caceres',
        address: 'Rura 54 3km',
        phoneNumber: '+ 459 435 5374',
        email: 'contacto@hiberland.com',
        country: 'Brasil'
      }
    ]
  })
})
</script>
