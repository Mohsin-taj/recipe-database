import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RecipeIngredient } from './recipeingredient.entity';


@Entity()
export class Recipe {
  @PrimaryGeneratedColumn('uuid')
  recipeId: string;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @OneToMany(() => RecipeIngredient, (ingredient) => ingredient.recipe, { cascade: true })

  ingredients: RecipeIngredient[];


}
