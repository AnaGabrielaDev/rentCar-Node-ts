import { Request, Response } from 'express'
import { ImportCategoryUseCase } from './ImportCategoryUseCase'

class ImportCategoryController {
  constructor(private readonly importCategoryUseCase: ImportCategoryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request

    if (!file) return response.status(400).json(new Error('file is required'))

    await this.importCategoryUseCase.execute(file)

    return response.send()
  }
}

export { ImportCategoryController }
