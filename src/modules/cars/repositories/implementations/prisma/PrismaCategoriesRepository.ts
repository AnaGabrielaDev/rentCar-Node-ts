import { Category } from '../../../entities/Category'
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../../contracts/ICategoriesRepository'
import { connection } from './connection'

export class PrismaCategoriesRepository implements ICategoriesRepository {
  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    await connection.category.create({
      data: {
        name,
        description,
      },
    })
  }

  async list(): Promise<Category[]> {
    const categories = await connection.category.findMany()

    return categories.map((category) => ({
      id: category.id,
      name: category.name,
      description: category.description,
      createdAt: category.createdAt,
    }))
  }

  async findByName(name: string): Promise<Category | null> {
    const category = await connection.category.findFirst({
      where: {
        name,
      },
    })

    if (!category) return null

    return category
  }
}
