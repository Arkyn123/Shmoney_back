export const config = {
  development: {
    port: 5000,
    database: {
      username: 'postgres',
      password: 'root',
      database: 'shmoney',
      host: 'localhost',
      port: 5432,
      dialect: 'postgres',
    },
  },
};
