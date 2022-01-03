import cron from "node-cron";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const endpoint = process.env.WEBHOOKENDPOINT;

const api = axios.create({
  baseURL: endpoint,
});

const schedule = "0 13 * * 1-5";

cron.schedule(schedule, async () => {
  await api.post("", {
    username: "Burndown time!!",
    avatar_url:
      "https://cdn2.iconfinder.com/data/icons/scrum-project-blue/100/Burndown_chart-1024.png",
    content: ` @here , hora de alguém mandar um burndown pá nóix! `,
  });
});

console.log(`Schedule is up: "${schedule}" `);
