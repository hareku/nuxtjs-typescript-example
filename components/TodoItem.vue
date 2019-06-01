<template>
  <div>
    <div>{{ todo.title }} ({{ status }})</div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { TODO } from '~/types/todo'

export default Vue.extend({
  props: {
    todo: {
      type: Object as PropType<TODO>,
      required: true
    }
  },

  computed: {
    status(): string {
      return this.todo.completed ? 'Done' : 'TODO'
    }
  }
})
</script>

<style scoped>
.todo-item {
  text-align: center;
  padding: 12px;
  border: solid 1px black;
}
</style>
