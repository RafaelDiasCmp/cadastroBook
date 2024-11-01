import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  @Input()
  book : Book = {} as Book;
  

  save(){
    this.saveEmiter.emit();
  }

  @Output()
  saveEmiter = new EventEmitter();
}
