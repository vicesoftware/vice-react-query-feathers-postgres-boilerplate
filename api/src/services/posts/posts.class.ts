import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Application } from '../../declarations';

interface Post {
  id: number,
  title: string;
  description: string;
}

export class Posts extends Service {
  posts: Post[] = [];

  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
  }

  async find(): Promise<Post[]> {
    return this.posts;
  }
}
