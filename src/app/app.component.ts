import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Incluir', url: 'folder/Incluir', icon: 'add' },
    { title: 'Consultar', url: 'folder/Consultar', icon: 'list' },
    { title: 'Txt', url: 'folder/Txt', icon: 'heart' },
  ]

  constructor() {}
}
