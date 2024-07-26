import { CreateCategoryDTO } from "@modules/cars/dtos/CreateCategoryDTO";
import { Category } from "@modules/cars/infra/typeorm/entities/Category";
import { CategoriesRepositoryContract } from "../contracts/CategoriesRepository";

export class CategoriesRepositoryInMemory implements CategoriesRepositoryContract {
  categories: Category[] = [];

  async create({ name, description }: CreateCategoryDTO) {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
    });

    this.categories.push(category);
  }

  async list() {
    return this.categories;
  }

  async findByName(name: string) {
    return this.categories.find((category) => category.name === name);
  }
}