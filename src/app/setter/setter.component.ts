import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WordServiceService } from '../word-service.service';

@Component({
  selector: 'app-setter',
  templateUrl: './setter.component.html',
  styleUrls: ['./setter.component.css']
})
export class SetterComponent implements OnInit {
  wordInput = new FormControl('word');

  constructor(private wordService: WordServiceService) { }

  ngOnInit(): void {
  }

  updateWord() {
    console.log('updating word from setter')
    this.wordService.updateWord(this.wordInput.value)
  }

}
