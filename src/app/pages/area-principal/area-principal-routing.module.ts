import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreaPrincipalPage } from './area-principal.page';

const routes: Routes = [
  {
    path: '',
    component: AreaPrincipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreaPrincipalPageRoutingModule {}
