import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-route',
  templateUrl: './nav-route.component.html',
  styleUrls: ['./nav-route.component.css']
})
/**
 * For the Navigation icons. There should be an instance of this component for each of the primary routes. IE;
 * top universities, top local universities
 */
export class NavRouteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
