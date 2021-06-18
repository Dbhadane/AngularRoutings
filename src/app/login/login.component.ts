import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[MyserviceService]
})
export class LoginComponent implements OnInit {

  constructor(private service: MyserviceService, private routes: Router) { }
  msg: string | undefined;
  ngOnInit() {
  }
  check(uname: string, p: string) {
    console.log("in check");
    var output = this.service.checkusernameandpassword(uname, p);
    if (output == true) {
      this.routes.navigate(['/dash-board']);
    }
    else {
      this.msg = 'Invalid username or password';
    }
  }

}
