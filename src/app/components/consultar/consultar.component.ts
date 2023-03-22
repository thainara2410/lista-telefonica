import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { Router } from '@angular/router';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.scss'],
})
export class ConsultarComponent  implements OnInit {
  contatos!:Contato[]

  constructor(private contatoService: ContatoService, private router:Router) { }

  ngOnInit(): void {
    this.exibirContatos();
    this.atualizarContatos();
  }

  exibirContatos(): void {
    this.contatoService.getContatos().subscribe(contatos => {
      this.contatos = contatos;
    }, erro => {
      console.error('Erro ao buscar contatos:', erro);
    });
  }
  
  editarContato(id: any) {
    this.router.navigate(['folder/Consultar/Editar', id]);
    console.log(id);
  }

  excluirContato(id: any): void {
    this.contatoService.deleteContato(id).subscribe({
      next: () => {
        console.log('Contato excluído com sucesso!');
        // Atualizar a lista de contatos na interface (opcional)
        this.atualizarContatos();
      },
      error: error => {
        console.log('Erro ao excluir contato:', error);
      }
    });
  }
  
  // Função para atualizar a lista de contatos
  atualizarContatos(): void {
    this.contatoService.getContatos().subscribe({
      next: data => {
        this.contatos = data;
      },
      error: error => {
        console.log('Erro ao recuperar contatos:', error);
      }
    });
  }
}
