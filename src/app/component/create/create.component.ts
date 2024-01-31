import { Component } from '@angular/core';
import { StudService } from 'src/app/service/stud.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(private studentService: StudService) {}

  name!: string
  mark1!: number
  mark2!: number 
  mark3!: number
  total!: number
  grade!: string
  
  errors: any = [];

  saveStudent() {
    //calc-ing marks
    this.total = (this.mark1 + this.mark2 + this.mark3) / 3;
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
      mark1: this.mark1,
      mark2: this.mark2,
      mark3: this.mark3,
      total: this.total,
      grade: this.grade,
    };

    this.studentService.saveStudent(inputData).subscribe({
      next: (res: any) => {
        console.log(res, 'response');
        alert("Student Record Added!!");
        this.name = '';
        this.mark1 = 0;
        this.mark2 = 0;
        this.mark3 = 0;
      },
      error: (err: any) => {
        this.errors = err.error.errors;
        console.log(err.error.errors, 'errors');
      }
    })
  }
}
