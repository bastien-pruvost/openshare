import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

type ApiHandlerArgs = {
  get?: NextApiHandler;
  post?: NextApiHandler;
  put?: NextApiHandler;
  delete?: NextApiHandler;
  patch?: NextApiHandler;
  head?: NextApiHandler;
  options?: NextApiHandler;
  connect?: NextApiHandler;
  trace?: NextApiHandler;
};

type Test = keyof ApiHandlerArgs;

export function methodsHandler(methodsObject: ApiHandlerArgs) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    try {
      if (!req.method) {
        return res.status(402).end();
      }

      const reqMethod = req.method.toLowerCase();

      // if (reqMethod in methodsObject) {

      // }

      if (req.method) {
        return res.status;
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  };
}
