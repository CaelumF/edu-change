import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { Issue } from '../issue';

@Component({
  selector: 'issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  @Input() issue: Issue;
  title : string;
  description : string;
  author : string;
  institute : string;
  reputation : number;

  constructor() {
    this.author = "this.issue.user.name";
    this.institute = "this.issue.user.institute";
    this.title = "this.issue.title";
    this.description = "this.issue.description";
    this.reputation = 88888888;
   }

  ngOnInit() {
    this.author = this.issue.user.name;
    this.institute = this.issue.user.institute;
    this.title = this.issue.title;
    this.description = this.issue.description;
    this.reputation = this.issue.user.reputation;
  }

}
