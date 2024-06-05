import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent
  implements OnInit {
    public items: MenuItem[] | undefined;

    constructor(private router: Router) {}

    ngOnInit() {
        this.items = [
            { 
              label: 'Pipes de Angular', 
              icon: 'pi pi-desktop',
              items: [
                { label: 'Textos y Fechas', icon: 'pi pi-align-left', command: () => {
                  this.router.navigate(['/']);
              }},
                { label: 'Números', icon: 'pi pi-dollar', command: () => {
                  this.router.navigate(['/numbers']);}},
                { label: 'No comunes', icon: 'pi pi-globe', command: () => {
                  this.router.navigate(['/uncommon']);}}
              ]
            },
            {
              label: 'Pipes personalizados',
              icon: 'pi pi-cog'
            }
        ];
    }
}
