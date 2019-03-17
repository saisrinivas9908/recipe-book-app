import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDXmjMY5cxzTzxgKkNhPFE143FU-X06RFM",
      authDomain: "recipebook-60361.firebaseapp.com"
    });
  }

}
