import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../Employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-empupdate',
  templateUrl: './empupdate.component.html',
  styleUrls: ['./empupdate.component.css']
})
export class EmpupdateComponent implements OnInit {
 
  
    id: number=0;
    employee: any;
  
    constructor(private route: ActivatedRoute,private router: Router,
      private employeeService: EmployeeServiceService) { }
  
    ngOnInit() {
      this.employee = new Employee();
  
      this.id = this.route.snapshot.params['id'];
      
      this.employeeService.getEmployee(this.id)
        .subscribe(data => {
          console.log(data)
          this.employee = data;
        }, error => console.log(error));
    }
  
    updateEmployee() {
      this.employeeService.updateEmployee(this.id, this.employee)
        .subscribe(data => {
          console.log(data);
          this.employee = new Employee();
          this.gotoList();
        }, error => console.log(error));
    }
  
    onSubmit() {
      this.updateEmployee();    
    }
  
    gotoList() {
      this.router.navigate(['/employees']);
    }
  
  }
  
