// home.component.ts
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../services/user.service';
import { EditDialogueComponent } from '../edit-dialogue/edit-dialogue.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private userService: UserService,public dialog: MatDialog,
    public dialogRef : MatDialogRef<EditDialogueComponent>,
    private _snackBar:MatSnackBar) {}

  ngOnInit() {
    this.getFormData();
    this.isEdit = false
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
        }
      );
    } else {
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

  openEditDialog(element:any): void {
    const dialogRef = this.dialog.open(EditDialogueComponent, {
      width: '4000px',
      height:'500px',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getFormData();
      if (result) {
        console.log('Dialog result:', result);
      }
    });
  }

  editItem(element:any){
    this.isEdit = true
    this.editData = element
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
  }

  openSnackBar(message:string){
    this._snackBar.open(message,'Close')

  }
  
}
