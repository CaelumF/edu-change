import {Injectable} from '@angular/core';

import {Issue} from './issue';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  constructor(private db: AngularFirestore) { }

  public getIssue (id: number): Observable<Issue> {
    return this.db.collection<Issue>('issues', ref => ref.where('id', '==', id)).valueChanges().pipe(
      map(issues => issues[0])
    );
  }
}
