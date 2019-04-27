import {Component} from '@angular/core';
import {Issue} from './issue';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  export class AppComponent {
  issues: Observable<Issue[]>;
  constructor (db: AngularFirestore) {
    this.issues = db.collection<Issue>('issues').valueChanges();
  }

  title = 'edu-change';
}

