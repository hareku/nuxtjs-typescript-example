import * as Vuex from 'vuex'

class ExStore {
  store: Vuex.ExStore
  constructor(store: Vuex.ExStore) {
    this.store = store
  }

  state() {
    return this.store.state
  }

  getters() {
    return this.store.getters
  }

  commit() {
    return this.store.commit
  }

  dispatch() {
    return this.store.dispatch
  }
}

export default (context, inject) => {
  const store = new ExStore(context.store)

  inject('state', store.state())
  inject('getters', store.getters())
  inject('commit', store.commit())
  inject('dispatch', store.dispatch())
}
