import 'reflect-metadata';
import { DataSource } from 'typeorm';
//import { Recipe } from '../recipe/entity/recipe.entity';
import { Recipe } from './app/recipe/entity/recipe.entity';
import { RecipeIngredient } from './app/recipe/entity/recipeingredient.entity';
import * as path from 'path';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST ?? 'localhost',
  port: Number(process.env.DB_PORT ?? 5432),
  username: process.env.DB_USERNAME  ?? 'recipe_user',
  password: process.env.DB_PASSWORD  ?? 'recipe_pass',
  database: process.env.DB_NAME ?? 'recipe_db',

  synchronize: false,          
  logging: false,
  entities: [Recipe, RecipeIngredient],
  migrations: [path.join(__dirname, 'migrations/*.ts')],
  subscribers: [],
});

//export default AppDataSource;
