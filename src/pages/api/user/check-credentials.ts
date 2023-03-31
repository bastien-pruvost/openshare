import { z } from 'zod';

import { db } from '@/lib/db';
import { signinSchema } from '@/lib/validation/auth';
import { verifyHash } from '@/lib/utils/passwords';
import { formatErrorMessage } from '@/lib/utils/error-messages';

import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const body = signinSchema.parse(JSON.parse(req.body));

      const user = await db.user.findFirst({
        where: {
          email: body.email
        },
        select: {
          id: true,
          email: true,
          password: true,
          name: true,
          username: true,
          image: true,
          accounts: true
        }
      });

      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      if (!user.password) {
        const errorMessage = formatErrorMessage.accountAlreadyAssociatedWithProviders(
          user.accounts
        );
        return res.status(400).json({
          message: errorMessage
        });
      }

      const isPasswordValid = verifyHash(body.password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      return res.status(200).json({ message: 'Successfully connected', user });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json(error.issues);
      }

      return res.status(500).json({
        message:
          'Internal Server Error: Please try again later or contact support if the problem persists',
        error
      });
    }
  }

  return res.status(405).json({
    message: `The HTTP method : "${req.method}" is not supported by this route.`
  });
};

export default handler;
