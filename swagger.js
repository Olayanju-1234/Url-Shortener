const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'URL Shortener API',
      version: '1.0.0',
      description: 'API for shortening URLs',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Replace with your base URL
      },
    ],
  },
  apis: ['./controllers/url.controller.js'], // Path to your code file
};

const specs = swaggerJsdoc(options);

module.exports = specs;
