import { Component } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private localNotifications: LocalNotifications,
    private alertController: AlertController) { }

  async testLocalNotification() {

    console.log('Test Notification Button Clicked');

    await this.handleButtonClick()

    // Schedule a single notification
    this.localNotifications.schedule({
      id: 1,
      text: 'Single ILocalNotification',
      data: { secret: 'MySecret' }
    });
  }

  async handleButtonClick() {
    const alert = await this.alertController.create({
      header: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the galaxy?',
      buttons: ['Disagree', 'Agree']
    });

    await alert.present();
  }

}
