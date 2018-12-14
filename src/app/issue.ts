import { User } from './user';
import { Resolution } from './resolution';

export class Issue {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public resolution: Resolution,
        public user: User
    ) {}
}
