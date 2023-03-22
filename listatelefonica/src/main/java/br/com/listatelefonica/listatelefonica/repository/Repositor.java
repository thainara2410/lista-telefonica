package br.com.listatelefonica.listatelefonica.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import br.com.listatelefonica.listatelefonica.model.Contato;

@Repository
public interface Repositor extends CrudRepository<Contato, Long>{

}