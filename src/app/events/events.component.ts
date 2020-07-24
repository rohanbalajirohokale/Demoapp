import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent 
 {
public Rohan:Observable<any[]>;
  constructor(public db:AngularFirestore) {
    this.Rohan=this.db.collection('/rohan').valueChanges()
   }
  

}
