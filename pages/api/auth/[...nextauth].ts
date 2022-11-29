import NextAuth from 'next-auth';

import { authOptions } from '@/lib/auth';

// ROUTE : "/api/auth/*"

export default NextAuth(authOptions);
