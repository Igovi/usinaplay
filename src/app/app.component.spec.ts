import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { IonicModule, MenuController } from '@ionic/angular';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let menuCtrl: MenuController;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate', 'navigateRoot'], {
      events: { subscribe: jasmine.createSpy('subscribe') }
    });

    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [IonicModule.forRoot()],
      providers: [
        MenuController,
        {
          provide: Router,
          useValue: routerSpy
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { url: [] },
            params: { subscribe: jasmine.createSpy('subscribe') }
          }
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    menuCtrl = TestBed.inject(MenuController);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('appPages', () => {
    it('should have appPages defined', () => {
      expect(component.appPages).toBeDefined();
      expect(Array.isArray(component.appPages)).toBe(true);
    });

    it('should have correct page structure', () => {
      expect(component.appPages.length).toBeGreaterThan(0);
      const homePage = component.appPages.find(p => p.title === 'Home');
      
      expect(homePage).toBeDefined();
      expect(homePage?.url).toBe('/home');
    });
  });

  describe('closeMenu', () => {
    it('should call menuCtrl.close', () => {
      spyOn(menuCtrl, 'close');
      
      component.closeMenu();

      expect(menuCtrl.close).toHaveBeenCalled();
    });
  });
});
