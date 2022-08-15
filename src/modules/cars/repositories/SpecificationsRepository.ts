import { Specification } from "../model/Specifications";
import {
    ICreateSpecificationDTO,
    ISpecificationsRepository,
} from "./ISpecificationsRepository";

// criando uma classe que implemente minha interface de transferencia de dados.
class SpecificationsRepository implements ISpecificationsRepository {
    // dando acesso para o meu array
    private specifications: Specification[];
    // acessando o array
    constructor() {
        this.specifications = [];
    }
    // recebendo e cadastrando os dados enviados via request.body.
    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            create_at: new Date(),
        });
        this.specifications.push(specification);
    }
    findByName(name: string): Specification {
        const specification = this.specifications.find(
            (specification) => specification.name === name
        );
        return specification;
    }
}

export { SpecificationsRepository };
