import { ContatoService } from 'src/app/services/contato.service';
import { Component} from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.scss'],
})
export class IncluirComponent {
  public contato: Contato = { nome: '', telefone:'' };
  public formEnviado = false;
  public telefoneVazio = false;
  public nomeVazio = false;

  constructor(private contatoService:ContatoService) {}


  enviar(): void {
    if (this.contato.nome && this.contato.telefone) {
      console.log('Nome:', this.contato.nome);
      console.log('Telefone:', this.contato.telefone);
      this.contatoService.createContato(this.contato).subscribe(resposta => {
        console.log('Contato adicionado com sucesso:', resposta);
        this.contato = new Contato();
      }, erro => {
        console.error('Erro ao adicionar contato:', erro);
      });
      this.formEnviado = true;
      setTimeout(() => {
        this.formEnviado = false;
      }, 3000);
    } else {
      // algum campo não foi preenchido, exiba uma mensagem de erro
      console.error('Por favor, preencha todos os campos do formulário.');
      this.campoVazio();
    }
  }

  campoVazio(){
    if(this.contato.nome == ''){
      this.nomeVazio = true;
    }else if(this.contato.telefone ==''){
      this.telefoneVazio = true;
    }
  }

}
  
