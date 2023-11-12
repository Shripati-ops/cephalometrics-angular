import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEditCephelometricsComponent } from './add-edit-cephelometrics/add-edit-cephelometrics.component';
import { CephelometricsComponent } from './cephelometrics/cephelometrics.component';
import { CephLibComponent } from './ceph-lib/ceph-lib.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NgxPanZoomModule } from 'ngx-panzoom';
import { CephListComponent } from './ceph-list/ceph-list.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { PathLocationStrategy, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { IdNameModifierPipe } from './pipes/id-name-modifier.pipe';
@NgModule({
  declarations: [
    AppComponent,
    AddEditCephelometricsComponent,
    CephelometricsComponent,
    CephLibComponent,
    CephListComponent,
    IdNameModifierPipe
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPanZoomModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [ { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
