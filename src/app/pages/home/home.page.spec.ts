import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { AuthService } from '../../services/auth/auth.service';
import { UserService } from '../../services/firestore/user.service';
import { PersonalService } from '../../services/firestore/personal.service';
import { ProgramService } from '../../services/firestore/program.service';
import { ProgressService } from '../../services/firestore/progress.service';
import { ComponentsModule } from '../../components/components.module';
import { Card } from '../../models/card.interface';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let personalService: PersonalService;
  let programService: ProgramService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(),
        ComponentsModule
      ],
      providers: [
        AuthService,
        UserService,
        PersonalService,
        ProgramService,
        ProgressService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    personalService = TestBed.inject(PersonalService);
    programService = TestBed.inject(ProgramService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should initialize with mock data', () => {
      expect(component.personalCards).toBeDefined();
      expect(component.programCards).toBeDefined();
      expect(Array.isArray(component.personalCards)).toBe(true);
      expect(Array.isArray(component.programCards)).toBe(true);
    });

    it('should load personal cards from service', () => {
      const mockCards = personalService.getMockPersonalCards();
      expect(component.personalCards.length).toBe(mockCards.length);
    });

    it('should load program cards from service', () => {
      const mockCards = programService.getMockProgramCards();
      expect(component.programCards.length).toBe(mockCards.length);
    });
  });

  describe('onActionButtonClick', () => {
    it('should handle my-body button click', () => {
      spyOn(console, 'log');
      component.onActionButtonClick('my-body');
      expect(console.log).toHaveBeenCalledWith('Botão Meu corpo clicado');
    });

    it('should handle goals button click', () => {
      spyOn(console, 'log');
      component.onActionButtonClick('goals');
      expect(console.log).toHaveBeenCalledWith('Botão Objetivos e conquistas clicado');
    });
  });

  describe('onAddCardButtonClick', () => {
    it('should log when add card button is clicked', () => {
      spyOn(console, 'log');
      component.onAddCardButtonClick();
      expect(console.log).toHaveBeenCalledWith('Botão adicionar novo treino clicado');
    });
  });

  describe('onCardClick', () => {
    it('should log card information when card is clicked', () => {
      spyOn(console, 'log');
      const testCard: Card = {
        id: 1,
        image: 'test-image.jpg',
        title: 'Test Card'
      };
      component.onCardClick(testCard);
      expect(console.log).toHaveBeenCalledWith('Card clicado:', testCard);
    });
  });

  describe('component properties', () => {
    it('should have user initialized', () => {
      expect(component.user).toBeDefined();
      expect(component.user.userName).toBe('Leonardo Santos');
      expect(component.user.userLevel).toBe('Nível Roxo');
      expect(component.user.userLevelColor).toBe('#6134D0');
    });

    it('should have contentCards initialized', () => {
      expect(component.contentCards).toBeDefined();
      expect(Array.isArray(component.contentCards)).toBe(true);
      expect(component.contentCards.length).toBe(2);
    });
  });
});
