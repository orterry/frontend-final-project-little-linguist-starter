import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, doc, updateDoc, getDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }


  // just for example from the internet
  getData(): Observable<any[]> {
    const collectionRef = collection(this.firestore, 'users');
    console.log(collectionRef);
    
    return collectionData(collectionRef, { idField: 'id' }) as Observable<any[]>;
  }
  addUser(user: any) {
    const collectionRef = collection(this.firestore, 'users');
    return addDoc(collectionRef, user);
  }
  // end of example

  changeDifficulty(newDifficulty: string) {
    const documentRef = doc(this.firestore, 'difficulty/difficulty');

    updateDoc(documentRef, { difficulty: newDifficulty })
      .then(() => {
        console.log('Document successfully updated!');
      })
      
  }

  async getDifficulty(): Promise<string | undefined> {
    // Reference the specific document in the 'difficulty' collection
    const documentRef = doc(this.firestore, 'difficulty/difficulty');

    // Get the document
    const docSnapshot = await getDoc(documentRef);

    // Check if the document exists and return the difficulty field
    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      return data ? data['difficulty'] : undefined;
    } else {
      console.log('No such document!');
      return undefined;
    }
  }

  async getNextId(): Promise<number | undefined> {
    const documentRef = doc(this.firestore, 'nextId/nextId');

    const docSnapshot = await getDoc(documentRef);

    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      return data ? data['nextId'] : undefined;
    } else {
      console.log('No such document!');
      return undefined;
    }
  }

  async getDashboardResult(): Promise<{ gamesCounter: number, pointCounter: number } | undefined> {
    const documentRef = doc(this.firestore, 'dashboardResult');
    const docSnapshot = await getDoc(documentRef);

    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      return data ? { gamesCounter: data['gamesCounter'], pointCounter: data['pointCounter'] } : undefined;
    } else {
      console.log('No such document!');
      return undefined;
    }
  }

  async updateDashboardResult(gamesCounter: number, pointCounter: number): Promise<void> {
    const documentRef = doc(this.firestore, 'dashboardResult');

    updateDoc(documentRef, { gamesCounter: gamesCounter, pointCounter: pointCounter })
      .then(() => {
        console.log('Document successfully updated!');
      })
      .catch((error) => {
        console.error('Error updating document: ', error);
      });
  }
  
}
