import { PrismaSpecificationRepository } from '../../repositories/implementations/prisma/PrismaSpecificationRepository'
import { CreateSpecificationController } from './CreateSpecificationController'
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'

export default (): CreateSpecificationController => {
  const specificationsRepository = new PrismaSpecificationRepository()
  const createSpecificationUseCase = new CreateSpecificationUseCase(
    specificationsRepository
  )
  const createSpecificationController = new CreateSpecificationController(
    createSpecificationUseCase
  )

  return createSpecificationController
}
