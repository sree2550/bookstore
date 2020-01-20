import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  data:any;
  constructor(private http: HttpClient) { }


  getData(id){
  return this.http.get('http://127.0.0.1:8000/api/booksupdate/'+id);
}

updateData(id,data){
  return this.http.patch('http://127.0.0.1:8000/api/editdetails/'+id,data);
  // console.log(data);
  // console.log(id);
}



deleteData(id){
  // console.log(id);
  return this.http.delete('http://127.0.0.1:8000/api/deletebook/'+id);
 }
 getMyData(){
  return this.http.get('http://127.0.0.1:8000/api/showbooks/');
 }

 get_category() {
  return this.http.get('http://127.0.0.1:8000/api/getCategory/');
 }

 
}