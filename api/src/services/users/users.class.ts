import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Id, Params } from '@feathersjs/feathers';
import { Application } from '../../declarations';

export class Users extends Service {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
  }

  get(id: Id, params?: Params | undefined): Promise<any> {
    if (params && params.auth0Id) {
      return this.Model.findAll({
        where: {
          auth0Id: id
        }
      });
    }
    
    return super.get(id, params);
  }
}
