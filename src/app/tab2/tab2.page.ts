import { Component } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  order = {
    movieName: '',
    amountofTickets: 0,
    inProcess: null,
  };
  constructor() {

    const db = firebase.firestore();

    db.collection("orders")
    .where("inProcess", "==", true)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data())
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

    return null;

  }


}
