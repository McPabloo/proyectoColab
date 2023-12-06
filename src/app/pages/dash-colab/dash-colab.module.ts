import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashColabPageRoutingModule } from './dash-colab-routing.module';

import { DashColabPage } from './dash-colab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashColabPageRoutingModule
  ],
  declarations: [DashColabPage]
})
export class DashColabPageModule {}
