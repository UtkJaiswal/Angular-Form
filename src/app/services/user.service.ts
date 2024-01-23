// // user.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';


// @Injectable({
//   providedIn: 'root',
// })
// export class UserService {

//   constructor(private http: HttpClient) {}
  

  
//   addUser(newUser: any) {
//     // Add user validation and processing logic here if needed
//     // For simplicity, we'll just push the new user to the existing array
//     this.http.post('http://localhost:8000/submit/', formData)
//         .subscribe(
//           (response) => {
//             console.log('Form submitted successfully:', response);

//             // Reset the form after successful submission
            
//           },
//           (error) => {
//             console.error('Error submitting form:', error);
//             // Handle errors appropriately
//           }
//         );
//   }

  
//   }
// }