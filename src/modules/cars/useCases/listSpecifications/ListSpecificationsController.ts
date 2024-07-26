import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListSpecificationsUseCase } from "./ListSpecificationUseCase";

export class ListSpecificationsController {
  async handle(request: Request, response: Response){
    const listSpecificationsUseCase = container.resolve(ListSpecificationsUseCase)
    const all = await listSpecificationsUseCase.execute()

    return response.json(all)
  }
}