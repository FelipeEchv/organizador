import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/bienvenida']);
  }
}
