import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared-module';
import { provideHttpClient, withInterceptors } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule, SharedModule ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy, },
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
