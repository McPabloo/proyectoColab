import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashColabPage } from './dash-colab.page';

const routes: Routes = [
  {
    path: '',
    component: DashColabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashColabPageRoutingModule {}
