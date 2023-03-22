import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contato } from '../models/Contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService{

  private baseUrl = 'http://localhost:8080/api/listatelefonica/contatos';

  constructor(private http: HttpClient) { }

  createContato(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.baseUrl, contato);
  }
 // Método para obter todos os contatos cadastrados
  getContatos(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.baseUrl);
  }

  // Método para obter um contato pelo ID
  getContato(id: any): Observable<Contato> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Contato>(url);
  }

  // Método para editar um contato
  updateContato(contato: Contato): Observable<Contato> {
    const url = `${this.baseUrl}/${contato.id}`;
    return this.http.put<Contato>(url, contato);
  }

  deleteContato(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }
  


}
