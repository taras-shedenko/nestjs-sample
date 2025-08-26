db.createUser({
  user: 'mongoose',
  pwd: '1234',
  roles: [
    {
      role: 'readWrite',
      db: 'mongoose',
    },
  ],
});
