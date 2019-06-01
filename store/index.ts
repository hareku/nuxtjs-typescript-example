import { Getters, Mutations, Actions } from 'vuex'
import { S, G, M, A } from './type'
import { User } from '~/types/user'

export const state = (): S => ({
  user: {
    id: 0,
    name: '',
    email: ''
  }
})

export const getters: Getters<S, G> = {}

export const mutations: Mutations<S, M> = {
  setUser(state, { user }) {
    state.user = user
  }
}

export const actions: Actions<S, A, G, M> = {
  nuxtServerInit({ commit }, ctx) {
    return this.$axios.$get('https://jsonplaceholder.typicode.com/users/1')
      .then((user: User) => {
        commit('setUser', { user })
      })
  }
}
