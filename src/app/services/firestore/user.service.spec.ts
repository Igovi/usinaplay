import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { User } from '../../models/user.interface';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getMockUserData', () => {
    it('should return mock user data', () => {
      const mockUser = service.getMockUserData();

      expect(mockUser).toBeDefined();
      expect(mockUser.userName).toBe('Leonardo Santos');
      expect(mockUser.userLevel).toBe('Nível Roxo');
      expect(mockUser.userLevelColor).toBe('#6134D0');
      expect(mockUser.userImage).toBe('assets/images/perfilImage.jpg');
    });

    it('should return a valid User object', () => {
      const mockUser = service.getMockUserData();

      expect(mockUser.userName).toBeDefined();
      expect(mockUser.userLevel).toBeDefined();
      expect(mockUser.userLevelColor).toBeDefined();
      expect(mockUser.userImage).toBeDefined();
    });
  });
});

