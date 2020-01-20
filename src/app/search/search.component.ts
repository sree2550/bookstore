import { Component, OnInit } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  BooksService
} from '../services/books.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public bookObj: any = {}

  constructor(private http: HttpClient,
    private bookService: BooksService) { }

  ngOnInit() {
    this.getBooks();
  }

 
  getBooks() {

    this.http.get('http://127.0.0.1:8000/api/searchBooks/').subscribe(res => {
      this.bookObj = res;

    });
  }

}
