import DocumentReference = firebase.firestore.DocumentReference;

export class Issue {
    constructor(
        // public raw: Issue,
        public id: number, // = -1,
        public title: string, // = null,
        public description: string, // = null,
        public resolutions: DocumentReference[] = null,
        public user: DocumentReference
    ) {
        // this.id = this.raw.id;
        // this.title = this.raw.title;
        // this.description = this.raw.description;
        // this.resolution = new Resolution(this.raw.resolution);
        // this.user = new User(this.raw.user);
    }
}
