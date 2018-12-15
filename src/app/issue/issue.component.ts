import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { IssueService } from '../issue.service';

import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Comment } from '../comment';
import { User } from '../user';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
  issue$: Observable<Issue>;
  issue: Issue;

  comments: Comment[] = [];

  title: string;

  description: string;
  resolution = null;

  author: string;
  institute: string;
  reputation: number;

  constructor(
    private route: ActivatedRoute,
    private service: IssueService
  ) { }

  ngOnInit() {
    this.issue$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.service.getIssue(+params.get('id')))
    );

    this.issue$.subscribe(issue => {
      this.issue = issue;
      this.resolution = this.issue.resolution;
    });
  }

  newComment(author: string, content: string) {
    console.log(author, content);
    this.comments.push(new Comment(new User(author, 0, 'University Placeholder'), 0, content));
  }
}
