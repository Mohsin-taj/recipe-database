import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { RouterModule } from '@angular/router';
//import { NxWelcome } from './nx-welcome';
import { MenuItem } from 'primeng/api';

@Component({
  imports: [MenubarModule, RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Recipe Database',
        icon: 'pi pi-home'

      },
      {
        label: 'Recipes',
        icon: 'pi pi-book',
        routerLink: '/recipes'


      },
      {
        label: 'View Recipes',
        icon: 'pi pi-list',
        routerLink: '/view-recipe'
      },
      {
        label: 'Create Recipe',
        icon: 'pi pi-plus',
        routerLink: '/create-recipe'
      },
      {
        label: 'Edit Recipe',
        icon: 'pi pi-pencil',
        routerLink: '/edit-recipe'
      }

    ];

    
  }
}
