import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  photoUrl!: string;
  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) { }


  ngOnInit(): void {
  }
  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged In Succesfully');
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.router.navigate(['/home']);
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.decodedToken = null;
    this.authService.currentUser != null;
    this.router.navigate(['/home']);
  }
}
