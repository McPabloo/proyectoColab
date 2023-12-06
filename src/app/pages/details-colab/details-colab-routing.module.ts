import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsColabPage } from './details-colab.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsColabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsColabPageRoutingModule {}
