import { EntityManager } from 'typeorm';
import { User } from '../entities/user.entity';
import { v4 as uuidv4 } from 'uuid';

export class InitSeed {
  static async run(manager: EntityManager): Promise<any> {

    // repos with manager transaction
    const userRepo = manager.getRepository(User);

    //SEED USER
    var user1 = this.seedUser("superadmin", "superadmin@xyz.com", "Super Admin", "Super", "Admin",
    "08000000000", "password");
    var user2 = this.seedUser("admin1", "admin1@xyz.com", "Admin 1", "Admin", "1",
      "08000000001", "password");
    var users = ([user1, user2]);
    await userRepo.save(users);
  }

  static seedUser(userName, email, fullName, firstName, lastName, phoneNumber, password) {
    var user = new User(userName);
    user.id = uuidv4();
    user.email = email;
    user.fullName = fullName;
    user.firstName = firstName;
    user.lastName = lastName;
    user.phoneNumber = phoneNumber;
    user.password = password;

    return user
  }
}

