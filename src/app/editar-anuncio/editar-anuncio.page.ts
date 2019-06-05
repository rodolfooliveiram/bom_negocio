import { Component, OnInit } from '@angular/core';
import { Anuncio } from '../models/anuncio';
import { AnuncioService } from '../services/anuncio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-editar-anuncio',
  templateUrl: './editar-anuncio.page.html',
  styleUrls: ['./editar-anuncio.page.scss'],
})
export class EditarAnuncioPage implements OnInit {

  id;
  foto;
  anuncioObjeto: Anuncio = new Anuncio;

  constructor(private anuncioService:AnuncioService, private router:Router, private activatedRoute:ActivatedRoute, private camera:Camera) { }

  ionViewWillEnter(){
    this.id = this.activatedRoute.snapshot.params['id'];
    this.anuncioService.buscar(this.id).then(resultado => {
      this.anuncioObjeto = resultado;
      this.foto = this.anuncioObjeto.imagem;
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

  salvar(){
    try {
     this.anuncioObjeto.imagem = this.foto;
     this.anuncioService.editar(this.anuncioObjeto);
     alert('Anúncio salvo com Sucesso!');
     this.router.navigateByUrl('meus-anuncios');
    } catch (error) {
      alert('Erro ao Editar Produto!');
    }
   }

  ngOnInit() {
  }

}
