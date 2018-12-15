import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() user: User;
  @Input() rating: number;
  @Input() content: string;

  constructor() { }

  ngOnInit() {

  }

}
