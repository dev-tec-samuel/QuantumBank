package br.com.poo.poobank.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
@RequestMapping("/usuario")
public class UsuarioController {

  @Autowired
  private UsuarioRepository repository;

  @GetMapping
  public List<Usuario> searchUsers() {
    return repository.findAll(); //Função padrão que faz um select * from table
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
  public String inserirUser(@RequestBody Usuario usuario)
  {
    repository.save(usuario);
    return "ok";
  }

  @DeleteMapping("/{id}")
  public String deleteUser(@PathVariable("id") Integer id)
  {
    repository.deleteById(id);
    return "ok";
  }
  
}
