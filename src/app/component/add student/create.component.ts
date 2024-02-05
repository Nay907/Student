import { Component } from '@angular/core';
import { StudService } from 'src/app/service/student.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(private studentService: StudService) {}

  name!: string
  m1!: number
  m2!: number 
  m3!: number
  total!: number
  grade!: string
  
  errors: any = [];

  saveStudent() {
    //calc-ing marks
    this.total = (this.m1 + this.m2 + this.m3) / 3;
    if (this.total >= 90) {
      this.grade = 'A';
    }
    else if (this.total >= 80 && this.total < 90) {
      this.grade = 'B';
    }
    else if (this.total >= 70 && this.total < 80) {
      this.grade = 'C';
    }
    else if (this.total >= 60 && this.total < 70) {
      this.grade = 'D';
    }
    else {
      this.grade = 'F';
    }
    //creating object to post
    var inputData = {
      name: this.name,
      m1: this.m1,
      m2: this.m2,
      m3: this.m3,
      total: this.total,
      grade: this.grade,
    };

    this.studentService.saveStudent(inputData).subscribe({
      next: (res: any) => {
        console.log(res, 'response');
        alert("Student Record Added!!");
        this.name = '';
        this.m1 = 0;
        this.m2 = 0;
        this.m3 = 0;
      },
      error: (err: any) => {
        this.errors = err.error.errors;
        console.log(err.error.errors, 'errors');
      }
    })
  }
}
