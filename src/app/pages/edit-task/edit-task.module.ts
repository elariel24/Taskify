import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTaskPageRoutingModule } from './edit-task-routing.module';

import { EditTaskPage } from './edit-task.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    EditTaskPageRoutingModule
  ],
  declarations: [EditTaskPage]
})
export class EditTaskPageModule {}
