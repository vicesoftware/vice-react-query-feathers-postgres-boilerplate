// Initializes the `todos` service on path `/todos`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Todos } from './todos.class';
import createModel from '../../models/todos.model';
import hooks from './todos.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'todos': Todos & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/todos', new Todos(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('todos');

  service.hooks(hooks);
}
