import { Injectable } from '@angular/core';
// import { Firestore, collection, getDocs, query, where } from '@angular/fire/firestore';
import { Card } from '../../models/card.interface';
// import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  // private firestore: Firestore;

  constructor(
    // private firestore: Firestore,
    // private storageService: StorageService
  ) {}

  // private async loadCardImages(cards: Card[]): Promise<Card[]> {
  //   const cardsWithImages = await Promise.all(
  //     cards.map(async (card) => {
  //       try {
  //         card.image = await this.storageService.getCardImageById(card.id);
  //       } catch (error) {
  //         console.error(`Error loading image for card ${card.id}:`, error);
  //       }
  //       return card;
  //     })
  //   );
  //   return cardsWithImages;
  // }

  // async getAllPrograms(): Promise<Card[]> {
  //   try {
  //     const programsQuery = query(
  //       collection(this.firestore, 'programs'),
  //       where('isActive', '==', true)
  //     );
  //     const querySnapshot = await getDocs(programsQuery);
  //     const programs = querySnapshot.docs.map(doc => ({
  //       id: parseInt(doc.id),
  //       ...doc.data()
  //     })) as Card[];
  //     
  //     return await this.loadCardImages(programs);
  //   } catch (error) {
  //     console.error('Error fetching programs:', error);
  //     throw error;
  //   }
  // }

  getMockProgramCards(): Card[] {
    return [
      {
        id: 1,
        image: 'assets/images/PesoImage.png',
        overlayText: 'continuar treinando',
        title: 'LEVANTAMENTO DE PESO'
      },
      {
        id: 2,
        image: 'assets/images/PesoImage.png',
        title: 'YOGA EXPRESS'
      },
      {
        id: 3,
        image: 'assets/images/PesoImage.png',
        title: 'CROSSFIT'
      }
    ];
  }
}
