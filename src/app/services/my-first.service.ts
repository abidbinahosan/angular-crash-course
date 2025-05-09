import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  messages: Array<any> = [];
  constructor() {
    this.intit();
   }

  intit(): void{
    this.insert({
      name: 'Abid', 
      email: 'abidbinahosan@gmail.com',
      message: 'Hello World!'
    });
    this.insert({
      name: 'Kanon', 
      email: 'kanon@gmail.com',
      message: 'Hello World!'
    });
  }
  insert(message: {name: string, email: string, message: string}){
    this.messages.push(message);
  }
  getAllMessages(): any[]{
    return this.messages;
  }
  deleteMessage(index: number){
    this.messages.splice(index, 1);
  }
}
