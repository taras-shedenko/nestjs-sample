import { connect } from 'mongoose';

export const databaseProvider = {
  provide: 'DATABASE_CONNECTION',
  useFactory: () =>
    connect('mongodb://mongoose-base:1234@localhost:27017/mongoose-base'),
};
