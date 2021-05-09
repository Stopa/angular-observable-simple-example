import { Component, OnInit } from '@angular/core';
import { WordServiceService } from '../word-service.service';

@Component({
  selector: 'app-getter',
  templateUrl: './getter.component.html',
  styleUrls: ['./getter.component.css']
})
export class GetterComponent implements OnInit {
  word: string;

  constructor(private wordService: WordServiceService) {
    wordService.word$.subscribe((newWord) => {
      console.log('updated word in getter');
      this.word = newWord;
    })
  }

  ngOnInit(): void {
  }

}
