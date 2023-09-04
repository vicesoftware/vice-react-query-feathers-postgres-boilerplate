import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Application } from '../../declarations';

interface Post {
  title: string;
  description: string;
}

export class Posts extends Service {

  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
  }

  async find({ query }: { query: Partial<Post> }): Promise<Post[]> {
    return this.Model.findAll({
      where: {
        ...query,
      },
    });
  }

  async get(id: number): Promise<Post> {
    return this.Model.findOne({
      where: {
        id,
      },
    });
  }

  async create({ description, title }: Post): Promise<Post> {
    const post: Post = {
      title,
      description,
    };

    await this.Model.create({
      ...post,
    });

    return post;
  }

  async patch(id: number, body: Partial<Post>): Promise<Post> {
    return this.Model.update({ ...body }, {
      where: {
        id,
      },
    });
  }

  async remove(id: number): Promise<Post> {
    return await this.Model.destroy({
      where: {
        id,
      },
    });
  }
}
