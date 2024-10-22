import { Component } from '@angular/core';
import { Book } from '../../Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

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
}