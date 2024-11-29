module.exports = ({ env }) => ({
  "users-permissions": {
    enabled: true,
    config: {
      providers: {
        github: {
          clientId: env("GITHUB_CLIENT_ID"), // Client ID dari GitHub
          clientSecret: env("GITHUB_CLIENT_SECRET"), // Client Secret dari GitHub
          callback: `${env("SERVER_URL")}/api/connect/github/callback`, // Harus sesuai dengan pengaturan di GitHub
        },
      },
      jwt: {
        expiresIn: "1m", // Token akan kedaluwarsa dalam 1 jam
      },
    },
  },
});
