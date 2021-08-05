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
}
