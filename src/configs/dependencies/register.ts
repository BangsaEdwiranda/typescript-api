import { Provider } from "@nestjs/common";
import { UserService } from "../../infrastructure/services/users/user.service";

export const UserServiceProvider: Provider = {
    provide: 'IUserService',//it's an injectable interface 
    useClass: UserService,
};
