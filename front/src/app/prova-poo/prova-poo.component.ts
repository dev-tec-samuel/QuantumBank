import { CommonModule, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProvaPooService } from '../prova-poo.service';

@Component({
  selector: 'app-prova-poo',
  standalone: true,
  imports: [CommonModule, DecimalPipe, ReactiveFormsModule],
  templateUrl: './prova-poo.component.html',
  styleUrl: './prova-poo.component.css'
})
export class ProvaPooComponent {
  provaPooForm: FormGroup;
  resultadoRendimento: number | null = null;

  constructor(private fb: FormBuilder, private provaPooService: ProvaPooService) {
    this.provaPooForm = this.fb.group({
      aporteMensal: ['', [Validators.required, Validators.min(1)]],
      dataResgate: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.provaPooForm.valid) {
      const aporteMensal = this.provaPooForm.value.aporteMensal;
      const dataResgate = new Date(this.provaPooForm.value.dataResgate);

      const meses = this.provaPooService.calcularMeses(dataResgate);
      this.resultadoRendimento = this.provaPooService.calcularRendimento(aporteMensal, meses);
    }
  }
}
