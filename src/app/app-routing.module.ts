import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ManageroleComponent } from "./managerole/managerole.component";
import { UsersComponent } from './users/users.component';
import { SchoolsComponent } from './schools/schools.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path: 'login', pathMatch: 'full', component: LoginComponent},
  {path: 'manage-roles', pathMatch: 'full', component: ManageroleComponent},
  {path: 'users', pathMatch: 'full', component: UsersComponent},
  {path: 'schools', pathMatch: 'full', component: SchoolsComponent},
  {path: 'teacher', pathMatch: 'full', component: TeacherComponent},
  {path: 'student', pathMatch: 'full', component: StudentComponent},
  {path: '', pathMatch: 'full', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
