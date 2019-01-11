import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {Issue} from '../issue';
import {Institution} from '../Institution';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-rankedinstitutions',
  templateUrl: './rankedinstitutions.component.html',
  styleUrls: ['./rankedinstitutions.component.css']
})
export class RankedinstitutionsComponent implements OnInit {

  institutions: Observable<Institution[]>;

  constructor(db: AngularFirestore) {
  this.institutions = db.collection<Institution>('institutes').valueChanges();

  }
  ngOnInit() {
  }

}
