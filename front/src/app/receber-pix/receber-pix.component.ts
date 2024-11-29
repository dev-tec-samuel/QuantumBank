import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-receber-pix',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './receber-pix.component.html',
  styleUrl: './receber-pix.component.css'
})
export class ReceberPixComponent {
  /*pixKey: string = '';
  amount: number | null = null;
  qrCodeUrl: string | null = null;
  pixCode: string | null = null;

  generateQRCode(): void {
    if (!this.pixKey || this.amount === null) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    // Gerando o código Pix no formato adequado
    this.pixCode = this.generatePixCode(this.pixKey, this.amount);

    // Gerando o QR Code através do Google Chart API
    this.qrCodeUrl = `https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=${encodeURIComponent(this.pixCode)}`;
  }

  generatePixCode(key: string, value: number): string {
    const valueFormatted = value.toFixed(2);
    return `00020101021126330014BR.GOV.BCB.PIX0114${key}5204000053039865405${valueFormatted}5802BR5912Usuario6009Cidade62070503***6304`;
  }

  copyPixCode(): void {
    if (this.pixCode) {
      navigator.clipboard.writeText(this.pixCode).then(() => {
        alert('Código Pix copiado para a área de transferência!');
      });
    }
  }*/
    pixKey: string = ''; // Chave PIX
    amount: number | null = null; // Valor do PIX
    description: string = ''; // Descrição opcional
    qrCodeData: string | null = null; // Payload para o PIX

    /**
     * Gera o código PIX para copiar e colar.
     */
    generateQRCode() {
      if (!this.pixKey || !this.amount) {
        alert('Por favor, preencha a chave PIX e o valor.');
        return;
      }

      this.qrCodeData = this.generatePixPayload(this.pixKey, this.amount, this.description);
    }

    /**
 * Gera o payload PIX corrigido.
 */
private generatePixPayload(key: string, amount: number, description: string = ''): string {
  const formatField = (id: string, value: string): string =>
    `${id}${value.length.toString().padStart(2, '0')}${value}`;

  // IDs do padrão EMV
  const ID_PAYLOAD_FORMAT = '00'; // Payload Format Indicator
  const ID_MERCHANT_ACCOUNT_INFORMATION = '26'; // Merchant Account Information
  const ID_TRANSACTION_CURRENCY = '53'; // Transaction Currency
  const ID_TRANSACTION_AMOUNT = '54'; // Transaction Amount
  const ID_COUNTRY_CODE = '58'; // Country Code
  const ID_ADDITIONAL_DATA_FIELD_TEMPLATE = '62'; // Additional Data Field Template
  const ID_CRC16 = '63'; // CRC16

  // Informações da conta do comerciante (chave PIX)
  const merchantAccountInfo =
    formatField('00', 'BR.GOV.BCB.PIX') + // Dominio do sistema do BACEN
    formatField('01', key); // Chave PIX

  // Monta o payload
  let payload =
    formatField(ID_PAYLOAD_FORMAT, '01') + // Formato do payload
    formatField(ID_MERCHANT_ACCOUNT_INFORMATION, merchantAccountInfo) + // Informações do comerciante
    formatField(ID_TRANSACTION_CURRENCY, '986') + // Moeda (BRL)
    (amount > 0 ? formatField(ID_TRANSACTION_AMOUNT, amount.toFixed(2)) : '') + // Valor (opcional)
    formatField(ID_COUNTRY_CODE, 'BR') + // Código do país
    (description ? formatField(ID_ADDITIONAL_DATA_FIELD_TEMPLATE, formatField('05', description)) : ''); // Descrição (opcional)

  // Adiciona o CRC16 no final
  payload += formatField(ID_CRC16, this.calculateCRC16(payload));
  return payload;
}

/**
 * Calcula o CRC16.
 */
private calculateCRC16(payload: string): string {
  let crc = 0xffff;
  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      if ((crc & 0x8000) !== 0) {
        crc = (crc << 1) ^ 0x1021;
      } else {
        crc <<= 1;
      }
    }
  }
  return (crc & 0xffff).toString(16).toUpperCase().padStart(4, '0');
}
}
