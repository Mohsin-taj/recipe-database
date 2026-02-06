import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipe } from './entity/recipe.entity';
import { RecipeIngredient } from './entity/recipeingredient.entity';


@Injectable()
export class RecipeService {
    constructor(
    @InjectRepository(Recipe)
    private recipeRepo: Repository<Recipe>,

    @InjectRepository(RecipeIngredient)
    private ingredientRepo: Repository<RecipeIngredient>,

  ) {}

  findAll() {
    return this.recipeRepo.find();
  }


  async findOne(id: string) {
  return await this.recipeRepo.findOne({
    where: { recipeId: id },
    relations: ['ingredients'] 
  });
}


  create(data: any) {
    const newRecipe = this.recipeRepo.create(data);
    return this.recipeRepo.save(newRecipe);
  }

  async update(id: string, data: any) {
    await this.recipeRepo.update(id, data);
    return this.findOne(id);
  }

  findIngredients(recipeId: string) {
    return this.ingredientRepo.find({ where: { recipe: { recipeId } } });
  }

  addIngredient(recipeId: string, data: any) {
    const ingredient = this.ingredientRepo.create({ ...data, recipeId });
    return this.ingredientRepo.save(ingredient);
  }

  async removeIngredient(ingredientId: string) {
  await this.ingredientRepo.delete(ingredientId);
  return { deleted: true }; 
  }
}
