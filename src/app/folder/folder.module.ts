import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { ConsultarComponent } from '../components/consultar/consultar.component';
import { IncluirComponent } from '../components/incluir/incluir.component';
import { EditarComponent } from '../components/editar/editar.component';
import { FolderPage } from './folder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule, 
  ],
  declarations: [FolderPage, IncluirComponent, ConsultarComponent, EditarComponent]
})
export class FolderPageModule {}
