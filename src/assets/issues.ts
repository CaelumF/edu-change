import { Issue } from '../app/issue';
import { User } from '../app/user';

export const ISSUES: Issue[] = [
    new Issue(11,
        'Bathrooms in poor service',
        'Recently I\'ve noticed the bathrooms are of poor condition and would like something to be done about it',
        new User('Victor Panayotov', 9, 'University College Cork')),
    new Issue(12,
        'Mrs X comes into lectures with no clothes on',
        'Recently I\'ve seen Mrs X come into lectures bare naked and would like something to be done about it',
        new User('Caelum Forder', 223, 'Cork Institute of Technology')),
];
