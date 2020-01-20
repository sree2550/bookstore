import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {

  public districts: any = [];
  public userObj: any = {}; 
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  get_districts() {
    this.http.get('http://127.0.0.1:8000/api/getDistricts/').subscribe(res => {
      this.districts = res;
    });
  }

  fn_signup() {
    console.log(this.userObj);
    this.http.post('http://127.0.0.1:8000/api/insert1/', this.userObj).subscribe(res => {
      if (res == 1) {
        this.userObj = {};
      }
    });

  }

}
