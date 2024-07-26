import { inject, injectable } from "tsyringe";
import { UsersRepositoryContract } from "@modules/accounts/repositories/contracts/UsersRepository";
import { CreateUserDTO } from "@modules/accounts/dtos/CreateUserDTO";
import { hash } from 'bcrypt';
import { AppError } from "@shared/errors/AppError";

@injectable()
export class CreateUserUseCase {
  
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepositoryContract
  ){}

  async execute({
    driver_license,
    email,
    name,
    password,
  }: CreateUserDTO): Promise<void>{
    const passwordHash = await hash(password, 10)
    const userAlreadyExist = await this.usersRepository.findByEmail(email)
    
    if(userAlreadyExist){
      throw new AppError("User already exists")
    }

    await this.usersRepository.create({
      driver_license,
      email,
      name,
      password: passwordHash,
    })
  } 
} 