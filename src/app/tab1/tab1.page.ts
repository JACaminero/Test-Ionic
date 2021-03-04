import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  data: Array<object> =
  [{
    "name": "Aline Grover",
    "created": "November 28, 2012"
  }, {
    "name": "Nevada Anders",
    "created": "January 18, 2014"
  }, {
    "name": "Nicholas Morissette",
    "created": "November 11, 2014"
  }];

  constructor() {}


  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      this.addData();
      event.target.complete();
      if (this.data.length == 1000) {
        event.target.disabled = true;
      }
    }, 1000);
  }

  addData() {
    for (let i = 0; i < 5; i++) {
      this.data.push(this.data[i]);
    }
  }
}
