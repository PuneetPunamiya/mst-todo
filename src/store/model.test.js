import {TodoStore} from './model'
import {unprotect} from 'mobx-state-tree'


it("shoult toggle", () => {
  const s = TodoStore.create({ todos: [] })
  unprotect(s)
  s.todos.push({ task: "asd" })
  // expect(s.todos[0].done).toBe(false)
  s.todos[0].toggle()
  expect(s.todos[0].done).toBe(true)
})

it("should test with snapshots", () => {
  const s = TodoStore.create({ todos: [] })
  unprotect(s)
  s.todos.push({ task: "asd" })
  // expect(s.todos[0].done).toBe(false)
  s.todos[0].toggle()
  expect(s).toMatchSnapshot();
})