import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArchivedTodosPage } from './archived-todos.page';

const routes: Routes = [
  {
    path: '',
    component: ArchivedTodosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArchivedTodosPageRoutingModule {}
