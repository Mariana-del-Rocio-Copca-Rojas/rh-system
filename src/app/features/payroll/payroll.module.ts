import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayrollMenuComponent } from './payroll-menu/payroll-menu.component';
import { RecordsComponent } from './records/records.component';
import { AttendanceComponent } from './records/attendance/attendance.component';



@NgModule({
  declarations: [
    PayrollMenuComponent,
    RecordsComponent,
    AttendanceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PayrollModule { }
