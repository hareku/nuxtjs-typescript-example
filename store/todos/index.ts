import { Getters, Mutations, Actions } from 'vuex'
import { S, G, M, A } from './type'
import { TODO } from '~/types/todo'

export const state = (): S => ({
  list: []
})

export const getters: Getters<S, G> = {}

export const mutations: Mutations<S, M> = {
  setList(state, { todos }) {
    state.list = todos
  }
}

export const actions: Actions<S, A, G, M> = {
  fetchList({ commit }, { limit }) {
    return this.$axios.$get('https://jsonplaceholder.typicode.com/todos', { params: { _limit: limit }})
      .then((todos: TODO[]) => {
        commit('setList', { todos })
      })
  }
}
