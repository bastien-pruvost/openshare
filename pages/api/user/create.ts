import { z } from 'zod';
import { Prisma } from '@prisma/client';

import { db } from '@/lib/db';
import { signUpSchema } from '@/lib/validations/auth';
import { hash } from '@/lib/utils/hash';

import type { NextApiRequest, NextApiResponse } from 'next';

// ROUTE : "/api/user/create"

const supportedMethods = ['POST'];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!req.method || !supportedMethods?.includes(req.method)) {
    return res
      .status(405)
      .json({ message: `The HTTP method : "${req.method}" is not supported by this route.` });
  }

  if (req.method === 'POST') {
    try {
      const body = signUpSchema.parse(JSON.parse(req.body));

      const user = await db.user.create({
        data: {
          email: body.email,
          username: body.username,
          name: body.name,
          password: hash(body.password),
        },
      });

      return res.status(201).json({ message: 'Account successfully created', user });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json(error);
      }
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        return res.status(400).json(error);
      }
      return res.status(500).json(error);
    }
  }
}
