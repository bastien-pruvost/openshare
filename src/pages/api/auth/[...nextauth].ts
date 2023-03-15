import NextAuth from 'next-auth';

import { authOptions } from 'src/lib/auth';

// ROUTE : "/api/auth/*"

export default NextAuth(authOptions);
