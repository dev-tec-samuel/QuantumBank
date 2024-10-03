import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { Correntista } from '../../model/correntitsta';
import { CorrentistaService } from '../correntista.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  public dadosCadastrais: Correntista = new Correntista();
  private generatedIDs: Set<number> = new Set();

  constructor(
    private router: Router,
    private service: CorrentistaService
  ) {
    this.dadosCadastrais.id = this.generateUniqueID();
  }

  // Função para gerar um ID único
  generateUniqueID(): number {
    let id = Math.floor(Math.random() * 1000000);
    while (this.generatedIDs.has(id)) {
      id = Math.floor(Math.random() * 1000000);
    }
    this.generatedIDs.add(id);
    return id;
  }

  // Validação dos campos
  validarCampos(): boolean {
    if (!this.dadosCadastrais.nome || !this.dadosCadastrais.email || !this.dadosCadastrais.cpf || !this.dadosCadastrais.endereco || !this.dadosCadastrais.senha) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return false;
    }
    return true;
  }

  // Função para validar e cadastrar o usuário
  cadastrarUser(): void {
    if (this.validarCampos()) {
      this.service.cadastrar(this.dadosCadastrais).subscribe(resposta => {
        alert("Cadastrado com sucesso!");
        this.router.navigate(['/']);
      }, erro => {
        alert("Erro ao cadastrar: " + erro.message);
      });
    }
  }
}
