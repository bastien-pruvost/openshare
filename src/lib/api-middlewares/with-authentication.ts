import { getServerSession } from '@/lib/auth';

import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

export const withAuthentication = (handler: NextApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const session = await getServerSession(req, res);
      if (!session) {
        return res.status(401).json({
          message: 'You must be authenticated to perform this request. Please log in and try again',
        });
      }
      return handler(req, res);
    } catch (error) {
      return res.status(500).json({
        message:
          'Internal Server Error: Please try again later or contact support if the problem persists',
        error,
      });
    }
  };
};
