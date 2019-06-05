import { Component, OnInit } from '@angular/core';
import { AnuncioService } from '../services/anuncio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Anuncio } from '../models/anuncio';

@Component({
  selector: 'app-anuncio-detalhes',
  templateUrl: './anuncio-detalhes.page.html',
  styleUrls: ['./anuncio-detalhes.page.scss'],
})
export class AnuncioDetalhesPage implements OnInit {

  id;
  anuncioObjeto: Anuncio = new Anuncio;

  constructor(private anuncioService:AnuncioService, private Router:Router, private activatedRoute:ActivatedRoute) { }

  ionViewWillEnter(){
    this.id = this.activatedRoute.snapshot.params['id'];
    this.anuncioService.buscar(this.id).then(resultado => {
      this.anuncioObjeto = resultado;
    });
  }

  ngOnInit() {
  }

}
