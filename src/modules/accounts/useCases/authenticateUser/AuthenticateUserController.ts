import { Request, Response } from "express";
import { AuthenticateUserDTO } from "../../dtos/AuthenticateUserDTO";
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {
  async handle(req: Request, res: Response){
    const {password, email} = req.body as AuthenticateUserDTO
    
    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase)
    
    const {user,token} = await authenticateUserUseCase.execute({email, password})
    
    return res.json({
      user,
      token
    })
  }
} 