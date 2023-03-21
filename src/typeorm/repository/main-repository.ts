import { BaseRepository } from './base-repository';
import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class UserRepository extends BaseRepository<User>{

    constructor(dataSource: DataSource) {
        super(User, dataSource)
    }
}
