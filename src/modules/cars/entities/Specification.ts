import { v4 as uuidV4 } from 'uuid'

interface ICreateSpecification {
  name: string
  description: string
}

class Specification {
  id?: string

  name: string

  description: string

  createdAt: Date

  constructor({ name, description }: ICreateSpecification) {
    if (!this.id) this.id = uuidV4()
    this.name = name
    this.description = description
    this.createdAt = new Date()
  }
}

export { Specification }
