import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { DocumentReference, DocumentSnapshot } from '@angular/fire/firestore';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  public userData: User;

  @Input() user: DocumentReference;
  @Input() rating: number;
  @Input() content: string;

  constructor() { }

  ngOnInit() {
    this.user.get().then((user: DocumentSnapshot<User>) => {
      this.userData = user.data();
    });
  }

  upvote() {
    this.rating++;
  }
  downvote() {
    this.rating--;
  }

}
