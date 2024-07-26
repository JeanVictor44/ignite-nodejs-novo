import { Router } from 'express';
import multer from 'multer'
import { CreateCategoryController } from '@modules/cars/useCases/createCategory/CreateCategoryController';
import { ListCategoriesController } from '@modules/cars/useCases/listCategories/ListCategoriesController';
import { ImportCategoryController } from '@modules/cars/useCases/importCategory/ImportCategoryController';

export const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp'
})

const createCategoryController = new CreateCategoryController()
const listCategoriesController = new ListCategoriesController()
const importCategoriesController = new ImportCategoryController()

categoriesRoutes.post('/', createCategoryController.handle)
categoriesRoutes.get('/', listCategoriesController.handle)
categoriesRoutes.post('/import',upload.single('file'), importCategoriesController.handle) 