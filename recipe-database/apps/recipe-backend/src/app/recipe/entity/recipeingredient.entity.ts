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

  @Column()
  recipeId: string;


  @ManyToOne('Recipe', (recipe: any) => recipe.ingredient, {

    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'recipeId' })
  recipe: Recipe;

}
