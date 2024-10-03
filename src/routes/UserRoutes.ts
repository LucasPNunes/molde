import { Router } from 'express';
import UserController from '../controllers/UserController';

const UserRouter = Router(); 

UserRouter.get("/users", UserController.getAllUsers);

UserRouter.post("/users/create", UserController.createUser);

UserRouter.put("/users/update/:id", UserController.updateUser);

UserRouter.delete("/users/delete/:id", UserController.deleteUser);

export default UserRouter;