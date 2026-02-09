import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RecipeService } from './recipe.service';
import { Recipe } from '@org/shared-models';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, RouterLink],
  template: `
    <div class="card p-4">
      <div class="flex justify-content-between mb-4">
        <h1>Mom's Recipes</h1>
        <p-button label="Add New Recipe" icon="pi pi-plus" routerLink="/create-recipe"></p-button>
      </div>

      <p-table [value]="recipes" [responsiveLayout]="'scroll'">
        <ng-template pTemplate="header">
          <tr>
            <th>Name</th>
          </tr>
        </ng-template>
        <ng-template pTemplate="body" let-recipe>
          <tr>
            <td>{{ recipe.name }}</td>
            <td>
              <p-button class="mr-2" [routerLink]="['/view-recipe', recipe.recipeId]">view-recipe</p-button>
            </td>
          </tr>
        </ng-template>
      </p-table>
    </div>
    

  `,
})
export class Recipes implements OnInit {
  private recipeService = inject(RecipeService);
  recipes: Recipe[] = [];

  ngOnInit() {
    this.recipeService.getRecipes().subscribe((data) => (this.recipes = data));
  }
}
