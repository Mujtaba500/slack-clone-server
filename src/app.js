import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import express from "express";
import "dotenv/config";
import typeDefs from "./schema/index.js";
import resolvers from "./resolvers/index.js";
import { connectDb } from "./db/config.js";
import syncDb from "./db/sync.js";
import userRouter from "./routes/user/index.js";

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
// Note you must call `start()` on the `ApolloServer`
// instance before passing the instance to `expressMiddleware`
await server.start();

// Specify the path where we'd like to mount our server
app.use("/graphql", cors(), express.json(), expressMiddleware(server));

app.listen(8080, () => {
  console.log("Server started on port 8080");
  connectDb();
  syncDb().then(() => {
    console.log("Database synced");
  });
});
