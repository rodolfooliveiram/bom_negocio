import { Component } from '@angular/core';
import { Anuncio } from '../models/anuncio';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  anuncios: Anuncio[] = [
    new Anuncio(1, "Imagem", "Título do Anúncio 1", "Descrição do Anúncio", "R$ 100.000,00"),
    new Anuncio(2, "Imagem", "Título do Anúncio 2", "Descrição do Anúncio", "R$ 200.000,00"),
    new Anuncio(3, "Imagem", "Título do Anúncio 3", "Descrição do Anúncio", "R$ 300.000,00"),
    new Anuncio(4, "Imagem", "Título do Anúncio 4", "Descrição do Anúncio", "R$ 400.000,00"),
    new Anuncio(5, "Imagem", "Título do Anúncio 5", "Descrição do Anúncio", "R$ 500.000,00"),
  ]
}
