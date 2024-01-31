import { Component } from '@angular/core';
import { StudentResponse, StudService } from 'src/app/service/stud.service';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent {
  constructor(private studentService: StudService) {}

  students!: StudentResponse[];

  ngOnInit(){
    this.getStudentsLists();
  }

  getStudentsLists(){
    this.studentService.getStudents().subscribe((res:any) => {
      this.students = res;
    });
  }

}
