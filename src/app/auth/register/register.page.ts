import { Component, OnInit } from '@angular/core';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/tabs/tabs', pathMatch: 'full' }
];

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  providers: [FirebaseAuthentication]
})

export class RegisterPage implements OnInit {

  constructor(private firebaseAuthentication: FirebaseAuthentication, private router: Router) { }

  ngOnInit() {
  }


  signUp(email: string, password: string) {
    console.log("hello");
    this.firebaseAuthentication.createUserWithEmailAndPassword('email@DDD.com', 'password')
    // this.firebaseAuthentication.createUserWithEmailAndPassword(email, password)
    // .then((userCredential) => {

    //   var user = userCredential.user;
    //   this.router.navigate([''])
    // })
    // .catch((error) => {
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   console.log(errorCode + " " + errorMessage)
    // });

  }

}
