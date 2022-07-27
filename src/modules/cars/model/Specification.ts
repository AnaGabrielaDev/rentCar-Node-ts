import { v4 as uuidV4 } from 'uuid';

interface ICreateSpecification {
    name: string;
    description: string;
}

class Specification {
    id?: string;
    name: string;
    description: string;
    created_at: Date;

    constructor({ name, description }: ICreateSpecification) {
        if (!this.id) this.id = uuidV4();
            this.name = name;
            this.description = description;
            this.created_at = new Date;
    }
}

export { Specification }