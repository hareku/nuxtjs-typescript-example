import { Context } from '~/types/nuxt'
import { User } from '~/types/user'

export interface S {
  user: User
}

export interface G {}
export interface RG {}

export interface M {
  setUser: { user: User }
}
export interface RM {
  'setUser': M['setUser']
}

export interface A {
  nuxtServerInit: Context
}
export interface RA {}
