import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { User } from "../../infra/typeorm/entities/User";

export interface UsersRepositoryContract {
  create(data: CreateUserDTO): Promise<void>
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
} 