import 'vuex'
import * as Index from '~/store/type'
import * as TODOS from '~/store/todos/type'

declare module 'vuex' {
  type RootState = Index.S & {
    todos: TODOS.S
  }
  type RootGetters = Index.RG & TODOS.RG
  type RootMutations = Index.RM & TODOS.RM
  type RootActions = Index.RA & TODOS.RA
}
