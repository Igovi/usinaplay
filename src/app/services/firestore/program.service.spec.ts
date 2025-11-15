import { TestBed } from '@angular/core/testing';
import { ProgramService } from './program.service';
import { Card } from '../../models/card.interface';

describe('ProgramService', () => {
  let service: ProgramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getMockProgramCards', () => {
    it('should return mock program cards', () => {
      const cards = service.getMockProgramCards();

      expect(cards).toBeDefined();
      expect(Array.isArray(cards)).toBe(true);
      expect(cards.length).toBeGreaterThan(0);
    });

    it('should return cards with required properties', () => {
      const cards = service.getMockProgramCards();

      cards.forEach(card => {
        expect(card.id).toBeDefined();
        expect(card.image).toBeDefined();
        expect(card.title).toBeDefined();
        expect(typeof card.id).toBe('number');
        expect(typeof card.image).toBe('string');
        expect(typeof card.title).toBe('string');
      });
    });

    it('should have first card with overlay text', () => {
      const cards = service.getMockProgramCards();
      const firstCard = cards[0];

      expect(firstCard.overlayText).toBe('continuar treinando');
      expect(firstCard.title).toBe('LEVANTAMENTO DE PESO');
    });

    it('should have valid card structure', () => {
      const cards = service.getMockProgramCards();

      cards.forEach(card => {
        expect(card.id).toBeGreaterThan(0);
        expect(card.image).not.toBe('');
        expect(card.title).not.toBe('');
      });
    });
  });
});

