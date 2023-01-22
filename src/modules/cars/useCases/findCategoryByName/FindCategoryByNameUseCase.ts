import { Category } from '../../entities/Category'
import { ISpecificationsRepository } from '../../repositories/contracts/ISpecificationsRepository'

interface IRequest {
  name: string
}
export class FindCategoryByNameUseCase {
  constructor(
    private readonly findCategoryByNameUseCase: ISpecificationsRepository
  ) {}

  async execute({ name }: IRequest): Promise<Category> {
    const category = await this.findCategoryByNameUseCase.findByName(name)

    if (!category) {
      throw new Error('Category not found')
    }
    return category
  }
}
