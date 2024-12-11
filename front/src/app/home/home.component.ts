import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CorrentistaService } from '../correntista.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  constructor(
    private router: Router,
    private correntista: CorrentistaService
  ){}

  ngOnInit(): void{
    if (this.correntista.correntistaLogado !== 0) {
      this.router.navigate(['/login']);
    }
  }

  verExtrato() {
    this.router.navigate(['/extrato'])
  }

  fazerPix() {
    this.router.navigate(['/opcao-pix'])
  }

  investir() {
    this.router.navigate(['/investir'])
  }

}
