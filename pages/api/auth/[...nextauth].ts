import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import prisma from "lib/prisma"

export const authOptions: NextAuthOptions = {
  // callbacks: {
  //   session({ session, token, user }) {
  //     return session // The return type will match the one returned in `useSession()`
  //   },
  // },
  // pages: {
  //   signIn: "/api/auth/sigin",
  // },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [

    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // TwitterProvider({
    //   cliendId: process.env.TWITTER_ID,
    //   clientSecret: process.env.TWITTER_SECRET,
    //   version: "2.0",
    // })
  ],
};
export default NextAuth(authOptions);
