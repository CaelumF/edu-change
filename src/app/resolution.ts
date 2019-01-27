import DocumentReference = firebase.firestore.DocumentReference;
import * as firebase from 'firebase';

export class Resolution {
    constructor (
        public id: number = -1,
        public title: string = null,
        public description: string = null,
        public rating: number,
        public user: DocumentReference = null
    ) { }
}
