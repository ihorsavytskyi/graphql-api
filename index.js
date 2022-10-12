import { createServer } from '@graphql-yoga/node'
import { join } from "path";
import { readFileSync } from "fs";
import resolvers from "./graphql/resolvers";

const typeDefs = readFileSync(join(process.cwd(), "graphql/schema.graphql"), {
   encoding: "utf-8"
});

const server = new createServer({
   schema: {
      typeDefs: typeDefs,
      resolvers: resolvers
   }

});

server.start();