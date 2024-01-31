import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudService } from 'src/app/service/stud.service';

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

  updateStudent(){
    var inputData = {
      name: this.student.name,
      mark1: this.student.mark1,
      mark2: this.student.mark2,
      mark3: this.student.mark3
    }

    this.studentService.updateStudent(inputData, this.studentId).subscribe({
      next: (res: any) => {
        alert("Record Updated!!");
      },
      error(err: any) {
        console.log(err);
        
      },
    });
  }

}
