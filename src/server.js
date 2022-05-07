import {
  createServer,
  Model,
  hasMany,
  belongsTo,
  RestSerializer,
  Factory
} from "miragejs";

export default function makeServer({ environment = "development" } = {}) {
  return createServer({
    environment,

    models: {
      user: Model.extend({
        reminders: hasMany(),
      }),
      reminder: Model.extend({
        user: belongsTo()
      })
    },
    factories: {
      reminder: Factory.extend({
        text: "Reminder"
      })
    },

    seeds(server) {
      server.create("user", { name: "Bob" });
      server.create("user", {
        name: "Alice",
        reminders: [
          server.create("reminder", { text: "My Reminder" }),
        ],
      });
      server.create("user", {
        name: "Ken",
        reminders: [
          server.create("reminder", { text: "Do taxes" }),
          server.create("reminder", { text: "Do Best" }),
        ],
      });
      server.create("reminder");
    },

    routes() {
      this.namespace = "api";

      this.get("/users", (schema) => {
        return schema.users.all();
      });
      this.get("/reminders", (schema) => {
        return schema.reminders.all();
      });

      this.get('/users/:id/reminders', (schema, request) => {
        let userId = request.params.id
        let user = schema.users.find(userId)
        return user.reminders
      });
    },
  });
}