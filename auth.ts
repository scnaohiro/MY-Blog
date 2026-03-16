import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import prisma from "./app/lib/prisma"
import bcrypt from "bcryptjs"
import { authConfig } from "./auth.config"

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string }
        })

        if (!user) return null
        const isValid = await bcrypt.compare(credentials.password as string, user.password)

        if (!isValid) return null

        return {
          id: String(user.id),
          email: user.email,
        }
      },
    }),
  ],
})