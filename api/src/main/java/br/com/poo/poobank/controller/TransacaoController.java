package br.com.poo.poobank.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.poo.poobank.domain.Transacao;
import br.com.poo.poobank.repository.TransacaoRepository;

@RestController
@RequestMapping("/transacao")
public class TransacaoController {
  @Autowired
  private TransacaoRepository repository;

  @GetMapping
  public ResponseEntity<List<Transacao>> searchTransactions() {
    List<Transacao> transacaoList = repository.findAll();
    return ResponseEntity.ok().body(transacaoList);
  }
}
