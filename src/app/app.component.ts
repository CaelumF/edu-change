import { Component } from '@angular/core';
import { Issue } from './issue';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  export class AppComponent {
  title = 'edu-change';
  issues: Issue[] = [
    // tslint:disable-next-line:max-line-length
    new Issue('Bathrooms in poor service', 'Recently I\'ve noticed the bathrooms are of poor condition and would like something to be done about it', new User('Victor Panayotov', 0, 'University College Cork')),
    // tslint:disable-next-line:max-line-length
    new Issue('Bathrooms in poor service', 'Recently I\'ve noticed the bathrooms are of poor condition and would like something to be done about it', new User('Victor Panayotov', 0, 'University College Cork')),
  ];
}
