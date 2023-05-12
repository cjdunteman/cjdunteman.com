import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import prisma from "lib/prisma"

export const authOptions: NextAuthOptions = {
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
  // callbacks: {
  //   async session({ token, session }) {
  //     if (token) {
  //       session.user.name = token.name
  //       session.user.email = token.email
  //       session.user.image = token.picture
  //     }
  //   }
  // },
  //     }
  //     return session;
  //   }
  // }
};
export default NextAuth(authOptions);
