import { ApiPropertyOptional } from '@nestjs/swagger';

export class UserVM {
    version: number;

    id: string;

    userName: string;

    email: string;

    phoneNumber: string;

    fullName: string;

    firstName: string;

    lastName: string;
}