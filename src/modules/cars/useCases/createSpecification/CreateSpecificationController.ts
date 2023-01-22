import { Request, Response } from 'express'
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'

class CreateSpecificationController {
  constructor(
    private readonly createSpecificationUseCase: CreateSpecificationUseCase
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { name, description } = req.body
      await this.createSpecificationUseCase.execute({ name, description })

      return res.status(201).send()
    } catch (error: any) {
      return res.status(404).send(error.message)
    }
  }
}

export { CreateSpecificationController }
