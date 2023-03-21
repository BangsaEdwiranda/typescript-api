import { BaseEntity, CreateDateColumn, UpdateDateColumn, VersionColumn } from 'typeorm';

export class BaseAppEntity extends BaseEntity {
  @CreateDateColumn()
  createdDateUtc: Date;

  @UpdateDateColumn({nullable: true})
  updatedDateUtc: Date;

  @VersionColumn()
  version: number;

}
