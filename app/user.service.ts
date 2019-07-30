import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<any>({});
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  constructor() { }

  setUser(user) {
    console.log('new user', user);
    this.currentUserSubject.next(user);
  }

}