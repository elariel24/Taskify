import { Injectable } from '@angular/core';
import { Tasks } from '../interfaces/tasks';

import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  taskListRef: AngularFireList<any>;
  taskRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {}

  // crear nueva tarea
  crearTarea(task: Tasks) {
    return this.taskListRef.push({
      titulo: task.titulo,
      nota: task.nota,
      estado: task.estado,
      uid: task.uid,
    });
  }

  // mostrar un tarea
  getTask(id: string) {
    this.taskRef = this.db.object('/task/' + id);
    return this.taskRef;
  }

  // obtener todas las tareas
  getTaskList() {
    this.taskListRef = this.db.list('/task');
    return this.taskListRef;
  }
  // actualizar
  updateTask(id: any, task: Tasks) {
    return this.taskRef.update({
      titulo: task.titulo,
      nota: task.nota,
      estado: task.estado,
      uid: task.uid,
    });
  }
  // eliminar
  eliminarTarea(id: string) {
    this.taskRef = this.db.object('/task/' + id);
    this.taskRef.remove();
  }
}
