import { CreateSpecificationDTO } from "@modules/cars/dtos/CreateSpecificationDTO";
import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";

export interface SpecificationRepositoryContract {
  create({name, description}: CreateSpecificationDTO): Promise<void> 
  findByName(name: string): Promise<Specification>
  list(): Promise<Specification[]>
}   