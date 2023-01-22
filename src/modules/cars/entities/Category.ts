import { v4 as uuid } from 'uuid'

interface ICreateCategory {
  name: string
  description: string
}
class Category {
  id?: string

  name: string

  description: string

  createdAt: Date

  constructor({ name, description }: ICreateCategory) {
    if (!this.id) this.id = uuid()
    this.name = name
    this.description = description
    this.createdAt = new Date()
  }
}
export { Category }
