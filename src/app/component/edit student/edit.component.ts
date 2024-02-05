import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudService } from 'src/app/service/student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  studentId!: any;
  student!: any;
  errors: any = [];

  constructor(private route: ActivatedRoute, private studentService: StudService) {}

  ngOnInit(){
    this.studentId = this.route.snapshot.paramMap.get('id');
     
    this.studentService.getStudent(this.studentId).subscribe(res => {
      this.student = res;   
    });
  }

  /**
   * Constructs the payload and makes a REST call to update the student obj
   */
  updateStudent(){

    // construct the payload
    const inputData = {
      name: this.student.name,
      m1: this.student.m1,
      m2: this.student.m2,
      m3: this.student.m3
    }


    // make the REST call to the backend
    this.studentService.updateStudent(inputData, this.studentId).subscribe({
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

}
