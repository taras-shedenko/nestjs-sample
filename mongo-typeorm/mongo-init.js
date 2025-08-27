db.createUser({
  user: 'mongo-typeorm',
  pwd: '1234',
  roles: [
    {
      role: 'readWrite',
      db: 'mongo-typeorm',
    },
  ],
});
