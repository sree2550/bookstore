import {
  Component,
  OnInit
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  Router
} from '@angular/router';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  public userObj: any = {};
  constructor(private http: HttpClient, private route: Router) {}

  ngOnInit() {}

  fn_login() {
    this.http.post('http://127.0.0.1:8000/api/login/', this.userObj).subscribe(res => { //calling ajax
      console.log(res['status']);
      // console.log(res['msg'])

      if (res['status'] == false) {
        alert("Cannot Login");
        this.route.navigate(['home']);
      } else {
        if (res['status']) {
          localStorage.setItem('userId', res['userId']);
          if (res['userType'] == 'admin') {
            localStorage.setItem('role', 'admin');
            this.route.navigate(['admin']);
          } else {
            localStorage.setItem('role', 'user');
            this.route.navigate(['user']);
          }
        }
      }


    });

  }

}
