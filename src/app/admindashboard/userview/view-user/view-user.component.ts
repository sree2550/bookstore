import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  public users: any = [];
  id:any;
  
  constructor(private http: HttpClient,
    private route:ActivatedRoute,)
   { }

  ngOnInit() {
    //this.id=(this.route.snapshot.params.register_id);

    this.getUsers();
  }

  getUsers(){
    
    this.http.get('http://127.0.0.1:8000/api/showusers/').subscribe(response => {

        this.users = response;//when app load we get data

    });
  }

  // fn_reject_user(){

  //   this.http.get('http://127.0.0.1:8000/api/reject-user/').subscribe(response => {

  //       this.users = response;//when app load we get data

  //   });
  // }


  fn_reject_user(id) {
    // let eid = evnt.target.id;
    this.http.get('http://127.0.0.1:8000/api/reject-user/' +id).subscribe(response =>{
      this.users = response;//when app load we get data
    });
  }
}
