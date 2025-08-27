db.createUser({
  user: 'mongoose-base',
  pwd: '1234',
  roles: [
    {
      role: 'readWrite',
      db: 'mongoose-base',
    },
  ],
});
