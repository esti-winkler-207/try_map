import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { Map1Component } from './map1/map1.component';
import { Map3Component } from './map3/map3.component';

@NgModule({
  declarations: [
    AppComponent,
    Map1Component,
    Map3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCMMLIKKhKYVoOi9opxAoIgVh5W8blb3SU',
      libraries: ['places']
//AIzaSyARe4EGfwVKmSerC4BepoEuPnl6hJ1j6YA 
//AIzaSyCxE2_heEzD9OmVoUK_MVDNKmHwLjs9ct0
//AIzaSyCSC_awxTU-PvzJCnGLxDDJJ9KJzzAi1Nc
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
