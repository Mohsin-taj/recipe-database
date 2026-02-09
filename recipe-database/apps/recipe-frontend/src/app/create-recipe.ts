import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// PrimeNG v21 Imports
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { CardModule } from 'primeng/card';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-create-recipe',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    TextareaModule,
    CardModule
  ],
  templateUrl: './create-recipe.html',
  styleUrl: './create-recipe.css'
})
export class CreateRecipe {
  private fb = inject(FormBuilder);
  private service = inject(RecipeService);
  private router = inject(Router);

  recipeForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    ingredients: this.fb.array([])
  });

  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }


  addIngredient() {
    const ingredientForm = this.fb.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required]
    });
    this.ingredients.push(ingredientForm);
  }


  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  onSubmit() {
    if (this.recipeForm.valid) {
      this.service.createRecipe(this.recipeForm.value).subscribe((newRecipe: any) => {

        this.router.navigate(['/edit-recipe', newRecipe.recipeId]);
      });
    }
  }
}
