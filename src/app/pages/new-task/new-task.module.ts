import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewTaskPageRoutingModule } from './new-task-routing.module';

import { NewTaskPage } from './new-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NewTaskPageRoutingModule
  ],
  declarations: [NewTaskPage],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NewTaskPageModule {}
