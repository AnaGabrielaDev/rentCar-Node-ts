import { Request, Response } from "express";
import { ListCategoryUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
    constructor(private listCategoriesUseCase: ListCategoryUseCase) {}

    handle(req: Request, res: Response): Response {
        const all = this.listCategoriesUseCase.execute();

        return res.status(200).json(all);
    }
}

export { ListCategoriesController }