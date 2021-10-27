import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router:Router , private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      username:[''],
      email:[''],
      password:[''],
      mobile:['']
    })
  }

signUp(){
  this.http.post<any>("http://localhost:3000/signupUsers",this.signupForm.value)
  .subscribe(res=>{
    alert("Signup successful");
    this.signupForm.reset();
    this.router.navigate(['login']);
  },err=>{
    this.toastr.error("Not able to signup")
  })
}
}
