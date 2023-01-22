import { Request, Response } from 'express'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

class CreateCategoryController {
  constructor(private readonly createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { name, description } = req.body

      await this.createCategoryUseCase.execute({ name, description })

      return res.status(201).send()
    } catch (error: any) {
      return res.status(404).send(error.message)
    }
  }
}

export { CreateCategoryController }
