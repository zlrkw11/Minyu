import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import authConfig from "./authConfig";
import client from "./authDatabase";

const options = {
  adapter: MongoDBAdapter(client),
  ...authConfig,
};

export const { handlers, signIn, signOut, auth } = NextAuth(options);
