import { Component, inject } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  appPages = [
    { title: 'Home', url: '/home' },
  ];

  private menuCtrl = inject(MenuController);

  closeMenu(): void {
    this.menuCtrl.close();
  }
}
