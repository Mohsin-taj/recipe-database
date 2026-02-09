export * from './lib/shared-models';
export interface Recipeingredient {
    recipeIngredientId?: string;
    name: string;
    quantity: string;
    recipeId: string;
}

export interface Recipe {
    recipeId?: string;
    name: string;
    description: string;
    ingredients?: Recipeingredient[];


}
