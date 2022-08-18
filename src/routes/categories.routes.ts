import { Router } from "express"; // o router ele nos ajuda a manipular as rotas de forma modular.

// import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
// import { CreateCategoryService } from "../modules/cars/useCases/createCategory/CreateCategoryUseCase";

const categoriesRoutes = Router();
// const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response);
    // const lista = categoriesRepository.list();
    // return response.json(lista);
});

export { categoriesRoutes };
