import { Component, OnInit } from '@angular/core';
import { Anuncio } from '../models/anuncio';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AnuncioService } from '../services/anuncio.service';
import { threadId } from 'worker_threads';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-anuncio',
  templateUrl: './criar-anuncio.page.html',
  styleUrls: ['./criar-anuncio.page.scss'],
})
export class CriarAnuncioPage implements OnInit {

  // novo_anuncio: Anuncio;
  foto:string = "../../assets/img/default.jpg";
  formulario: FormGroup;

  constructor(private camera:Camera, private formBuilder:FormBuilder, private anuncio:AnuncioService, private router:Router) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      titulo: ["Título do anúncio", [Validators.required]],
      descricao: ["Descrição do anúncio", [Validators.required]],
      valor: ["R$ 100.000,00", [Validators.required]]
    });
  }

  tirarFoto() {
    const options: CameraOptions = {
      cameraDirection: this.camera.Direction.BACK,
      allowEdit: true,
      quality: 100,
      saveToPhotoAlbum: false,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    }
    
    this.camera.getPicture(options).then((imageData) => {
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     this.foto = base64Image;
    }, (err) => {
      alert("Erro");
    });
  }

  criarAnuncio() {
    let dadosAnuncio = this.formulario.value;
    dadosAnuncio.imagem = this.foto;
    this.anuncio.criar(dadosAnuncio).then(() => {
      alert("Seu anúncio foi criado com sucesso!");
      this.router.navigateByUrl('home');
    }).catch((erro) => alert(erro));
  }
 

}
