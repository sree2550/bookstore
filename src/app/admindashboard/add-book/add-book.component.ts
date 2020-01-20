import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {


  public imgSrc;
  private imgFile;
  public category: any = [];
  public userObj: any = {};
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  

  onFileSelected(event) {
    this.imgFile = event.target.files[0]
    const filereader = new FileReader();
    filereader.onload = e => this.imgSrc = filereader.result;
    filereader.readAsDataURL(this.imgFile);

    
  }

  get_category() {
    this.http.get('http://127.0.0.1:8000/api/getCategory/').subscribe(res => {
      this.category = res;
    });
  }

  fn_addbook() {
    const formData = new FormData();
    formData.append('image', this.imgFile);
    formData.append('bookname', this.userObj.bookname);
    formData.append('bookcat', this.userObj.bookcat);
    formData.append('description', this.userObj.description);
    formData.append('pubname', this.userObj.pubname);
    formData.append('price', this.userObj.price);
    formData.append('quantity', this.userObj.quantity);
    formData.append('discount', this.userObj.discount);
    this.http.post('http://127.0.0.1:8000/api/addbook/', formData).subscribe(res => {
      if (res == 1) {
        this.userObj = {};
      }
    });
  }

}

