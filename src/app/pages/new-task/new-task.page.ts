import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.page.html',
  styleUrls: ['./new-task.page.scss'],
})
export class NewTaskPage implements OnInit {
  taskForm: FormGroup;
   constructor(
    public authService: AuthenticationService,
    private taskService: TasksService,
    private router: Router,
    public fb: FormBuilder) { }

  ngOnInit() {
     this.taskForm = this.fb.group({
      key:[''],
      titulo: [''],
      nota: [''],
      estado: [''],
      uid:[this.authService.userData.uid],
    });
  }
  formSubmit() {
    console.log(this.taskForm.value);
    if (!this.taskForm.valid) {
      return false;
    } else {
      return this.taskService
        .crearTarea(this.taskForm.value)
        .then((res) => {
          console.log(res);
          this.taskForm.reset();
          this.router.navigate(['/area-principal']);
        })
        .catch((error) => console.log(error));
    }
  }

}
