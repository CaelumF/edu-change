import { User } from './user';
import { Resolution } from './resolution';

export class Issue {
    constructor(
        // public raw: Issue,
        public id: number, // = -1,
        public title: string, // = null,
        public description: string, // = null,
        public resolution: Resolution, // = null,
        public user: User, // = null
    ) {
        // this.id = this.raw.id;
        // this.title = this.raw.title;
        // this.description = this.raw.description;
        // this.resolution = new Resolution(this.raw.resolution);
        // this.user = new User(this.raw.user);
    }
}
