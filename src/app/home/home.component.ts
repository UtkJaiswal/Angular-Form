// home.component.ts
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../services/user.service';
import { EditDialogueComponent } from '../edit-dialogue/edit-dialogue.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any[] = [];
  loading = true;
  isEdit:boolean = false
  editData : any

  displayedColumns: string[] = ['name', 'email','actions'];

  constructor(private userService: UserService) {}

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
    
    this.userService.getForm().subscribe(
      (response) => {
        this.loading = false
        this.data = response.result.data
      }
    )
  }

  // openEditDialog(data: any): void {
  //   const dialogRef = this.dialog.open(EditDialogueComponent, {
  //     width: '400px', // Adjust the width as needed
  //     data: { ...data } // Pass the data to the dialog
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     // Handle the result after the dialog is closed (e.g., update the data)
  //     if (result) {
  //       // Update the data or perform other actions
  //       console.log('Dialog result:', result);
  //       this.getFormData(); // Refresh the data after editing
  //     }
  //   });
  // }

  editItem(element:any){
    this.isEdit = true
    this.editData = element
    // this.userService.editForm(element).subscribe(
    //   (response) => {
    //     console.log("Edit form response",response
    //     )

    //   },
    //   (error) => {
    //     console.error("Error editing form",error)
    //   }
    // )
    // console.log(element)
  }

  
  deleteItem(element:any):void{
    this.userService.deleteForm(element.id).subscribe(
      (response) => {
        console.log("Delete form response",response)
        this.getFormData()
      },
      (error) => {
        console.error("Error deleting form",error)
      }
      
    )
    console.log(element)
  }
}
