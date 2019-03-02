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
  getIssues (): Observable<Issue[]> {
    return this.db.collection<Issue>('issues').valueChanges();
  }

  getIssue (id: number) {
    return this.getIssues().pipe(
      map((issues: Issue[]) => issues.find((issue) => issue.id === +id))
    );
  }
}
