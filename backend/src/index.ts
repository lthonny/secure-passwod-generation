import config from "./config";

import { fastify } from "fastify";
import { parse } from "query-string";
import pino from "pino";
import { contentParser } from "fastify-multer";

import generatePassword from "./routes/generatorRoutes";

const server = fastify({
    logger: pino({ level: "info" }),
    querystringParser: (str) => parse(str),
});

server.register(contentParser);
server.register(require("fastify-cors"), { origin: true });
server.setErrorHandler((error, request, reply) => {
    console.log(error);
    reply.status(reply.statusCode).send(error);
});

server.register(generatePassword, { prefix: "api/password" })

const start = async () => {
  try {
    const { port } = config;
    await server.listen(config.port, "0.0.0.0");
    console.log("Server started successfully on the port", port);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
}
start()