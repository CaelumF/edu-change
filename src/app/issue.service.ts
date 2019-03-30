import {Injectable} from '@angular/core';

import {Issue} from './issue';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';
import { Comment } from './comment';

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

  public getComments(issueId: number): Observable<Comment[]> {
    return this.db.collection<Comment>('comments', ref => ref.where('issue', '==', issueId)).valueChanges();
  }
}
