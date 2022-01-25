import NextAuth from "next-auth";
import StravaProvider from "next-auth/providers/strava";

export default NextAuth({
  // Configure one or more authentication providers
  secret: process.env.SECRET,
  providers: [
    StravaProvider({
      clientId: process.env.STRAVA_CLIENT_ID,
      clientSecret: process.env.STRAVA_CLIENT_SECRET,
      authorization: { params: { scope: "read,activity:read_all" } },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken
      return session
    },
  },
})