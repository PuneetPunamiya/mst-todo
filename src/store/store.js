import { types } from 'mobx-state-tree';

const catalog = types.model({
  id: types.identifier,
  name: types.optional(types.string, ''),
  type: types.optional(types.string, ''),
});

const Todo = types
  .model({
    id: types.string,
    name: types.optional(types.string, ''),
    version: types.optional(types.string, ''),
    catalog: types.maybe(types.reference(catalog)),
    done: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    setName(newName) {
      self.name = newName;
    },

    toggle() {
      self.done = !self.done;
    },
  }));

const User = types.model({
  name: types.optional(types.string, ''),
});

export const RootStore = types
  .model({
    users: types.map(User),
    todos: types.map(Todo),
    catalog: types.map(catalog),
  })
  .actions((self) => ({
    addTodo(item) {
      self.todos.set(item.id, {
        id: item.id,
        name: item.name,
        version: item.version,
        catalog: item.catalog,
        done: item.done,
      });
    },
    addCatalog(item) {
      self.catalog.put({
        id: item.id,
        name: item.name,
        type: item.type,
      });
    },
  }));

const store = RootStore.create({});
