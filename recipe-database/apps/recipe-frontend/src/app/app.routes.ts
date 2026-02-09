import { Route } from '@angular/router';
import { Recipes } from './recipes';
import { ViewRecipe } from './view-recipe';
import { CreateRecipe } from './create-recipe';
import { EditRecipe } from './edit-recipe';

export const appRoutes: Route[] = [
    { path: 'recipes', component: Recipes },
    {path:'view-recipe/:recipeId',component:ViewRecipe},
    {path:'create-recipe',component:CreateRecipe},
    {path:'edit-recipe/:recipeId',component:EditRecipe},
    {path:'edit-recipe',component:EditRecipe}
];
