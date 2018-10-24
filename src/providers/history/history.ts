import { Injectable } from '@angular/core';
import { HistoryRecord } from '../../models/history-record';
import { Storage } from '@ionic/storage';

/*
  Generated class for the HistoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistoryProvider {
  private historyRecords: Array<HistoryRecord>
  constructor(private storage: Storage) {
    console.log('Hello HistoryProvider Provider');
  }

  public saveToHistory(from:string, to:string):void{
    //save to native storage
    let record = new HistoryRecord (from, to);
    this.storage.set('history', JSON.stringify(record));
  }
  public getHistory():void{
    this.storage.get('history').then(value => {
     this.historyRecords = JSON.parse(value); 
    });
  }
}
