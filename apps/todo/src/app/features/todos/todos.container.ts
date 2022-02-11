import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TodoLine, Todos } from './todos.model';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos-container',
  template: `<app-todos
    [model]="model$ | async"
    (add)="onAdd($event)"
    (edit)="onEdit($event)"
    (remove)="onRemove($event)"
  ></app-todos>`,
  styles: [':host { display: block; height: 100%; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosContainer {
  model$: Observable<Todos> = of([]);

  constructor(private service: TodosService) {
    this.model$ = this.service.todos$;
  }

  onAdd(items: TodoLine[]): void {
    this.service.addMany(items);
  }

  onEdit(items: TodoLine[]): void {
    this.service.editMany(items);
  }

  onRemove(items: TodoLine[]): void {
    this.service.removeMany(items);
  }
}
