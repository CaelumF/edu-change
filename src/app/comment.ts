import { DocumentReference } from '@angular/fire/firestore';

export class Comment {
    constructor(
        public body: string,
        public index: number,
        public issue: number,
        public score: number,
        public user: DocumentReference
    ) {}
}
