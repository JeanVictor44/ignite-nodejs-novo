import 'reflect-metadata';
import 'express-async-errors'
import '@shared/container' 
import express, { NextFunction, Request, Response } from 'express';
import { routes } from '@shared/infra/http/routes';
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../../../swagger.json'
import { AppDataSource } from '@database/data-source';
import { AppError } from '@shared/errors/AppError';

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json())
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

  app.use(routes)

  app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof AppError){
      return response.status(err.statusCode).json({
        message: err.message,
      })
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`
    })

  })

  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
  })
}) 