import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkillsColabPageRoutingModule } from './skills-colab-routing.module';

import { SkillsColabPage } from './skills-colab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkillsColabPageRoutingModule
  ],
  declarations: [SkillsColabPage]
})
export class SkillsColabPageModule {}
