import { Router } from "express";

// import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
// import { CreateSpecificationService } from "../modules/cars/useCases/createSpecification/CreateSpecificationUseCase";

const specificationsRoutes = Router();

// const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response);

    // const { name, description } = request.body;

    // const createSpecificationService = new CreateSpecificationService(
    //     specificationsRepository
    // );

    // createSpecificationService.execute({ name, description });

    // return response.status(201).send();
});

export { specificationsRoutes };
