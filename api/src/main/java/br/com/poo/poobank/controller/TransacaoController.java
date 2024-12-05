package br.com.poo.poobank.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.poo.poobank.domain.Transacao;
import br.com.poo.poobank.repository.TransacaoRepository;

@RestController
@CrossOrigin
@RequestMapping("/transacao")
public class TransacaoController {
  @Autowired
  private TransacaoRepository repository;

  @GetMapping
  public ResponseEntity<List<Transacao>> searchTransactions() {
    List<Transacao> transacaoList = repository.findAll();
    return ResponseEntity.ok().body(transacaoList);
  }

  @GetMapping("/id_correntista/{idCorrentista}")
  public ResponseEntity<List<Transacao>> searchTransactionsByCorrentista(
      @PathVariable("idCorrentista") Integer idCorrentista) {
    List<Transacao> transacaoList = repository.findByCorrentistaId(idCorrentista);

    if (transacaoList == null || transacaoList.isEmpty()) {
      return ResponseEntity.noContent().build();
    }

    return ResponseEntity.ok(transacaoList);
  }
}
