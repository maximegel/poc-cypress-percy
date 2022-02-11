import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { TodoLine, Todos } from './todos.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosComponent {
  @Input() model?: Todos | null;
  @Output() readonly add = new EventEmitter<TodoLine[]>();
  @Output() readonly edit = new EventEmitter<TodoLine[]>();
  @Output() readonly remove = new EventEmitter<TodoLine[]>();

  newTodoTitle = '';

  get allCompleted(): boolean {
    return this.model?.every((item) => item.completed) ?? false;
  }

  get completedCount(): number {
    return this.model?.filter((item) => item.completed)?.length ?? 0;
  }

  get remainingCount(): number {
    return this.model?.filter((item) => !item.completed)?.length ?? 0;
  }

  onAdd(): void {
    if (!this.newTodoTitle.trim().length) return;
    this.add.emit([{ title: this.newTodoTitle }]);
    this.newTodoTitle = '';
  }

  onBeginEditing(item: TodoLine): void {
    this.edit.emit([{ ...item, editing: true }]);
  }

  onCompleteEditing(item: TodoLine, title: string): void {
    title = title.trim();
    if (!title.length) {
      this.onRemove(item);
      return;
    }
    this.edit.emit([{ ...item, title, editing: false }]);
  }

  onCancelEditing(item: TodoLine): void {
    this.edit.emit([{ ...item, editing: false }]);
  }

  onClearAllCompleted(): void {
    this.remove.emit(this.model?.filter((item) => item.completed) ?? []);
  }

  onRemove(item: TodoLine): void {
    this.remove.emit([item]);
  }

  onToggle(item: TodoLine): void {
    this.edit.emit([{ ...item, completed: !item.completed }]);
  }

  onToggleAll(completed: boolean): void {
    this.edit.emit(this.model?.map((item) => ({ ...item, completed } ?? [])));
  }
}
