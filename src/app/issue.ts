import { User } from './user';

export class Issue {
    constructor(
        public title: string,
        public description: string,
        public user: User
    ) {}
}
