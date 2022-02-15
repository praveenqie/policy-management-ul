import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoilicyService } from '../poilicy.service';
import { RegisterRequest } from '../register-request';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formbuilder: FormBuilder,private _service:PoilicyService,private _router:Router) { }
  registerRequest:RegisterRequest  = new RegisterRequest()

  ngOnInit(): void {
  }
  inputData: any ;
  register = this.formbuilder.group({
    firstName: [],
    lastName: [],
    dob: [],
    address: [],
    phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    password: ['', [Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]],
    confirmPassword: ['', [Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]]
  })

  registration:any;
  error:any;
  isSuccess:boolean=false;
  custId:Number=0;
  registerSubmit() {
    console.log("Calling Register API")
    this.registerRequest.firstName=this.register.controls['firstName'].value,
    this.registerRequest.lastName= this.register.controls['lastName'].value,
    this.registerRequest.dob=this.register.controls['dob'].value,
    this.registerRequest.address=this.register.controls['address'].value,
    this.registerRequest.contactNumber=this.register.controls['phone'].value,
    this.registerRequest.email= this.register.controls['email'].value,
    this.registerRequest.password= this.register.controls['password'].value   
    this.registerRequest.password= this.register.controls['password'].value   
    this._service.register(this.registerRequest).subscribe(
      (response:any)=>{
        console.log(response);
        this.registration=response;
        this.isSuccess=true
        this.custId=response.custId;
        console.log(`success ${response}`)
      },err=>{
        console.log(`Error:${err}`);
        this.error=err

      }
    )}
navigateLogin()
{
this._router.navigate(['login']);
}}
