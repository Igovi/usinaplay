import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  userName: string = 'Leonardo Santos';
  userLevel: string = 'Nível Roxo';
  userLevelColor: string = '#6134D0';
  userImage: string = 'assets/images/perfilImage.jpg';

  onActionButtonClick(buttonId: string): void {
    switch (buttonId) {
      case 'my-body':
        console.log('Navegar para Meu Corpo');
        break;
      case 'goals':
        console.log('Navegar para Objetivos e Conquistas');
        break;
    }
  }
}
