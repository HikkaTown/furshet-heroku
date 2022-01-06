module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '222179e66da40f4b51c17091d11d6b25'),
  },
});
