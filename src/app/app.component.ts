import { Component } from '@angular/core';
import { Issue } from './issue';
import { User } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  export class AppComponent {
  constructor (
    private router: Router
  ) { }

  title = 'edu-change';
}
