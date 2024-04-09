import 'dotenv/config';

export const env = {
  MONGODB_URI: process.env.MONGODB_URI,
  DATABASE_NAME: process.env.DATABASE_NAME,
  APP_HOST: process.env.APP_HOST,
  APP_PORT: process.env.APP_PORT,
  TOKEN_SECRET: process.env.TOKEN_SECRET,
  APP_PASSWORD: process.env.APP_PASSWORD,
  APP_EMAIL: process.env.APP_EMAIL,
}
