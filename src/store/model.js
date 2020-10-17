import { types, unprotect } from "mobx-state-tree"

const Todo = types.model({
  task: types.string,
  done: types.optional(types.boolean, false)
})
.actions(self => ({

  toggle() {
      self.done = !self.done
  }
}))

export const TodoStore = types.model({
  todos: types.array(Todo)
})

const s = TodoStore.create({ todos: [] })
unprotect(s) // needed to allow modifying outside of an action
s.todos.push({ task: "Grab coffee" })
// console.log(s.todos[0]) // prints: "Grab coffee"