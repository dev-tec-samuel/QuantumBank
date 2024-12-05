package br.com.poo.poobank.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.poo.poobank.domain.Transacao;

@Repository
public interface TransacaoRepository extends JpaRepository<Transacao, Integer> {
    List<Transacao> findByCorrentistaId(Integer correntistaId); // Método para buscar pelo ID do correntista
}
