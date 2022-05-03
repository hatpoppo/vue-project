import { createServer, Model } from "miragejs";

export default function makeServer({ environment = "development" } = {}) {
  return createServer({
    environment,

    models: {
      user: Model,
    },

    seeds(server) {
      server.create("user", { name: "Bob" });
      server.create("user", { name: "Alice" });
    },

    routes() {
      this.namespace = "api";

      this.get("/users", (schema) => {
        return schema.users.all();
      });
    },
  });
}