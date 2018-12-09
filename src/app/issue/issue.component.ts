import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  @Input() author : String;
  @Input() title : String;
  @Input() description : String;

  constructor() {
    //Mockup
    this.author = "Victor Panayotov";
    this.title = "Bathrooms are in poor shape|Bathrooms are in poor shape|Bathrooms are in poor shape|Bathrooms are in poor shape|Bathrooms are in poor shape|Bathrooms are in poor shape|Bathrooms are in poor shape|Bathrooms are in poor shape|Bathrooms are in poor shape|";
    this.description = "Recently, I've noticed that the bathrooms in the university are in incredibly poor shape|Recently, I've noticed that the bathrooms in the university are in incredibly poor shape|Recently, I've noticed that the bathrooms in the university are in incredibly poor shape|Recently, I've noticed that the bathrooms in the university are in incredibly poor shape|Recently, I've noticed that the bathrooms in the university are in incredibly poor shape|Recently, I've noticed that the bathrooms in the university are in incredibly poor shape|Recently, I've noticed that the bathrooms in the university are in incredibly poor shape|Recently, I've noticed that the bathrooms in the university are in incredibly poor shape|Recently, I've noticed that the bathrooms in the university are in incredibly poor shape|Recently, I've noticed that the bathrooms in the university are in incredibly poor shape|"; // Use rich text?
   }

  ngOnInit() {

  }

}
