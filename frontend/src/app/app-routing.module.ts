import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuditsComponent, AuditReportComponent } from '@eng';
import { ListComponent } from './list/list.component';
import { ListsComponent } from './lists/lists.component';
import { PracticeComponent } from './practice/practice.component';
import { PracticesComponent } from './practices/practices.component';
import { RoleGuard } from './role.guard';
import { UrgentPracticesComponent } from './urgent-practices/urgent-practices.component';
import { UrgentWaybillsComponent } from './urgent-waybills/urgent-waybills.component';
import { WaybillsComponent } from './waybills/waybills.component';
import { AuditComponent } from './eng/audits/audit/audit.component';
import { UnauthorizedComponent } from './eng/unauthorized/unauthorized.component';
import { ErrorPageComponent } from './eng/error-page/error-page.component';
import { RequestsComponent } from './requests/requests.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent , canActivate: [RoleGuard]},
  { path: 'waybills', component: WaybillsComponent, canActivate: [RoleGuard] },
  { path: 'lists', component: ListsComponent, canActivate: [RoleGuard]  },
  { path: 'audits', component: AuditsComponent, canActivate: [RoleGuard]  },
  { path: 'audits/:id', component: AuditComponent, canActivate: [RoleGuard]  },
  { path: 'audit-report', component: AuditReportComponent, canActivate: [RoleGuard]  },
  { path: 'practices/urgent', component: UrgentPracticesComponent, canActivate: [RoleGuard]  },
  { path: 'practices', component: PracticesComponent, canActivate: [RoleGuard]  },
  { path: 'practices/:id', component: PracticeComponent, canActivate: [RoleGuard]  },
  { path: 'requests', component: RequestsComponent, canActivate: [RoleGuard]  },
  { path: 'lists/:id', component: ListComponent, canActivate: [RoleGuard]  },
  { path: 'waybills/urgent', component: UrgentWaybillsComponent, canActivate: [RoleGuard]  },
  { path: 'unauthorized', component: UnauthorizedComponent  },
  { path: 'server-error', component: ErrorPageComponent  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
