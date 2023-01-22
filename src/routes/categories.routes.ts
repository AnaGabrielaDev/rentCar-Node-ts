import { Router } from 'express'
import multer from 'multer'

import createCategoryController from '../modules/cars/useCases/createCategory'
import { importCategoryController } from '../modules/cars/useCases/importCategory'
import { listCategoriesController } from '../modules/cars/useCases/listCategories'

const categoriesRoutes = Router()

const upload = multer({
  dest: './tmp',
})

categoriesRoutes.post('/', async (req, res) => {
  await createCategoryController().handle(req, res)
})

categoriesRoutes.get('/', (req, res) => {
  return listCategoriesController.handle(req, res)
})

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  async (request, response) => {
    return await importCategoryController.handle(request, response)
  }
)

export { categoriesRoutes }
