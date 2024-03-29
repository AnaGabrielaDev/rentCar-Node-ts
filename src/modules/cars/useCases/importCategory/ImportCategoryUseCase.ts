import { parse } from 'csv-parse'
import fs from 'fs'
import { ICategoriesRepository } from '../../repositories/contracts/ICategoriesRepository'

interface IImportCategory {
  name: string
  description: string
}

class ImportCategoryUseCase {
  constructor(private readonly categoriesRepository: ICategoriesRepository) {}

  async loadCategories(file: Express.Multer.File): Promise<IImportCategory> {
    const data = await new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path)
      const categories: IImportCategory[] = []
      const parseFile = parse()

      stream.pipe(parseFile)

      parseFile
        .on('data', (line) => {
          const [name, description] = line
          categories.push({
            name,
            description,
          })
        })
        .on('end', async () => {
          await fs.promises.unlink(file.path)
          resolve(categories)
        })
        .on('error', (err) => {
          reject(err)
        })
    })

    return data
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file)

    categories.map(async (category) => {
      const { name, description } = category

      const existCategory = this.categoriesRepository.findByName(name)

      if (!existCategory) {
        await this.categoriesRepository.create({
          name,
          description,
        })
      }
    })
  }
}

export { ImportCategoryUseCase }
