import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { map } from 'rxjs/operators';

/*
  Generated class for the GeolocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeolocationProvider {

  // currentPosition: Coordinates
  apiBasePath: String;
  apiKey: String;

  constructor(private geolocation: Geolocation, private http: HttpClient) {
    console.log('Hello GeolocationProvider Provider');

    this.apiKey = '38fad4ecc57075';
    this.apiBasePath = 'https://eu1.locationiq.com';
  }

  async getCurrentLocation() {
    return await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((resp) => {
        resolve(resp.coords)
      }, (err) => {
        resolve(undefined);
      })
    }).then((coords) => {
      return coords
    })
  }

  getLocationString(coords: Coordinates){
    return this.http.get<Object>(`${this.apiBasePath}/v1/reverse.php?key=${this.apiKey}&lat=${coords.latitude}&lon=${coords.longitude}&format=json`)

  }
}
