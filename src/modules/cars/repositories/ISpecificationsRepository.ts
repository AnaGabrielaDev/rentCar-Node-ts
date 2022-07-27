import { Specification } from "../model/Specification";

interface ICreateSpecificationsDTO {
    name: string,
    description: string;
}

interface ISpecificationsRepotitory {
    create({ name, description }: ICreateSpecificationsDTO): void;
    findByName(name: string): Specification; 
}   

export { ISpecificationsRepotitory, ICreateSpecificationsDTO }