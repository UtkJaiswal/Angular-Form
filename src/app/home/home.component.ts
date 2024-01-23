import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any[] = [];
  loading = true;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // Call getFormData when the component is initialized
    this.getFormData();
  }

  submitForm(form: any) {
    if (form.valid) {
      const formData = form.value;

      // Make an HTTP POST request to the server
      this.http.post('http://localhost:8000/submit/', formData)
        .subscribe(
          (response) => {
            console.log('Form submitted successfully:', response);

            // Reset the form after successful submission
            form.resetForm();

            // Retrieve and update data after submission
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
    // Make an HTTP GET request to retrieve data
    this.http.get('http://localhost:8000/get/')
      .subscribe(
        (data: any) => {
          console.log('Data retrieved successfully:', data);
          this.data = data.data;
          console.log("gjg", data.data);

          // Process and use the retrieved data as needed
          this.loading = false; // Set loading to false when data is available

          this.cdr.detectChanges(); // Trigger change detection
        },
        (error) => {
          console.error('Error retrieving data:', error);
          // Handle errors appropriately
          this.loading = false; // Set loading to false even if there is an error

          this.cdr.detectChanges(); // Trigger change detection
        }
      );
  }
}
