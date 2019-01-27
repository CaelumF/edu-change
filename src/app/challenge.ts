import { User } from 'src/assets/User';

export class Challenge {
  constructor(
    public user: User,
    public rating: number,
    public content: string
) {}
}
