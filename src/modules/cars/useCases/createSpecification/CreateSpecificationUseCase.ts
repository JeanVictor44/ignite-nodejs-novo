import { inject, injectable } from "tsyringe";
import {SpecificationRepositoryContract } from "@modules/cars/repositories/contracts/SpecificationsRepository";
import { CreateSpecificationDTO } from "@modules/cars/dtos/CreateSpecificationDTO";
import { AppError } from "@shared/errors/AppError";

@injectable()
export class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationRepository')
    private specificationsRepository: SpecificationRepositoryContract
  ){}

  async execute({name, description}: CreateSpecificationDTO){
    const specificationAlreadyExists = await this.specificationsRepository.findByName(name)

    if(specificationAlreadyExists){
      throw new AppError('Specification already exists')
    }

    await this.specificationsRepository.create({name, description})
  }
} 