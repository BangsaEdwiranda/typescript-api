import { getRepository, Like, getManager, Repository } from 'typeorm';
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository} from '../../../typeorm/repository/main-repository';
import { IUserService } from '../../../core/services/users/iuser.service';
import { User } from '../../../typeorm/entities/user.entity';
const moment = require('moment');

@Injectable()
export class UserService implements IUserService{

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
  }

  //HELPER
  //END HELPER

  public async getAllUserAsync() {
    return await this.userRepository.find();
  }

}