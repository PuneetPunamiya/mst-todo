import { RootStore } from './store';
import { getSnapshot, unprotect } from 'mobx-state-tree';

fit('creates a store', () => {
  const store = RootStore.create({});
  unprotect(store);
  const arr = [
    {
      id: '1',
      version: '0.1',
      name: 'Abc',
      catalog: '1',
    },
    {
      id: '2',
      version: '0.1',
      name: 'qwe',
      catalog: '1',
    },
    {
      id: '3',
      version: '0.1',
      name: 'qwe',
      catalog: '1',
    },
  ];

  arr.forEach((element) => {
    store.addTodo(element);
  });

  console.log(getSnapshot(store));
});
