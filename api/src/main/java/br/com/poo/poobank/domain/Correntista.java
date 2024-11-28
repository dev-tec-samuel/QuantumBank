package br.com.poo.poobank.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Correntista {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String nome;
  private String email;
  private String cpf;
  private String endereco;
  private String senha;
  private String chave;

  public Integer getId() {
    return id;
  }
  public void setId(Integer id) {
    this.id = id;
  }
  public String getNome() {
    return nome;
  }
  public void setNome(String nome) {
    this.nome = nome;
  }
  public String getEmail() {
    return email;
  }
  public void setEmail(String email) {
    this.email = email;
  }
  public String getCpf() {
    return cpf;
  }
  public void setCpf(String cpf) {
    this.cpf = cpf;
  }
  public String getEndereco() {
    return endereco;
  }
  public void setEndereco(String endereco) {
    this.endereco = endereco;
  }
  public String getSenha() {
    return senha;
  }
  public void setSenha(String senha) {
    this.senha = senha;
  }
  public String getChave() {
    return chave;
  }
  public void setChave(String chave) {
    this.chave = chave;
  }
}
