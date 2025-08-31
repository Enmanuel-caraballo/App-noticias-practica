import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user.interface';
import { StorageService } from 'src/app/shared/services/storage';

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

  constructor(private readonly storageSrv: StorageService, private readonly router: Router) {
    this.initForm();

    
   }

  ngOnInit() {}

  public onLogin(){
    console.log(this.loginForm.value)

    const users = this.storageSrv.get<IUser[]>('users') || [];

    const user = users.find( u => u.email === this.email.value);

    if(!user) throw new Error('El usuario no existe')
      const isValidPassword = user.password === this.password.value;
      
      if(isValidPassword) return this.router.navigate(['/home']);

      throw new Error('La contraseña no coincide');
      
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
