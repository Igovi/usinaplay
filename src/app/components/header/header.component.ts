import { Component, inject } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent {
  hasNotifications: boolean = true;

  private navCtrl = inject(NavController);

  navigateToHome(): void {
    this.navCtrl.navigateRoot('/home');
  }

  navigateToNotifications(): void {
    // TODO: implementar navegação para notificações
  }
}

