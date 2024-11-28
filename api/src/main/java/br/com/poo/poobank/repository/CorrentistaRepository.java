package br.com.poo.poobank.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.poo.poobank.domain.Correntista;

@Repository
public interface CorrentistaRepository extends JpaRepository<Correntista, Integer>{
  Correntista searchCorrentistaByCpf(String cpf);
}
