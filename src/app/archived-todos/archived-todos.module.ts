import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArchivedTodosPageRoutingModule } from './archived-todos-routing.module';

import { ArchivedTodosPage } from './archived-todos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArchivedTodosPageRoutingModule
  ],
  declarations: [ArchivedTodosPage]
})
export class ArchivedTodosPageModule {}
