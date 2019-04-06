import { DocumentSnapshot } from '@angular/fire/firestore';
import { Component, OnInit, Input } from '@angular/core';
import { Resolution } from 'src/app/resolution';
import { User } from 'src/app/user';
import { ResolutionService } from 'src/app/resolution.service';

@Component({
  selector: 'app-resolution',
  templateUrl: './resolution.component.html',
  styleUrls: ['./resolution.component.css']
})
export class ResolutionComponent implements OnInit {
  resolution$: any;
  resolution: Resolution;
  resAuthor: any;
  display: boolean;

  constructor(
    private service: ResolutionService
  ) { }

  async ngOnInit() {
    this.resolution$ = await this.service.getResolution(5);
    this.resolution = this.resolution$.data();
    this.resAuthor = await this.resolution.user.get().then((snapshot) => {
      return snapshot.data();
    });
    this.display = true;
  }

  // Would like to get the database to update when this value changes
  upvoteAdequacy() {
    this.resolution.rating++;
    this.service.updateResolution(this.resolution$.ref, this.resolution);
  }

  downvoteAdequacy() {
    this.resolution.rating--;
  }
}
