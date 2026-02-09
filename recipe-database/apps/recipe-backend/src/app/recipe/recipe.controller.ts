import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { RecipeService } from './recipe.service';


@Controller('recipes')
export class RecipeController {
    constructor(private readonly recipeService: RecipeService) { }

    @Get()
    findAll() {
        return this.recipeService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.recipeService.findOne(id);
    }

    @Post()
    create(@Body() body: any) {
        return this.recipeService.create(body);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body: any) {
        return this.recipeService.update(id, body);
    }

    @Get(':id/ingredients')
    findIngredients(@Param('id') recipeId: string) {
        return this.recipeService.findIngredients(recipeId);
    }

    @Post(':id/ingredients')
    addIngredient(@Param('id') recipeId: string, @Body() body: any) {
        return this.recipeService.addIngredient(recipeId, body);
    }

    @Delete('ingredients/:ingredientId') 
    removeIngredient(@Param('ingredientId') ingredientId: string) {
        return this.recipeService.removeIngredient(ingredientId);
    }
}
