import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Recipe } from './recipe.entity';

@Entity()
export class RecipeIngredient {
  @PrimaryGeneratedColumn('uuid')
  recipeIngredientId: string;

  @Column()
  name: string;

  @Column()
  quantity: string;

  
  //@ManyToOne(() => Recipe, (recipe) => recipe.ingredients, { onDelete: 'CASCADE' })
    @ManyToOne('Recipe', (recipe: any) => recipe.ingredients, { 
    onDelete: 'CASCADE' })
  @JoinColumn({ name: 'recipeId' })
  recipe: Recipe;

}
