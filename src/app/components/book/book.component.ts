import { Component } from '@angular/core';
import { Book } from '../../Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  book : Book = {
    id : 1,
    title : "Angular",
    author : "Rafael Dias",
    price : 50.00
  };
  
}
