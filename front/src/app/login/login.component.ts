import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CorrentistaService } from '../correntista.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule, ButtonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  cpf: string = '';
  senha: string = '';

  constructor(
    private router: Router,
    private correntistaService: CorrentistaService
  ) {}

  // Método para realizar o login
  logar() {
    if (!this.cpf || !this.senha) {
      alert('Por favor, insira CPF e senha válidos');
      return;
    }

    this.correntistaService.listarCorrentistas().subscribe(correntistas => {
      const correntista = correntistas.find(c => String(c.cpf) === String(this.cpf));

      if (!correntista) {
        alert('CPF não encontrado');
        return;
      }

      if (correntista.senha === this.senha) {
        this.router.navigate(['/home']);
      } else {
        alert('Senha incorreta');
      }

      this.correntistaService.correntistaLogado = Number(correntista.id);
    }, erro => {
      alert('Erro ao tentar fazer login: ' + erro.message);
    });
  }

  // Método para redirecionar ao cadastro
  cadastrar() {
    this.router.navigate(['/cadastro']);
  }
}
