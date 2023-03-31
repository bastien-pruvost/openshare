import { z } from 'zod';

import { signupSchema } from '@/lib/validation/auth';
import { db } from '@/lib/db';
import { hash } from '@/lib/utils/passwords';

import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const body = signupSchema.parse(JSON.parse(req.body));
      const user = await db.user.create({
        data: {
          email: body.email,
          password: hash(body.password),
          name: body.name,
          username: body.username
        }
      });

      return res.status(201).json({ message: 'Account successfully created', user });
    } catch (error: unknown) {
      if (error instanceof z.ZodError) {
        return res.status(400).json(error);
      }
      if (error instanceof Error) {
        return res.status(500).json(error.message);
      }
    }
  }

  return res
    .status(405)
    .json({ message: `The HTTP method : "${req.method}" is not supported by this route.` });
};

export default handler;
