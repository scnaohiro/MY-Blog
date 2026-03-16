import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isProtected = ['/posts/new', '/posts/'].some(path => 
        nextUrl.pathname.startsWith(path)
      )
      if (isProtected && !isLoggedIn) return false
      return true
    },
  },
  providers: [],
} satisfies NextAuthConfig