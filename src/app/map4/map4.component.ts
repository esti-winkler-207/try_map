import { MapsAPILoader } from '@agm/core';
import { Component, OnInit } from '@angular/core';
import { LocationsServiceService } from '../locations-service.service';
import { MapServService } from '../map-serv.service';
import { Marker } from '../marker';

@Component({
  selector: 'app-map4',
  templateUrl: './map4.component.html',
  styleUrls: ['./map4.component.css']
})
export class Map4Component implements OnInit {
  public lat!: number;
  public lng!: number;
  public zoom!: number;

  public openedWindow!: number;

  public markers: Marker[] = this.locationService.getMarkers();


  constructor(private locationService: LocationsServiceService,
    private mapApiLoader: MapsAPILoader,
    private mapsService: MapServService) { }

  ngOnInit(): void {
    this.lat = this.mapsService.lat;
    this.lng = this.mapsService.lng;
    this.zoom = this.mapsService.zoom;

    this.setCurrentPosition();
    this.mapApiLoader.load();

    // Zoom to new location after search
    this.mapsService.newCoordinators.subscribe(data=>{
      (coords: { lat: number, lng: number, zoom: number }) => {
        if (coords) {
          this.lat = coords.lat;
          this.lng = coords.lng;
          this.zoom = coords.zoom;
          this.mapApiLoader.load();
        }
      }
    });

    // Open window after click on panel
    this.mapsService.openWindow.subscribe(
      // index => {
      //   this.openedWindow =+ index;
      // }
    );
  }
  mapClicked($event: any) {
    console.log($event);
  }

  clickedMarker(label: string, index: number) {
    console.log(`Clicked the marker: ${label || index}`);
    this.openedWindow = index;
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = this.mapsService.lat = position.coords.latitude;
        this.lng = this.mapsService.lng = position.coords.longitude;
        this.zoom = 10;
      });
    }

    // @Todo: resort the locations
  }

  isInfoWindowOpen(index: number) {
    return this.openedWindow === index;
  }

}
