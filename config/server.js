module.exports = ({ env }) => ({
  url: env("SERVER_URL", "http://localhost:1337"),
  app: {
    keys: env.array("APP_KEYS"),
  },
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  settings: {
    cors: {
      enabled: true,
      origin: ["*"], // Sesuaikan dengan URL frontend Anda
    },
  },
});
