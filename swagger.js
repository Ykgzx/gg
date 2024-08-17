import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API SocialMedia',
            version: '1.0.0',
            description: 'API description.',
        },
        servers: [
            {
                url: 'http://localhost:3000',  // Ensure this matches your server's protocol
                description: 'Development server'
            }
        ],
    },
    apis: ['./server.js'], // Adjust the path to your API documentation
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerSpec, swaggerUi };
