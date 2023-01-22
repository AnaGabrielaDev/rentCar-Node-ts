import { Specification } from '../../../entities/Specification'
import {
  ICreateSpecificationsDTO,
  ISpecificationsRepository,
} from '../../contracts/ISpecificationsRepository'
import { connection } from './connection'

export class PrismaSpecificationRepository
  implements ISpecificationsRepository
{
  async create({ name, description }: ICreateSpecificationsDTO): Promise<void> {
    await connection.specification.create({
      data: { name, description },
    })
  }

  async findByName(name: string): Promise<Specification | null> {
    const specification = await connection.specification.findFirst({
      where: { name },
    })

    if (!specification) return null

    return specification
  }
}
