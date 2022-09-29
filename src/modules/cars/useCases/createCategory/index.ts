import { PrismaCategoriesRepository } from '../../repositories/implementations/prisma/PrismaCategoriesRepository'
import { CreateCategoryController } from './CreateCategoryController'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

export default (): CreateCategoryController => {
  const categoriesRepository = new PrismaCategoriesRepository()
  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)
  const createCategoryController = new CreateCategoryController(
    createCategoryUseCase
  )

  return createCategoryController
}
