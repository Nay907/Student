import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface StudentResponse{
  createdAt: string,
  name: string,
  avatar: string,
  id: number,
  mark1: number,
  mark2: number,
  mark3: number,
  total: number,
  grade: string
}
@Injectable({
  providedIn: 'root'
})
export class StudService {
  constructor(private httpClient: HttpClient) {}

  getStudents(){    
    return this.httpClient.get('https://65a8ca61219bfa37186795d0.mockapi.io/apie');
  }

  saveStudent(inputData: object){
    return this.httpClient.post('https://65a8ca61219bfa37186795d0.mockapi.io/apie', inputData);
  }

  getStudent(studentId: number){
    return this.httpClient.get(`https://65a8ca61219bfa37186795d0.mockapi.io/apie/${studentId}`);
  }
  
  updateStudent(inputData: Object, studentId: number){
    return this.httpClient.put(`https://65a8ca61219bfa37186795d0.mockapi.io/apie/${studentId}`, inputData);
  }

  deleteStudentRecord(studentId: number){
    return this.httpClient.delete(`https://65a8ca61219bfa37186795d0.mockapi.io/apie/${studentId}`);
  }
}
