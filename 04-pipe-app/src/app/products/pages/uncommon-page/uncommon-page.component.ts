import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {


  //i18nSelect

  public name: string = 'Nicole';
  public gender: 'male' | 'female' = 'female';

  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'John';
    this.gender = 'male';
  }

  //i18nPlural
  public clients: string[] = ['Nicole', 'John', 'Peter', 'Mary', 'Samantha'];

  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClients(): void {
    this.clients.shift();
  }

  //Key Value Pipe
  public person = {
    name : 'Nicole',
    age: 25,
    address: 'Calle 123, Ciudad, País'
  }

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000);//crea un observable que comienza a emitir valores en intervalos de tiempo regulares
  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos datos de la promesa');
    }, 3500);
  });
}
