import { ICategoriesRepository } from "../repositories/ICategoriesRepository";
// criando uma interface para receber as informações da minha rota
interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    // Inicializando meu objeto
    constructor(private categoriesRepository: ICategoriesRepository) {}
    // o execute executa a minha tarefa quando é chamado.
    execute({ name, description }: IRequest) {
        // verificação de cadastro
        const categoryAlreadyExists =
            this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            // retornando erro caso exista o nome já cadastrado
            throw new Error("Category Already Exists!!");
        }
        // cadastrando os dados recebidos caso não haja redundância.
        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService };
