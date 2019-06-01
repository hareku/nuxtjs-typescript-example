<template>
  <div class="container">
    <h1>TODO Application</h1>

    <div>
      Hello <b>{{ user.name }} ({{ user.email }})</b>
    </div>

    <div>
      <div v-for="todo in todos" :key="todo.id">
        <TodoItem :todo="todo" class="todo-item" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { User } from '~/types/user'
import { TODO } from '~/types/todo'
import TodoItem from '~/components/TodoItem.vue'

export default Vue.extend({
  components: {
    TodoItem
  },

  computed: {
    user(): User {
      return this.$state.user
    },

    todos(): TODO[] {
      return this.$state.todos.list
    }
  },

  async fetch({ store }) {
    await store.dispatch('todos/fetchList', { limit: 10 })
  }
})
</script>

<style scoped>
.container {
  margin-right: auto;
  margin-left: auto;
  max-width: 500px;
}

.todo-item {
  margin-top: 12px;
}
</style>
