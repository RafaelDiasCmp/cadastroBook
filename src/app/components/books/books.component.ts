import { Component } from '@angular/core';
import { Book } from '../../Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  book: Book = {} as Book;
  isUpdate : boolean = false;
  idCount : number = 5;

  books: Book[] = [
    {
    id: 1,
    title: "Java 24 horas",
    author: "Aroldo",
    price: 50.00
    },
    {
      id: 2,
      title: "Angular 24 horas",
      author: "Betino",
      price: 60.00
    },
    {
      id: 3,
      title: "Spring Boot 24 horas",
      author: "Caio",
      price: 70.00
    },
    {
      id: 4,
      title: "HTML e CSS 24 horas",
      author: "Daniel",
      price: 80.00
    }
  ];

  saveBook(){
    if(!this.isUpdate){
      this.book.id = this.idCount;
      this.idCount++;
      this.books.push(this.book);
  }
    this.book = {} as Book;
    this.isUpdate = false;
  }

  update(selectedBook:Book){
    this.book = selectedBook;
    this.isUpdate = true;
  }

  remove(removeBook:Book){
    this.books = this.books.filter( b => b !== removeBook);

  }

}
