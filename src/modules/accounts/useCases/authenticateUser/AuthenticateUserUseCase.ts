import { inject, injectable } from "tsyringe";
import { AuthenticateUserDTO } from "@modules/accounts/dtos/AuthenticateUserDTO";
import { UsersRepositoryContract } from "@modules/accounts/repositories/contracts/UsersRepository";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { AppError } from "@shared/errors/AppError";

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepositoryContract
  ){}

  async execute({email,password}: AuthenticateUserDTO){
    const user = await this.usersRepository.findByEmail(email)
    
    if(!user){
      throw new AppError("Credentials Invalid")
    }

    const isPasswordCorrect = await compare(password, user.password)
    
    
    if(!isPasswordCorrect){
      throw new AppError("Credentials Invalid")
    }

    const token = sign({}, process.env.JSON_SECRET, {
      subject: user.id,
      expiresIn: '1d'
    })

    return {
      token,
      user: { 
        name: user.name,
        email: user.email
      },
    } 
  }
}
