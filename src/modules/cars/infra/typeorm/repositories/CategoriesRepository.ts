import { Repository } from "typeorm";
import { Category } from "@modules/cars/infra/typeorm/entities/Category";
import { CategoriesRepositoryContract } from "@modules/cars/repositories/contracts/CategoriesRepository";
import { AppDataSource } from "@database/data-source";
import { CreateCategoryDTO } from "@modules/cars/dtos/CreateCategoryDTO";

export class CategoriesRepository implements CategoriesRepositoryContract{
  private repository: Repository<Category>

  constructor(){
    this.repository = AppDataSource.getRepository(Category)
  }

  async create({name, description}: CreateCategoryDTO): Promise<void>{
    const category = this.repository.create({
      name,
      description
    })
    await this.repository.save(category)
  }

  async list(): Promise<Category[]>{
    return await this.repository.find()
  }

  async findByName(name: string): Promise<Category>{
    return await this.repository.findOne({
      where: {name}
    })
  }
}