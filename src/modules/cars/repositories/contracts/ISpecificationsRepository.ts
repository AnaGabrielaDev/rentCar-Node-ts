import { Specification } from '../../entities/Specification'

interface ICreateSpecificationsDTO {
  name: string
  description: string
}

interface ISpecificationsRepository {
  create: ({ name, description }: ICreateSpecificationsDTO) => Promise<void>
  findByName: (name: string) => Promise<Specification | null>
}

export { ISpecificationsRepository, ICreateSpecificationsDTO }
