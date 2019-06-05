import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Anúncios',
      url: '/home',
      icon: 'pricetags'
    },
    {
      title: 'Criar Anúncio',
      url: '/criar-anuncio',
      icon: 'add'
    },
    {
      title: 'Meus Anúncios',
      url: '/meus-anuncios',
      icon: 'pricetags'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'person'
    },
    {
      title: 'Sair',
      url: '/home',
      icon: 'arrow-forward'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyAkgmfGCq6jzrmR-rv7QAOdXhJ0OtUdW1E",
      authDomain: "bom-negocio-8fe28.firebaseapp.com",
      databaseURL: "https://bom-negocio-8fe28.firebaseio.com",
      projectId: "bom-negocio-8fe28",
      storageBucket: "bom-negocio-8fe28.appspot.com",
      messagingSenderId: "247060723773",
      appId: "1:247060723773:web:eeb63d8521b736d4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
