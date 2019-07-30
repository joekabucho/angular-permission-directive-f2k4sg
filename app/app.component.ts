import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  currentUser = this.userService.currentUser;
  private user1 = {
    username: 'juristr',
    permissions: [
      'can_read',
      'can_write'
    ]
  }

  private user2 = {
    username: 'steffi',
    permissions: [
      'can_read'
    ]
  }

  constructor(private userService: UserService) {
  }
  

  setUser1() {
    this.userService.setUser(this.user1);
  }

  setUser2() {
    this.userService.setUser(this.user2);
  }

}
