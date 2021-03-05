import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  data: Array<object> = [];

  constructor(public toastController: ToastController) {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

  loadData(event) {
    setTimeout(() => {
      this.addData();
      console.log('Done');
      event.target.complete();
      if (this.data.length == 1000) {
        event.target.disabled = true;
      }
    }, 1000);
  }

  addData() {
    var db = firebase.firestore();

    db.collection("Movies")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach( (doc) => {
          console.log(doc.id, " => ", doc.data());
          this.data.push(doc.data());
      });
    });
  }

  getOrderInProcess() {
    const db = firebase.firestore();

    db.collection("orders")
    .where("inProcess", "==", true)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          return doc.data();
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

    return null;
  }

  addMovieToOrder(movie) {

    const db = firebase.firestore();
    let document = this.getOrderInProcess();
    db.collection("orders").doc(document.id).set({
      movieName: movie.name,
      inProcess: true
    })
  }
}
