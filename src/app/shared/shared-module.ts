import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { StorageService } from './services/storage';
import { SelectComponent } from './components/select/select.component';
import { CardComponentComponent } from './components/card-component/card-component.component';
import { NewsService } from './services/news-service';
import { HeaderComponent } from './components/header/header.component';
import { LateralMenuComponent } from './components/lateral-menu/lateral-menu.component';
import { ListComponent } from './components/list/list.component';
import { MainNewsComponent } from './components/main-news/main-news.component';
import {
  register as registerSwiperElement
} from 'swiper/element/bundle';

registerSwiperElement();




const modules = [IonicModule, ReactiveFormsModule, FormsModule,];
const components = [InputComponent,
   ButtonComponent, SelectComponent, 
   CardComponentComponent, 
   HeaderComponent, LateralMenuComponent, ListComponent, MainNewsComponent];
@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [components],
  providers: [StorageService, NewsService,],
  imports: [
    CommonModule, modules
  ],
  exports: [modules, components]
})
export class SharedModule { }
