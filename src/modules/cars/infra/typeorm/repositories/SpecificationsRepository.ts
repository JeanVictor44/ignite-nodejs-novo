import { Repository } from "typeorm";
import { AppDataSource } from "@database/data-source";
import { Specification } from "../entities/Specification";
import { SpecificationRepositoryContract } from "@modules/cars/repositories/contracts/SpecificationsRepository";
import { CreateSpecificationDTO } from "@modules/cars/dtos/CreateSpecificationDTO";

export class SpecificationRepository implements SpecificationRepositoryContract {
  private repository: Repository<Specification>

  constructor(){
    this.repository = AppDataSource.getRepository(Specification);
  }
  
  async create({ name, description }: CreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      name,
      description
    })

    await this.repository.save(specification)
  }
  
  async findByName(name: string): Promise<Specification> {
    return await this.repository.findOne({
      where: {name}
    })
  }
  
  async list(): Promise<Specification[]> {
    return await this.repository.find()
  }
}