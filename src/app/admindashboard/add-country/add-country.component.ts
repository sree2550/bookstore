import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {
  public userObj: any = {}; 
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  fn_country() {
    console.log(this.userObj);
    this.http.post('http://127.0.0.1:8000/api/insert2/', this.userObj).subscribe(res => {
      console.log(res);
    });
}
}
