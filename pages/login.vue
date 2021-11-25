<template>
  <v-card class="pa-16 mx-auto mt-16 text-center" max-width="600">
    <v-card-title class="text-center">
      Inicia Sesion
    </v-card-title>
    <v-card-subtitle v-if="wrong" class="red--text text-left">
      Usuario o Contraseña equivocados.
    </v-card-subtitle>
    <v-text-field v-model="username" color="secondary" label="Usuario" height="60" outlined />
    <v-text-field
      v-model="password"
      type="password"
      color="secondary"
      label="Contraseña"
      height="60"
      outlined
    />
    <v-checkbox label="Recuerdame" class="grey--text caption" />
    <v-btn color="primary" class="mx-auto mt-10 text-capitalize px-16" rounded @click="login">
      Log in
    </v-btn>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'empty',
  data: () => ({
    username: '',
    password: '',
    wrong: false
  }),
  methods: {
    login () {
      if (this.username !== 'depositero' && this.password !== '123456') {
        this.wrong = true
      } else {
        this.$router.push('/suppliers')
      }
    }
  }
})
</script>
