import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Tasks } from '../../interfaces/tasks';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-area-principal',
  templateUrl: './area-principal.page.html',
  styleUrls: ['./area-principal.page.scss'],
})
export class AreaPrincipalPage implements OnInit {
  Tareas: any = [];
   currentUserID = this.authService.userData.uid;
  constructor(
    public authService: AuthenticationService,
    public taskService: TasksService
  ) {}

  ngOnInit() {
    console.log(this.currentUserID);
    this.fetchTask();
    let taskRes = this.taskService.getTaskList();
    taskRes.snapshotChanges().subscribe((res) => {
      this.Tareas = [];
      res.forEach((item) => {
        let a: any = item.payload.toJSON();
        a['$key'] = item.key;
        this.Tareas.push(a as Task);
      });
    });
  }

  fetchTask() {
    this.taskService
      .getTaskList()
      .valueChanges()
      .subscribe((res) => {
      });
  }

  deleteTask(id: any) {
    console.log(id);
    if (window.confirm('Deseas eliminar esta Tarea?')) {
      this.taskService.eliminarTarea(id);
    }
  }
}
