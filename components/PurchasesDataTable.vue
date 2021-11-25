<template>
  <v-card elevation="0" class="mt-5">
    <v-data-table
      :headers="headers"
      :items="items"
      single-expand
      :show-expand="expand"
      :options.sync="options"
      :server-items-length="itemsCount"
      :footer-props="{ itemsPerPageOptions: [5, 10, 15] }"
      @update:expanded="onExpand"
      @update:items-per-page="emitItemsPerPage"
      @update:page="emitPageNumber"
    >
      <template #[`item.actions`]="{ item }">
        <div v-if="actions[0].name == 'activate'">
          <v-switch
            v-model="item.estado"
            label="Activar/Desactivar"
            @click="change(item.id, item.estado)"
          />
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
      <template #[`item.fecha`]="{ item }">
        <div>{{ item.fecha.slice(0,10) }}</div>
      </template>
      <template #[`item.estado`]="{ item }">
        <v-chip>
          {{ item.estado }}
        </v-chip>
      </template>
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
    itemsCount: {
      type: Number,
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
      this.$emit('itemsPerPage', items)
    },
    emitPageNumber (page: number) {
      this.$emit('page', page)
    }
  }
})
</script>
