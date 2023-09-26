import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { EducationComponent } from './education/education.component';
import { CompetitionComponent } from './competition/competition.component';

const routes: Routes = [
  {
    path: "competition",
    component: CompetitionComponent
  },
  {
    path: "education",
    component: EducationComponent
  },
  {
    path: "",
    component: HomeComponent
  },
  { path: 'learning', loadChildren: () => import('./learning/learning.module').then(m => m.LearningModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
