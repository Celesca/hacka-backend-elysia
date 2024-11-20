import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { swipeController } from "./controllers/swipeController";
import { userController } from "./controllers/userController";
import { skillController } from "./controllers/skillController";
import { messageController } from "./controllers/messageController";
import { notificationController } from "./controllers/notificationController";
import { hackathonController } from "./controllers/hackathonController";
import { teamController } from "./controllers/teamController";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .use(swagger())
  .use(cors({
    origin: "*",
  }))
  .use(swipeController)
  .use(notificationController)
  .use(userController)
  .use(skillController)
  .use(messageController)
  .use(hackathonController)
  .use(teamController)
  .listen(3000)
  .listen(process.env.PORT ?? 3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
