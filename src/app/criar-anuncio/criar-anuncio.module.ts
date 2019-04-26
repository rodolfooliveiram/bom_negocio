import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CriarAnuncioPage } from './criar-anuncio.page';

import { Camera } from '@ionic-native/camera/ngx';
import { ServicesModule } from '../services/services.module';

const routes: Routes = [
  {
    path: '',
    component: CriarAnuncioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ServicesModule
  ],
  providers: [Camera],
  declarations: [CriarAnuncioPage]
})
export class CriarAnuncioPageModule {}
