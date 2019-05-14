import { Component, OnInit } from '@angular/core';
import { Student, STUDENTS } from '../student';




  
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
students:Student[];










constructor() { 
  this.students =STUDENTS;

 
}

ngOnInit() {
}

}






