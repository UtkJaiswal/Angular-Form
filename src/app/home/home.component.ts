import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any[] = [];
  loading = true;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef,private userService:UserService) {}

  ngOnInit() {
    this.getFormData();
  }

  
  submitForm(form: any) {
    if (form.valid) {
      this.userService.submitForm(form).subscribe(
        (response) => {
          form.resetForm();

          this.getFormData();
        },
        (error) => {
          console.error('Error submitting form:', error);
          // Handle errors appropriately
        }
      );
    } else {
      // Form is invalid, handle error or validation messages
    }
  }
  
  

  getFormData() {
    this.http.get('http://localhost:8000/get/')
      .subscribe(
        (data: any) => {
          this.data = data.result.data;

  
          this.loading = false;

          this.cdr.detectChanges();
        },
        (error) => {
          console.error('Error retrieving data:', error);
          this.loading = false;

          this.cdr.detectChanges();
        }
      );
  }
}
