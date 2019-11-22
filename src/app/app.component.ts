import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-angular-app';
  name = 'dasun';
  ServerName = 'apollo';
  ServerPID = 11;
  ServerStatus = 'offline';
  statusFlag = false;
  buttonState = true;
  flag = true;
  color = "black";

  constructor() {
    setTimeout(()=>{
      this.buttonState = false;
    }, 2500);
  }

  toggleServerStatus() {
    this.statusFlag = !this.statusFlag;
    if(this.statusFlag === true) {
      this.ServerStatus = 'online'
    }
    else{
      this.ServerStatus = 'offline'
    }
    return this.ServerStatus
  }

  getColor() {
    if(this.statusFlag === true) {
      this.color = 'red'
    }
    else{
      this.color = 'gray'
    }
    return this.color
  }

}