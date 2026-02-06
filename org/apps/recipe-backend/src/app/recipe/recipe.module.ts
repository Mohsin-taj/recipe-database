import { Module } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from './entity/recipe.entity';
import { RecipeIngredient } from './entity/recipeingredient.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Recipe, RecipeIngredient]),
  ],
  controllers: [RecipeController],
  providers: [RecipeService]
})
export class RecipeModule {}
