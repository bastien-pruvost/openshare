import { unstable_getServerSession } from 'next-auth';

import { authOptions } from '@/lib/auth';

import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

export function withAuthentication(handler: NextApiHandler) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    const session = await unstable_getServerSession(req, res, authOptions);

    if (!session) {
      return res.status(401).end();
    }

    return handler(req, res);
  };
}
