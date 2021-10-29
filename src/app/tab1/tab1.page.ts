import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  constructor(
    private toastController: ToastController,
  ) {}


  async notificationButtonModal(): Promise<void> {                                                                                                     // ------------------------ method notificationButtonModal ------------------------
    
    const toast = await this.toastController.create({
      message: 'Les Vice Versa arrivent à Paris le 10 novembre 2017😁🎟️Test de notification trop longue pour affi…',
      position: 'top',
      cssClass: 'notification_button',
      buttons: [
        {
          side: 'end',
          icon: 'chevron-forward-outline',
          cssClass: 'notification_icon',
        },
      ]
    });
    await toast.present();
  
    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  
  }                                                                                                                                                        // ------------------------ end of method notificationButtonModal -----------------

}

