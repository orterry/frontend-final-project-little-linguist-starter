import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }

  getData(): Observable<any[]> {
    const collectionRef = collection(this.firestore, 'users');
    console.log(collectionRef);
    
    return collectionData(collectionRef, { idField: 'id' }) as Observable<any[]>;
  }
  addUser(user: any) {
    const collectionRef = collection(this.firestore, 'users');
    return addDoc(collectionRef, user);
  }

  
}
