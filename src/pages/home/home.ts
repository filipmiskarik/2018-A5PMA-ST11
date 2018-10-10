import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private userInput:string;

  constructor(public navCtrl: NavController) {
   
  }
  public btnTranslateClicked(userInput:string):void{
    console.log(userInput);
    this.userInput = userInput;
  }
}
