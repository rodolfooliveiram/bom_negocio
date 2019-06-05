import { Component, OnInit } from '@angular/core';
import { AnuncioService } from '../services/anuncio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meus-anuncios',
  templateUrl: './meus-anuncios.page.html',
  styleUrls: ['./meus-anuncios.page.scss'],
})
export class MeusAnunciosPage implements OnInit {

  id;
  listaAnuncios: any = [];

  constructor(private anuncioService: AnuncioService, private router: Router) { }

  ionViewWillEnter() {
    this.anuncioService.buscarAnuncios().then(resultados => {
      this.listaAnuncios = resultados;
    });
  }

  excluirAnuncio(id: string){
    try {
      this.anuncioService.excluir(id);
      alert('Anúncio excluído com sucesso!');
      //window.location.reload()
      this.router.navigateByUrl('home');
    } catch (error) {
      alert('Erro ao excluir o anúncio!');
    }
  }

  ngOnInit() {
  }

}
