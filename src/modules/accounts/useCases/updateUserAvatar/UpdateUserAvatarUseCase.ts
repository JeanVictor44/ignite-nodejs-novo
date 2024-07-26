import { inject, injectable } from "tsyringe";
import { UsersRepositoryContract } from "../../repositories/contracts/UsersRepository";
import { UpdateUserAvatarDTO } from "../../dtos/UpdateUserAvatarDTO";
import {resolve} from 'path'
import { deleteFile } from "@utils/file";

@injectable()
export class UpdateUserAvatarUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: UsersRepositoryContract
  ) {}

  async execute({user_id, avatar_file}: UpdateUserAvatarDTO): Promise<void>{
    const user = await this.usersRepository.findById(user_id)

    if(user.avatar){
      const filename = resolve('tmp', 'avatar', user.avatar)
      await deleteFile(filename)
    }

    user.avatar = avatar_file;

    await this.usersRepository.create(user)
 
  }
}