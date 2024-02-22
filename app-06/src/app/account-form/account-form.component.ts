import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessagingService } from '../services/messaging.service';
import { Observable } from 'rxjs';
import { Account } from '../models/account';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent {

  accountForm : FormGroup;

  id:FormControl;
  fullName:FormControl;
  mailId:FormControl;
  mobileNumber:FormControl;

  isEditing!:boolean;

  constructor(private as:AccountService,private router:Router,private activatedRoute:ActivatedRoute,private msgService:MessagingService){

    this.id = new FormControl(null);
    this.fullName = new FormControl("",[Validators.required,Validators.minLength(4),Validators.maxLength(25)]);
    this.mobileNumber = new FormControl("",[Validators.required,Validators.pattern("[1-9][0-9]{9}")]);
    this.mailId = new FormControl("",[Validators.required,Validators.email]);

    this.accountForm = new FormGroup({
      id:this.id,
      fullName:this.fullName,
      mailId:this.mailId,
      mobileNumber:this.mobileNumber
    });
  }

  ngOnInit(){
    let aid = this.activatedRoute.snapshot.params["id"];

    if(aid){
      this.isEditing=true;
      this.as.getById(Number(aid)).subscribe({
        next: data => this.accountForm.reset(data),
        error: err => { console.log(err); this.msgService.sendMsg({ type: "error", msg: "Unable to fetech data! Please try later!" }) }
      });
    }
  }

  formSubmitted(){
    let ob:Observable<Account> = this.isEditing ? this.as.update(this.accountForm.value) : this.as.add(this.accountForm.value);
        
    ob.subscribe({
      next: acc => {
        this.msgService.sendMsg({type:"info",msg:`Account#${acc.id} is ${this.isEditing?"updated":"added"}!`});
        this.router.navigateByUrl("/");  
      },
      error: err => { 
        console.log(err); 
        this.msgService.sendMsg({ type: "error", msg: "Unable to save data! Please try later!" }) 
      }
    })
  }
}
