import { HookContext } from '@feathersjs/feathers';
import * as authentication from '@feathersjs/authentication';
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks;

const transformIdToNumber = async (context: HookContext): Promise<HookContext> => {
  if (context.id) {
    context.id = parseInt(context.id.toString());
  }

  return context;
};

const transformCompleteToBoolean = async (context: HookContext): Promise<HookContext> => {
  if (context.params.query && context.params.query.complete) {
    const value = context.params.query.complete;
    context.params.query.complete = value === 'true';
  }

  return context;
};

export default {
  before: {
    all: [],
    find: [transformCompleteToBoolean],
    get: [transformIdToNumber],
    create: [],
    update: [transformIdToNumber],
    patch: [transformIdToNumber],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
