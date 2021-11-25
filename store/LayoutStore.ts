import { GetterTree, MutationTree, ActionTree } from 'vuex'
import { UserModel } from '~/models/UserModel'
import { CargoModel } from '~/models/CargoModel'
import { WorkModel } from '~/models/WorkModel'

export const state = () => ({
  show: true,
  pageTitle: 'Home',
  currentWorkId: 0,
  to: '',
  user: null as null | UserModel,
  works: [] as WorkModel[],
  cargo: null as null | CargoModel
})

type State = ReturnType<typeof state>

export const getters: GetterTree<State, State> = {
  show (state) {
    return state.show
  },
  pageTitle (state) {
    return state.pageTitle
  },
  currentWorkId (state) {
    return state.currentWorkId
  },
  to (state) {
    return state.to
  },
  user (state) {
    return state.user
  },
  works (state) {
    return state.works
  },
  cargo (state) {
    return state.cargo
  }
}

export const mutations: MutationTree<State> = {
  showAddBtn: (state, show: boolean) => (state.show = show),
  setCurrentWorkId: (state, workId: number) => (state.currentWorkId = workId),
  setPageTitle: (state, pageTitle: string) => (state.pageTitle = pageTitle),
  setTo: (state, to: string) => (state.to = to),
  setUser: (state, to: UserModel) => (state.user = to),
  setCargo: (state, to: CargoModel) => (state.cargo = to),
  setWorks: (state, to: WorkModel[]) => (state.works = to)
}

export const actions: ActionTree<State, State> = {
  async getUser ({ commit }) {
    const user = await this.$axios.$get<UserModel>('/usuarios/activo')
    commit('setUser', user)
  },
  async getWorks ({ commit }) {
    const works = await this.$axios.$get<WorkModel[]>('/construction/info')
    commit('setWorks', works)
  },
  async getCargo ({ commit }) {
    const cargo = await this.$axios.$get<CargoModel>('/usuarios/cargo')
    commit('setCargo', cargo)
  }
}
