import { Specification } from '../../entities/Specification'
import {
  ICreateSpecificationsDTO,
  ISpecificationsRepository,
} from '../contracts/ISpecificationsRepository'

class SpecificationsRepository implements ISpecificationsRepository {
  private readonly specifications: Specification[]

  constructor() {
    this.specifications = []
  }

  async create({ name, description }: ICreateSpecificationsDTO): Promise<void> {
    const specification = new Specification({
      name,
      description,
    })

    this.specifications.push(specification)
  }

  async findByName(name: string): Promise<Specification | null> {
    const specificationObj = this.specifications.find(
      (specification) => specification.name === name
    )

    if (!specificationObj) return null

    return specificationObj
  }
}

export { SpecificationsRepository }
