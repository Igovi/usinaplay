import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserProfileComponent } from './user-profile.component';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserProfileComponent],
      imports: [IonicModule.forRoot()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Inputs', () => {
    it('should have default values', () => {
      expect(component.userName).toBe('Leonardo Santos');
      expect(component.userLevel).toBe('Nível Roxo');
      expect(component.userLevelColor).toBe('#6134D0');
      expect(component.userImage).toBe('');
    });

    it('should accept input values', () => {
      component.userName = 'Test User';
      component.userLevel = 'Test Level';
      component.userLevelColor = '#000000';
      component.userImage = 'test-image.jpg';

      expect(component.userName).toBe('Test User');
      expect(component.userLevel).toBe('Test Level');
      expect(component.userLevelColor).toBe('#000000');
      expect(component.userImage).toBe('test-image.jpg');
    });
  });

  describe('buttons', () => {
    it('should have two buttons defined', () => {
      expect(component.buttons).toBeDefined();
      expect(component.buttons.length).toBe(2);
    });

    it('should have correct button structure', () => {
      const myBodyButton = component.buttons.find(b => b.id === 'my-body');
      const goalsButton = component.buttons.find(b => b.id === 'goals');

      expect(myBodyButton).toBeDefined();
      expect(myBodyButton?.label).toBe('MEU CORPO');
      expect(myBodyButton?.icon).toBe('body');

      expect(goalsButton).toBeDefined();
      expect(goalsButton?.label).toBe('OBJETIVOS E CONQUISTAS');
      expect(goalsButton?.icon).toBe('trophy');
    });
  });

  describe('onButtonClick', () => {
    it('should emit buttonClick event with button id', () => {
      spyOn(component.buttonClick, 'emit');

      component.onButtonClick('my-body');

      expect(component.buttonClick.emit).toHaveBeenCalledWith('my-body');
    });

    it('should emit buttonClick event with goals id', () => {
      spyOn(component.buttonClick, 'emit');

      component.onButtonClick('goals');

      expect(component.buttonClick.emit).toHaveBeenCalledWith('goals');
    });
  });
});

