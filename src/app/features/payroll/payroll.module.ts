import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/* Importamos los componentes del módulo Payroll */
import { RecordsComponent } from './records/records.component';
import { AttendanceComponent } from './records/attendance/attendance.component';
import { ShiftChangeComponent } from './records/shift-change/shift-change.component';

/* Definimos las rutas del módulo Payroll */
const routes: Routes = [
  { path: 'records', component: RecordsComponent },
  { path: 'records/attendance', component: AttendanceComponent },
  { path: 'records/shift-change', component: ShiftChangeComponent }
];

@NgModule({
  declarations: [
    RecordsComponent,  // Componente de Registros
    AttendanceComponent, // Componente de Asistencias
    ShiftChangeComponent // Componente de Cambio de Turno
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // Importamos RouterModule con las rutas definidas
  ],
  exports: [
    RecordsComponent,
    AttendanceComponent,
    ShiftChangeComponent // Exportamos el componente de Cambio de Turno
  ]
})
export class PayrollModule { }
