import { Component } from '@angular/core';
import { LoginRequet } from '../models/loginRequest.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  model: LoginRequet;

  constructor(private authService: AuthService,
    private cookieService: CookieService,
    private router: Router) {

    this.model = {
      username: '',
      password: ''
    };
  }

  onFormSubmit()
  {
    this.authService.login(this.model)
    .subscribe({
     next:(response)=>
     {
      // Set Auth Cookie
      this.cookieService.set('Authorization', `Bearer ${response.token}`,
      undefined, '/', undefined, true, 'Strict');
   
       // Set User
       this.authService.setUser({
        username: response.username,
        userType: response.userType.toString()
      });


       // Redirect back to Home
       this.router.navigateByUrl('/');

     }
    })
      
  }


}
