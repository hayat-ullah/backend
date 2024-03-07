import 'dotenv/config';
import Express, { json } from "express";
import allRouter from "./routers/index.js";
import { sequelizeCon } from "./db/config.js";
import dbInit from "./db/init.js";

const app = Express();

sequelizeCon();

dbInit().then(() => console.log("db synced"));
app.use(json());
app.use(allRouter);

app.listen(3304, () => console.log("server started"));

