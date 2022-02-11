import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TodosComponent } from './todos.component';
import { TodosContainer } from './todos.container';
import { todosRoutes } from './todos.routes';

@NgModule({
  declarations: [TodosComponent, TodosContainer],
  imports: [CommonModule, FormsModule, RouterModule.forChild(todosRoutes)],
})
export class TodosModule {}
