import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordServiceService {
  private wordSource = new Subject<string>();
  word$ = this.wordSource.asObservable();

  constructor() { }

  updateWord(newWord) {
    console.log('word updated in service')
    this.wordSource.next(newWord)
  }
}
