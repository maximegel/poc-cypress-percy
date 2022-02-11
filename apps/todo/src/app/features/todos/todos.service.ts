import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoLine, Todos } from './todos.model';

@Injectable({ providedIn: 'root' })
export class TodosService {
  readonly todos$ = new BehaviorSubject<Todos>([]);

  private nextId = 1;

  loadMany(): void {
    this.todos$.next([]);
  }

  addMany(todos: TodoLine[]): void {
    this.todos$.next([
      ...this.todos$.value,
      ...todos.map((todo) => ({ ...todo, id: this.nextId++ })),
    ]);
  }

  editMany(todos: TodoLine[]): void {
    const idsToEdit = todos.map((todo) => todo.id);
    this.todos$.next([
      ...this.todos$.value.map((todo) => {
        if (!idsToEdit.includes(todo.id)) return todo;
        console.log(todo);
        return todos.find((t) => t.id == todo.id) ?? todo;
      }),
    ]);
  }

  removeMany(todos: TodoLine[]): void {
    const idsToRemove = todos.map((todo) => todo.id);
    this.todos$.next([
      ...this.todos$.value.filter((todo) => !idsToRemove.includes(todo.id)),
    ]);
  }
}
