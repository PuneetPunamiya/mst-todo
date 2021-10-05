import { RootStore } from "./store";
import { getSnapshot } from "mobx-state-tree";

it("creates a store", () => {
  const store = RootStore.create({});
  store.addTodo(1, "Eat a cake");

  store.addTodo(1, "Eat a cake");
  expect(store.todos.size).toBe(1);
  store.todos.get(1).toggle();
  expect(store.todos.get(1).done).toBe(true);
});

it("creates a store to match snapshot", () => {
  const store = RootStore.create({});
  store.addTodo(1, "Eat a cake");

  store.addTodo(1, "Eat a cake");
  expect(store.todos.size).toBe(1);
  store.todos.get(1).toggle();
  expect(store).toMatchSnapshot();
});
