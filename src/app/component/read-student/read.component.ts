import { Component } from '@angular/core';
import { StudentResponse, StudService } from 'src/app/service/student.service';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent {
  constructor(private studentService: StudService) { }

  students!: StudentResponse[];

  ngOnInit(): void {
    this.getStudentsLists();
  }

  getStudentsLists(): void {
    // deprecated. pass a subscriber object instead
    this.studentService.getStudents().subscribe((res: any) => {
      this.students = res;
    });
    this.studentService.getStudents().subscribe({
      next: (res: any) => {
        alert("Record Updated!!");
      },
      error(err: any) {
        console.log(err);

      },
      complete: () => {
        
      }
    });
  }
  deleteStudent(event: any, studentId: number){
    if(confirm("Are you sure you want to delete this record?")){
      event.target.innerText = "Deleting...";

      this.studentService.deleteStudentRecord(studentId).subscribe((res: any) => {
        this.getStudentsLists();
        alert("Record Deleted!!!");
      })
    }
  }

}
