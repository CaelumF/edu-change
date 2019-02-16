export class User {
    constructor(
        // public raw: User,
        public name: string = null,
        public reputation: number = null,
        public institute: string = null
    ) {
        // this.name = this.raw.name;
        // this.institute = this.raw.institute;
        // this.reputation = this.raw.reputation;
    }
}
