module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8c7a501f3f4970cc6cd9e91fe7df4c0a'),
  },
});
