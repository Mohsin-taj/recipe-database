import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';

// PrimeNG v21 Imports
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RecipeService } from './recipe.service';
import { Recipe,Recipeingredient } from '@recipe-database/shared-models';

@Component({
  selector: 'app-edit-recipe',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule, TextareaModule, CardModule, ToastModule],
  providers: [MessageService],
  templateUrl: './edit-recipe.html',
  styleUrl: './edit-recipe.css'
})
export class EditRecipe implements OnInit {
  private fb = inject(FormBuilder);
  private service = inject(RecipeService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);  
  private messageService = inject(MessageService);

  recipeId: string | null = null;
  recipeForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    ingredients: this.fb.array([]) // Dynamic list
  });

  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  ngOnInit() {
    this.recipeId = this.route.snapshot.paramMap.get('recipeId');
    if (this.recipeId) {
      this.loadRecipe();
    }
  }

  loadRecipe() {
  this.service.getRecipe(this.recipeId!).subscribe((recipe: Recipe) => {
    this.recipeForm.patchValue({
      name: recipe.name,
      description: recipe.description
    });

    // Clear existing rows first
    this.ingredients.clear();
    
    // Now this will work because RecipeIngredient is exported and Service is typed
    recipe.ingredients?.forEach(ing => this.addIngredient(ing));
  });
}

  addIngredient(data?: Recipeingredient) {
    this.ingredients.push(this.fb.group({
      id: [data?.recipeId|| null],
      name: [data?.name || '', Validators.required],
      quantity: [data?.quantity || '', Validators.required]
    }));
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  onUpdate() {
  if (this.recipeForm.valid && this.recipeId) {
    // recipeForm.value now includes the ingredients array automatically
    this.service.updateRecipe(this.recipeId, this.recipeForm.value).subscribe({
      next: () => {
        this.messageService.add({ 
          severity: 'success', 
          summary: 'Updated', 
          detail: 'Recipe saved successfully' 
        });
        
        // 2. Navigate programmatically after success
        setTimeout(() => {
          this.router.navigate(['/view-recipe', this.recipeId]);
        }, 1000);
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Update failed' });
      }
    });
    }
  }
}
