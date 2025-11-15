import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SectionTitleComponent } from './section-title.component';

describe('SectionTitleComponent', () => {
  let component: SectionTitleComponent;
  let fixture: ComponentFixture<SectionTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionTitleComponent],
      imports: [IonicModule.forRoot()]
    });
    fixture = TestBed.createComponent(SectionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Inputs', () => {
    it('should have default values', () => {
      expect(component.title).toBe('');
      expect(component.badgeText).toBe('');
      expect(component.showAddButton).toBe(false);
      expect(component.disabled).toBe(false);
    });

    it('should accept input values', () => {
      component.title = 'Test Title';
      component.badgeText = 'Test Badge';
      component.showAddButton = true;
      component.disabled = true;

      expect(component.title).toBe('Test Title');
      expect(component.badgeText).toBe('Test Badge');
      expect(component.showAddButton).toBe(true);
      expect(component.disabled).toBe(true);
    });
  });

  describe('onAddClick', () => {
    it('should emit addClick event', () => {
      spyOn(component.addClick, 'emit');

      component.onAddClick();

      expect(component.addClick.emit).toHaveBeenCalled();
    });
  });
});

