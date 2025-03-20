import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home/home.component';
import { RecordsComponent } from './features/payroll/records/records.component';
import { AttendanceComponent } from './features/payroll/records/attendance/attendance.component';
import { ShiftChangeComponent } from './features/payroll/records/shift-change/shift-change.component'; // Importamos el componente

const routes: Routes = [
  { path: '', component: HomeComponent }, // Página principal
  { path: 'payroll/records', component: RecordsComponent }, // Página de Registros
  { path: 'payroll/records/attendance', component: AttendanceComponent }, // Página de Asistencias
  { path: 'payroll/records/shift-change', component: ShiftChangeComponent } // Agregamos la ruta de Cambio de Turno
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
