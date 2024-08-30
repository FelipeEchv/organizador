import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({
    username: ['Felipe'],
    password: ['Felipe2024---', [Validators.required, Validators.pattern(/^(?=.*\d{4})(?=.*[a-zA-Z]{3})(?=.*[A-Z]).{8,}$/)]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    // La inicialización ya se realizó en la declaración
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.router.navigate(['/bienvenida']);
    }
  }

  recoverPassword() {
    // Implementar la lógica de recuperación de contraseña
  }
}
