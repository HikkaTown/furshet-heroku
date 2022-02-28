module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6fc6450ad31867e8bc4dd35e7373085e'),
  },
});
