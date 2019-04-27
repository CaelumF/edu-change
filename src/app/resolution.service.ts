import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference, QueryDocumentSnapshot } from '@angular/fire/firestore';
import { Resolution } from './resolution';

@Injectable({
  providedIn: 'root'
})
export class ResolutionService {

  constructor(private db: AngularFirestore) { }

  // Gets first resolution to match id
  getResolution(id: string) {
    const resolution = this.db.collection('resolutions').doc(id);
    return resolution.get().toPromise().then((snapshot) => snapshot);
  }

  updateResolution (resolution: DocumentReference, data: any) {
    resolution.update(data);
  }
}
