import {
    DeepPartial,
    ObjectID,
    FindManyOptions,
    EntityTarget,
    DataSource,
    Repository
  } from 'typeorm';
  
  import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
  
  export class BaseRepository<T> extends Repository<T>{
    private _entity: any;
  
    constructor(target: EntityTarget<T>, dataSource: DataSource) {
        super(target, dataSource.createEntityManager())
    }
  
    createMultiple(entityLikeArray: Array<DeepPartial<T>>) {
      return this.create(entityLikeArray);
    }
  
    createAndSave(entityLike: DeepPartial<T>){
      return this.save(entityLike);
    }
  
    createAndSaveMultiple(entityLikeArray: Array<DeepPartial<T>>) {
      return this.save(entityLikeArray);
    }
  
    deleteById(id: string | number | Date | ObjectID) {
      return this.delete(id);
    }
  
    updateById(id: string | number | Date | ObjectID, entity: QueryDeepPartialEntity<T>) {
      return this.update(id, entity);
    }
  
    findAll(options?: FindManyOptions<T>) {
      return this.find(options);
    }
  
    findAllQueryBuilder() {
      return this
        .createQueryBuilder()
        .getMany();
    }
        
  }

function InjectRepository(T: any) {
  throw new Error('Function not implemented.');
}
  