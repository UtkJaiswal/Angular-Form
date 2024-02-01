import { Component, Input, OnInit,Inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-edit-dialogue',
  templateUrl: './edit-dialogue.component.html',
  styleUrls: ['./edit-dialogue.component.css']
})
export class EditDialogueComponent {
  @Input() element: any;
  @Input() isEdit: any;

  constructor(private userService: UserService,
    public dialog: MatDialog,
    public dialogRef:MatDialogRef<EditDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  updateForm(form:any){
    form.value.id = this.data.id

    if (form.valid) {
      this.userService.editForm(form).subscribe(
        (response) => {
          form.resetForm();
          this.isEdit = false;
          this.dialogRef.close();

        },
        (error) => {
          console.error('Error submitting form:', error);
        }
      );
    } else {
    }

    
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
