import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { User } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  usersRef : AngularFireList<any>;
  userRef : AngularFireObject<any>;

  constructor(private db : AngularFireDatabase) { }

  Adduser(user:User){
    
    console.log(this.usersRef)
    this.usersRef.push({
      name : user.name,
      email : user.email,
      contact : user.contact
    })
  }
}
