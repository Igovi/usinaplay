import { TestBed } from '@angular/core/testing';
import { PersonalService } from './personal.service';
import { Card } from '../../models/card.interface';

describe('PersonalService', () => {
  let service: PersonalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getMockPersonalCards', () => {
    it('should return mock personal cards', () => {
      const cards = service.getMockPersonalCards();

      expect(cards).toBeDefined();
      expect(Array.isArray(cards)).toBe(true);
      expect(cards.length).toBeGreaterThan(0);
    });

    it('should return cards with required properties', () => {
      const cards = service.getMockPersonalCards();

      cards.forEach(card => {
        expect(card.id).toBeDefined();
        expect(card.image).toBeDefined();
        expect(typeof card.id).toBe('number');
        expect(typeof card.image).toBe('string');
      });
    });

    it('should have first card as add card', () => {
      const cards = service.getMockPersonalCards();
      const firstCard = cards[0];

      expect(firstCard.isAddCard).toBe(true);
      expect(firstCard.buttonText).toBeDefined();
      expect(firstCard.buttonIcon).toBe('add');
    });

    it('should have other cards with titles', () => {
      const cards = service.getMockPersonalCards();
      const regularCards = cards.slice(1);

      regularCards.forEach(card => {
        expect(card.title).toBeDefined();
        expect(card.isAddCard).toBeFalsy();
      });
    });
  });
});

