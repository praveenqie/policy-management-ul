import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoilicyService } from '../poilicy.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _builder:FormBuilder,private _service:PoilicyService,private _router:Router) { }

  ngOnInit(): void {
  }
  customer = this._builder.group({
    custId : [''],
    password :['']
  })
  
  loginResponse : any = undefined
  err : any  = undefined
  loggedIn :boolean = false
  loginSubmit() : void{
    let cust = this.customer.controls['custId'].value;
    let pass = this.customer.controls['password'].value;
    let customerBody = {
      "custId" : cust,
      "password" : pass
    }
    console.log(cust)
    this._service.login(customerBody).subscribe(response => {
      let doc :undefined;
      this.loginResponse = response;
      console.log(response);
      sessionStorage.setItem("custId",customerBody.custId)
      sessionStorage.setItem("isLoggedIn",`${this.loggedIn}`)
      this._router.navigate(["dashboard"])

      }, err => {
        this.err = err;
        console.log(this.err.error.message);
        this._router.navigate(["login"])
        this.customer.reset()
      })
    }
}
