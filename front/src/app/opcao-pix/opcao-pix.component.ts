import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CorrentistaService } from '../correntista.service';

@Component({
  selector: 'app-opcao-pix',
  standalone: true,
  imports: [],
  templateUrl: './opcao-pix.component.html',
  styleUrl: './opcao-pix.component.css'
})
export class OpcaoPixComponent {
  constructor(
    private router: Router,
    private correntistaService: CorrentistaService
  ) {}

  enviarPix() {
    this.router.navigate(['/enviar-pix']);
  }

  receberPix() {
    this.router.navigate(['/receber-pix']);
  }
}
