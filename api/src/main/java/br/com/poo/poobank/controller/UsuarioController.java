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

import br.com.poo.poobank.domain.Usuario;
import br.com.poo.poobank.repository.UsuarioRepository;

@RestController
@CrossOrigin
@RequestMapping("/usuario")
public class UsuarioController {

  @Autowired
  private UsuarioRepository repository;

  @GetMapping
  public ResponseEntity<List<Usuario>> searchUsers() {
    List<Usuario> userList = repository.findAll();
    return ResponseEntity.ok().body(userList); //Função padrão que faz um select * from table
    // return repository.buscarUsuariosSemSenha();
  }

  @GetMapping("/id/{id}")
  public Usuario searchUserById(@PathVariable("id") Integer id) {
    return repository.findById(id).get();
  }

  
  @GetMapping("/login/{login}")
  public Usuario searchUserByLogin(@PathVariable("login") String login) {
    return repository.searchUserByLogin(login);
  }

  @PostMapping
  public ResponseEntity<Usuario> insertUser(@RequestBody Usuario user)
  {
    Usuario newUser = repository.save(user);
    return ResponseEntity.status(HttpStatus.CREATED).body(newUser);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity deleteUser(@PathVariable("id") Integer id)
  {
    repository.deleteById(id);
    return ResponseEntity.ok().build();
  }
  
}
