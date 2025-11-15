import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports: [IonicModule.forRoot()]
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Inputs', () => {
    it('should have default values', () => {
      expect(component.image).toBe('');
      expect(component.overlayText).toBe('');
      expect(component.title).toBe('');
      expect(component.buttonText).toBe('');
      expect(component.buttonIcon).toBe('add');
      expect(component.isAddCard).toBe(false);
      expect(component.focus).toBe(true);
      expect(component.isContentCard).toBe(false);
    });

    it('should accept input values', () => {
      component.image = 'test-image.jpg';
      component.title = 'Test Title';
      component.overlayText = 'Test Overlay';
      component.buttonText = 'Test Button';
      component.buttonIcon = 'test-icon';
      component.isAddCard = true;
      component.focus = false;
      component.isContentCard = true;

      expect(component.image).toBe('test-image.jpg');
      expect(component.title).toBe('Test Title');
      expect(component.overlayText).toBe('Test Overlay');
      expect(component.buttonText).toBe('Test Button');
      expect(component.buttonIcon).toBe('test-icon');
      expect(component.isAddCard).toBe(true);
      expect(component.focus).toBe(false);
      expect(component.isContentCard).toBe(true);
    });
  });

  describe('onCardClick', () => {
    it('should emit buttonClick when isAddCard is true', () => {
      component.isAddCard = true;
      spyOn(component.buttonClick, 'emit');
      spyOn(component.cardClick, 'emit');

      component.onCardClick();

      expect(component.buttonClick.emit).toHaveBeenCalled();
      expect(component.cardClick.emit).not.toHaveBeenCalled();
    });

    it('should emit cardClick when isAddCard is false', () => {
      component.isAddCard = false;
      spyOn(component.buttonClick, 'emit');
      spyOn(component.cardClick, 'emit');

      component.onCardClick();

      expect(component.cardClick.emit).toHaveBeenCalled();
      expect(component.buttonClick.emit).not.toHaveBeenCalled();
    });
  });

  describe('onButtonClick', () => {
    it('should emit buttonClick event', () => {
      spyOn(component.buttonClick, 'emit');
      const event = new Event('click');
      spyOn(event, 'stopPropagation');

      component.onButtonClick(event);

      expect(event.stopPropagation).toHaveBeenCalled();
      expect(component.buttonClick.emit).toHaveBeenCalled();
    });
  });
});

