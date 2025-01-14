import { AppError } from "@shared/errors/AppError";
import { CreateUserDTO } from "@modules/accounts/dtos/CreateUserDTO";
import { UsersRepositoryInMemory } from "../../repositories/implementations/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('AuthenticateUserUseCase', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory);
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  })

  it("should be able to authenticate an user", async () => {
    const user: CreateUserDTO = {
      name: "User Test",
      email: "test@mail.com",
      password: "1234",
      driver_license: "000123"
    }

    await createUserUseCase.execute(user);
    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password
    });

    expect(result).toHaveProperty("token");
  })

  it("should not be able to authenticate an nonexistent user", async () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: 'test@mail.com',
        password: '1234'
      }) 
    }
    ).rejects.toBeInstanceOf(AppError);
  })

  it("should not to be able to authenticate with incorrect password", () => {
    expect(async() => {
      const user: CreateUserDTO = {
        driver_license: '999',
        password: '12345',
        name: "User Test",
        email: "user@user.com",
      }
      await createUserUseCase.execute(user)
      await authenticateUserUseCase.execute({
        email: user.email,
        password: 'incorrectPassword'
      })
    }).rejects.toBeInstanceOf(AppError)
  })

  it("should not to be able to authenticate with incorrect email", () => {
    expect(async() => {
      const user: CreateUserDTO = {
        driver_license: '999',
        password: '12345',
        name: "User Test",
        email: "user@user.com",
      }
      await createUserUseCase.execute(user)
      await authenticateUserUseCase.execute({
        email: 'incorrectEmail',
        password: user.password,
      })
    }).rejects.toBeInstanceOf(AppError)
  })

})