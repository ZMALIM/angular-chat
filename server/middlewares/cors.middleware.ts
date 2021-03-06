import { Injectable, NestMiddleware, } from '@nestjs/common';
import { ExpressMiddleware } from '@nestjs/common/interfaces/middlewares/express-middleware.interface';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  resolve(): ExpressMiddleware {
    return (req, res, next) => {
      // list os domains
      res.header('Access-Control-Allow-Origin', '*');
      // list of methods (e.g GET,HEAD,PUT,PATCH,POST,DELETE)
      res.header('Access-Control-Allow-Headers', '*');
      res.header('Access-Control-Allow-Methods', '*');
      next();
    };
  }
}

