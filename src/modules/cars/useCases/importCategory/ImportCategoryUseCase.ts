import { CategoriesRepositoryContract } from "@modules/cars/repositories/contracts/CategoriesRepository";
import fs from 'fs'
import { parse } from 'csv-parse';
import { inject, injectable } from "tsyringe";

interface ImportCategory {
  name: string
  description: string
}

@injectable()
export class ImportCategoryUseCase{
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: CategoriesRepositoryContract){}
  
  loadCategories(file: Express.Multer.File): Promise<ImportCategory[]>{
    return new Promise((resolve, reject) => {
      const categories:ImportCategory[] = []

      const stream = fs.createReadStream(file.path)
      const parseFile = parse()

      stream.pipe(parseFile)
      parseFile.on('data', async (line) => {
        const [name, description] = line
        categories.push({name, description})
      }).on('end', () => {
        fs.promises.unlink(file.path)
        resolve(categories)   
      }).on('error', (err) => {
        reject(err)
      })
    
    })
  }

  async execute(file: Express.Multer.File){
    const categories = await this.loadCategories(file)
    categories.map(async (category) => {
      const {name, description} = category
      const categoryAlreadyExists = await this.categoriesRepository.findByName(name)
      
      if(!categoryAlreadyExists){
        await this.categoriesRepository.create({name, description})
      }
    })
  }
}