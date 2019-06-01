import { TODO } from '~/types/todo'

export interface S {
  list: TODO[]
}

export interface G {}
export interface RG {}

export interface M {
  setList: { todos: TODO[] }
}
export interface RM {
  'todos/setList': M['setList']
}

export interface A {
  fetchList: { limit: number }
}
export interface RA {
  'todos/fetchList': A['fetchList']
}
