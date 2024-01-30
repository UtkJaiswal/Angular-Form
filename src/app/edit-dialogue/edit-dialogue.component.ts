import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-dialogue',
  templateUrl: './edit-dialogue.component.html',
  styleUrls: ['./edit-dialogue.component.css']
})
export class EditDialogueComponent {
  @Input() element: any;
  @Input() isEdit: any;

  constructor(private userService: UserService) {}

  updateForm(form:any){
    form.value.id = this.element.id

    if (form.valid) {
      this.userService.editForm(form).subscribe(
        (response) => {
          form.resetForm();
          this.isEdit = false;

        },
        (error) => {
          console.error('Error submitting form:', error);
        }
      );
    } else {
    }
    
  }

}
