import DocumentReference = firebase.firestore.DocumentReference;

export class Issue {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public resolutions: DocumentReference[] = null,
        public user: DocumentReference
    ) { }
}
