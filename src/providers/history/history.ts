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
  public historyRecords: Array<HistoryRecord> = [];
  constructor(private storage: Storage) {
    console.log('Hello HistoryProvider Provider');
    this.getHistory();
  }

  public saveToHistory(from:string, to:string):void{
    //save to native storage
    let record = new HistoryRecord (from, to);
    this.historyRecords.push(record);
    this.storage.set('history', JSON.stringify(this.historyRecords));
  }
  public getHistory():void{
    this.storage.get('history').then(value => {
      if(value){
        this.historyRecords = JSON.parse(value); 
      }
    });
  }
}
