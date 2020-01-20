import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  public userObj: any = {}; 
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  fn_category() {
    console.log(this.userObj);
    this.http.post('http://127.0.0.1:8000/api/insert3/', this.userObj).subscribe(res => {
      if (res == 1) {
        this.userObj = {};
      }
    });
  }
}
