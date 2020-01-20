import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.css']
})
export class AddSubcategoryComponent implements OnInit {

  public userObj: any = {}; 
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  fn_subcategory() {
    console.log(this.userObj);
    this.http.post('http://127.0.0.1:8000/api/insert4/', this.userObj).subscribe(res => {
      if (res == 1) {
        this.userObj = {};
      }
    });
  }
}
