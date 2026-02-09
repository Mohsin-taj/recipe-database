import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Recipe } from '@recipe-database/shared-models';
import { SharedModule } from 'primeng/api';
import { RecipeService } from './recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-recipe',
  imports: [CardModule,FormsModule,CommonModule],
  templateUrl: './view-recipe.html',
  styleUrl: './view-recipe.css',
})


export class ViewRecipe implements OnInit {
  view_recipe: Recipe = {
    recipeId: '',
    name: '',
    description: '',
    ingredients: []
  };

  constructor(
    private service :RecipeService,
    private route : ActivatedRoute,
    private router :Router
  ){}

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('recipeId'); 
    console.log('Recipe ID from route:', id);

    if(id){
       this.service.getRecipe(id).subscribe((data : any) =>{
        console.log(data)
        this.view_recipe = data;
        
    });
  }
    }


}
