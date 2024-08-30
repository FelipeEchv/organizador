import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage {
  constructor(private router: Router) {}

  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }
}
