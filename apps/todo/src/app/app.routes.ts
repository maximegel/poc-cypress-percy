import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/todos/todos.module').then((m) => m.TodosModule),
  },
];
