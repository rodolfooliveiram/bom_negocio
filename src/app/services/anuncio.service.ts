import { Injectable } from '@angular/core';
import { Anuncio } from '../models/anuncio';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {

  private db: firebase.database.Reference

  constructor() {
    let userID = firebase.auth().currentUser.uid;
    this.db = firebase.database().ref('Anuncios');
  }

  public criar(anuncio: Anuncio){
    let uid = this.db.push().key;
    anuncio.id = uid;
    this.db.child(uid).set(anuncio);
  }

  async buscarAnuncios() {
    return this.db.once('value').then(snapshot => {
      let anuncios = [];
      snapshot.forEach(anuncio => {
        anuncios.push(anuncio.val());
      })

      return anuncios;
    });
  }

  async buscar(id: string): Promise<Anuncio> {
    return this.db.child(id).once('value').then(snapshot => {
      if (snapshot.exists())
        return snapshot.val();
      return null;
    });
  }

  excluir (id: string) {
    this.db.child(id).remove();
  }

  editar(anuncio: Anuncio) {
    this.db.child(anuncio.id).set(anuncio);
  }

}
