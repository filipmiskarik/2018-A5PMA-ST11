import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslationProvider } from '../../providers/translation/translation';
import { HistoryProvider } from '../../providers/history/history';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private userInput:string;
  private result:string;
  constructor(public navCtrl: NavController, private translationProvider:TranslationProvider, private historyProvider: HistoryProvider) {
   
  }
  public btnTranslateClicked(userInput:string):void{
    console.log(userInput);
    this.userInput = userInput;
    this.translationProvider.getTranslationResult(userInput).subscribe(
      (response) => {
        console.log(response);
        
        this.result = response.responseData.translatedText;
        this.historyProvider.saveToHistory(userInput, this.result);
    });
}
}
