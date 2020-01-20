import { Component, OnInit } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  BooksService
} from '../../services/books.service';


@Component({
  selector: 'app-view-user-details',
  templateUrl: './view-user-details.component.html',
  styleUrls: ['./view-user-details.component.css']
})
export class ViewUserDetailsComponent implements OnInit {
  public users: any = [];
  constructor(private http: HttpClient,
    private bookService: BooksService
  ) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    
    this.http.get('http://127.0.0.1:8000/api/showusers/').subscribe(res => {
      if (Array.isArray(res)) {
        this.users = res;
      } else {
        this.users = [];
        const data = res[Object.keys(res)[0]]
        this.users.push(data);
      }
      
        // this.users = response;//when app load we get data

    });
  }

}
