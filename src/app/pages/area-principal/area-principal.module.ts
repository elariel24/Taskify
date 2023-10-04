import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AreaPrincipalPageRoutingModule } from './area-principal-routing.module';

import { AreaPrincipalPage } from './area-principal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AreaPrincipalPageRoutingModule
  ],
  declarations: [AreaPrincipalPage]
})
export class AreaPrincipalPageModule {}
