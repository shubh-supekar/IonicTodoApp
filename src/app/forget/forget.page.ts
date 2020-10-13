import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.page.html',
  styleUrls: ['./forget.page.scss'],
})
export class ForgetPage implements OnInit {
  email: any;

  constructor(private authObj: AngularFireAuth) { }

  ngOnInit() {
  }

  forgetPass()
  {
    if (this.email) {
    this.authObj.sendPasswordResetEmail(this.email).then((r) => {
      console.log('Email Reset');

    }).catch(e => {
      console.log(e);

    });
    }
  }

}
