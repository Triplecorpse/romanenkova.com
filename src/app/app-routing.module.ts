import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ResolveIndexService} from './pages/_index/services/resolve-index.service';
import {IndexComponent} from './pages/_index/components/index/index.component';
import {LanguageGuardService} from './language-guard.service';
import {ResolveScheduleService} from './resolve-schedule.service';
import {ResolveServicesService} from './pages/_index/services/resolve-services.service';

const routes: Routes = [
  {
    path: ':lang',
    loadChildren: './pages/_index/index.module#IndexModule',
    canActivate: [LanguageGuardService],
    resolve: {headerData: ResolveIndexService, schedule: ResolveScheduleService, services: ResolveServicesService},
    component: IndexComponent,
    outlet: 'primary'
  }, {
    path: '404',
    loadChildren: './pages/_page404/page404.module#Page404Module',
    outlet: 'primary'
  },
  {path: '', component: IndexComponent, outlet: 'primary', canActivate: [LanguageGuardService]},
  {path: '**', redirectTo: '404', pathMatch: 'full', outlet: 'primary'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
