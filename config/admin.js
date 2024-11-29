module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1288a7f231493af4ec92dd21ce3978ad'),
  },
});
