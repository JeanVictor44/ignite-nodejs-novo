import { inject, injectable } from "tsyringe"
import { SpecificationRepositoryContract } from "@modules/cars/repositories/contracts/SpecificationsRepository"

@injectable()
export class ListSpecificationsUseCase {
  constructor(
    @inject('SpecificationRepository')
    private specificaitonsRepository: SpecificationRepositoryContract
  ){}
  async execute(){
    const all = await this.specificaitonsRepository.list()
    return all
  }
} 