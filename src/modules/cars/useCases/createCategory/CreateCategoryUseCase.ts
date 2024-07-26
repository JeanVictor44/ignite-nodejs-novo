import { inject, injectable } from "tsyringe";
import { CategoriesRepositoryContract } from "@modules/cars/repositories/contracts/CategoriesRepository";
import { CreateCategoryDTO } from "@modules/cars/dtos/CreateCategoryDTO";
import { AppError } from "@shared/errors/AppError";

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: CategoriesRepositoryContract
  ){}

  async execute({name, description}: CreateCategoryDTO) {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name)

    if(categoryAlreadyExists){
      throw new AppError('Category already exists!')
    }
  
    await this.categoriesRepository.create({name, description})
  }
}  