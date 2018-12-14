import { User } from './user';

export class Resolution {
    constructor (
        public id: number,
        public title: string = null,
        public description: string = null,
        public user: User = null
    ) { }
}
