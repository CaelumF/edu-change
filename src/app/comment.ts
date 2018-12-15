import { User } from './user';

export class Comment {
    constructor(
        public user: User,
        public rating: number,
        public content: string
    ) {}
}
