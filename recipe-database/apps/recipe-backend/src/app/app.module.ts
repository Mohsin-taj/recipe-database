import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { RecipeController } from './recipe/recipe.controller';
import { RecipeModule } from './recipe/recipe.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'recipe_user',
      password: 'recipe_pass',
      database: 'recipe_db',
      autoLoadEntities: true,
      synchronize: false,
    }),
    RecipeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
