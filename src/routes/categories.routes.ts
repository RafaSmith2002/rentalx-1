import { Router } from "express"; // o router ele nos ajuda a manipular as rotas de forma modular.

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    categoriesRepository.create({ name, description });

    return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
    const lista = categoriesRepository.list();
    return response.json(lista);
});

export { categoriesRoutes };
