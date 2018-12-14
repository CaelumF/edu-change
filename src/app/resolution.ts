import { User } from './user';

export class Resolution {
    constructor (
        // public raw: Resolution,
        public id: number, // = -1,
        public title: string, // = null,
        public description: string, // = null,
        public user: User, // = null
    ) {
        // this.id = this.raw.id;
        // this.title = this.raw.title;
        // this.description = this.raw.description;
        // this.user = new User(this.raw.user)
    }
}
