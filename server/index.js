const Hapi = require('@hapi/hapi');

(async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.ENVIRONMENT == 'PRODUCTON' ? '0.0.0.0' : 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route({
    path: '/',
    method: 'GET',
    handler: (request, h) => {
      const response = h.response({
        status: 'success',
        message: 'Halo tes',
      });
      return response;
    },
  });

  await server.start();
  console.log(`Open at ${server.info.uri}`);
})();
