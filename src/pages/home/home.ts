import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GeolocationProvider } from '../../providers/geolocation/geolocation';
import { Coordinates } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentPosition: Coordinates;
  currentLocation: String;

  constructor(public geolocation: GeolocationProvider) {

    this.getCurrentLocation();
  }

  async getCurrentLocation(){
    this.geolocation.getCurrentLocation().then((coords: Coordinates) => {
      this.currentPosition = coords;
      this.geolocation.getLocationString(this.currentPosition).subscribe((data: any) => {
        console.log(data);
        this.currentLocation = data.display_name;
      })
    });
  }

  loadData(infiniteScroll){
    console.log('done');
    infiniteScroll.complete();
  }


}
