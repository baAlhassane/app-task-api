import { Component, OnInit , EventEmitter} from '@angular/core';
import { Task } from '../../Task';
import { TASKS } from '../../mock-tasks';

import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
 tasks:Task[]=[];
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(
      (tasks)=>{
        this.tasks=tasks
      }
    )
  }




  deleteTask(task:Task){
    ///console.log("in delete task")
    this.taskService.deleteTaskService(task).
    subscribe(
      ()=>(
        this.tasks=this.tasks.filter(
          (tsk)=>(
            tsk.id!==task.id
          )
          )
      )
    )

  }


  AddTask(task:Task){
// console.log(task);
this.taskService.addTaskService(task).subscribe(
  (task)=>(this.tasks.push(task))
  
)
    
  }

  toggleRemider(task:Task){
    
    task.reminder = !task.reminder
    //console.log(task.reminder)
    this.taskService.updateTaskReminder(task).subscribe()
  }
}
