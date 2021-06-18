import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {

  constructor() { }
  checkusernameandpassword(uname: string, pwd: string) {
    if (uname == "Db" && pwd == "Db@123") {
      localStorage.setItem('username', "Db");
      return true;
    }
    else {
      return false;
    }
  }

}