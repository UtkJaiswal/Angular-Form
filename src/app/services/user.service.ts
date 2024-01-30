import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  submitForm(form: any): Observable<any> {
    const formData = form.value;
    return this.http.post('http://localhost:8000/submit/', formData);
  }

  getForm() : Observable<any> {
    return this.http.get('http://localhost:8000/get/')
  }

  editForm(element:any):Observable<any> {
    return this.http.put(`http://localhost:8000/update/${element.value.id}`,element.value)
  }

  // deleteForm(element:any):Observable<any> {
  //   return this.http.delete(`http://localhost:8000/delete`,element)
  // }

  deleteForm(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8000/delete/${id}`);
  }
  
  
}
