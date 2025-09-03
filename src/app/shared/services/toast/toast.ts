import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

interface Itoast{
  mesage: string;
  position: 'bottom' | 'middle' | 'top';
  color: 'primary' | 'secondary' | 'warning' | 'danger';
}

@Injectable({
  providedIn: 'root'
})
export class Toast {
  constructor(private readonly toastCtrl: ToastController){}

 async present(t: Itoast){
      const toast = await this.toastCtrl.create({
      message: t.mesage,
      duration: 1500,
      position: t.position,
      color: t.color,
    });

    await toast.present();
  }
}
