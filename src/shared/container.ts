import {container} from 'tsyringe'
import { CategoriesRepositoryContract } from '@modules/cars/repositories/contracts/CategoriesRepository'
import { CategoriesRepository } from '@modules/cars/infra/typeorm/repositories/CategoriesRepository'
import { SpecificationRepository } from '@modules/cars/infra/typeorm/repositories/SpecificationsRepository'
import { SpecificationRepositoryContract } from '@modules/cars/repositories/contracts/SpecificationsRepository'
import { UsersRepositoryContract } from '@modules/accounts/repositories/contracts/UsersRepository'
import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository'

container.registerSingleton<CategoriesRepositoryContract>(
  'CategoriesRepository',
  CategoriesRepository
) 

container.registerSingleton<SpecificationRepositoryContract>(
  'SpecificationRepository',
  SpecificationRepository
) 

container.registerSingleton<UsersRepositoryContract>(
  'UsersRepository',
  UsersRepository,
)