import { Router } from "express";
import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationsController } from "@modules/cars/useCases/listSpecifications/ListSpecificationsController";
import { ensureAuthenticated } from "@shared/infra/http/middlawares/ensureAuthenticated";

export const specificationsRoutes = Router()

const createSpecificationController = new CreateSpecificationController()
const listSpecificationController = new ListSpecificationsController()

specificationsRoutes.use(ensureAuthenticated)
specificationsRoutes.post('/', createSpecificationController.handle)
specificationsRoutes.get('/', listSpecificationController.handle)  