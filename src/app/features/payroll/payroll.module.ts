import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Importamos los componentes del módulo Payroll */
import { RecordsComponent } from './records/records.component';
import { AttendanceComponent } from './records/attendance/attendance.component';

@NgModule({
  declarations: [
    RecordsComponent,  // Componente de Registros
    AttendanceComponent // Componente de Asistencias
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RecordsComponent,
    AttendanceComponent
  ]
})
export class PayrollModule { }
