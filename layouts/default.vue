<template>
  <v-app app>
    <v-navigation-drawer v-model="drawer" width="350" app>
      <div>
        <p class="mx-5 font-weight-thin my-16 text-h3 text-center">
          Restaurant ERP
        </p>
      </div>
      <navigation-list-menu :items="items" />
    </v-navigation-drawer>

    <v-app-bar app class="py-3 pa-0" height="70" extension-height="75">
      <h1 class="mr-auto ml-6 font-weight-light text-h5 text-md-h3">
        {{ pageTitle }}
      </h1>
      <user-tag class="ml-auto mr-6" :name="username" :rol="rol" />
      <template #extension class="px-3">
        <v-btn
          icon
          color="white"
          @click="drawer = !drawer"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <add-btn :show-add-btn="showAddBtn" :to="to" />
      </template>
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script >
import AddBtn from '~/components/Layout/AddBtn.vue'
import NavigationListMenu from '~/components/Layout/NavigationListMenu.vue'
import UserTag from '~/components/Layout/UserTag.vue'
import ItemsList from '~/helpers/NavigationBarItems'

export default {
  components: { AddBtn, UserTag, NavigationListMenu },
  data: () => ({
    items: ItemsList.items,
    works: [],
    drawer: null,
    username: 'Juan Perez',
    rol: 'Depositor',
    loading: false,
    text: ''
  }),
  computed: {
    pageTitle () {
      return this.$store.getters['LayoutStore/pageTitle']
    },
    showAddBtn () {
      return this.$store.getters['LayoutStore/show']
    },
    to () {
      return this.$store.getters['LayoutStore/to']
    }
  }
}
</script>

<style>
.v-toolbar__extension {
  background: #1c1e26;
}
</style>

<style scoped>
.img {
  width: 125px;
}
.img-container {
  width: 320px;
  border-bottom: 1px solid #1c1e26;
}
</style>
