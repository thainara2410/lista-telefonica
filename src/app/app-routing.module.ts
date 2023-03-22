import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import{ IncluirComponent } from './components/incluir/incluir.component';
import{ ConsultarComponent } from './components/consultar/consultar.component';
import { EditarComponent } from './components/editar/editar.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/folder/Incluir',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path : 'folder/Incluir',
    component: IncluirComponent
  },
  {
    path : 'folder/Consultar',
    component: ConsultarComponent
  },
  {
    path : 'folder/Consultar/Editar/:id',
    component: EditarComponent
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
