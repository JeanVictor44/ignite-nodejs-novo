import { Request, Response } from "express";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(req: Request, res: Response){
    const {
      name,
      password,
      email,
      driver_license,
    } = req.body as CreateUserDTO
    const createUserUseCase = container.resolve(CreateUserUseCase)

    await createUserUseCase.execute({
      name,
      email,
      password,
      driver_license,
    }) 

    return res.status(201).send()
  }
}