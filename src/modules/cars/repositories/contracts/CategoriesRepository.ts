import { CreateCategoryDTO } from "@modules/cars/dtos/CreateCategoryDTO";
import { Category } from "@modules/cars/infra/typeorm/entities/Category";


export interface CategoriesRepositoryContract { 
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({name, description}: CreateCategoryDTO): Promise<void>;
} 