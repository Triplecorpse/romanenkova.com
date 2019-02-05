import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './pages/_index/components/index/index.component';
import {PageDataGuardService} from "./page-data-guard.service";

const routes: Routes = [
  {
    path: ':lang',
    loadChildren: './pages/_index/index.module#IndexModule',
    canActivate: [PageDataGuardService],
    data: {pageidv2: 'index'},
    component: IndexComponent,
    outlet: 'primary'
  }, {
    path: '404',
    loadChildren: './pages/_page404/page404.module#Page404Module',
    outlet: 'primary'
  },
  {path: '', component: IndexComponent, outlet: 'primary', data: {pageidv2: 'index'}, canActivate: [PageDataGuardService]},
  {path: '**', redirectTo: '404', pathMatch: 'full', outlet: 'primary'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
