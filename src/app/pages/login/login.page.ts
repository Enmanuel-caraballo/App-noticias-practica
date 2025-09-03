import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CONSTANTS } from 'src/app/constants/constants';
import { IUser } from 'src/app/interfaces/user.interface';
import { StorageService } from 'src/app/shared/services/storage';
import { Toast } from 'src/app/shared/services/toast/toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  public email!: FormControl;
  public password!: FormControl;
  public loginForm!: FormGroup;

  constructor(private readonly storageSrv: StorageService,
     private readonly router: Router,
    private readonly toastSrv: Toast) {
    this.initForm();

    
   }

  ngOnInit() {}

  public async onLogin(){
    console.log(this.loginForm.value)

    const users = this.storageSrv.get<IUser[]>(CONSTANTS.USER) || [];

    const user = users.find( u => u.email === this.email.value);

    if(!user) {
      await this.toastSrv.present({
        mesage: "User dont exist",
        color: "danger",
        position: "bottom",
      });
      return;
    }
      const isValidPassword = user.password === this.password.value;
      
      if(isValidPassword) {
        this.storageSrv.set( CONSTANTS.AUTH , {
          uuid: user.uuid,
        });
        return this.router.navigate(['/home']);
      }

     await this.toastSrv.present({
      mesage: "Password missmatch",
      color: "danger",
      position: 'bottom',
     });
     return;
      
  }

    private initForm(){
      this.email = new FormControl('', [Validators.required, Validators.email])
      this.password = new FormControl('', 
        [Validators.required,
         Validators.minLength(3),
       //Validators.maxLength(15),
          ]);

          this.loginForm = new FormGroup({
            email: this.email,
            password: this.password,
          });
    }
 

}
