import { Component } from '@angular/core';
import { Anuncio } from '../models/anuncio';
import { ToastController } from '@ionic/angular';
import { AnuncioService } from '../services/anuncio.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listaAnuncios: any = [];

  constructor(private toastController: ToastController, private anuncioService: AnuncioService) { }

  ionViewWillEnter() {
    this.anuncioService.buscarAnuncios().then(resultados => {
      this.listaAnuncios = resultados;
    });
  } 

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Bem-vindo e bons negócios!',
      position: 'top',
      duration: 1000
    });
    toast.present();
  }

  ngOnInit() {
    this.presentToast();
  } 
}
