package br.com.poo.poobank.domain;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Transacao {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String descricao;
  private LocalDate data;
  private BigDecimal valor;
  private String operacao;

  @ManyToOne
  @JoinColumn(name = "id_correntista", referencedColumnName = "id")
  private Correntista correntista;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getDescricao() {
    return descricao;
  }

  public void setDescricao(String descricao) {
    this.descricao = descricao;
  }

  public LocalDate getData() {
    return data;
  }

  public void setData(LocalDate data) {
    this.data = data;
  }

  public BigDecimal getValor() {
    return valor;
  }

  public void setValor(BigDecimal valor) {
    this.valor = valor;
  }

  public String getOperacao() {
    return operacao;
  }

  public void setOperacao(String operacao) {
    this.operacao = operacao;
  }

  public Correntista getCorrentista() {
    return correntista;
  }

  public void setCorrentista(Correntista correntista) {
    this.correntista = correntista;
  }
}
