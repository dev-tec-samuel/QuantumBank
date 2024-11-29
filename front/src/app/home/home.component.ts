import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  constructor(private router:Router){}

  verExtrato() {
    this.router.navigate(['/extrato'])
    //this.router.navigate(['/prova-poo'])
  }

  fazerPix() {
    this.router.navigate(['/opcao-pix'])
    //this.router.navigate(['/prova-poo'])
  }

}
