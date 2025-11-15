import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let navCtrl: NavController;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate'], {
      events: { subscribe: jasmine.createSpy('subscribe').and.returnValue({ unsubscribe: () => {} }) }
    });

    const navCtrlSpy = jasmine.createSpyObj('NavController', ['navigateRoot'], {
      navigateRoot: jasmine.createSpy('navigateRoot').and.returnValue(Promise.resolve(true))
    });

    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [IonicModule.forRoot()],
      providers: [
        {
          provide: NavController,
          useValue: navCtrlSpy
        },
        {
          provide: Router,
          useValue: routerSpy
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { url: [] },
            params: { subscribe: jasmine.createSpy('subscribe').and.returnValue({ unsubscribe: () => {} }) }
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    navCtrl = TestBed.inject(NavController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('hasNotifications', () => {
    it('should have default value', () => {
      expect(component.hasNotifications).toBe(true);
    });

    it('should accept value changes', () => {
      component.hasNotifications = false;
      expect(component.hasNotifications).toBe(false);
    });
  });

  describe('navigateToHome', () => {
    it('should navigate to home', () => {
      component.navigateToHome();

      expect(navCtrl.navigateRoot).toHaveBeenCalledWith('/home');
      expect(navCtrl.navigateRoot).toHaveBeenCalledTimes(1);
    });
  });

  describe('navigateToNotifications', () => {
    it('should be defined', () => {
      expect(component.navigateToNotifications).toBeDefined();
    });

    it('should be callable', () => {
      expect(() => component.navigateToNotifications()).not.toThrow();
    });
  });
});

