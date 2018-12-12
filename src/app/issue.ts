import { User } from './user';

export class Issue {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public user: User
    ) {}
}
