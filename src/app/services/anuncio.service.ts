import { Injectable } from '@angular/core';
import { BancoService } from './banco.service';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService extends BancoService {

  public criar(anuncio){
    return this.getDB().then((db:SQLiteObject) => {
      return db.executeSql("INSERT INTO anuncios (imagem, titulo, descricao, valor) VALUES (?,?,?,?)", 
      [anuncio.imagem, anuncio.titulo, anuncio.descricao, anuncio.valor]);
    });
  }
}
