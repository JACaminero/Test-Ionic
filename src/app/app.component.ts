import { Component } from '@angular/core';
import firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyAsT4nGfhnleU7hMG8v2uP1YbZXwQbgW7I",
      authDomain: "test-ionic-ef7d0.firebaseapp.com",
      projectId: "test-ionic-ef7d0",
      storageBucket: "test-ionic-ef7d0.appspot.com",
      messagingSenderId: "70961445210",
      appId: "1:70961445210:web:ab1a6adfee8f487b739b63"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
