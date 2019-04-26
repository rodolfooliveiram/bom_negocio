import { Component, OnInit } from '@angular/core';
import { Anuncio } from '../models/anuncio';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-criar-anuncio',
  templateUrl: './criar-anuncio.page.html',
  styleUrls: ['./criar-anuncio.page.scss'],
})
export class CriarAnuncioPage implements OnInit {

  novo_anuncio: Anuncio;
  foto:string = "../../assets/img/default.jpg";

  constructor(private camera:Camera) { }

  ngOnInit() {
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
 

}
