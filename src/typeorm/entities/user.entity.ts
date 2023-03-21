import { Column, Entity, PrimaryColumn } from 'typeorm';

import { BaseAppEntity } from './bases/base-app.entity';

@Entity()
export class User extends BaseAppEntity {

  constructor(userName: string) {
    super();
    this.userName = userName;
  }

  @PrimaryColumn('uuid')
  id: string;

  @Column({unique: true})
  userName: string;

  @Column({unique: true})
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  password: string;

  @Column()
  fullName: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  ensureDataIntegrity(){
    
  }
}
