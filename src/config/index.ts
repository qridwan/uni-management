/* eslint-disable no-undef */
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  database_url: process.env.DB,
  default_user_password: process.env.DEFAULT_USER_PASSWORD,
};
