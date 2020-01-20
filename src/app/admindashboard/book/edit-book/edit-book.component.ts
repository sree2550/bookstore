import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute} from '@angular/router';
import{BooksService} from '../../../services/books.service';
import { book } from '../../add-book/book.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  
  public userObj: any = {};
  public bookObj: any = {}

  id:any;
  resr = new book();
  mydata:any;
  data:any;

  constructor(private http: HttpClient,
    private route:ActivatedRoute,
    private bookService:BooksService,
    private routee: Router

    
    ) { }

  ngOnInit() {
    this.id=(this.route.snapshot.params.book_id);
    // this.getData(this.id);
    this.getData();

  }


UpdateData(){
  
  this.bookService.updateData(this.id,this.bookObj).subscribe();
  alert("Updated Successfully..!");
  this.routee.navigate(['admin/book/view-book']);
  // window.location.href = '/view-book';
}

  getData(){
    this.bookService.getData(this.id).subscribe(res => {
      const keys = Object.keys(res);
      const data = res[keys[0]]
      this.bookObj = data;
    });
  }
}




