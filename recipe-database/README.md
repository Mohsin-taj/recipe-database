Recipe Database :
A full-stack monorepo application designed to digitize and preserve cherished family recipes. This project features a robust NestJS backend, a PostgreSQL database, and a modern Angular frontend styled with PrimeNG.

Tech Stack :
Monorepo Management: Nx Build System
Frontend: Angular + PrimeNG + PrimeFlex
Backend: NestJS
Database: PostgreSQL via Docker
ORM: TypeORM (with Migrations)

Project Structure:
apps/recipe-backend: NestJS API handling Recipe and Ingredient logic.
apps/recipe-frontend: Angular application with PrimeNG UI components.
libs/: Shared-models containing interfaces of recipe and recipe-ingredient.


Features:
Recipe Management: Create, Read, Update, and Delete (CRUD) recipes.
Dynamic Ingredients: Manage ingredients directly within the recipe editor.
Responsive Design: Styled using PrimeFlex for mobile and desktop compatibility.
Data Integrity: UUID-based relational mapping and TypeORM migrations.