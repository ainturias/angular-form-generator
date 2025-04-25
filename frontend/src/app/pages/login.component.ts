import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.form.invalid) {
      this.errorMessage = 'Por favor completa todos los campos.';
      return;
    }

    const credentials = this.form.value;

    this.http.post('http://localhost:3000/auth/login', credentials).subscribe({
      next: (res: any) => {
        this.successMessage = 'Inicio de sesión exitoso.';
        this.errorMessage = '';
        if (res.access_token) {
          localStorage.setItem('token', res.access_token);
        }
        // Redirigir al usuario a la página de dashboard o donde desees
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.errorMessage = 'Usuario o contraseña incorrectos.';
        this.successMessage = '';
      }
    });
  }
}
