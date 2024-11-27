package br.com.poo.poobank.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.poo.poobank.domain.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer>{
  @Query("select user from Usuario user where user.senha is null")
  List<Usuario> buscarUsuariosSemSenha();

  Usuario searchUserByLogin(String login);
}
