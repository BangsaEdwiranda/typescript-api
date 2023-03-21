import { Module } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { getDataSourceToken, getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { User } from './typeorm/entities/user.entity';
import { InjectorService } from './infrastructure/utils/injector.service';
import { UserController } from './api/auth/controllers/user.controller';
import { UserRepository } from './typeorm/repository/main-repository';
import { UserServiceProvider } from './configs/dependencies/register';
import { dataSourceOptions } from './typeorm/data-source';
import { UserService } from './infrastructure/services/users/user.service';
import { DataSource } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
const multer = require('multer')
const inMemoryStorage = multer.memoryStorage();


@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    TypeOrmModule.forFeature(
      [
        User
      ],
    ),
  ],
  controllers: [
    AppController,
    UserController
  ],
  providers: [
    UserServiceProvider
  ],
})
export class AppModule {
  constructor(private readonly moduleRef: ModuleRef) {
    InjectorService.setModuleRef(this.moduleRef);
  }
}
