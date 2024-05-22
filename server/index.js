const Hapi = require('@hapi/hapi');

(async () => {
  const server = Hapi.server({
    port: process.env.PORT || 8080,
    host: '0.0.0.0',
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
        message: 'Halo tes, ini cuma kuedit di VS Code, berubah via Actions Workflow',
      });
      return response;
    },
  });

  await server.start();
  console.log(`Open at ${server.info.uri}`);
})();
