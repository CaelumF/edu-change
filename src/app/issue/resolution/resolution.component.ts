import { Component, OnInit, Input } from '@angular/core';
import { Resolution } from 'src/app/resolution';
import { User } from 'src/app/user';

@Component({
  selector: 'app-resolution',
  templateUrl: './resolution.component.html',
  styleUrls: ['./resolution.component.css']
})
export class ResolutionComponent implements OnInit {
  @Input() resolution: Resolution = new Resolution();
  @Input() resAuthor: User = new User();

  constructor() { }

  ngOnInit() {
  }

  // Would like to get the database to update when this value changes
  upvoteAdequacy() {
    this.resolution.rating++;
  }

  downvoteAdequacy() {
    this.resolution.rating--;
  }
}
