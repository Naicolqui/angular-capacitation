import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
public nameLower: string = 'Nicole';
public nameUpper: string = 'NICOLE';
public fullName: string = 'NicolE QUIlmore';

public customDate: Date = new Date(); // 2021-09-29T17:00:00.000Z
}
