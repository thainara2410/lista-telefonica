package br.com.listatelefonica.listatelefonica.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.DeleteMapping;
import java.util.Optional;
import org.springframework.http.ResponseEntity;
import br.com.listatelefonica.listatelefonica.model.Contato;
import br.com.listatelefonica.listatelefonica.repository.Repositor;

@RestController
@RequestMapping("/api/listatelefonica")
public class Controller {

    @Autowired
    private Repositor action;

    @CrossOrigin(origins = "*")
    @PostMapping("/contatos")
    public Contato cadastrar(@RequestBody Contato c){
        return action.save(c);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/contatos")
    public Iterable<Contato> select(){
        return action.findAll();
    }

    @CrossOrigin(origins = "*")
    @PutMapping("/contatos/{id}")
    public Contato editar(@RequestBody Contato contato){
        return action.save(contato);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/contatos/{id}")
    public ResponseEntity<Contato> getContatoPorId(@PathVariable Long id) {
        Optional<Contato> contatoOptional = action.findById(id);
        if (contatoOptional.isPresent()) {
            Contato contato = contatoOptional.get();
            return ResponseEntity.ok(contato);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @CrossOrigin(origins = "*")
    @DeleteMapping("/contatos/{id}")
    public ResponseEntity<Void> remove(@PathVariable Long id) {
        Optional<Contato> contatoOptional = action.findById(id);
        if (contatoOptional.isPresent()) {
            Contato contato = contatoOptional.get();
            action.delete(contato);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    
}
