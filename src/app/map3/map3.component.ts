import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-map3',
  templateUrl: './map3.component.html',
  styleUrls: ['./map3.component.css']
})
export class Map3Component implements OnInit {
  @ViewChild('map') mapElement!: ElementRef;

 
  constructor() { }
map!:any
latitude!:number
longitude!:number
infowindow!: any;
  ngOnInit(): void {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      center: {lat: this.latitude, lng: this.longitude},
      zoom: 15
    });
    this.infowindow = new google.maps.InfoWindow();
  }
  // getallstores(latitude:number,longitude:number){
  //   var service = new google.maps.places.PlacesService(this.map);
  //   service.nearbySearch({
  //     location: {lat: latitude, lng: longitude},
  //     radius: 1000,
  //     type: 'store'
  //   }, (results: string | any[],status: any) => {
  //     if (status === google.maps.places.PlacesServiceStatus.OK) {
  //       for (var i = 0; i < results.length; i++) {
  //         // this.createMarker(results[i]);
  //         console.log(results[i])
  //       }
  //     }
  //   });
  // } 
  // createMarker(place:any) {
  //   var placeLoc = place.geometry.location;
  //   var marker = new google.maps.Marker({
  //     map: map,
  //     position: placeLoc
  //   });
  
  //   google.maps.event.addListener(marker, 'click', function() {
  //     infowindow.setContent(place.name);
  //     infowindow.open(map, this);
  //   });
  // }

}
