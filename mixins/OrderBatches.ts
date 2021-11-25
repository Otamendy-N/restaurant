import Vue from 'vue'
import { GetOrderModel, OrderDetail } from '~/models/OrderModel'
import { ProductModel } from '~/models/ProductModel'

export default Vue.extend({
  data: () => ({
    searchItems: [],
    search: '',
    searchValue: null,
    order: {} as GetOrderModel,
    editMode: false,
    items: [] as ProductModel[],
    addedItems: [] as OrderDetail[],
    headers: [
      {
        text: '#Id',
        value: 'id'
      },
      {
        text: 'Nombre',
        value: 'name'
      },
      {
        text: 'Cantidad Productos',
        value: 'quantity'
      },
      {
        text: 'Agregar Cantidad',
        value: 'actions'
      }
    ],
    addedHeaders: [
      {
        text: 'Nombre',
        value: 'product'
      },
      {
        text: 'Cantidad Productos',
        value: 'quantity'
      }
    ],
    actions: [
      {
        name: 'add',
        icon: 'mdi-plus',
        class: 'green--text'
      }
    ],
    addedActions: [
      {
        name: 'delete',
        icon: 'mdi-close',
        class: 'red--text'
      }
    ],
    count: 0,
    page: 1,
    itemsPerPage: 5
  }),
  watch: {
    page (val) {
      this.page = val
      this.$fetch()
    },
    itemsPerPage (val) {
      this.itemsPerPage = val
      this.$fetch()
    },
    async search (val) {
      try {
        const id = this.$store.getters['LayoutStore/currentWorkId']
        this.searchItems = await this.$axios.$get(`/search/products?constructionId=${id}&q=${val}`)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    }
  },
  methods: {
    async findItem (id: number): Promise<void> {
      if (id === null) {
        this.$fetch()
      } else {
        try {
          this.items = [] as ProductModel[]
          const res = await this.$axios.$get(`/productos/${id}`)
          this.items.push(res)
          this.page = 1
          this.itemsPerPage = 5
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(error)
        }
      }
    },
    add (id: number, amount: number): void {
      const i = this.items.findIndex(elem => elem.id === id)
      const j = this.addedItems.findIndex(elem => elem.productId === id)
      if (j >= 0) {
        this.addedItems[j].quantity += amount
      } else if (amount > 0) {
        this.addedItems.push({
          productId: this.items[i]?.id,
          name: this.items[i]?.name,
          quantity: amount
        })
      }
    },
    deleteItem (id: number): void {
      const i = this.addedItems.findIndex(elem => elem.productId === id)
      this.addedItems.splice(i, 1)
    },
    async edit (): Promise<void> {
      const id = this.$store.getters['LayoutStore/currentWorkId']
      try {
        const res = await this.$axios.$get(
          `/productos?constructionId=${
            id
          }&skip=${
          (this.page - 1) * this.itemsPerPage
          }&take=${
          this.itemsPerPage
          }`)
        this.items = res.items
        this.count = res.count
      } catch (error) {
      // eslint-disable-next-line no-console
        console.error(error)
      }
      this.editMode = true
      this.addedHeaders.push({
        text: 'Eliminar',
        value: 'actions'
      })
    }
  }
})
