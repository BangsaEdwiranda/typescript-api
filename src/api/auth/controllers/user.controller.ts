import { Body, Controller, Get, Post, Put, Param, Delete, Query, Inject, Req, UseGuards } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { UserVM } from '../models/user.vm';
import { IUserService } from '../../../core/services/users/iuser.service';
import { UserService } from '../../../infrastructure/services/users/user.service';

@Controller('auth/user')
export class UserController {
    constructor(
        @Inject("IUserService")
        private readonly _userService: IUserService
        ) { }

    @Get('')
    @ApiOkResponse({ type: [UserVM] })
    async getAllUsers() {
        return await this._userService.getAllUserAsync();
    }
}