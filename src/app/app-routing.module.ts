import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditCephelometricsComponent } from './add-edit-cephelometrics/add-edit-cephelometrics.component';
import { CephListComponent } from './ceph-list/ceph-list.component';
import { CephelometricsComponent } from './cephelometrics/cephelometrics.component';

const routes: Routes = [
    {
      path : "cephalometrics/addNew",
      component : AddEditCephelometricsComponent,
      data: {title : "Cephelometrics Add page"}
    },
    {
      path : "cephalometrics/open",
      component : CephelometricsComponent,
      data : {title: "Cephelometrics Open"}
    },
    {
      path : "cephalometrics",
      component : CephListComponent,
      data : {title : "Cephelometrics List"}
    },
    {
      path : "cephalometrics/open/:id",
      component : CephelometricsComponent,
      data : {title : "Cephelometrics open With ID"}
    }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [ { provide: LocationStrategy, useClass: PathLocationStrategy }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
