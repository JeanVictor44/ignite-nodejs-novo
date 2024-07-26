import { inject, injectable } from "tsyringe";
import { CategoriesRepositoryContract } from "@modules/cars/repositories/contracts/CategoriesRepository";

@injectable()
export class ListCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: CategoriesRepositoryContract
  ){}
  async execute(){
    const all = await this.categoriesRepository.list()
    return all
  }
} 