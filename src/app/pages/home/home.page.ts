import { Component } from '@angular/core';
import { Card } from '../../models/card.interface';
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

  personalCards: Card[] = [
    {
      id: 1,
      image: 'assets/images/personalTrainer.png',
      buttonText: 'NOVO\nTREINO',
      buttonIcon: 'add',
      isAddCard: true
    },
    {
      id: 2,
      image: 'assets/images/personalTrainer.png',
      title: 'YOGA EXPRESS'
    },
    {
      id: 3,
      image: 'assets/images/personalTrainer.png',
      title: 'TREINO 2'
    },
    {
      id: 4,
      image: 'assets/images/personalTrainer.png',
      title: 'TREINO 3'
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

  programCards: Card[] = [
    {
      id: 1,
      image: 'assets/images/PesoImage.png',
      overlayText: 'continuar treinando',
      title: 'LEVANTAMENTO DE PESO'
    },
    {
      id: 2,
      image: 'assets/images/PesoImage.png',
      title: 'YOGA EXPRESS'
    },
    {
      id: 3,
      image: 'assets/images/PesoImage.png',
      title: 'CROSSFIT'
    }
  ];

  onCardClick(card: Card): void {
    console.log('Card clicado:', card);
  }

  contentCards: Card[] = [
    {
      id: 1,
      image: ''
    },
    {
      id: 2,
      image: ''
    }
  ];
}
