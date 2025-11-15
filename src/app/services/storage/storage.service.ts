import { Injectable } from '@angular/core';
// import { Storage, ref, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  // private storage: Storage;

  constructor(
    // private storage: Storage
  ) {}

  // async getCardImageById(cardId: number): Promise<string> {
  //   const imageRef = ref(this.storage, `cards/${cardId}/image.jpg`);
  //   return await getDownloadURL(imageRef);
  // }

  // async getUserImageById(userId: string): Promise<string> {
  //   const imageRef = ref(this.storage, `users/${userId}/profile.jpg`);
  //   return await getDownloadURL(imageRef);
  // }
}
