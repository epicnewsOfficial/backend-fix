module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'aws-0-ap-southeast-1.pooler.supabase.com'),
      port: env.int('DATABASE_PORT', 6543),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'postgres.mtbnepybzzdhffgxbnio'),
      password: env('DATABASE_PASSWORD', '0jk3yB6Wm5WT9qbX'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
