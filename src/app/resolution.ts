import DocumentReference = firebase.firestore.DocumentReference;

export class Resolution {
    constructor (
        public id: number = -1,
        public title: string = null,
        public description: string = null,
        public rating: number,
        public user: DocumentReference = null
    ) { }
}
