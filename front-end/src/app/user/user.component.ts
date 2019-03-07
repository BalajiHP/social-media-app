import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm : FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,Validators.required)
  })
  constructor(private _router:Router) { }

  ngOnInit() {
  }

  moveToRegister() {
    this._router.navigate(['/register']);
  }
  login() {
    if(!this.userForm.valid){
      console.log("not valid user"); return
    }
    console.log(JSON.stringify(this.userForm.value)); 
  }
}
