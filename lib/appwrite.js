import { Client, Account, Avatars } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://nyc.cloud.appwrite.io/v1")
  .setProject("68ad81b100206d7e0a93")
  .setPlatform("dev.netninja.shelfie");

export const account = new Account(client);
export const avatars = new Avatars(client);

export { ID } from "appwrite";
