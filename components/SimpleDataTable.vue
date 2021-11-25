<template>
  <v-card elevation="0" class="mt-5">
    <v-data-table
      :headers="headers"
      :items="items"
      single-expand
      :show-expand="expand"
      :server-items-length="itemsCount"
      :options.sync="options"
      :footer-props="{ itemsPerPageOptions: [5, 10, 15] }"
      @update:expanded="onExpand"
      @update:items-per-page="emitItemsPerPage"
      @update:page="emitPageNumber"
    >
      <!-- actions -->
      <template #[`item.actions`]="{ item }">
        <div v-if="actions[0].name == 'activate'">
          <v-switch
            v-model="item.estado"
            label="Activar/Desactivar"
            @click="change(item.id, item.estado)"
          />
        </div>
        <div v-else-if="actions[0].name == 'add'" class="d-flex">
          <v-text-field v-model.number="item.amount" height="36" class="pb-0 mb-0" type="number" outlined />
          <v-btn
            v-for="(btn, i) in actions"
            :key="i"
            :class="btn.class"
            class="mx-2"
            icon
            type="submit"
            @click="$emit(btn.name, item.id, item.amount)"
          >
            <v-icon>{{ btn.icon }}</v-icon>
          </v-btn>
        </div>
        <div v-else-if="item.productId">
          <v-btn
            v-for="(btn, i) in actions"
            :key="i"
            :class="btn.class"
            class="mx-2"
            icon
            @click="$emit(btn.name, item.productId)"
          >
            <v-icon>{{ btn.icon }}</v-icon>
          </v-btn>
        </div>
        <div v-else>
          <v-btn
            v-for="(btn, i) in actions"
            :key="i"
            :class="btn.class"
            class="mx-2"
            icon
            @click="$emit(btn.name, item.id)"
          >
            <v-icon>{{ btn.icon }}</v-icon>
          </v-btn>
        </div>
      </template>

      <!-- personalized fields -->
      <template #[`item.fecha`]="{ item }">
        <div>{{ item.fecha.slice(0,10) }}</div>
      </template>
      <template #[`item.estado`]="{ item }">
        <v-chip v-if="item.estado === -1" class="amber--text darken-2">
          Confirmado
        </v-chip>
        <v-chip v-else-if="item.cargo && item.estado" class="green--text">
          Activo
        </v-chip>
        <v-chip v-else-if="item.estado === 0" class="red--text">
          Inactivo
        </v-chip>
        <v-chip v-else-if="item.cargo && !item.estado" class="red--text">
          Baja
        </v-chip>
        <v-chip v-else>
          {{ item.estado }}
        </v-chip>
      </template>
      <template #[`item.count`]="{ item }">
        <div>
          {{ item.count + ' ' + (item.unitStr ? item.unitStr : 'unidad') + '/s' }}
        </div>
      </template>
      <template #[`item.stock`]="{ item }">
        <div>
          {{ item.stock + ' ' + item.unidadDeMedida + '/s' }}
        </div>
      </template>
      <template #[`item.qr`]="{ item }">
        <v-btn icon @click="$emit('showQr', item.id, item.nombreProducto? item.nombreProducto : item.nombre)">
          <v-icon>mdi-qrcode</v-icon>
        </v-btn>
      </template>
      <template #[`item.tipoMovimiento`]="{ item }">
        <v-chip :class="item.tipoMovimiento == 'salida'? 'yellow' : 'green white--text'">
          {{ item.tipoMovimiento }}
        </v-chip>
      </template>
      <template #expanded-item="{ }">
        <td :colspan="headers.length" class="pa-0">
          <div v-if="expandedData">
            <v-data-table
              :headers="itemHeaders"
              :items="expandedData"
              class="elevation-0"
              hide-default-footer
              dense
              dark
            >
              <template #[`item.cantidad`]="{ item }">
                <div>
                  {{ item.cantidad + ' ' + item.unidadDeMedida + '/s' }}
                </div>
              </template>
              <template #[`item.stock`]="{ item }">
                <div>
                  {{ item.stock + ' ' + item.unidadDeMedida + '/s' }}
                </div>
              </template>
            </v-data-table>
          </div>
          <div v-else>
            <v-progress-linear :indeterminate="true" />
          </div>
        </td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SampleDatatableShared',
  props: {
    expanded: {
      type: Array,
      required: false,
      default: () => []
    },
    itemsCount: {
      type: Number,
      required: true
    },
    itemHeaders: {
      type: Array,
      required: false,
      default: () => []
    },
    expand: {
      type: Boolean,
      default: false
    },
    expandedData: {
      type: Array,
      required: false,
      default: () => []
    },
    headers: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    actions: {
      type: Array,
      default: null
    }
  },
  data: () => ({
    dialog: false,
    options: null
  }),
  watch: {
    options (val) {
      const { page, itemsPerPage } = val
      this.$emit('datatablePagination', {
        page,
        itemsPerPage
      })
    }
  },
  methods: {
    change (itemId: number, status: boolean) {
      this.$emit('switchStatus', itemId, status)
    },
    onExpand ($event: any[]) {
      this.$emit('update:expanded', $event)
      if (!$event[0]) {
        return
      }
      this.$emit('findData', $event[0].id)
    },
    emitItemsPerPage (items: number) {
      this.$emit('update:itemsPerPage', items)
    },
    emitPageNumber (page: number) {
      this.$emit('update:page', page)
    }
  }
})
</script>

<style>
.v-text-field--filled > .v-input__control > .v-input__slot, .v-text-field--full-width > .v-input__control > .v-input__slot, .v-text-field--outlined > .v-input__control > .v-input__slot {
    align-items: stretch;
    min-height: 32px;
}
</style>
