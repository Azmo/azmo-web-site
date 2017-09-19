import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: FirebaseObjectObservable<any>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.contact = this.db.object(`/users/${localStorage.getItem('currentUserId')}/contact`);
  }

}
