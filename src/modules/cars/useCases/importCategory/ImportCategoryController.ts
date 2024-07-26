import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";
import { container } from "tsyringe";

export class ImportCategoryController {
  handle(request: Request, response: Response){
    const {file} = request
    const importCategoryUseCase = container.resolve(ImportCategoryUseCase) 
    
    importCategoryUseCase.execute(file)

    response.status(201).send()
  }
}