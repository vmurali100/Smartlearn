import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { DefaultLayoutComponent } from './container/default-layout/default-layout.component';
import { P404Component } from './views/p404/p404.component';
import { ComingSoonComponent } from './views/coming-soon/coming-soon.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard/dashboard.component';
import { GenericCreateRequestComponent } from './views/generic/generic-create-request/generic-create-request.component';
import { GenericReportComponent } from './views/generic/generic-report/generic-report.component';
import { CoursedetailsComponent } from './views/course/coursedetails/coursedetails.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'admin',
        loadChildren: () => import('../app/views/admin/admin.module')
          .then(m => m.AdminModule)
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'generic-create-request',
        component: GenericCreateRequestComponent,
        data: {
          title: 'Generic Page'
        }
      },
      {
        path: 'generic-reports',
        component: GenericReportComponent,
        data: {
          title: 'Generic Reports'
        }
      },
      {
        path: 'p404',
        component: P404Component,
        data: {
          title: 'P404'
        }
      },
      {
        path: 'coming-soon',
        component: ComingSoonComponent,
        data: {
          title: 'Coming Soon'
        },
      },
        { path:'dashboard/:course', component:CoursedetailsComponent},
     
        { path: 'quiz', component: QuizComponent },
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Login'
        }
      }
    ]
  }
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
  useHash: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

