import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HasPermissionDirective } from './hasPermission.directive';
import { UserService } from './user.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HasPermissionDirective ],
  bootstrap:    [ AppComponent ],
  providers: [UserService]
})
export class AppModule { }
