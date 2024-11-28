package br.com.poo.poobank.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.poo.poobank.domain.Correntista;
import br.com.poo.poobank.repository.CorrentistaRepository;

@RestController
@CrossOrigin
@RequestMapping("/correntista")
public class CorrentistaController {

  @Autowired
  private CorrentistaRepository repository;

  @GetMapping
  public ResponseEntity<List<Correntista>> searchCorrentistas() {
    List<Correntista> correntistaList = repository.findAll();
    return ResponseEntity.ok().body(correntistaList); //Função padrão que faz um select * from table
    // return repository.buscarUsuariosSemSenha();
  }

  @GetMapping("/id/{id}")
  public Correntista searchCorrentistaById(@PathVariable("id") Integer id) {
    return repository.findById(id).get();
  }

  @GetMapping("/cpf/{cpf}")
  public Correntista searchCorrentistaByLogin(@PathVariable("cpf") String cpf) {
    return repository.searchCorrentistaByCpf(cpf);
  }

  @PostMapping("/insertCorrentista")
  public ResponseEntity<Correntista> insertCorrentista(@RequestBody Correntista correntista)
  {
    Correntista newCorrentista = repository.save(correntista);
    return ResponseEntity.status(HttpStatus.CREATED).body(newCorrentista);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity deleteCorrentista(@PathVariable("id") Integer id)
  {
    repository.deleteById(id);
    return ResponseEntity.ok().build();
  }
  
}
