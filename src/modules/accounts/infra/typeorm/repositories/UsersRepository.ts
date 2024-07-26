import { Repository } from "typeorm";
import { UsersRepositoryContract } from "@modules/accounts/repositories/contracts/UsersRepository";
import { User } from "../entities/User";
import { AppDataSource } from "@database/data-source";
import { CreateUserDTO } from "@modules/accounts/dtos/CreateUserDTO";

export class UsersRepository implements UsersRepositoryContract {
  private repository:Repository<User>
  
  constructor(){
    this.repository = AppDataSource.getRepository(User)
  }

  async create({
    name,
    email,
    password,
    driver_license,
    id,
    avatar
  }: CreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
      driver_license,
      id,
      avatar
    })
    await this.repository.save(user) 
  } 

  async findByEmail(email: string){
    return await this.repository.findOneBy({email})
  } 
  async findById(id: string){
    return await this.repository.findOneBy({id})
  }
}