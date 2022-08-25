/* eslint-disable no-use-before-define */
import { Category } from "../../model/category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "../ICategoriesRepository";

// Interface transferida para o arquivo de interface: ICategoriesRepository.ts
// interface ICreateCategoryDTO {
//     name: string;
//     description: string;
// }

class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[]; // private define como o atributo vai ser acessado.

    // criar um método para verificar e instanciar o repositório
    private static INSTANCE: CategoriesRepository;

    private constructor() {
        this.categories = [];
    }

    public static getInstance(): CategoriesRepository {
        if (!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }
        return CategoriesRepository.INSTANCE;
    }

    create({ description, name }: ICreateCategoryDTO): void {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });

        this.categories.push(category);
    }
    // listar cadastros das categorias
    list(): Category[] {
        return this.categories;
    }
    // verificação cadastro
    findByName(name: string): Category {
        const category = this.categories.find(
            (category) => category.name === name
        );
        return category;
    }
    // // fim verificação de cadastro
}

export { CategoriesRepository };
