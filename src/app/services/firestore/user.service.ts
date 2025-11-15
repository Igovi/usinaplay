import { Injectable } from '@angular/core';
// import { Firestore, doc, getDoc } from '@angular/fire/firestore';
// import { StorageService } from '../storage/storage.service';
import { User } from '../../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private firestore: Firestore;

  constructor(
    // private firestore: Firestore,
    // private storageService: StorageService
  ) {}

  // private async loadUserImage(user: User): Promise<User> {
  //   try {
  //     user.userImage = await this.storageService.getUserImageById(user.id!);
  //   } catch (error) {
  //     console.error(`Error loading user image for userId ${user.id}:`, error);
  //   }
  //   return user;
  // }

  // async getUserData(userId: string): Promise<User | null> {
  //   try {
  //     const userDocRef = doc(this.firestore, 'users', userId);
  //     const userDocSnap = await getDoc(userDocRef);
  //     
  //     if (userDocSnap.exists()) {
  //       const user = { id: userId, ...userDocSnap.data() } as User;
  //       return await this.loadUserImage(user);
  //     }
  //     return null;
  //   } catch (error) {
  //     console.error('Error fetching user data:', error);
  //     throw error;
  //   }
  // }

  getMockUserData(): User {
    return {
      userName: 'Leonardo Santos',
      userLevel: 'Nível Roxo',
      userLevelColor: '#6134D0',
      userImage: 'assets/images/perfilImage.jpg'
    };
  }
}
