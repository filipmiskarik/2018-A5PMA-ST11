import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslationProvider } from '../../providers/translation/translation';
import { HistoryProvider } from '../../providers/history/history';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private userInput:string;
  private result:string;
  constructor(public navCtrl: NavController, private translationProvider:TranslationProvider, private historyProvider: HistoryProvider, private tts: TextToSpeech) {
   
  }
  public btnTranslateClicked(userInput:string):void{
    console.log(userInput);
    this.userInput = userInput;
    this.translationProvider.getTranslationResult(userInput).subscribe(
      (response) => {
        console.log(response);
        
        this.result = response.responseData.translatedText;

        this.tts.speak(this.result)
        .then(() => console.log('Success'))
        .catch((reason: any) => console.log(reason));

        this.historyProvider.saveToHistory(userInput, this.result);
    });
}
}
