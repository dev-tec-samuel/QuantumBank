export interface Transacao {
  id: number;
  descricao: string;
  data: Date;
  valor: number;
  operacao: string;
  id_correntista: string;
}
