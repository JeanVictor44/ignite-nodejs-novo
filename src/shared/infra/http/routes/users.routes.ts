import { Router } from "express";
import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";
import multer from "multer";
import { upload } from "@config/upload";
import { ensureAuthenticated } from "@shared/infra/http/middlawares/ensureAuthenticated";


export const usersRoutes = Router()

const uploadAvatar = multer(upload('./tmp/avatar'))

const createUserController = new CreateUserController()
const updateUserAvatarController = new UpdateUserAvatarController()

usersRoutes.post('/', createUserController.handle)
usersRoutes.patch('/avatar',ensureAuthenticated , uploadAvatar.single('avatar'),updateUserAvatarController.handle)
