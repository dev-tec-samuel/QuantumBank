import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Transacao } from '../../model/transacao';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-extrato',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HomeComponent],
  templateUrl: './extrato.component.html',
  styleUrl: './extrato.component.css'
})
export class ExtratoComponent implements OnInit{
  extrato: Transacao[] = [];

  ngOnInit(): void{
    let transaction: Transacao = {
      data: new Date,
      descricao: 'Pix 001',
      valor: 10.00,
      operacao: 'C',
      numero: 1
    };
    this.extrato.push(transaction);
  }
}
