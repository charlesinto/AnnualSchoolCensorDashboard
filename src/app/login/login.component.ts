import { Component, OnInit, Inject } from '@angular/core';
import { SWEET_ALERT_TOKEN } from '../services/swal-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  usernameIsValid: boolean;
  passwordIsValid: boolean;
  constructor(@Inject(SWEET_ALERT_TOKEN) private swal: any,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const username = new FormControl('', Validators.required);
    const password = new FormControl('', Validators.required);
    this.loginForm = new FormGroup({
      username, password
    });
  }
  isFieldInvalid(loginForm, field){
    switch(field){
      case 'username':
        if( loginForm.controls[field].invalid && (loginForm.controls[field].touched)) {
          this.usernameIsValid = false;
          return ['is-invalid'];
        }
        if( loginForm.controls[field].valid && (loginForm.controls[field].touched)) {
          this.usernameIsValid = true;
          return ['is-valid'];
        }
        this.usernameIsValid = true;
        break;
      case 'password':
        if( loginForm.controls[field].invalid && (loginForm.controls[field].touched)) {
          this.passwordIsValid = false;
          return ['is-invalid'];
        }
        if( loginForm.controls[field].valid && (loginForm.controls[field].touched)) {
          this.passwordIsValid = true;
          return ['is-valid'];
        }
        this.passwordIsValid = true;
        break;
      default:
        break;
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });
  }

  login(form){
    if(form.valid){
      return this.router.navigate(['/']);
    }
    this.validateAllFormFields(form);
  }

}
