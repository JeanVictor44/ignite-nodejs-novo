import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { UsersRepositoryContract } from "../contracts/UsersRepository";

export class UsersRepositoryInMemory implements UsersRepositoryContract {
  private users: User[] = [];

  async create({ name, email, password, driver_license }: User): Promise<void> {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      password,
      driver_license
    });

    this.users.push(user);
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find(user => user.email === email);
  }

  async findById(id: string): Promise<User> {
    return this.users.find(user => user.id === id);
  }
}