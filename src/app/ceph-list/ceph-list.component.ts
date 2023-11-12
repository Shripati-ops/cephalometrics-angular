import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CephelometricsService } from '../services/cephelometrics.service';

@Component({
  selector: 'app-ceph-list',
  templateUrl: './ceph-list.component.html',
  styleUrls: ['./ceph-list.component.scss']
})
export class CephListComponent implements OnInit {
    listItem:any = [];
    constructor(public cephService : CephelometricsService, public router: Router, public activeRoute : ActivatedRoute) {

    }
    ngOnInit(): void {
        this.cephService.getAllXRays().subscribe((result:any)=> {
          result.all_xrays.forEach((element:any) => {
              this.listItem.push(element);
          });
        })
    }
    
    openCephelometricStudy(id:string){
        this.router.navigate(['cephalometrics/open',btoa(id)])
    }

    addNew(){
      this.router.navigate(['cephalometrics/addNew']);
    }
}
