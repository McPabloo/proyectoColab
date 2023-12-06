import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkillsColabPage } from './skills-colab.page';

const routes: Routes = [
  {
    path: '',
    component: SkillsColabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillsColabPageRoutingModule {}
