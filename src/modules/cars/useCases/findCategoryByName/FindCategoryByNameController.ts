import { Request, Response } from 'express'
import { FindCategoryByNameUseCase } from './FindCategoryByNameUseCase'

export class FindCategoryByNameController {
  constructor(
    private readonly findCategoryByNameUseCase: FindCategoryByNameUseCase
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const name = req.params.name

      if (!name) throw new Error('name is required')

      const category = await this.findCategoryByNameUseCase.execute({ name })

      return res.status(200).send(category)
    } catch (error: any) {
      return res.status(404).send(error.message)
    }
  }
}
