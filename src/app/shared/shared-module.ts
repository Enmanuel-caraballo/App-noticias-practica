import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { StorageService } from './services/storage';
import { SelectComponent } from './components/select/select.component';
import { CardComponentComponent } from './components/card-component/card-component.component';
import { NewsService } from './services/news-service';
import { Http } from './services/http/http';


const modules = [IonicModule, ReactiveFormsModule, FormsModule];
const components = [InputComponent, ButtonComponent, SelectComponent, CardComponentComponent];
@NgModule({
  declarations: [components],
  providers: [StorageService, NewsService, Http],
  imports: [
    CommonModule, modules
  ],
  exports: [modules, components]
})
export class SharedModule { }
