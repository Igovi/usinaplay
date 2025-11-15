import { Injectable } from '@angular/core';
// import { Firestore, collection, getDocs, query, where } from '@angular/fire/firestore';
import { Card } from '../../models/card.interface';
// import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
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

  // async getPersonalCards(userId: string): Promise<Card[]> {
  //   try {
  //     const cardsQuery = query(
  //       collection(this.firestore, 'personalCards'),
  //       where('userId', '==', userId)
  //     );
  //     const querySnapshot = await getDocs(cardsQuery);
  //     const cards = querySnapshot.docs.map(doc => ({
  //       id: parseInt(doc.id),
  //       ...doc.data()
  //     })) as Card[];
  //     
  //     return await this.loadCardImages(cards);
  //   } catch (error) {
  //     console.error('Error fetching personal cards:', error);
  //     throw error;
  //   }
  // }

  getMockPersonalCards(): Card[] {
    return [
      {
        id: 1,
        image: 'assets/images/personalTrainer.png',
        buttonText: 'NOVO\nTREINO',
        buttonIcon: 'add',
        isAddCard: true
      },
      {
        id: 2,
        image: 'assets/images/personalTrainer.png',
        title: 'YOGA EXPRESS'
      },
      {
        id: 3,
        image: 'assets/images/personalTrainer.png',
        title: 'TREINO 2'
      },
      {
        id: 4,
        image: 'assets/images/personalTrainer.png',
        title: 'TREINO 3'
      }
    ];
  }
}
