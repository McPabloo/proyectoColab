import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsColabPageRoutingModule } from './details-colab-routing.module';

import { DetailsColabPage } from './details-colab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsColabPageRoutingModule
  ],
  declarations: [DetailsColabPage]
})
export class DetailsColabPageModule {}
