import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Application } from '../../declarations';

export interface Todo {
  id?: number;
  description: string;
  complete: boolean;
}

export class Todos extends Service {
  todos: Todo[] = [];

  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
  }

  async find({ query }: { query: Partial<Todo> }): Promise<Todo[]> {
    if (Object.keys(query).length > 0) {
      return this.todos.filter((todo) =>
        todo.description === query.description ||
        todo.complete === query.complete
      );
    }

    return this.todos;
  }

  async get(id: number): Promise<Todo | undefined> {
    return this.todos.find((todo) => todo.id === id);
  }

  async create({ description, complete }: Todo): Promise<Todo> {
    const todo: Todo = {
      id: this.todos.length,
      description,
      complete,
    };

    this.todos.push(todo);

    return todo;
  }

  async patch(id: number, body: Partial<Todo>): Promise<Todo> {
    const todoIndex = this.todos.map((todo) => todo.id).indexOf(id);
    this.todos[todoIndex] = {
      ...this.todos[todoIndex],
      ...body,
    };

    return this.todos[todoIndex];
  }

  async remove(id: number): Promise<Todo> {
    const todoIndex = this.todos.map((todo) => todo.id).indexOf(id);
    const removedTodo = this.todos.splice(todoIndex, 1);

    return removedTodo[0];
  }
}
