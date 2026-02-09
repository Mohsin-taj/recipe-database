import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Recipe } from '@recipe-database/shared-models';

@Injectable({providedIn: 'root'})
export class RecipeService {
    private apiUrl = 'http://localhost:3000/api/recipes';

    constructor(private http: HttpClient) {}
    getRecipes() {
        return this.http.get<any[]>(this.apiUrl);
    }
    getRecipe(id: string) {
        return this.http.get<Recipe>(`${this.apiUrl}/${id}`);
    }   
    createRecipe(recipe: any) {
        return this.http.post<any[]>(this.apiUrl, recipe);
    }
    updateRecipe(id: string, recipe: any) {
        return this.http.patch<Recipe>(`${this.apiUrl}/${id}`, recipe);
    }   

    deleteRecipe(id: string) {
        return this.http.delete<any>(`${this.apiUrl}/${id}`);
    }

    addIngredient(recipeId: string, ingredient: any) {
        return this.http.post<any>(`${this.apiUrl}/${recipeId}/ingredients`, ingredient);
    }   

    updateIngredient(recipeId: string, ingredientId: string, ingredient: any) {
        return this.http.put<any>(`${this.apiUrl}/${recipeId}/ingredients/${ingredientId}`, ingredient);
    }

    deleteIngredient(recipeId: string, ingredientId: string) {
        return this.http.delete<any>(`${this.apiUrl}/${recipeId}/ingredients/${ingredientId}`);
    }

    
}


