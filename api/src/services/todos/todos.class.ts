import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Application } from '../../declarations';

export interface Todo {
  description: string;
  complete: boolean;
}

export class Todos extends Service {

  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
  }

  async find({ query }: { query: Partial<Todo> }): Promise<Todo[]> {
    return this.Model.findAll({
      where: {
        ...query,
      },
    });
  }

  async get(id: number): Promise<Todo> {
    return this.Model.findOne({
      where: {
        id,
      },
    });
  }

  async create({ description, complete }: Todo): Promise<Todo> {
    const todo: Todo = {
      description,
      complete,
    };

    await this.Model.create({
      ...todo,
    });

    return todo;
  }

  async patch(id: number, body: Partial<Todo>): Promise<Todo> {
    return this.Model.update({ ...body }, {
      where: {
        id,
      },
    });
  }

  async remove(id: number): Promise<Todo> {
    return await this.Model.destroy({
      where: {
        id,
      },
    });
  }
}
