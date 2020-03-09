import dotenv from 'dotenv'
import { ObjectUtils } from './utils';

export const ENV = process.env['ENV'] || 'local';
export const PORT = process.env['PORT'] || 5000;

export const EnvVariables = dotenv.config({ path: './bin/local.env' });

if (EnvVariables.error) {
    console.error(EnvVariables.error)
    process.exit(1)
}

export const getEnv = (key:
    // Database
    'DATABASE_HOST' |
    'DATABASE_PORT' |
    'DATABASE_USER_NAME' |
    'DATABASE_USER_PASSWORD' |
    'DATABASE_NAME' |
    'DATABASE_MAX_QUERY_LIMIT' |
    // Super Admin Account
    'ADMIN_USERNAME' |
    'ADMIN_EMAIL' |
    'ADMIN_PLAIN_PASSWORD' |
    // Token related
    'TOKEN_SECRET_KEY' |
    'TOKEN_ACCESS_EXPIRE_TIME' |
    'TOKEN_REFRESH_EXPIRE_TIME'
) => ObjectUtils.getIn(EnvVariables.parsed, key);