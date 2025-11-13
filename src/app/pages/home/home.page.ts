import { Component } from '@angular/core';
import { PersonalCard } from '../../models/personal-card.interface';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  user: User = {
    userName: 'Leonardo Santos',
    userLevel: 'Nível Roxo',
    userLevelColor: '#6134D0',
    userImage: 'assets/images/perfilImage.jpg'
  };

  personalCards: PersonalCard[] = [
    {
      id: 1,
      image: 'assets/images/personalTrainer.png',
      buttonText: 'NOVO\nTREINO',
      buttonIcon: 'add',
      isAddCard: true
    },
    {
      id: 2,
      image: 'assets/images/personalTrainer.png'
    },
    {
      id: 3,
      image: 'assets/images/personalTrainer.png'
    },
    {
      id: 4,
      image: 'assets/images/personalTrainer.png'
    }
  ];

  onActionButtonClick(buttonId: string): void {
    switch (buttonId) {
      case 'my-body':
        console.log('Botão Meu corpo clicado');
        break;
      case 'goals':
        console.log('Botão Objetivos e conquistas clicado');
        break;
    }
  }

  onAddCardButtonClick(): void {
    console.log('Botão adicionar novo treino clicado');
  }

  onCardClick(card: PersonalCard): void {
    console.log('Card clicado:', card);
  }
}
