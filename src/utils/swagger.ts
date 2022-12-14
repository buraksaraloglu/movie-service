import { Express, Request, Response } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import log from './logger';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Movie Service',
      version: '0.1.0',
      description:
        'Movie Service is a microservice that provides a REST API for movies',
      contact: {
        name: 'Burak Saraloglu',
        url: 'https://buraksaraloglu.com',
        email: 'buraksaraloglu1@gmail.com',
      },
    },
    components: {
      securitySchemas: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./src/routes/*.ts', './src/schema/*.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: Express) {
  const port = app.get('port');
  if (!port) {
    throw new Error('[swaggerDocs]; Port is not set');
  }

  // Swagger page
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Docs in JSON format
  app.get('/docs.json', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  log.info(`📄 Docs available at http://localhost:${port}/docs`);
}

export default swaggerDocs;
