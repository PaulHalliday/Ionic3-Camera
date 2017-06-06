import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from "@ionic-native/camera";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  image: string;

  constructor(private camera: Camera) {}

  pictureFromCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      saveToPhotoAlbum: true
    }

    this.capturePhoto(options);
  }

  pictureFromGallery() {
    //Added PictureSourceType.PHOTOLIBRARY to access from gallery.
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      saveToPhotoAlbum: true
    }

    this.capturePhoto(options)
  }
  
  async capturePhoto(options: CameraOptions) {
    try {
      //Result is a base64 image but can be changed to use a filepath.
      const result = await this.camera.getPicture(options)

      //Append result to image to display in view
      this.image = `data:image/jpeg;base64,${result}`;
    }
    catch (e) {
      console.error(e);
    }
  }

}
