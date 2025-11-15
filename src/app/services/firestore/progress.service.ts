import { Injectable } from '@angular/core';
// import { Firestore, doc, getDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  // private firestore: Firestore;

  constructor(
    // private firestore: Firestore
  ) {}

  // async getUserActiveProgram(userId: string): Promise<string | null> {
  //   try {
  //     const userProgressDocRef = doc(this.firestore, 'userProgress', userId);
  //     const userProgressDocSnap = await getDoc(userProgressDocRef);
  //     
  //     if (userProgressDocSnap.exists()) {
  //       const data = userProgressDocSnap.data();
  //       return data['activeProgramId'] || null;
  //     }
  //     return null;
  //   } catch (error) {
  //     console.error('Error fetching user active program:', error);
  //     throw error;
  //   }
  // }
}
