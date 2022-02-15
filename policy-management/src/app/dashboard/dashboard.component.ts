import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoilicyService } from '../poilicy.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _service: PoilicyService, private _router: Router) { }

custId:any;
  ngOnInit(): void {
    this.getAllPolicies();
    this.custId=sessionStorage.getItem("custId")
    if(this.custId==null){
      this._router.navigate(['login']);
    }
    this.getUserPolicy()
  }

  policyAllPolicies: undefined;
  userPolicy:any
  error: any;
  getAllPolicies() {
    this._service.getAllPolicies().subscribe((response: any) => {
      this.policyAllPolicies = response;

      console.log("Hey here is response"+this.policyAllPolicies)
    }, err => {
      this.error = err;
    })
  }
user:String=''
  getUserPolicy(){
    this._service.getPolicyDetails(  this.custId).subscribe((res:any)=>{
      this.userPolicy=res;
      this.user=res.policyName;
      console.log( res)
    },err=>{
      this.error = err;
    })
  }
  navigateLogin(){
    this._router.navigate(['login']);
    sessionStorage.clear();
  }

}
