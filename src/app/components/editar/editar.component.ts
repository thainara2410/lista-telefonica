import { Component, OnInit} from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { ContatoService } from 'src/app/services/contato.service';

import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent  implements OnInit {
  public contato: Contato = { nome: '', telefone:'' };
  public formEnviado = false;
  public nomeVazio = false;
  public telefoneVazio = false;

  constructor(
    private route: ActivatedRoute,
    private navController: NavController,
    private contatoService: ContatoService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.contatoService.getContato(id).subscribe({
      next: (response: Contato) => {
        this.contato = response;
        console.log(this.contato);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  enviar() {
    if (this.contato.nome && this.contato.telefone) {
      this.contatoService.updateContato(this.contato).subscribe({
        next: () => {
          this.navController.navigateBack('folder/Consultar');
        },
        error: (error) => {
          console.log(error);
        }
      });
      this.formEnviado = true;
      setTimeout(() => {
        this.formEnviado = false;
      }, 3000);
    } else {
      console.log("Algum campo está vazio!");
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
