import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskAddEditComponent } from './task-add-edit/task-add-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do-List';
  constructor(private _dialog: MatDialog){

  }
  addTask(){
    this._dialog.open(TaskAddEditComponent)
  }
}
