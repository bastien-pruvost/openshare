import { z } from 'zod';

import { db } from '@/lib/db';
import { signInSchema } from '@/lib/validations/auth';
import { verifyHash } from '@/lib/utils/hash';

import type { NextApiRequest, NextApiResponse } from 'next';

// ROUTE "/api/user/check-credentials"

const supportedMethods = ['POST'];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!req.method || !supportedMethods?.includes(req.method)) {
    return res.status(405).json({
      message: `The HTTP method : "${req.method}" is not supported by this route.`,
    });
  }

  if (req.method === 'POST') {
    try {
      const body = signInSchema.parse(JSON.parse(req.body));

      const user = await db.user.findFirst({
        where: {
          OR: [{ email: body.usernameOrEmail }, { username: body.usernameOrEmail }],
        },
        select: {
          id: true,
          username: true,
          name: true,
          email: true,
          password: true,
          image: true,
        },
      });

      if (!user || !user.password) {
        return res.status(401).json({ message: 'Invalid username, email or password' });
      }

      const isPasswordValid = verifyHash(body.password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid username, email or password' });
      }

      return res.status(200).json(user);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json(error.issues);
      }

      return res.status(500).json({
        message:
          'Internal Server Error: Please try again later or contact support if the problem persists',
        error,
      });
    }
  }
}
