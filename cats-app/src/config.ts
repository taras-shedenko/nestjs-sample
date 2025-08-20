export default () => ({
  port: parseInt(process.env.PORT!, 10) || 3000,
  database: {
    host: 'db-host',
    port: 1651,
  },
});
