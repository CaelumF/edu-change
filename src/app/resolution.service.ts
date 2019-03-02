import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference, QueryDocumentSnapshot } from '@angular/fire/firestore';
import { Resolution } from './resolution';

@Injectable({
  providedIn: 'root'
})
export class ResolutionService {

  constructor(private db: AngularFirestore) { }

  // Gets first resolution to match id
  getResolution(id: number) {
    const query = this.db.collection<Resolution>('resolutions', ref => ref.where('id', '==', id));
    return query.get().toPromise().then((snapshot) => {
      return snapshot.docs[0];
    });
  }

  updateResolution (resolution: DocumentReference, data: any) {
    resolution.update(data);
  }
}
