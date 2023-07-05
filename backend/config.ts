import dotenv from "dotenv"

dotenv.config({ path: __dirname + `/.env.${process.env.NODE_ENV}` });

export default {
  APP_URL: process.env.APP_URL || "http:localhost:3000",
  PORT: process.env.PORT
}