/* eslint-disable no-use-before-define */
import { Category } from '../../entities/Category'
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../contracts/ICategoriesRepository'

class CategoriesRepository implements ICategoriesRepository {
  private readonly categories: Category[]

  private static INSTANCE: CategoriesRepository

  private constructor() {
    this.categories = []
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository()
    }

    return CategoriesRepository.INSTANCE
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = new Category({
      name,
      description,
    })

    this.categories.push(category)
  }

  async list(): Promise<Category[]> {
    return this.categories
  }

  async findByName(name: string): Promise<Category | null> {
    const findCategory = this.categories.find(
      (category) => category.name === name
    )

    if (!findCategory) return null

    return findCategory
  }
}

export { CategoriesRepository }
