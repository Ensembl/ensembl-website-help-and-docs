import { Request, Response } from 'express';

export const healthcheck = (request: Request, response: Response) => {
  response.json({
    message: 'Doing fine'
  });
};
