import { TodoStore } from './model';
import { unprotect } from 'mobx-state-tree';

it('shoult toggle', () => {
  const s = TodoStore.create({ todos: [] });
  unprotect(s);
  s.todos.push({ task: 'asd' });
  // s.todos.push({ task: 'asd' });
  expect(s.todos.length).toBe(1);
  // expect(s.todos[0].done).toBe(false)
  s.todos[0].toggle();
  expect(s.todos[0].done).toBe(true);
});
