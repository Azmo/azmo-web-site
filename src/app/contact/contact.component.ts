import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: FirebaseObjectObservable<any>;

  constructor(private db: AngularFireDatabase, public snackBar: MdSnackBar) { }

  ngOnInit() {
    this.contact = this.db.object(`/users/${localStorage.getItem('currentUserId')}/contact`);
  }

  openSnackBar() {
    this.snackBar.open('Your message submitted', 'ok', {
      duration: 3000
    });
  }
}
