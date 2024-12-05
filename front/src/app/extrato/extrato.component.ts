import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableModule } from 'primeng/table';
import { Transacao } from '../../model/transacao';
import { CorrentistaService } from '../correntista.service';
import { HomeComponent } from '../home/home.component';
import { TransacaoService } from '../transacao.service';

@Component({
  selector: 'app-extrato',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HomeComponent, TableModule],
  templateUrl: './extrato.component.html',
  styleUrl: './extrato.component.css'
})
export class ExtratoComponent implements OnInit{
  extrato: Transacao[] = [];
  texto: string = "EXTRATO DO CLIENTE";

  constructor(
    private service: TransacaoService,
    private correntista: CorrentistaService
  ) {
  }

  ngOnInit(): void{
    this.service.buscarExtrato(this.correntista.correntistaLogado)
    .subscribe(itens => {
      this.extrato = itens;
    })
  }
}
