import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  constructor(private sqlite:SQLite, platform:Platform) {
    platform.ready().then(() => this.createDB());
  }

  protected getDB() {
    return this.sqlite.create({
      name: 'bom_negocio.db',
      location: 'default'
    });
  }

  private createDB() {
    this.getDB().then((db:SQLiteObject) => {

      //Tabela Usuários
      db.executeSql("CREATE TABLE IF NOT EXISTS usuarios(\
        id INTEGER PRIMARY KEY AUTOINCREMENT,\
        nome TEXT,\
        email TEXT,\
        senha TEXT\
        )", []);

      //Tabela Anúncios
      db.executeSql("CREATE TABLE IF NOT EXISTS anuncios(\
        id INTEGER PRIMARY KEY AUTOINCREMENT,\
        imagem TEXT,\
        titulo TEXT,\
        descricao TEXT,\
        valor TEXT\
        )", []);
    });

  }


}
