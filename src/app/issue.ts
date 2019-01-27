import DocumentReference = firebase.firestore.DocumentReference;
import * as firebase from 'firebase';

export class Issue {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public resolutions: DocumentReference[] = null,
        public user: DocumentReference
    ) { }
}
