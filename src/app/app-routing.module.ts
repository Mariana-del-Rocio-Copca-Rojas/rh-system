import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home/home.component';
import { RecordsComponent } from './features/payroll/records/records.component';
import { AttendanceComponent } from './features/payroll/records/attendance/attendance.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Página principal
  { path: 'payroll/records', component: RecordsComponent }, // Página de Registros
  { path: 'payroll/records/attendance', component: AttendanceComponent }, // Página de Asistencias
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
