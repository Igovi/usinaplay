import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.interface';
import { User } from '../../models/user.interface';
import { AuthService } from '../../services/auth/auth.service';
import { UserService } from '../../services/firestore/user.service';
import { PersonalService } from '../../services/firestore/personal.service';
import { ProgramService } from '../../services/firestore/program.service';
import { ProgressService } from '../../services/firestore/progress.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  user: User = {
    userName: 'Leonardo Santos',
    userLevel: 'Nível Roxo',
    userLevelColor: '#6134D0',
    userImage: 'assets/images/perfilImage.jpg'
  };

  personalCards: Card[] = [];
  programCards: Card[] = [];

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

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private personalService: PersonalService,
    private programService: ProgramService,
    private progressService: ProgressService
  ) {}

  ngOnInit(): void {
    // this.loadData();
    this.personalCards = this.personalService.getMockPersonalCards();
    this.programCards = this.programService.getMockProgramCards();
  }

  // private async loadData(): Promise<void> {
  //   try {
  //     const userId = this.authService.getCurrentUserId();
  //     if (!userId) {
  //       return;
  //     }
  //     
  //     const userData = await this.userService.getUserData(userId);
  //     if (userData) {
  //       this.user = userData;
  //     }
  //     
  //     const [personalCards, programs, activeProgramId] = await Promise.all([
  //       this.personalService.getPersonalCards(userId),
  //       this.programService.getAllPrograms(),
  //       this.progressService.getUserActiveProgram(userId)
  //     ]);
  //     
  //     this.personalCards = personalCards;
  //     
  //     this.programCards = programs.map(program => ({
  //       ...program,
  //       overlayText: program.id.toString() === activeProgramId ? 'continuar treinando' : undefined
  //     }));
  //   } catch (error) {
  //     console.error('Error loading data:', error);
  //     this.personalCards = this.personalService.getMockPersonalCards();
  //     this.programCards = this.programService.getMockProgramCards();
  //   }
  // }

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

  onCardClick(card: Card): void {
    console.log('Card clicado:', card);
  }
}
