import * as path from 'path';
import * as dotenv from 'dotenv';
// const pathToEnvFile = path.join(__dirname, '../../', 'env-values/test.env');
// dotenv.config({ path: pathToEnvFile });
// console.error(process.env.DB_CONNECTION_URL)
if (process.env.NODE_OPTIONS && process.env.NODE_OPTIONS.includes('debug')) {
  jest.setTimeout(999999);
}
