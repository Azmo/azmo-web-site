import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: any;
  constructor(private db: AngularFireDatabase, public snackBar: MdSnackBar) { }

  ngOnInit() {
    this.contact = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }

  send() {
    const contactRef = this.db.list(`/contact`);
    contactRef.push(this.contact)
      .then((i) => {
        this.snackBar.open('Your message delivered', 'ok', {
          duration: 3000
        });
      },
      (err) => {
        this.snackBar.open('Something went wrong. Message not delivered.', 'ok', {
          duration: 3000
        });
      });
  }
}
