import { Specification } from "../../model/Specification";
import { ICreateSpecificationsDTO, ISpecificationsRepository } from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }

    create({name, description}: ICreateSpecificationsDTO ): void {
        const specification = new Specification({
            name,
            description
        })
        
        this.specifications.push(specification);
    };

    findByName(name: string): Specification {
        const specification = this.specifications.find(Specification => specification.name === name);
        return specification;
    }
}

export { SpecificationsRepository };