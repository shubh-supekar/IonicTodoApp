import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  user: any = {};

  constructor(private authObj: AngularFireAuth, private router: Router,
              private afDB: AngularFireDatabase) { }

  ngOnInit() {
  }

  register()
  {
    if (this.user.email && this.user.password)
    {
      this.authObj.createUserWithEmailAndPassword(this.user.email, this.user.password).then( (r) => {
        console.log(r);

        this.afDB.object('/users' + r.user.uid).set({
          name: this.user.name,
          email: this.user.email,
          createdAt: Date.now()

        }).then(() => {
          this.router.navigateByUrl('/login');

        });

        }).catch( e => {
          console.log(e);
    });
  }
  }

}
